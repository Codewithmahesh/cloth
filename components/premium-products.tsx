"use client"

import { Button } from "@/components/ui/button"
import { Heart, ShoppingBag } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Midnight Elegance Gown",
    category: "Bridal",
    price: "$2,850",
    image: "https://kujtameri.com/cdn/shop/files/black-velvet-vision-midnight-gown-kujta-meri-542459.jpg?v=1720098829&width=750",
    rating: 4.9,
    reviews: 128,
    badge: "New Arrival",
  },
  {
    id: 2,
    name: "Champagne Dreams",
    category: "Evening Wear",
    price: "$1,650",
    image: "https://i.pinimg.com/736x/1f/77/86/1f7786d33aeabaa1d3d788108ae5ca70.jpg",
    rating: 4.8,
    reviews: 95,
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Velvet Heritage Gown",
    category: "Couture",
    price: "$3,200",
    image: "https://i.pinimg.com/1200x/55/ea/11/55ea11c07ae3477260b20364a24b08f6.jpg",
    rating: 5.0,
    reviews: 67,
    badge: "Exclusive",
  },
  {
    id: 4,
    name: "Silk Symphony Dress",
    category: "Ready-to-Wear",
    price: "$1,200",
    image: "https://i.pinimg.com/1200x/ab/32/a1/ab32a10780045cadea7d0da5fdb16d2d.jpg",
    rating: 4.7,
    reviews: 142,
    badge: null,
  },
]

export default function PremiumProducts() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (productId: number) => {
    setWishlist((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <section className="w-full py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Featured Selection</span>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground text-balance">Premium Pieces</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Handpicked designs that embody our commitment to excellence and timeless style
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <div className="group cursor-pointer">
                {/* Product Card */}
                <div className="bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-colors h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 bg-muted flex-shrink-0">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {product.badge}
                      </div>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        toggleWishlist(product.id)
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground transition-all"
                    >
                      <Heart className="w-5 h-5" fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                    </button>

                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <Button
                        className="w-full rounded-none bg-accent hover:bg-accent/90 text-accent-foreground"
                        asChild
                      >
                        <span>
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          Quick View
                        </span>
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 space-y-3 flex-1 flex flex-col">
                    <div>
                      <p className="text-accent text-xs font-medium uppercase tracking-wider mb-1">
                        {product.category}
                      </p>
                      <h3 className="text-sm font-serif font-bold text-foreground line-clamp-2">{product.name}</h3>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className={`text-xs ${i < Math.floor(product.rating) ? "text-accent" : "text-foreground/20"}`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <span className="text-xs text-foreground/60 ml-1">({product.reviews})</span>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
                      <span className="text-lg font-serif font-bold text-foreground">{product.price}</span>
                      <button
                        onClick={(e) => e.preventDefault()}
                        className="text-accent hover:text-accent/80 transition-colors"
                      >
                        <ShoppingBag className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center space-y-6 py-12 border-t border-border">
          <p className="text-foreground/70 max-w-xl mx-auto">
            Explore our complete collection with over 500 exclusive designs available for pre-order and immediate
            delivery.
          </p>
          <Link href="/collections">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
