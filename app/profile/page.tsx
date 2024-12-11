'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface UserProfile {
  username: string
  name: string
  email: string
  address: string
}

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>({
    username: '',
    name: '',
    email: '',
    address: ''
  })
  const [isEditing, setIsEditing] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // 在實際應用中，這裡應該從API獲取用戶資料
    // 現在我們只是模擬這個過程
    const fetchProfile = async () => {
      // 模擬API調用
      await new Promise(resolve => setTimeout(resolve, 1000))
      setProfile({
        username: 'user123',
        name: '張三',
        email: 'zhangsan@example.com',
        address: '台北市中正區牛肉麵街123號'
      })
    }

    fetchProfile()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // 在實際應用中，這裡應該發送更新請求到API
    // 現在我們只是模擬這個過程
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsEditing(false)
    alert('個人資料已更新！')
  }

  const handleLogout = () => {
    // 在實際應用中，這裡應該清除用戶的認證狀態
    // 現在我們只是模擬這個過程
    router.push('/')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">個人資料</h1>
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  姓名
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  電子郵件
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                  地址
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  保存更改
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  取消
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className="mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">用戶名</span>
                <span className="text-gray-700">{profile.username}</span>
              </div>
              <div className="mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">姓名</span>
                <span className="text-gray-700">{profile.name}</span>
              </div>
              <div className="mb-4">
                <span className="block text-gray-700 text-sm font-bold mb-2">電子郵件</span>
                <span className="text-gray-700">{profile.email}</span>
              </div>
              <div className="mb-6">
                <span className="block text-gray-700 text-sm font-bold mb-2">地址</span>
                <span className="text-gray-700">{profile.address}</span>
              </div>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  編輯資料
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  登出
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

