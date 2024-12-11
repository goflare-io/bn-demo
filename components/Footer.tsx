import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">美味牛肉麵</h3>
            <p>傳統風味，現代體驗</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">聯絡資訊</h3>
            <p>地址：台北市中正區牛肉麵街123號</p>
            <p>電話：(02) 1234-5678</p>
            <p>Email: info@beefnoodles.com</p>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">快速連結</h3>
            <ul className="space-y-2">
              <li><Link href="/menu" className="hover:text-red-400">菜單</Link></li>
              <li><Link href="/shop" className="hover:text-red-400">線上商店</Link></li>
              <li><Link href="/about" className="hover:text-red-400">關於我們</Link></li>
              <li><Link href="/contact" className="hover:text-red-400">聯絡我們</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 美味牛肉麵. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

