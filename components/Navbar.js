'use client'

import { useState } from 'react'
import Link from 'next/link'

const translations = {
  ar: {
    storeName: 'متجري',
    home: 'الرئيسية',
    products: 'المنتجات',
    about: 'عننا',
    contact: 'اتصل بنا',
    cart: 'السلة',
    language: 'EN',
  },
  en: {
    storeName: 'Store',
    home: 'Home',
    products: 'Products',
    about: 'About',
    contact: 'Contact',
    cart: 'Cart',
    language: 'AR',
  },
}

export default function Navbar({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[lang]

  return (
    <nav className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container flex justify-between items-center py-4">
        <Link href="/" className="text-3xl font-bold text-accent flex items-center gap-2">
          <span>🛒</span>
          <span>{t.storeName}</span>
        </Link>
        
        <div className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-secondary transition font-medium">{t.home}</Link>
          <Link href="/products" className="hover:text-secondary transition font-medium">{t.products}</Link>
          <Link href="/about" className="hover:text-secondary transition font-medium">{t.about}</Link>
          <Link href="/contact" className="hover:text-secondary transition font-medium">{t.contact}</Link>
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="bg-secondary hover:bg-orange-600 px-4 py-2 rounded-lg transition font-bold"
          >
            {t.language}
          </button>
        </div>

        <div className="flex gap-4 items-center md:hidden">
          <button 
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="bg-secondary hover:bg-orange-600 px-3 py-1 rounded text-sm transition font-bold"
          >
            {t.language}
          </button>
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl hover:text-secondary transition"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <Link href="/" className="block px-4 py-3 hover:bg-secondary transition">{t.home}</Link>
          <Link href="/products" className="block px-4 py-3 hover:bg-secondary transition">{t.products}</Link>
          <Link href="/about" className="block px-4 py-3 hover:bg-secondary transition">{t.about}</Link>
          <Link href="/contact" className="block px-4 py-3 hover:bg-secondary transition">{t.contact}</Link>
        </div>
      )}
    </nav>
  )
}
