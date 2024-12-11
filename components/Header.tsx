'use client'

import Link from 'next/link'
import { useCart } from './CartContext'
import { ShoppingCart, User, ChevronDown } from 'lucide-react'
import Search from './Search'
import { useState } from 'react'

export default function Header() {
  const { items } = useCart()
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-red-600 mb-4 md:mb-0">
            牛肉麵天地
          </Link>
          <div className="w-full max-w-xs mx-auto md:mx-0 mb-4 md:mb-0">
            <Search />
          </div>
          <ul className="flex space-x-6 items-center">
            <li><Link href="/" className="hover:text-red-600">首頁</Link></li>
            <li><Link href="/menu" className="hover:text-red-600">菜單</Link></li>
            <li><Link href="/shop" className="hover:text-red-600">線上商店</Link></li>
            <li><Link href="/about" className="hover:text-red-600">關於我們</Link></li>
            <li><Link href="/contact" className="hover:text-red-600">聯絡我們</Link></li>
            <li>
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-6 h-6" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {items.length}
                  </span>
                )}
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center hover:text-red-600"
              >
                <User className="w-6 h-6 mr-1" />
                <ChevronDown className="w-4 h-4" />
              </button>
              {isUserMenuOpen && (
                <ul className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <li>
                    <Link href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      登入
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      個人資料
                    </Link>
                  </li>
                  <li>
                    <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      訂單歷史
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

