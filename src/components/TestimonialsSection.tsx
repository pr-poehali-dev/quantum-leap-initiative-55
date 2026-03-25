import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const SCROLL_SPEED = 30 // seconds to complete one loop

export function TestimonialsSection() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setScrollHeight(containerRef.current.scrollHeight / 2)
    }
  }, [])

  const testimonials = [
    {
      name: "Алексей Иванов",
      role: "Продакт-менеджер",
      quote: "Эта платформа полностью изменила подход к управлению проектами. Рекомендую!",
      rating: 5,
    },
    {
      name: "Мария Петрова",
      role: "UX-дизайнер",
      quote: "Удобство и эффективность на высшем уровне. Это настоящий прорыв для нашей команды.",
      rating: 5,
    },
    {
      name: "Михаил Козлов",
      role: "Разработчик",
      quote: "Впечатлен функциональностью и отзывчивой поддержкой. Отличный сервис!",
      rating: 4,
    },
    {
      name: "Елена Смирнова",
      role: "Директор по маркетингу",
      quote: "Аналитика дала нам бесценные инсайты. ROI вырос значительно.",
      rating: 5,
    },
    {
      name: "Дмитрий Волков",
      role: "Основатель стартапа",
      quote: "Для стартапа этот инструмент стал ключевым в масштабировании. Очень доволен!",
      rating: 5,
    },
    {
      name: "Анна Сидорова",
      role: "Координатор проектов",
      quote: "Функции совместной работы — на высоте. Удаленка стала намного проще.",
      rating: 4,
    },
    {
      name: "Сергей Новиков",
      role: "Технический директор",
      quote: "Возможности API-интеграции обширны. Идеально вписывается в наш стек.",
      rating: 5,
    },
    {
      name: "Ольга Морозова",
      role: "Менеджер по успеху клиентов",
      quote: "Нашим клиентам нравится интуитивный интерфейс. Показатели удовлетворенности выросли.",
      rating: 5,
    },
  ]

  return (
    <section className="container max-w-screen-xl py-20 overflow-hidden">
      <h2 className="text-3xl font-bold mb-12 text-center">Отзывы клиентов</h2>

      <div
        className="relative h-[400px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={containerRef}
          className="testimonial-scroll"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
            animationDuration: `${SCROLL_SPEED}s`,
            transform: `translateY(-${scrollHeight}px)`,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i + testimonials.length} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  rating: number
}

function TestimonialCard({ name, role, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-accent/20 border-border/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
            />
          ))}
        </div>
        <p className="text-sm mb-4 text-muted-foreground">{quote}</p>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`https://i.pravatar.cc/32?u=${name}`} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">{name}</div>
            <div className="text-xs text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
