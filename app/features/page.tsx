import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FeaturesHero } from "@/components/features/features-hero"
import { FeaturesGrid } from "@/components/features/features-grid"
import { FeaturesCTA } from "@/components/features/features-cta"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <FeaturesHero />
        <FeaturesGrid />
        <FeaturesCTA />
      </main>
      <Footer />
    </div>
  )
}
