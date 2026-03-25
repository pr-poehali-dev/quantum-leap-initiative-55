import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur">
      <div className="container flex h-14 max-w-screen-xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Icon name="Wind" className="h-6 w-6 text-purple-400" />
            <span className="font-bold text-lg">VapeStore</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#catalog" className="transition-colors hover:text-foreground/80">
              Каталог
            </a>
            <a href="#features" className="transition-colors hover:text-foreground/80">
              Преимущества
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground/80">
              FAQ
            </a>
            <a href="#contacts" className="transition-colors hover:text-foreground/80">
              Контакты
            </a>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white">
            Написать нам
          </Button>
        </div>
      </div>
    </header>
  )
}