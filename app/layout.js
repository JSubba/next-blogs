import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
	weight: ["400", "700"],
	subsets: ['latin']
})

export const metadata = {
  title: 'BlogApp',
  description: 'Blog app created with next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
