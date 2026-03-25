import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"

export function NextGenSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-4">Широкий выбор — всё в наличии</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Жидкости на любой вкус, поды всех форматов, топовые одноразки и испарители — регулярно пополняем склад, чтобы ваш любимый товар всегда был доступен.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Droplets" className="h-4 w-4 text-purple-400" /> Жидкости
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <StockItem label="Солевые (20-50 мг)" value={95} />
            <StockItem label="Классические (3-6 мг)" value={88} />
            <StockItem label="Органические" value={72} />
            <StockItem label="Никотин-фри (0 мг)" value={60} />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Cpu" className="h-4 w-4 text-purple-400" /> Поды и испарители
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <StockItem label="Pod-системы" value={85} />
            <StockItem label="Испарители (Mod)" value={70} />
            <StockItem label="Сменные картриджи" value={90} />
            <StockItem label="Испарительные головки" value={80} />
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Zap" className="h-4 w-4 text-purple-400" /> Одноразки
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-32 flex items-end gap-1 pb-2">
              {[60, 80, 55, 90, 70, 95, 75, 85, 65, 88, 72, 92].map((height, i) => (
                <div
                  key={i}
                  className="bg-purple-500/40 w-full rounded-t hover:bg-purple-500/60 transition-colors"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Наличие по моделям</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

interface StockItemProps {
  label: string
  value: number
}

function StockItem({ label, value }: StockItemProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span className="text-purple-400">{value}%</span>
      </div>
      <Progress value={value} className="h-2 bg-muted/30" />
    </div>
  )
}