'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import FeaturedProducts from '@/components/FeaturedProducts'
import Testimonials from '@/components/Testimonials'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export default function Home() {
  const [lang, setLang] = useState('ar')

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Categories lang={lang} />
      <FeaturedProducts lang={lang} />
      <Testimonials lang={lang} />
      <Newsletter lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}
