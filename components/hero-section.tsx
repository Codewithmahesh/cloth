"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-block animate-scale-in">
              <span className="px-4 py-2 rounded-full bg-secondary/10 text-accent text-sm font-medium tracking-wider">
                ✨ Discover Elegance
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-serif font-bold text-foreground leading-tight text-balance">
                Timeless
                <span className="block text-accent">Luxury</span>
                Redefined
              </h1>
              <p className="text-lg text-foreground/60 max-w-md leading-relaxed font-light">
                Experience the art of craftsmanship with our exclusive collection of couture gowns and ready-to-wear
                pieces designed for the discerning individual.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/collections">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium smooth-transition hover-lift"
                >
                  Explore Collection
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/journal">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted/50 bg-transparent smooth-transition hover-lift"
                >
                  View Journal
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div className="animate-fade-in-up">
                <p className="text-accent font-serif text-2xl font-bold">20+</p>
                <p className="text-foreground/60 text-sm font-light">Years of Excellence</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
                <p className="text-accent font-serif text-2xl font-bold">500+</p>
                <p className="text-foreground/60 text-sm font-light">Exclusive Designs</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
                <p className="text-accent font-serif text-2xl font-bold">10K+</p>
                <p className="text-foreground/60 text-sm font-light">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-2xl overflow-hidden animate-fade-in-down group">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/attachments/gen-images/public/elegant-luxury-fashion-model-in-couture-gown-luxur-Jy44jnLflVedA7gHtfI6HN5BaFAQid.jpg"
              alt="Luxury fashion collection showcase"
              className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
