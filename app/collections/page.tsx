"use client"
import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"

const COLLECTIONS = [
  { id: 1, name: "Evening Gowns", category: "Bridal", price: 2400, image: "/elegant-evening-dress.jpg" },
  { id: 2, name: "Cocktail Dress", category: "Cocktail", price: 1200, image: "/luxury-bridal-gown.jpg" },
  { id: 3, name: "Ready to Wear", category: "Ready-to-Wear", price: 890, image: "/ready-to-wear-luxury-dress.jpg" },
  { id: 4, name: "Couture Piece", category: "Couture", price: 5500, image: "/celestial-evening-wear.jpg" },
  { id: 5, name: "Midnight Blue", category: "Evening", price: 1800, image: "/luxury-midnight-blue-evening-gown.jpg" },
  { id: 6, name: "Velvet Elegance", category: "Evening", price: 1500, image: "/velvet-luxury-dress.jpg" },
  { id: 7, name: "Garden Dreams", category: "Bridal", price: 3200, image: "/midnight-garden-evening-gown.jpg" },
  { id: 8, name: "Burgundy Nights", category: "Evening", price: 1400, image: "/burgundy-velvet-luxury-gown.jpg" },
]

const FILTERS = {
  category: ["All", "Bridal", "Cocktail", "Evening", "Ready-to-Wear", "Couture"],
  priceRange: ["All", "Under $500", "$500 - $1000", "$1000 - $2000", "$2000+"],
  color: ["All", "Black", "Navy", "Burgundy", "Gold", "White"],
}

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPrice, setSelectedPrice] = useState("All")
  const [selectedColor, setSelectedColor] = useState("All")

  const filteredCollections = COLLECTIONS.filter((item) => {
    let matches = true
    if (selectedCategory !== "All" && item.category !== selectedCategory) matches = false
    return matches
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Our Collections</h1>
          <p className="text-muted-foreground text-lg">
            Explore our curated selection of luxury evening wear and exclusive pieces
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="hidden lg:block sticky top-20 space-y-6 animate-slide-in-right">
              {/* Category Filter */}
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-4">Category</h3>
                <div className="space-y-3">
                  {FILTERS.category.map((cat) => (
                    <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                      <Checkbox checked={selectedCategory === cat} onCheckedChange={() => setSelectedCategory(cat)} />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-4">Price Range</h3>
                <div className="space-y-3">
                  {FILTERS.priceRange.map((price) => (
                    <label key={price} className="flex items-center space-x-3 cursor-pointer group">
                      <Checkbox checked={selectedPrice === price} onCheckedChange={() => setSelectedPrice(price)} />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {price}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="font-serif font-semibold text-foreground mb-4">Color</h3>
                <div className="space-y-3">
                  {FILTERS.color.map((color) => (
                    <label key={color} className="flex items-center space-x-3 cursor-pointer group">
                      <Checkbox checked={selectedColor === color} onCheckedChange={() => setSelectedColor(color)} />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {color}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedPrice("All")
                  setSelectedColor("All")
                }}
              >
                Clear Filters
              </Button>
            </div>

            {/* Mobile Filter Sheet */}
            <div className="lg:hidden mb-6">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full bg-transparent">
                    Show Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72">
                  <div className="space-y-6 mt-6">
                    <div>
                      <h3 className="font-serif font-semibold text-foreground mb-4">Category</h3>
                      <div className="space-y-3">
                        {FILTERS.category.map((cat) => (
                          <label key={cat} className="flex items-center space-x-3 cursor-pointer">
                            <Checkbox
                              checked={selectedCategory === cat}
                              onCheckedChange={() => setSelectedCategory(cat)}
                            />
                            <span className="text-sm">{cat}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCollections.map((item, index) => (
                <Link
                  key={item.id}
                  href={`/product/${item.id}`}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden bg-muted h-80">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">{item.category}</p>
                      <h3 className="font-serif font-semibold text-foreground mb-2">{item.name}</h3>
                      <p className="text-lg font-semibold text-primary">${item.price}</p>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
