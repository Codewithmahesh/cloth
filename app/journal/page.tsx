"use client"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const ARTICLES = [
  {
    id: 1,
    title: "The Art of Evening Wear",
    excerpt: "Discover the craftsmanship and artistry behind our signature collections.",
    date: "December 1, 2024",
    author: "Sarah Mitchell",
    image: "/luxury-fashion-atelier-studio-craftsmanship.jpg",
  },
  {
    id: 2,
    title: "Styling Tips for Special Occasions",
    excerpt: "Learn how to accessorize and style your luxury evening wear for any event.",
    date: "November 28, 2024",
    author: "Emma Richardson",
    image: "/styling-tips-luxury-fashion-accessories.jpg",
  },
  {
    id: 3,
    title: "Sustainable Luxury Fashion",
    excerpt: "How we're committed to creating beautiful pieces while respecting our planet.",
    date: "November 25, 2024",
    author: "Sophie Chen",
    image: "/luxury-city-guide-evening-venues-elegant.jpg",
  },
  {
    id: 4,
    title: "Behind the Scenes: Atelier Stories",
    excerpt: "Meet our artisans and discover their journey in the world of haute couture.",
    date: "November 20, 2024",
    author: "Michael Roberts",
    image: "/luxury-fashion-interview-elegant-woman.jpg",
  },
]

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="mb-16 animate-fade-in-up">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Journal</h1>
          <p className="text-lg text-muted-foreground">
            Stories, insights, and inspiration from our world of luxury fashion
          </p>
        </div>

        {/* Featured Article */}
        {ARTICLES[0] && (
          <Link href={`/journal/${ARTICLES[0].id}`}>
            <Card className="overflow-hidden mb-16 group cursor-pointer hover:shadow-xl transition-all duration-300 animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-muted h-96 overflow-hidden">
                  <img
                    src={ARTICLES[0].image || "/placeholder.svg"}
                    alt={ARTICLES[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-3">Featured</p>
                  <h2 className="text-3xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {ARTICLES[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{ARTICLES[0].excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{ARTICLES[0].date}</span>
                    <span className="text-sm font-semibold text-primary">Read More →</span>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.slice(1).map((article, idx) => (
            <Link key={article.id} href={`/journal/${article.id}`}>
              <Card
                className="overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300 h-full flex flex-col animate-fade-in-up"
                style={{ animationDelay: `${(idx + 1) * 0.1}s` }}
              >
                <div className="bg-muted h-56 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">{article.author}</p>
                  <h3 className="text-lg font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{article.excerpt}</p>
                  <p className="text-xs text-muted-foreground">{article.date}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
