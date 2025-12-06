"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Construction, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function UnavailablePage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="text-center max-w-md">
          {/* Icon */}
          <div className="mx-auto w-24 h-24 bg-[#000000] rounded-full flex items-center justify-center mb-8">
            <Construction className="w-12 h-12 text-[#ffffff]" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-foreground mb-4">This feature is not available</h1>

          {/* Description */}
          <p className="text-muted-foreground mb-8 leading-relaxed">
            This feature is not available yet. Please try again later.
          </p>

          {/* Back button */}
          <Button 
            onClick={() => router.back()}
            className="bg-[#000000] text-[#ffffff] hover:bg-[#333333] px-8 py-6 text-base gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}
