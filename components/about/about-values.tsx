import { Users, Target, Award, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Engineering Focus",
    description: "We deliver solutions built on strong technical foundations and modern development standards.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description: "We work closely with clients to create long‑term, reliable software that supports real business goals.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Clean architecture, maintainable code, and dependable delivery are at the core of every project.",
  },
  {
    icon: Heart,
    title: "Dedication",
    description: "Our team is fully committed to building products that last and supporting them beyond release.",
  },
]

export function AboutValues() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-[122px] bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 bg-foreground rounded-lg flex items-center justify-center mb-4 mx-auto">
                <value.icon className="w-7 h-7 text-background" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
