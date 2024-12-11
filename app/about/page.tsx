import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">關於我們</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <Image
            src="/about-us.jpg"
            alt="我們的團隊"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">我們的故事</h2>
          <p className="mb-4">
            牛肉麵天地始於1980年，由我們的創始人張大廚在台北的一個小攤位開始。憑藉著對美食的熱情和對品質的堅持，我們的牛肉麵很快就贏得了顧客的喜愛。
          </p>
          <p className="mb-4">
            40多年來，我們不斷改進我們的食譜，堅持使用最新鮮的食材，以確保每一碗牛肉麵都能帶給顧客最佳的味覺體驗。
          </p>
          <p>
            如今，我們不僅在實體店面為顧客提供美味的牛肉麵，還推出了線上訂購服務，讓更多人能夠在家中享受我們的美食。我們期待能繼續為您提供最優質的牛肉麵，讓這份傳統美食繼續傳承下去。
          </p>
        </div>
      </div>
    </div>
  )
}

