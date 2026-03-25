import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function PersonalOsSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Помогаем найти
            <br />
            идеальный вкус
          </h2>
          <p className="text-muted-foreground mb-8">
            Расскажите, что вам нравится — и мы подберём жидкость, под или одноразку точно под ваши предпочтения. Без переплат и лишних поисков.
          </p>

          <Card className="bg-card/50 border-border/40 mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Icon name="MessageCircle" size={14} className="text-purple-400" />
                Пример диалога с нами
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs font-mono space-y-1">
              <div className="text-purple-300">Вы: Хочу что-то сладкое, не слишком крепкое</div>
              <div className="text-muted-foreground">Менеджер: Отличный выбор! Рекомендую...</div>
              <div className="text-green-400">→ Клубника-лимонад, 20 мг — 590 ₽ ✓</div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureItem title="Подбор по вкусу" />
            <FeatureItem title="Консультация бесплатно" />
            <FeatureItem title="Быстрый ответ в чате" />
            <FeatureItem title="Замена при проблемах" />
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div> Статус склада
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Жидкости Brusko</span>
                <span className="text-green-400">В наличии</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Одноразки Elf Bar</span>
                <span className="text-green-400">В наличии</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Podsystem SMOK</span>
                <span className="text-yellow-400">Мало на складе</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Жидкости Eonsmoke</span>
                <span className="text-green-400">В наличии</span>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <FeatureCheck title="Фруктовые вкусы" />
            <FeatureCheck title="Ментол и лёд" />
            <FeatureCheck title="Десерты и выпечка" />
            <FeatureCheck title="Табачные вкусы" />
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  title: string
}

function FeatureItem({ title }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
        <Icon name="Check" size={12} className="text-white" />
      </div>
      <span className="text-sm">{title}</span>
    </div>
  )
}

interface FeatureCheckProps {
  title: string
}

function FeatureCheck({ title }: FeatureCheckProps) {
  return (
    <div className="flex items-center gap-2 bg-accent/50 rounded-md p-2">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-600 flex items-center justify-center">
        <Icon name="Check" size={10} className="text-white" />
      </div>
      <span className="text-xs">{title}</span>
    </div>
  )
}