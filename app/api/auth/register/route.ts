import { NextResponse } from 'next/server'
import { users } from '../../../models/User'

export const runtime = 'edge'

// 創建一個簡單的密碼加密函數（僅用於示例）
async function hashPassword(password: string): Promise<string> {
  const msgUint8 = new TextEncoder().encode(password + 'your-salt-here')
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (users.some(u => u.username === username)) {
      return NextResponse.json(
          { error: '用戶名已存在' },
          { status: 400 }
      )
    }

    const hashedPassword = await hashPassword(password)

    const newUser = {
      id: (users.length + 1).toString(),
      username,
      password: hashedPassword
    }

    users.push(newUser)

    return NextResponse.json({
      success: true,
      message: '註冊成功'
    })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
        { error: '註冊過程中發生錯誤' },
        { status: 500 }
    )
  }
}