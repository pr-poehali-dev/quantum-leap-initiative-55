import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  return (
    <section className="container max-w-screen-xl py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard value="95%" label="Удовлетворенность клиентов" />
        <StatCard value="4x" label="Быстрее внедрение" />
        <StatCard value="97%" label="Гарантия доступности" />
        <StatCard value="450+" label="Активных клиентов" />
      </div>
    </section>
  )
}

interface StatCardProps {
  value: string
  label: string
}

function StatCard({ value, label }: StatCardProps) {
  return (
    <Card className="bg-accent/20 border-border/40">
      <CardContent className="pt-6">
        <div className="text-center">
          <div className="text-4xl font-bold mb-2">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  )
}
