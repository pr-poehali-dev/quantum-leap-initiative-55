import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-12">Частые вопросы</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        <div>
          <p className="text-muted-foreground mb-6">
            Не нашли ответ? Свяжитесь с нашей службой поддержки.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Чем Nexora отличается от других?"
              answer="Nexora обеспечивает непревзойденную производительность, масштабируемость и удобство использования — идеальная основа для продуктивности вашей команды."
            />
            <FaqItem
              question="Мои данные в безопасности?"
              answer="Да, мы применяем отраслевые стандарты безопасности и регулярные аудиты, чтобы ваши данные оставались под защитой."
            />
            <FaqItem
              question="Есть бесплатный пробный период?"
              answer="Мы предлагаем 14 дней бесплатно без привязки карты — изучите все функции перед подпиской."
            />
          </Accordion>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Насколько быстро можно начать?"
              answer="Процесс настройки занимает менее 5 минут. Наша документация проведет вас через каждый шаг."
            />
            <FaqItem
              question="Какие интеграции доступны?"
              answer="Мы интегрируемся со всеми популярными инструментами: CRM, платежными системами и аналитикой. Доступны и кастомные интеграции."
            />
            <FaqItem
              question="Можно ли настроить под свои нужды?"
              answer="Платформа создана с учетом гибкости: расширенный API и множество опций конфигурации."
            />
            <FaqItem
              question="Какие способы оплаты поддерживаются?"
              answer="Мы принимаем все основные банковские карты, PayPal, банковские переводы и региональные платежные системы."
            />
          </Accordion>
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
