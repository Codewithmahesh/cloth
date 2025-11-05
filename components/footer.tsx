"use client"
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter */}
        <div className="mb-16 pb-16 border-b border-border">
          <div className="max-w-md">
            <h3 className="text-2xl font-serif font-bold mb-4">Join Our Circle</h3>
            <p className="text-foreground/70 mb-6">Receive exclusive previews and invitations to our private events.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background text-foreground placeholder-foreground/50 border border-border focus:outline-none focus:border-accent"
              />
              <button className="px-6 py-3 bg-accent text-accent-foreground hover:bg-accent/90 transition-colors">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Shadows Luxe</h4>
            <p className="text-foreground/60 text-sm">Crafting timeless elegance since 2015.</p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Collections</h4>
            <ul className="space-y-2">
              {["Gowns", "Ready-to-Wear", "Bridal", "Cocktail"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              {["Contact Us", "Shipping", "Returns", "Size Guide"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms & Conditions", "About Us", "Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">© 2025 Shadows Luxe. All rights reserved.</p>
          <div className="flex gap-6">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-foreground/60 hover:text-accent transition-colors"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
