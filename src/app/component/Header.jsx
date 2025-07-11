"use client"
import Link from 'next/link'
import { useCart } from '../context/context'

const Header = () => {
  const { getCartCount } = useCart()
  
  return (
    <header className="bg-white shadow-lg border-b-2 border-purple-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-purple-800 hover:text-purple-600 transition-colors">
            🎂 Novacore
          </Link>
          
          <nav className="flex items-center space-x-6">
            <Link href="/" className="text-purple-700 hover:text-purple-500 transition-colors font-medium">
              Home
            </Link>
            <Link href="/cart" className="relative text-purple-700 hover:text-purple-500 transition-colors font-medium">
              <div className="flex items-center space-x-1">
                <span>🛒</span>
                <span>Cart</span>
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header