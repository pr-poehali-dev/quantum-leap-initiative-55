import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section id="contacts" className="container max-w-screen-xl py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Готовы сделать заказ?</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Напишите нам — поможем с выбором, оформим заказ и доставим быстро. Более 3 000 довольных покупателей уже с нами!
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="px-8 bg-purple-600 hover:bg-purple-700 text-white">
          Написать в Telegram
        </Button>
        <Button size="lg" variant="outline" className="px-8 border-purple-700 text-purple-300 hover:bg-purple-900/30">
          Смотреть каталог
        </Button>
      </div>
    </section>
  )
}