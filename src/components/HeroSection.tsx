import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="container max-w-screen-xl py-20 text-center">
      <div className="flex justify-center mb-6">
        <Badge variant="outline" className="px-4 py-1 text-sm rounded-full border-purple-700 text-purple-300">
          🔥 Всегда свежий ассортимент
        </Badge>
      </div>
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-6">
        Лучший магазин
        <br />
        <span className="text-purple-400">вейп-товаров</span>
      </h1>
      <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
        Жидкости, поды, испарители и одноразки — огромный выбор, быстрая доставка и только оригинальная продукция от проверенных брендов.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="px-8 bg-purple-600 hover:bg-purple-700 text-white" onClick={() => document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' })}>
          Смотреть каталог
        </Button>
        <Button size="lg" variant="outline" className="px-8 border-purple-700 text-purple-300 hover:bg-purple-900/30">
          Написать нам
        </Button>
      </div>
    </section>
  )
}