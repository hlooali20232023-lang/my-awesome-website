'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const translations = {
  ar: { title: 'جميع المنتجات', coming: 'صفحة المنتجات قيد التطوير...' },
  en: { title: 'All Products', coming: 'Products page is under development...' },
}

export default function ProductsPage() {
  const [lang, setLang] = useState('ar')
  const t = translations[lang]

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar lang={lang} setLang={setLang} />
      <div className="container py-16">
        <h1 className="text-4xl font-bold text-primary mb-8">{t.title}</h1>
        <div className="text-center text-gray-500">
          <p className="text-xl">{t.coming}</p>
        </div>
      </div>
      <Footer lang={lang} />
    </div>
  )
}