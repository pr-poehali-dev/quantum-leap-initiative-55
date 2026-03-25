import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PersonalOsSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Ваша персональная
            <br />
            операционная система
          </h2>
          <p className="text-muted-foreground mb-8">
            Объедините команду с интуитивной платформой, которая связывает данные, приложения и людей воедино.
          </p>

          <Card className="bg-card/50 border-border/40 mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">AI-действия</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Поручите ИИ управление задачами</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureItem title="Интеграция с почтой" />
            <FeatureItem title="Гибкая настройка" />
            <FeatureItem title="Совместная работа" />
            <FeatureItem title="Безлимитное хранилище" />
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div> Терминал
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs font-mono">
              <div className="text-green-500 mb-1">$ npm install nexora-sdk</div>
              <div className="text-muted-foreground mb-1">Установка пакетов...</div>
              <div className="text-blue-500">Готово! Установка завершена</div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <FeatureCheck title="Дашборд аналитики" />
            <FeatureCheck title="Предиктивная аналитика" />
            <FeatureCheck title="Kanban-доски для проектов" />
            <FeatureCheck title="Авто-синхронизация" />
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
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
        <Check className="h-3 w-3 text-primary-foreground" />
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
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
        <Check className="h-3 w-3 text-primary-foreground" />
      </div>
      <span className="text-xs">{title}</span>
    </div>
  )
}
