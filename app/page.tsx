import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-800">
              <span className="text-red-600">牛肉麵</span>天地
            </h1>
            <p className="text-xl mb-8 text-gray-600">體驗傳統風味，享受現代品質。我們的招牌牛肉麵，現在提供線上訂購冷凍包！</p>
            <Link href="/shop" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              立即訂購
            </Link>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <Image
                src="/bn.jpg"
                alt="美味牛肉麵"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-800 py-2 px-4 rounded-full font-bold transform rotate-12">
                新品上市！
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white rounded-lg shadow-xl mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">我們的特色</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon="🍜"
            title="傳統口味"
            description="使用祖傳秘方，保留最道地的台灣牛肉麵風味。"
          />
          <FeatureCard
            icon="🚚"
            title="全台配送"
            description="冷凍包宅配到府，隨時隨地享受美味。"
          />
          <FeatureCard
            icon="🌿"
            title="新鮮食材"
            description="嚴選高品質牛肉和新鮮蔬菜，確保最佳口感。"
          />
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">顧客評價</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            name="陳小姐"
            comment="這家的牛肉麵真的太好吃了！湯頭濃郁，牛肉軟嫩，我已經成為常客了。"
            rating={5}
          />
          <TestimonialCard
            name="林先生"
            comment="冷凍包的品質超乎預期，在家也能享受到餐廳級的美味。"
            rating={4}
          />
          <TestimonialCard
            name="王太太"
            comment="服務態度很好，環境也很乾淨。最重要的是牛肉麵真的很美味！"
            rating={5}
          />
        </div>
      </section>
    </div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

interface TestimonialCardProps {
  name: string;
  comment: string;
  rating: number;
}

function TestimonialCard({ name, comment, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-bold text-xl">
          {name[0]}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-lg">{name}</h4>
          <div className="flex">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-yellow-400">★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600">{comment}</p>
    </div>
  )
}

