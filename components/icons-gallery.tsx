"use client"

import { Sparkles, Heart, Award, Zap, Leaf, Lock } from "lucide-react"

const features = [
  {
    id: 1,
    icon: Award,
    title: "Award-Winning",
    description: "Recognized globally for exceptional craftsmanship and design innovation",
  },
  {
    id: 2,
    icon: Heart,
    title: "Handcrafted",
    description: "Every piece meticulously created by skilled artisans with passion",
  },
  {
    id: 3,
    icon: Sparkles,
    title: "Luxurious Materials",
    description: "Premium fabrics and finest materials sourced from around the world",
  },
  {
    id: 4,
    icon: Zap,
    title: "Timeless Design",
    description: "Pieces designed to transcend trends and endure through generations",
  },
  {
    id: 5,
    icon: Leaf,
    title: "Sustainable",
    description: "Committed to eco-conscious practices and ethical production methods",
  },
  {
    id: 6,
    icon: Lock,
    title: "Authentic",
    description: "Every garment comes with a certificate of authenticity and care guide",
  },
]

export default function IconsGallery() {
  return (
    <section className="w-full py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground text-balance">
            Why Choose Shadows Luxe
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            We stand apart through our unwavering commitment to quality, artistry, and ethical practices
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.id} className="group">
                <div className="h-full p-8 rounded-lg border border-border hover:border-accent/50 hover:bg-card transition-all duration-300">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{feature.description}</p>

                  {/* Hover Accent */}
                  <div className="mt-4 h-1 w-8 bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center space-y-6 py-12 border-t border-border">
          <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
            Experience the difference that true craftsmanship and dedication make. Discover why discerning clients
            choose Shadows Luxe for life's most important moments.
          </p>
        </div>
      </div>
    </section>
  )
}
