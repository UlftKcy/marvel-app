import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'
import Navbar from '@/components/home/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marvel App',
  description: 'Marvel App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <StyledComponentsRegistry>
          <main style={{paddingTop:"4rem"}}>{children}</main>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
