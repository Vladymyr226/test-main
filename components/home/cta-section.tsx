import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-[122px]">
      <div className="max-w-6xl mx-auto">
        <div className="bg-foreground rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
          <h2 className="text-2xl md:text-4xl font-bold text-background mb-4 relative z-10">Ready to Get Started?</h2>
          <p className="text-background/70 text-base md:text-lg mb-8 max-w-xl mx-auto relative z-10">
            Empowering companies with modern engineering solutions tailored to their needs.
          </p>
          <Link href="/contact" className="relative z-10">
            <Button className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-base gap-2">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>

          {/* Decorative circles */}
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#1A1A1A] rounded-full translate-x-16 translate-y-16" />
          <div className="absolute bottom-16 right-16 w-24 h-24 bg-[#484848]/50 rounded-full" />
          <div className="absolute top-0 left-0 w-32 h-32 bg-[#1A1A1A] rounded-full -translate-x-16 -translate-y-16" />
        </div>
      </div>
    </section>
  )
}
