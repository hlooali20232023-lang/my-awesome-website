'use client'

import Link from 'next/link'

const translations = {
  ar: {
    title: 'متجرك الموثوق لكل احتياجاتك',
    subtitle: 'ملابس عصرية • أحذية فاخرة • إلكترونيات حديثة • جودة مضمونة',
    shop: 'تسوق الآن',
    learn: 'اعرف المزيد',
    products: 'منتج متنوع',
    customers: 'عميل راضي',
    support: 'دعم فني 24/7',
  },
  en: {
    title: 'Your Trusted Store for Everything',
    subtitle: 'Modern Clothes • Luxury Shoes • Latest Electronics • Quality Guaranteed',
    shop: 'Shop Now',
    learn: 'Learn More',
    products: 'Unique Products',
    customers: 'Happy Customers',
    support: '24/7 Support',
  },
}

export default function Hero({ lang }) {
  const t = translations[lang]

  return (
    <div className="bg-gradient-to-r from-primary via-slate-700 to-slate-900 text-white py-20 md:py-32">
      <div className="container text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t.title}
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
          {t.subtitle}
        </p>
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <Link href="/products" className="btn-primary">
            {t.shop}
          </Link>
          <button className="btn-secondary">
            {t.learn}
          </button>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 text-center">
          <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-2xl md:text-4xl font-bold text-accent mb-2">10K+</h3>
            <p className="text-sm md:text-base">{t.products}</p>
          </div>
          <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-2xl md:text-4xl font-bold text-accent mb-2">50K+</h3>
            <p className="text-sm md:text-base">{t.customers}</p>
          </div>
          <div className="bg-slate-800 bg-opacity-50 p-6 rounded-lg">
            <h3 className="text-2xl md:text-4xl font-bold text-accent mb-2">24/7</h3>
            <p className="text-sm md:text-base">{t.support}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
