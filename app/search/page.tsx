import { Product } from '../types/product'
import ProductCard from '../../components/ProductCard'
import Search from '../../components/Search'


export const dynamic = 'force-dynamic'

// 這個函數模擬從後端 API 獲取搜索結果
async function getSearchResults(query: string): Promise<Product[]> {
  // 在實際應用中，這裡應該調用後端 API
  // 現在我們只是模擬一些結果
  await new Promise(resolve => setTimeout(resolve, 1000)) // 模擬 API 延遲
  
  const allProducts: Product[] = [
    { id: '1', name: '招牌紅燒牛肉麵（冷凍包）', price: 220, image: '/frozen-red-braised-beef-noodles.jpg', description: '2人份，含湯包和麵條' },
    { id: '2', name: '清燉牛肉麵（冷凍包）', price: 200, image: '/frozen-clear-broth-beef-noodles.jpg', description: '2人份，含湯包和麵條' },
    { id: '3', name: '麻辣牛肉麵（冷凍包）', price: 240, image: '/frozen-spicy-beef-noodles.jpg', description: '2人份，含湯包和麵條' },
    { id: '4', name: '牛肉餃子（冷凍）', price: 150, image: '/frozen-beef-dumplings.jpg', description: '12顆裝' },
    { id: '5', name: '紅燒牛肉湯包', price: 180, image: '/beef-soup-pack.jpg', description: '500ml，可製作4碗湯' },
    { id: '6', name: '手工麵條', price: 80, image: '/handmade-noodles.jpg', description: '4人份' },
  ]

  return allProducts.filter(product => 
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  )
}

export default async function SearchResults({ searchParams }: { searchParams: { q: string } }) {
  const query = searchParams.q || ''
  const results = await getSearchResults(query)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">搜索結果</h1>
      <div className="max-w-xl mx-auto mb-8">
        <Search />
      </div>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600">
          沒有找到與 "{query}" 相關的結果。請嘗試其他關鍵詞。
        </p>
      )}
    </div>
  )
}

