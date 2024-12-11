import Image from 'next/image'
import { Product } from '../app/types/product'
import { useCart } from './CartContext'

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
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
  )
}

