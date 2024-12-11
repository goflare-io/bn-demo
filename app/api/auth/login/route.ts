import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'
import { users } from '../../../models/User'

export const runtime = 'edge'

// 將密鑰轉換為 Uint8Array 格式
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || 'your-secret-key'
)

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    const user = users.find(u => u.username === username)

    // 由於在 Edge Runtime 中無法使用 bcrypt，我們暫時使用簡單的密碼比較
    // 在生產環境中應該使用其他替代方案
    if (!user || user.password !== password) {
      return NextResponse.json(
          { error: '用戶名或密碼錯誤' },
          { status: 401 }
      )
    }

    // 使用 jose 創建 JWT
    const token = await new SignJWT({ userId: user.id })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1h')
        .sign(JWT_SECRET)

    // 創建響應並設置 cookie
    const response = NextResponse.json({ success: true })
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 3600 // 1 小時
    })

    return response

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
        { error: '登錄過程中發生錯誤' },
        { status: 500 }
    )
  }
}