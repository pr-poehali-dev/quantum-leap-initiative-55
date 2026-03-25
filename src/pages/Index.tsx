import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { DashboardPreview } from "@/components/DashboardPreview"
import { FeaturesSection } from "@/components/FeaturesSection"
import { NextGenSection } from "@/components/NextGenSection"
import { PersonalOsSection } from "@/components/PersonalOsSection"
import { StatsSection } from "@/components/StatsSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { FaqSection } from "@/components/FaqSection"
import { CtaSection } from "@/components/CtaSection"

const Index = () => {
  return (
    <div className="dark bg-black text-white min-h-screen">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center">
        <HeroSection />
        <DashboardPreview />
        <FeaturesSection />
        <NextGenSection />
        <PersonalOsSection />
        <StatsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
    </div>
  )
}

export default Index
