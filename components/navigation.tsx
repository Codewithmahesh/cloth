"use client"

import { useState } from "react"
import { Menu, X, ShoppingBag } from "lucide-react"
import Link from "next/link"

const navItems = [
  { label: "Collections", href: "/collections" },
  { label: "Shop", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md border-b border-border z-50 animate-fade-in-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <h1 className="text-2xl font-serif font-bold text-accent cursor-pointer hover:text-accent/80 transition-colors">
              Shadows Luxe
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm text-foreground/70 hover:text-accent smooth-transition font-medium tracking-wide"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            <button className="text-foreground/70 hover:text-accent smooth-transition">
              <ShoppingBag className="w-5 h-5" />
            </button>

            <Link
              href="/auth/login"
              className="hidden sm:inline-block text-sm text-foreground/70 hover:text-accent smooth-transition font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="hidden sm:inline-block px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg text-sm font-medium smooth-transition"
            >
              Sign Up
            </Link>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-foreground">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-accent smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border pt-3 mt-3 space-y-2">
              <Link
                href="/auth/login"
                className="block px-3 py-2 text-sm text-foreground/70 hover:text-accent smooth-transition"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/auth/signup"
                className="block px-3 py-2 text-sm bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
