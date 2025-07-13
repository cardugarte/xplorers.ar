import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'xplorers - Transforma tu negocio con Inteligencia Artificial',
  description: 'xplorers - Transforma tu negocio con Inteligencia Artificial',
  generator: 'xplorers.ar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
