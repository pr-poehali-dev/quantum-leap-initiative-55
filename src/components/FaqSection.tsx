import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-12">Частые вопросы</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        <div>
          <p className="text-muted-foreground mb-6">
            Не нашли ответ? Напишите нам — ответим быстро!
          </p>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Вся продукция оригинальная?"
              answer="Да, мы работаем только с официальными дистрибьюторами и проверенными поставщиками. Каждая позиция имеет сертификат качества."
            />
            <FaqItem
              question="Как быстро доставляете?"
              answer="По городу — в течение дня или на следующий день. По России — от 1 до 5 рабочих дней в зависимости от региона."
            />
            <FaqItem
              question="Есть ли минимальный заказ?"
              answer="Нет минимального заказа — доставляем даже один товар. При заказе от 3 000 ₽ доставка бесплатная."
            />
          </Accordion>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Как оплатить заказ?"
              answer="Принимаем оплату картой онлайн, наличными при получении и переводом на карту. Выбирайте удобный способ."
            />
            <FaqItem
              question="Можно вернуть товар?"
              answer="Да, в течение 14 дней при наличии чека и неповреждённой упаковке. Обменяем или вернём деньги."
            />
            <FaqItem
              question="Помогаете с выбором?"
              answer="Конечно! Напишите нам — расскажем, какая жидкость или под подойдёт именно вам, исходя из ваших предпочтений."
            />
            <FaqItem
              question="Есть оптовые цены?"
              answer="Да, при заказе от 10 единиц предоставляем скидку. Напишите нам для обсуждения условий."
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