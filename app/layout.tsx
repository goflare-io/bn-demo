import './globals.css'
import type { Metadata } from 'next'
import { Noto_Sans_TC } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { CartProvider } from '@/components/CartContext'

const notoSansTC = Noto_Sans_TC({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'] 
})

export const metadata: Metadata = {
  title: '牛肉麵天地 | 傳統風味，現代體驗',
  description: '品嚐我們的招牌牛肉麵，現在還可以線上訂購冷凍包！',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body className={`${notoSansTC.className} flex flex-col min-h-screen bg-gray-50`}>
        <CartProvider>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}

