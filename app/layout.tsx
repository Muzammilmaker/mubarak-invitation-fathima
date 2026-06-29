import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Poppins, Tangerine, Playfair_Display } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

const poppins = Poppins({ 
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

const tangerine = Tangerine({
  variable: '--font-script',
  weight: ['400', '700'],
  subsets: ['latin']
})

const playfair = Playfair_Display({
  variable: '--font-elegant',
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Mubarak Wedding | Nikah Ceremony',
  description: 'You are cordially invited to the Nikah and Valima reception of M. Mubarak Basha and A. Fathima Humera. In Sha Allah.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0B3D2E' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${poppins.variable} ${tangerine.variable} ${playfair.variable} bg-gradient-to-br from-amber-50 via-slate-50 to-amber-100`}>
      <body className="font-body antialiased bg-gradient-to-br from-amber-50 via-slate-50 to-amber-100 text-slate-900">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
