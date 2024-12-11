'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Order {
  id: string
  date: string
  total: number
  status: string
  items: { name: string; quantity: number }[]
}

export default function OrderHistory() {
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    // 在實際應用中，這裡應該從API獲取訂單數據
    // 現在我們只是模擬這個過程
    const fetchOrders = async () => {
      // 模擬API調用
      await new Promise(resolve => setTimeout(resolve, 1000))
      setOrders([
        {
          id: '1',
          date: '2023-05-01',
          total: 420,
          status: '已完成',
          items: [
            { name: '招牌紅燒牛肉麵（冷凍包）', quantity: 2 },
            { name: '清燉牛肉麵（冷凍包）', quantity: 1 }
          ]
        },
        {
          id: '2',
          date: '2023-05-15',
          total: 240,
          status: '運送中',
          items: [
            { name: '麻辣牛肉麵（冷凍包）', quantity: 1 },
            { name: '牛肉餃子（冷凍）', quantity: 1 }
          ]
        }
      ])
    }

    fetchOrders()
  }, [])

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">訂單歷史</h1>
      <div className="max-w-4xl mx-auto">
        {orders.map(order => (
          <div key={order.id} className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">訂單 #{order.id}</h2>
                <span className="text-gray-600">{order.date}</span>
              </div>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">訂單項目：</h3>
                <ul>
                  {order.items.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item.name} x {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">總計：${order.total}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  order.status === '已完成' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'
                }`}>
                  {order.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/shop" className="text-red-600 hover:text-red-800 font-semibold">
          繼續購物
        </Link>
      </div>
    </div>
  )
}

