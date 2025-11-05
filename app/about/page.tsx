"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 animate-fade-in-up">
          <div className="space-y-6">
            <h1 className="text-4xl font-serif font-bold text-foreground">Our Story</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2010, our luxury fashion house has been crafting exquisite evening wear for the most discerning
              clientele. Each piece is a testament to our commitment to artistry, quality, and timeless elegance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that luxury is not just about the price tag—it's about the story behind every stitch, the
              passion in every design, and the confidence in every wear.
            </p>
          </div>
          <div className="bg-muted rounded-lg h-96 overflow-hidden">
            <img
              src="/luxury-fashion-atelier-studio-craftsmanship.jpg"
              alt="Our atelier"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Craftsmanship", description: "Every piece is meticulously crafted by skilled artisans" },
              { title: "Sustainability", description: "We source ethically and create responsibly" },
              { title: "Innovation", description: "Blending tradition with contemporary design" },
            ].map((value, idx) => (
              <div
                key={idx}
                className="p-8 border border-border rounded-lg hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="font-serif font-semibold text-lg mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-card border border-border rounded-lg p-12">
          <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Our Team</h2>
          <p className="text-muted-foreground mb-8">
            Our talented team of designers, seamstresses, and craftspeople are dedicated to creating the most beautiful
            and luxurious pieces.
          </p>
          <Button className="bg-primary hover:bg-primary/90">Meet Our Team</Button>
        </div>
      </div>

      <Footer />
    </main>
  )
}
