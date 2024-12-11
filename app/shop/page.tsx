'use client'

import Image from 'next/image'
import { useCart } from '../../components/CartContext'

const products = [
  { id: '1', name: '招牌紅燒牛肉麵（冷凍包）', price: 220, image: '/bn.jpg', description: '2人份，含湯包和麵條' },
  { id: '2', name: '清燉牛肉麵（冷凍包）', price: 200, image: '/bn.jpg', description: '2人份，含湯包和麵條' },
  { id: '3', name: '麻辣牛肉麵（冷凍包）', price: 240, image: '/bn.jpg', description: '2人份，含湯包和麵條' },
  { id: '4', name: '牛肉餃子（冷凍）', price: 150, image: '/bn.jpg', description: '12顆裝' },
  { id: '5', name: '紅燒牛肉湯包', price: 180, image: '/bn.jpg', description: '500ml，可製作4碗湯' },
  { id: '6', name: '手工麵條', price: 80, image: '/bn.jpg', description: '4人份' },
]

export default function Shop() {
  const { addItem } = useCart()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">線上商店</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-red-600">${product.price}</span>
                <button 
                  className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
                  onClick={() => addItem(product)}
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

