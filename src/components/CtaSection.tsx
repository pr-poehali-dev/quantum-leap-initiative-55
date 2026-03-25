import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="container max-w-screen-xl py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Присоединяйтесь к тысячам довольных пользователей, которые уже трансформировали свой бизнес с платформой Nexora.
      </p>
      <Button size="lg" className="px-8">
        Начать работу
      </Button>
    </section>
  )
}
