"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import CollectionsShowcase from "@/components/collections-showcase"
import PremiumProducts from "@/components/premium-products"
import IconsGallery from "@/components/icons-gallery"
import CraftsBanner from "@/components/crafts-banner"
import StoriesSection from "@/components/stories-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <CollectionsShowcase />
      <PremiumProducts />
      <IconsGallery />
      <CraftsBanner />
      <StoriesSection />
      <Footer />
    </main>
  )
}
