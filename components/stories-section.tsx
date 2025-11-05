"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"

const stories = [
  {
    id: 1,
    title: "The Art of Bridal Couture: Behind the Seams",
    excerpt:
      "Discover the meticulous process of creating our signature bridal collections, from initial sketch to final fitting.",
    date: "November 15, 2024",
    author: "Alexandra Chen",
    category: "Design Process",
    image: "https://prod.justinalexandermedia.com/media/gallery/pagebuilder/jab_ss26_homepage/JAB_SS26_Video_Header_88477_Lady.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Sustainable Luxury: Our Commitment to Ethics",
    excerpt: "Learn how Shadows Luxe sources premium materials responsibly and maintains our environmental standards.",
    date: "November 10, 2024",
    author: "Marcus Williams",
    category: "Sustainability",
    image: "https://static.wixstatic.com/media/1dc5f9_75da9cb46fe244c3b409f9cf2962c05b~mv2.jpg/v1/fill/w_613,h_442,al_c,lg_1,q_80,enc_auto/1dc5f9_75da9cb46fe244c3b409f9cf2962c05b~mv2.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Client Story: From Dream to Reality",
    excerpt:
      "Meet Sarah and discover how her vision transformed into a stunning custom-designed gown for her wedding day.",
    date: "November 5, 2024",
    author: "Emma Rodriguez",
    category: "Client Stories",
    image: "/placeholder.svg?key=story3",
    featured: false,
  },
]

export default function StoriesSection() {
  return (
    <section className="w-full py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Journal</span>
          <h2 className="text-4xl lg:text-6xl font-serif font-bold text-foreground text-balance">Stories & Insights</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            Stay inspired with our latest articles about design, craftsmanship, and the stories behind our creations
          </p>
        </div>

        {/* Featured Story */}
        <div className="mb-12 grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-lg h-80 lg:h-96 group">
            <img
              src={stories[0].image || "/placeholder.svg"}
              alt={stories[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-wider mb-2 block">
                Featured Article
              </span>
              <h3 className="text-3xl lg:text-4xl font-serif font-bold text-foreground">{stories[0].title}</h3>
            </div>
            <p className="text-lg text-foreground/70 leading-relaxed">{stories[0].excerpt}</p>
            <div className="flex flex-col sm:flex-row gap-4 text-sm text-foreground/60 py-4 border-y border-border">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                {stories[0].date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-accent" />
                By {stories[0].author}
              </div>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-fit">
              Read Full Story
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {stories.slice(1).map((story) => (
            <article key={story.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg h-48 mb-4">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="space-y-3">
                <span className="text-accent text-xs font-medium uppercase tracking-wider">{story.category}</span>
                <h3 className="text-xl font-serif font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                  {story.title}
                </h3>
                <p className="text-foreground/60 text-sm line-clamp-2">{story.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-foreground/50 pt-3 border-t border-border">
                  <span>{story.date}</span>
                  <span>{story.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20 p-8 lg:p-12 rounded-lg border border-border bg-card space-y-6">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-3">Stay Connected</h3>
            <p className="text-foreground/70">
              Subscribe to our journal for exclusive stories, design inspiration, and special offers delivered to your
              inbox.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap">Subscribe</Button>
          </div>
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center text-accent hover:text-accent/80 transition-colors font-medium"
          >
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
