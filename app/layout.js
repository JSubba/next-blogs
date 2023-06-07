import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer/Footer'

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
      <body className={inter.className}>
				<div className='container mx-auto'>
				<Navbar />
				<main className='min-h-[80vh]'>
					{children}
				</main>
				<Footer />
				</div>
			</body>
    </html>
  )
}
