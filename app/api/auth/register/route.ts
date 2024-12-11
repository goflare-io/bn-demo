import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { users } from '../../../models/User'

export const runtime = 'edge';

export async function POST(req: Request) {
  const { username, password } = await req.json()

  if (users.some(u => u.username === username)) {
    return NextResponse.json({ error: '用戶名已存在' }, { status: 400 })
  }

  const hashedPassword = bcrypt.hashSync(password, 10)
  const newUser = {
    id: (users.length + 1).toString(),
    username,
    password: hashedPassword
  }

  users.push(newUser)

  return NextResponse.json({ success: true })
}

