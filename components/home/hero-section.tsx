import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-12 md:pt-20 pb-16 md:pb-24 px-6 md:px-12 lg:px-[122px]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Build Something Amazing Today
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We help businesses grow with innovative solutions. Our platform provides everything you need to succeed in
              the digital world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/features">
                <Button className="bg-foreground text-background hover:bg-foreground/90 px-8 py-6 text-base gap-2 w-full sm:w-auto">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 text-base w-full sm:w-auto bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="bg-foreground rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="aspect-square flex items-center justify-center">
                <div className="text-center text-background">
                  <div className="text-6xl md:text-8xl font-bold mb-4">Mbunity</div>
                  <p className="text-background/70 text-sm md:text-base">Your Digital Partner</p>
                </div>
              </div>
              {/* Decorative circles */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1A1A1A] rounded-full translate-x-8 translate-y-8" />
              <div className="absolute bottom-12 right-12 w-20 h-20 bg-[#484848]/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
