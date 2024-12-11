'use client'

import { useCart } from '../../components/CartContext'
import Link from 'next/link'
import { Minus, Plus, Trash2 } from 'lucide-react'

export default function Cart() {
  const { items, removeItem, updateQuantity, total } = useCart()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">購物車</h1>
      {items.length === 0 ? (
        <p className="text-center text-xl">您的購物車是空的。</p>
      ) : (
        <>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b py-4 last:border-b-0">
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    className="text-gray-500 hover:text-red-600"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    className="text-gray-500 hover:text-green-600"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                  <button
                    className="text-gray-500 hover:text-red-600"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">總計</h2>
            <span className="text-2xl font-bold text-red-600">${total}</span>
          </div>
          <div className="flex justify-end">
            <Link
              href="/checkout"
              className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300"
            >
              前往結帳
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

