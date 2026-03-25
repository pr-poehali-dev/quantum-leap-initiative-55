import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

interface Product {
  id: number
  name: string
  brand: string
  price: number
  inStock: boolean
  volume?: string
  strength?: string
  puffs?: number
}

const initialProducts: Record<string, Product[]> = {
  liquids: [
    { id: 1, name: "Клубника-Лимонад", brand: "Brusko", price: 590, inStock: true, volume: "30 мл", strength: "20 мг" },
    { id: 2, name: "Манго-Маракуйя", brand: "Eonsmoke", price: 490, inStock: true, volume: "30 мл", strength: "20 мг" },
    { id: 3, name: "Ледяная мята", brand: "Brusko", price: 550, inStock: false, volume: "30 мл", strength: "20 мг" },
    { id: 4, name: "Табак ваниль", brand: "Smoke Kitchen", price: 620, inStock: true, volume: "60 мл", strength: "3 мг" },
  ],
  pods: [
    { id: 5, name: "Novo 4", brand: "SMOK", price: 2490, inStock: true },
    { id: 6, name: "Caliburn A2S", brand: "Uwell", price: 2890, inStock: true },
    { id: 7, name: "Luxe Q2 SE", brand: "Vaporesso", price: 3190, inStock: false },
    { id: 8, name: "XROS 3", brand: "Vaporesso", price: 2690, inStock: true },
  ],
  disposables: [
    { id: 9, name: "Elf Bar BC5000", brand: "Elf Bar", price: 890, inStock: true, puffs: 5000 },
    { id: 10, name: "Lost Mary BM5000", brand: "Lost Mary", price: 950, inStock: true, puffs: 5000 },
    { id: 11, name: "HQD Cuvie Plus", brand: "HQD", price: 750, inStock: false, puffs: 1200 },
    { id: 12, name: "Fumot RandM 7000", brand: "Fumot", price: 1090, inStock: true, puffs: 7000 },
  ],
  coils: [
    { id: 13, name: "Испаритель Novo 4 Mesh", brand: "SMOK", price: 390, inStock: true },
    { id: 14, name: "Caliburn A2 Pod 0.9Ω", brand: "Uwell", price: 490, inStock: true },
    { id: 15, name: "XROS Pod 0.8Ω", brand: "Vaporesso", price: 450, inStock: true },
    { id: 16, name: "Испаritель GTX 0.6Ω", brand: "Vaporesso", price: 350, inStock: false },
  ],
}

const categoryLabels: Record<string, string> = {
  liquids: "Жидкости",
  pods: "Поды",
  disposables: "Одноразки",
  coils: "Испарители",
}

const categoryIcons: Record<string, string> = {
  liquids: "Droplets",
  pods: "Cpu",
  disposables: "Zap",
  coils: "Settings",
}

export function DashboardPreview() {
  const [products, setProducts] = useState(initialProducts)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isAddOpen, setIsAddOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState("liquids")
  const [newProduct, setNewProduct] = useState<Partial<Product>>({ inStock: true })

  const toggleStock = (category: string, id: number) => {
    setProducts(prev => ({
      ...prev,
      [category]: prev[category].map(p => p.id === id ? { ...p, inStock: !p.inStock } : p),
    }))
  }

  const deleteProduct = (category: string, id: number) => {
    setProducts(prev => ({
      ...prev,
      [category]: prev[category].filter(p => p.id !== id),
    }))
  }

  const saveEdit = () => {
    if (!editingProduct) return
    const category = Object.keys(products).find(cat =>
      products[cat].some(p => p.id === editingProduct.id)
    )
    if (!category) return
    setProducts(prev => ({
      ...prev,
      [category]: prev[category].map(p => p.id === editingProduct.id ? editingProduct : p),
    }))
    setEditingProduct(null)
  }

  const addProduct = () => {
    if (!newProduct.name || !newProduct.brand || !newProduct.price) return
    const maxId = Math.max(...Object.values(products).flat().map(p => p.id))
    const product: Product = {
      id: maxId + 1,
      name: newProduct.name!,
      brand: newProduct.brand!,
      price: Number(newProduct.price),
      inStock: newProduct.inStock ?? true,
      volume: newProduct.volume,
      strength: newProduct.strength,
      puffs: newProduct.puffs,
    }
    setProducts(prev => ({
      ...prev,
      [activeCategory]: [...prev[activeCategory], product],
    }))
    setNewProduct({ inStock: true })
    setIsAddOpen(false)
  }

  return (
    <div id="catalog" className="container max-w-screen-xl pb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Каталог товаров</h2>
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
          <DialogTrigger asChild>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white gap-2">
              <Icon name="Plus" size={16} />
              Добавить товар
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-zinc-900 border-border/40">
            <DialogHeader>
              <DialogTitle>Новый товар — {categoryLabels[activeCategory]}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div>
                <Label>Название</Label>
                <Input className="mt-1 bg-zinc-800 border-border/40" placeholder="Название товара" value={newProduct.name || ""} onChange={e => setNewProduct(p => ({ ...p, name: e.target.value }))} />
              </div>
              <div>
                <Label>Бренд</Label>
                <Input className="mt-1 bg-zinc-800 border-border/40" placeholder="Бренд" value={newProduct.brand || ""} onChange={e => setNewProduct(p => ({ ...p, brand: e.target.value }))} />
              </div>
              <div>
                <Label>Цена (₽)</Label>
                <Input className="mt-1 bg-zinc-800 border-border/40" type="number" placeholder="0" value={newProduct.price || ""} onChange={e => setNewProduct(p => ({ ...p, price: Number(e.target.value) }))} />
              </div>
              {activeCategory === "liquids" && (
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label>Объём</Label>
                    <Input className="mt-1 bg-zinc-800 border-border/40" placeholder="30 мл" value={newProduct.volume || ""} onChange={e => setNewProduct(p => ({ ...p, volume: e.target.value }))} />
                  </div>
                  <div>
                    <Label>Крепость</Label>
                    <Input className="mt-1 bg-zinc-800 border-border/40" placeholder="20 мг" value={newProduct.strength || ""} onChange={e => setNewProduct(p => ({ ...p, strength: e.target.value }))} />
                  </div>
                </div>
              )}
              {activeCategory === "disposables" && (
                <div>
                  <Label>Кол-во затяжек</Label>
                  <Input className="mt-1 bg-zinc-800 border-border/40" type="number" placeholder="5000" value={newProduct.puffs || ""} onChange={e => setNewProduct(p => ({ ...p, puffs: Number(e.target.value) }))} />
                </div>
              )}
              <div className="flex items-center gap-3">
                <Label>В наличии</Label>
                <button
                  onClick={() => setNewProduct(p => ({ ...p, inStock: !p.inStock }))}
                  className={`w-10 h-5 rounded-full transition-colors ${newProduct.inStock ? "bg-purple-600" : "bg-zinc-600"}`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform mx-0.5 ${newProduct.inStock ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={addProduct}>
                Добавить
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="liquids" onValueChange={setActiveCategory} className="w-full">
        <div className="border-b border-border/40 pb-2 mb-4">
          <TabsList className="bg-transparent border-b-0">
            {Object.keys(products).map(cat => (
              <TabsTrigger
                key={cat}
                value={cat}
                className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-purple-500 gap-2"
              >
                <Icon name={categoryIcons[cat]} size={14} />
                {categoryLabels[cat]}
                <Badge variant="outline" className="ml-1 text-xs px-1 py-0 border-border/40">
                  {products[cat].filter(p => p.inStock).length}/{products[cat].length}
                </Badge>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {Object.keys(products).map(cat => (
          <TabsContent key={cat} value={cat} className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {products[cat].map(product => (
                <Card key={product.id} className="bg-card/30 border-border/40 hover:border-purple-700/50 transition-colors">
                  <CardHeader className="pb-2 pt-4 px-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-sm font-medium leading-tight truncate">{product.name}</CardTitle>
                        <p className="text-xs text-muted-foreground mt-0.5">{product.brand}</p>
                      </div>
                      <Badge className={`text-xs flex-shrink-0 ${product.inStock ? "bg-green-900/50 text-green-400 border-green-800" : "bg-red-900/50 text-red-400 border-red-800"}`} variant="outline">
                        {product.inStock ? "Есть" : "Нет"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4">
                    <div className="text-lg font-bold text-purple-300 mb-2">{product.price.toLocaleString()} ₽</div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.volume && <Badge variant="outline" className="text-xs border-border/40">{product.volume}</Badge>}
                      {product.strength && <Badge variant="outline" className="text-xs border-border/40">{product.strength}</Badge>}
                      {product.puffs && <Badge variant="outline" className="text-xs border-border/40">{product.puffs.toLocaleString()} затяжек</Badge>}
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleStock(cat, product.id)}
                        className={`w-8 h-4 rounded-full transition-colors flex-shrink-0 ${product.inStock ? "bg-green-600" : "bg-zinc-600"}`}
                        title="Изменить наличие"
                      >
                        <div className={`w-3 h-3 bg-white rounded-full transition-transform mx-0.5 ${product.inStock ? "translate-x-4" : "translate-x-0"}`} />
                      </button>
                      <Dialog>
                        <DialogTrigger asChild>
                          <button onClick={() => setEditingProduct({ ...product })} className="p-1 rounded hover:bg-accent text-muted-foreground hover:text-foreground transition-colors">
                            <Icon name="Pencil" size={13} />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="bg-zinc-900 border-border/40">
                          <DialogHeader>
                            <DialogTitle>Редактировать товар</DialogTitle>
                          </DialogHeader>
                          {editingProduct && editingProduct.id === product.id && (
                            <div className="space-y-4 pt-2">
                              <div>
                                <Label>Название</Label>
                                <Input className="mt-1 bg-zinc-800 border-border/40" value={editingProduct.name} onChange={e => setEditingProduct(p => p ? { ...p, name: e.target.value } : p)} />
                              </div>
                              <div>
                                <Label>Бренд</Label>
                                <Input className="mt-1 bg-zinc-800 border-border/40" value={editingProduct.brand} onChange={e => setEditingProduct(p => p ? { ...p, brand: e.target.value } : p)} />
                              </div>
                              <div>
                                <Label>Цена (₽)</Label>
                                <Input className="mt-1 bg-zinc-800 border-border/40" type="number" value={editingProduct.price} onChange={e => setEditingProduct(p => p ? { ...p, price: Number(e.target.value) } : p)} />
                              </div>
                              {editingProduct.volume !== undefined && (
                                <div className="grid grid-cols-2 gap-3">
                                  <div>
                                    <Label>Объём</Label>
                                    <Input className="mt-1 bg-zinc-800 border-border/40" value={editingProduct.volume || ""} onChange={e => setEditingProduct(p => p ? { ...p, volume: e.target.value } : p)} />
                                  </div>
                                  <div>
                                    <Label>Крепость</Label>
                                    <Input className="mt-1 bg-zinc-800 border-border/40" value={editingProduct.strength || ""} onChange={e => setEditingProduct(p => p ? { ...p, strength: e.target.value } : p)} />
                                  </div>
                                </div>
                              )}
                              {editingProduct.puffs !== undefined && (
                                <div>
                                  <Label>Затяжки</Label>
                                  <Input className="mt-1 bg-zinc-800 border-border/40" type="number" value={editingProduct.puffs || ""} onChange={e => setEditingProduct(p => p ? { ...p, puffs: Number(e.target.value) } : p)} />
                                </div>
                              )}
                              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white" onClick={saveEdit}>
                                Сохранить
                              </Button>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      <button
                        onClick={() => deleteProduct(cat, product.id)}
                        className="p-1 rounded hover:bg-red-900/30 text-muted-foreground hover:text-red-400 transition-colors ml-auto"
                        title="Удалить"
                      >
                        <Icon name="Trash2" size={13} />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
