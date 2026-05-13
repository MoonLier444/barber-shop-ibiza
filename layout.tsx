import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
})

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans"
})

export const metadata: Metadata = {
  title: 'Barber Shop Ibiza | Barbería Premium en Eivissa',
  description: 'Barbería masculina clásica en el corazón de Eivissa. Corte, barba y ritual de afeitado. Más de 10 años de experiencia. Reserva tu cita online.',
  keywords: 'barbería Ibiza, barber shop Eivissa, corte pelo Ibiza, barber ibiza, afeitado clásico, barbero Ibiza',
  openGraph: {
    title: 'Barber Shop Ibiza | Barbería Premium en Eivissa',
    description: 'Barbería masculina clásica en el corazón de Eivissa. Corte, barba y ritual de afeitado.',
    locale: 'es_ES',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
