"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const collections = [
  {
    id: 1,
    name: "Bridal Elegance",
    description: "Exquisite wedding gowns crafted with precision",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/luxury-bridal-gown-jYBV58OKBGLb1MVlR5wt6XOFQ0grUn.jpg",
    featured: true,
    category: "Bridal",
  },
  {
    id: 2,
    name: "Evening Collection",
    description: "Statement pieces for unforgettable nights",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-evening-dress-Dnvknf4PLGNiBWfNEYJiyIv0Q3lK0J.jpg",
    featured: false,
    category: "Evening",
  },
  {
    id: 3,
    name: "Ready-to-Wear",
    description: "Contemporary luxury for everyday elegance",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/ready-to-wear-luxury-dress-UXOqVn8vqI4deXK8WT40cq2hNxpGnY.jpg",
    featured: false,
    category: "Ready-to-Wear",
  },
  {
    id: 4,
    name: "Atelier Collection",
    description: "Bespoke designs tailored to perfection",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/bespoke-couture-dress-ewzzmsGqUz2QCdWyHsOVQEY8nmLfrp.jpg",
    featured: true,
    category: "Atelier",
  },
]

export default function CollectionsShowcase() {
  return (
    <section className="w-full py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground text-balance">Our Collections</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg font-light">
            Explore our curated selections, each designed to celebrate your unique style and individuality
          </p>
        </div>

        {/* Featured Collection - Large */}
        <div className="mb-8 grid lg:grid-cols-2 gap-8 items-center mb-12">
          <div className="relative overflow-hidden rounded-2xl h-80 lg:h-96 animate-fade-in-up hover-lift group">
            <img
              src={collections[0].image || "/placeholder.svg"}
              alt={collections[0].name}
              className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
          </div>
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-widest">Featured</span>
              <h3 className="text-4xl font-serif font-bold text-foreground mt-2">{collections[0].name}</h3>
            </div>
            <p className="text-foreground/70 text-lg leading-relaxed font-light">{collections[0].description}</p>
            <p className="text-foreground/60 text-base font-light">
              Every piece in our Bridal Elegance collection represents years of dedication to the craft. From delicate
              lacework to flowing silhouettes, these gowns are designed to make your special day unforgettable.
            </p>
            <Link href="/collections?category=Bridal">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit smooth-transition hover-lift">
                Explore Bridal
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {collections.slice(1, 3).map((collection, index) => (
            <Link
              key={collection.id}
              href="/collections"
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl h-64 mb-4 hover-lift">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{collection.name}</h3>
              <p className="text-foreground/60 mb-4 font-light">{collection.description}</p>
              <span className="inline-flex items-center text-accent hover:text-accent/80 smooth-transition font-medium">
                View Collection
                <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* Second Featured Collection */}
        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 lg:order-2 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-widest">Signature Collection</span>
              <h3 className="text-4xl font-serif font-bold text-foreground mt-2">{collections[3].name}</h3>
            </div>
            <p className="text-foreground/70 text-lg leading-relaxed font-light">{collections[3].description}</p>
            <p className="text-foreground/60 text-base font-light">
              Our Atelier Collection represents the pinnacle of bespoke couture, where every stitch is a testament to
              our artisans' mastery and your vision.
            </p>
            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit smooth-transition hover-lift">
                Book Consultation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-2xl h-80 lg:h-96 lg:order-1 animate-fade-in-up hover-lift group">
            <img
              src={collections[3].image || "/placeholder.svg"}
              alt={collections[3].name}
              className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
