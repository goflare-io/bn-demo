import Image from 'next/image'

const menuItems = [
  { name: '招牌紅燒牛肉麵', price: 180, image: '/bn.jpg', description: '濃郁紅燒湯頭，搭配軟嫩牛肉' },
  { name: '清燉牛肉麵', price: 160, image: '/bn.jpg', description: '清爽湯頭，牛肉鮮甜' },
  { name: '麻辣牛肉麵', price: 200, image: '/bn.jpg', description: '香辣過癮，重口味首選' },
  { name: '牛肉餃子', price: 90, image: '/bn.jpg', description: '鮮嫩多汁，完美配菜' },
  { name: '青菜', price: 40, image: '/bn.jpg', description: '新鮮時蔬，爽口開胃' },
  { name: '紅茶', price: 30, image: '/bn.jpg', description: '香醇解膩' },
]

export default function Menu() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">我們的菜單</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuItems.map((item) => (
          <div key={item.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-red-600">${item.price}</span>
                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300">
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

