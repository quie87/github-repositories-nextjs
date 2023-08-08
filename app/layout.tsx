import { Poppins } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import Header from './components/Header'

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'Github Repositories',
  description: 'Small project to show my github repositories using Next.js',
  keywords: 'nextjs, typescript, github, repositories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}
