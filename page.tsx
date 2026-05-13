import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { Gallery } from "@/components/gallery"
import { Booking } from "@/components/booking"
import { Barbers } from "@/components/barbers"
import { Reviews } from "@/components/reviews"
import { IbizaExperience } from "@/components/ibiza-experience"
import { Products } from "@/components/products"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Gallery />
      <Booking />
      <Barbers />
      <Reviews />
      <IbizaExperience />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
