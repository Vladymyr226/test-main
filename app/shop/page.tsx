import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ShopHero } from "@/components/shop/shop-hero"
import { ShopPricing } from "@/components/shop/shop-pricing"
import { ShopAddons } from "@/components/shop/shop-addons"

export default function ShopPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <ShopHero />
        <ShopPricing />
        <ShopAddons />
      </main>
      <Footer />
    </div>
  )
}
