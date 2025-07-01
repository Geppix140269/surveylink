import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SurveyLink - Marketplace di Periti Immobiliari',
  description: 'Connetti con periti immobiliari verificati in tutta Italia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  )
}
