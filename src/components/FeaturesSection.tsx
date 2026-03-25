import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function FeaturesSection() {
  return (
    <section id="features" className="container max-w-screen-xl py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          icon="BadgeCheck"
          title="Только оригинал"
          description="Работаем напрямую с официальными дистрибьюторами. Никакого контрафакта — только сертифицированная продукция."
        />
        <FeatureCard
          icon="Truck"
          title="Быстрая доставка"
          description="Отправляем заказы в день оплаты. Доставка по всей России — от 1 дня в вашем городе."
        />
        <FeatureCard
          icon="RefreshCw"
          title="Актуальный ассортимент"
          description="Постоянно обновляем каталог. Новинки жидкостей, подов и одноразок появляются каждую неделю."
        />
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-accent/50 border-dashed border-border/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">
            <Icon name={icon} size={16} />
          </span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}