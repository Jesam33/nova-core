// app/layout.jsx
import './globals.css'
import { Geist } from 'next/font/google'
import Header from '@/app/component/Header'
import { CartProvider } from '@/app/context/context' // Adjust path if needed

const geist = Geist({ subsets: ['latin'] })

export const metadata = {
  title: 'Sweet Delights - Premium Cakes',
  description: 'Order delicious custom cakes online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <CartProvider>
          <Header />
          <main className="">
            {children}
          </main>
          <footer className="bg-gray-800 text-white ">
            <div className="container mx-auto px-4 py-6 text-center">
              <p>&copy; 2025 Sweet Delights. All rights reserved.</p>
              <p className="mt-2 text-gray-400">
                Freshly baked with love              </p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
