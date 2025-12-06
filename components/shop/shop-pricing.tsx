import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Basic Maintenance",
    price: "$49",
    period: "/month",
    description: "Essential support for small projects after delivery.",
    features: [
      "Bug Fixes (Up to 5/month)",
      "Security Patches",
      "Email Support",
      "Monthly Status Report"
    ],
  },
  {
    id: 2,
    name: "Pro Support",
    price: "$129",
    period: "/month",
    description: "Advanced support for actively growing applications.",
    features: [
      "Unlimited Bug Fixes",
      "Performance Monitoring",
      "Priority Support",
      "Weekly Reports",
      "Minor Feature Adjustments"
    ],
    popular: true,
  },
  {
    id: 3,
    name: "Enterprise Care",
    price: "$299",
    period: "/month",
    description: "Full-cycle support for mission‑critical systems.",
    features: [
      "Dedicated Engineer",
      "24/7 Incident Response",
      "Custom Integrations",
      "SLA Guarantee",
      "Scalability & Infrastructure Oversight"
    ],
  },
]

export function ShopPricing() {
  return (
    <section className="pb-16 px-6 md:px-12 lg:px-[122px]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`rounded-xl p-8 flex flex-col ${
                product.popular
                  ? "bg-foreground text-background shadow-2xl scale-105"
                  : "bg-background border border-border shadow-lg"
              }`}
            >
              {product.popular && (
                <span className="text-xs font-semibold bg-background text-foreground px-3 py-1 rounded-full self-start mb-4">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-2 ${product.popular ? "text-background" : "text-foreground"}`}>
                {product.name}
              </h3>
              <div className="mb-4">
                <span className={`text-4xl font-bold ${product.popular ? "text-background" : "text-foreground"}`}>
                  {product.price}
                </span>
                <span className={product.popular ? "text-background/70" : "text-muted-foreground"}>
                  {product.period}
                </span>
              </div>
              <p className={`text-sm mb-6 ${product.popular ? "text-background/70" : "text-muted-foreground"}`}>
                {product.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`text-sm flex items-center gap-2 ${product.popular ? "text-background" : "text-foreground"}`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${product.popular ? "bg-background" : "bg-foreground"}`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/unavailable">
                <Button
                  className={`w-full py-6 ${
                    product.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
