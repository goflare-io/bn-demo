'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type CartItem = {
    id: string
    name: string
    price: number
    quantity: number
    image: string
    description: string
}

type CartContextType = {
    items: CartItem[]
    addItem: (item: Omit<CartItem, 'quantity'>) => void  // 輸入參數不包含 quantity
    removeItem: (id: string) => void
    updateQuantity: (id: string, quantity: number) => void
    clearCart: () => void
    total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const newTotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    setTotal(newTotal)
  }, [items])

    const addItem = (newItem: Omit<CartItem, 'quantity'>) => {  // 這裡修改參數類型
        setItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === newItem.id)
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prevItems, { ...newItem, quantity: 1 }]  // 在這裡添加 quantity
        })
    }

  const removeItem = (id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

