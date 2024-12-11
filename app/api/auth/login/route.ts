import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { users } from '../../../models/User'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

export async function POST(req: Request) {
  const { username, password } = await req.json()

  const user = users.find(u => u.username === username)

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return NextResponse.json({ error: '用戶名或密碼錯誤' }, { status: 401 })
  }

  const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' })

  const response = NextResponse.json({ success: true })
  response.cookies.set('token', token, { httpOnly: true })

  return response
}

