"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export default function CraftsBanner() {
  return (
    <section className="w-full py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-accent text-sm font-medium uppercase tracking-wider">Our Craft</span>
              <h2 className="text-5xl lg:text-6xl font-serif font-bold text-foreground text-balance">
                Artistry in Every Stitch
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              For over two decades, Shadows Luxe has been dedicated to preserving the ancient traditions of couture
              while embracing modern innovation. Our master artisans spend years perfecting their craft, ensuring every
              seam, every fold, and every detail reflects our unwavering commitment to excellence.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1 bg-accent" />
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Hand-Sewn Details</h3>
                  <p className="text-foreground/60">
                    Each garment features intricate hand-sewn embellishments and finishing touches
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent" />
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Bespoke Tailoring</h3>
                  <p className="text-foreground/60">
                    Custom measurements and fittings to ensure perfect silhouette and comfort
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1 bg-accent" />
                <div>
                  <h3 className="font-serif font-bold text-foreground mb-1">Premium Quality</h3>
                  <p className="text-foreground/60">
                    Materials tested and selected for durability, comfort, and timeless appeal
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Discover Our Process
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-primary/10 bg-transparent"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Documentary
              </Button>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-lg overflow-hidden group">
            <img
              src="/placeholder.svg?key=craft"
              alt="Master artisan at work crafting luxury garments"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <button className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 opacity-75 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center hover:bg-accent transition-colors">
                <Play className="w-8 h-8 text-accent-foreground fill-accent-foreground" />
              </div>
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 py-12 border-t border-border">
          <div className="text-center">
            <p className="text-4xl font-serif font-bold text-accent mb-2">500+</p>
            <p className="text-foreground/60">Bespoke Designs</p>
            <p className="text-sm text-foreground/40 mt-2">Created for discerning clients worldwide</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif font-bold text-accent mb-2">20+</p>
            <p className="text-foreground/60">Years of Heritage</p>
            <p className="text-sm text-foreground/40 mt-2">Continuing our legacy of excellence</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif font-bold text-accent mb-2">50</p>
            <p className="text-foreground/60">Master Artisans</p>
            <p className="text-sm text-foreground/40 mt-2">Dedicated to perfecting the craft</p>
          </div>
        </div>
      </div>
    </section>
  )
}
