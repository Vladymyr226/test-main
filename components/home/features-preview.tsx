import { Zap, Shield, Globe } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "High‑Velocity Delivery",
    description: "We deliver high‑quality software fast and efficiently.",
  },
  {
    icon: Shield,
    title: "Enterprise‑Level Quality",
    description: "Built with security, reliability, and long‑term stability.",
  },
  {
    icon: Globe,
    title: "Worldwide Engineering Talent",
    description: "Access skilled global engineering teams on demand.",
  },
]

export function FeaturesPreview() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 lg:px-[122px] bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Discover what makes our platform the perfect choice for your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-foreground rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
