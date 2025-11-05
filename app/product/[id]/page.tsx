"use client"
import { useState } from "react"
import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const PRODUCTS = {
  1: {
    id: 1,
    name: "Elegant Evening Gown",
    price: 2400,
    category: "Evening",
    image: "/elegant-evening-dress.jpg",
    description:
      "A stunning evening gown crafted from the finest silk with hand-embroidered details. This timeless piece features a flowing silhouette and exquisite craftsmanship.",
    details: ["100% Silk", "Hand-embroidered details", "Flowing silhouette", "Professional tailoring included"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy", "Black", "Burgundy"],
  },
  2: {
    id: 2,
    name: "Luxury Bridal Gown",
    price: 3200,
    category: "Bridal",
    image: "/luxury-bridal-gown.jpg",
    description: "Your special day deserves a special dress. This bridal masterpiece combines elegance with comfort.",
    details: ["Premium silk charmeuse", "Crystal embellishments", "Timeless design", "Custom fitting available"],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Ivory", "Champagne"],
  },
}

export default function ProductPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = PRODUCTS[productId as keyof typeof PRODUCTS]
  const [selectedSize, setSelectedSize] = useState("")
  const [selectedColor, setSelectedColor] = useState("")

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-2xl font-serif font-bold">Product not found</h1>
          <Link href="/collections" className="text-primary hover:underline mt-4 inline-block">
            Back to collections
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link href="/collections" className="text-muted-foreground hover:text-foreground mb-8 inline-block">
          ← Back to Collections
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in-up">
          {/* Product Image */}
          <div className="sticky top-20 h-fit">
            <div className="bg-muted rounded-lg overflow-hidden">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">{product.category}</p>
              <h1 className="text-4xl font-serif font-bold text-foreground mb-4">{product.name}</h1>
              <p className="text-3xl font-semibold text-primary">${product.price}</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-semibold mb-4">Select Size</label>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-2 text-center border rounded-lg transition-all ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <label className="block text-sm font-semibold mb-4">Select Color</label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`py-2 px-4 rounded-lg border transition-all ${
                      selectedColor === color
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border hover:border-foreground"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-serif font-semibold mb-4">Details</h3>
              <ul className="space-y-2">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-center">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-4 pt-6">
              <Button
                size="lg"
                className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={!selectedSize || !selectedColor}
              >
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                ♡ Wishlist
              </Button>
            </div>

            {/* Related Products */}
            <div className="pt-8 border-t border-border">
              <h3 className="font-serif font-semibold mb-6">You May Also Like</h3>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2].map((item) => (
                  <Link key={item} href={`/product/${item}`}>
                    <Card className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all">
                      <div className="bg-muted h-40 overflow-hidden">
                        <img
                          src={PRODUCTS[item as keyof typeof PRODUCTS]?.image || "/placeholder.svg"}
                          alt="Related"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-3">
                        <p className="font-serif font-semibold text-sm">
                          {PRODUCTS[item as keyof typeof PRODUCTS]?.name}
                        </p>
                        <p className="text-primary font-semibold text-sm">
                          ${PRODUCTS[item as keyof typeof PRODUCTS]?.price}
                        </p>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
