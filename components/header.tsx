"use client"

import { useState } from "react"
import { ChevronDown, User, ShoppingCart, Logs, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features", hasDropdown: true },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between font-roboto relative z-50">
      <Link
        href="/"
        className={cn(
          "text-lg md:text-2xl font-extrabold font-inter z-50 relative transition-colors",
          isMobileMenuOpen ? "text-white" : "text-foreground",
        )}
      >
        Logo Here
      </Link>

      {/* Mobile Menu Button */}
      <button className="md:hidden p-2 -mr-2 z-50 relative" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Logs className="w-6 h-6 text-foreground" />}
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12 text-base ml-auto text-[#1F1F1F]">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-1 transition-colors",
              isActive(item.href) ? "text-foreground font-semibold" : "hover:text-foreground hover:font-semibold",
            )}
          >
            {item.label}
            {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
          </Link>
        ))}
        <div className="flex items-center gap-6 -ml-2">
          <Link
            href="/unavailable"
            className="p-2 rounded-full border border-foreground hover:bg-muted transition-colors"
          >
            <User className="w-5 h-5 text-foreground" />
          </Link>
          <Link href="/shop" className="p-2 rounded-full border border-foreground hover:bg-muted transition-colors">
            <ShoppingCart className="w-5 h-5 text-foreground" />
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col pt-24 px-6 md:hidden overflow-y-auto">
          <nav className="flex flex-col gap-6 text-lg text-white h-full pb-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-1 transition-colors",
                  isActive(item.href) ? "font-bold" : "hover:text-gray-300",
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
            <div className="flex items-center justify-center gap-[50px] mt-auto pb-8">
              <Link
                href="/unavailable"
                className="p-3 rounded-full border border-white hover:bg-white/10 transition-colors"
              >
                <User className="w-6 h-6 text-white" />
              </Link>
              <Link href="/shop" className="p-3 rounded-full border border-white hover:bg-white/10 transition-colors">
                <ShoppingCart className="w-6 h-6 text-white" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
