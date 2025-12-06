import { Zap, Shield, Globe, Layers, Code, Cloud, Lock, BarChart, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "High‑Velocity Delivery",
    description: "Our teams ship production‑ready software quickly using modern engineering practices.",
  },
  {
    icon: Shield,
    title: "Enterprise‑Grade Security",
    description: "Secure development workflows and best‑practice protection across every project stage.",
  },
  {
    icon: Globe,
    title: "Global Engineering Talent",
    description: "Access skilled developers worldwide to scale your product teams efficiently.",
  },
  {
    icon: Layers,
    title: "Flexible Architecture",
    description: "Modular, scalable solutions designed to evolve alongside your business needs.",
  },
  {
    icon: Code,
    title: "Developer‑Focused Approach",
    description: "Clean, maintainable codebases built for long‑term stability and easy onboarding.",
  },
  {
    icon: Cloud,
    title: "Cloud‑Native Solutions",
    description: "Modern infrastructure powered by containerized, cloud‑optimized deployments.",
  },
  {
    icon: Lock,
    title: "Access & Compliance",
    description: "Robust permission systems and compliance‑friendly workflows for enterprises.",
  },
  {
    icon: BarChart,
    title: "Insightful Analytics",
    description: "Actionable project reporting and transparent metrics to support decision‑making.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless communication and smooth cooperation across distributed teams.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="pb-16 md:pb-24 px-6 md:px-12 lg:px-[122px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-foreground rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
