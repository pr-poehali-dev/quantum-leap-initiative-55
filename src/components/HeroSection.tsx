import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section className="container max-w-screen-xl py-20 text-center">
      <div className="flex justify-center mb-6">
        <Badge variant="outline" className="px-4 py-1 text-sm rounded-full border-neutral-700">
          Публичная бета-версия 2.0
        </Badge>
      </div>
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-6">
        Добро пожаловать
        <br />
        в Nexora
      </h1>
      <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
        Универсальная платформа продуктивности, которая помогает командам работать вместе, анализировать данные и эффективно масштабировать бизнес.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="px-8">
          Функции
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Демо
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Цены
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Ресурсы
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          Поддержка
        </Button>
      </div>
    </section>
  )
}
