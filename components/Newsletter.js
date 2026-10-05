'use client'

const translations = {
  ar: {
    title: 'اشترك في النشرة البريدية',
    subtitle: 'احصل على آخر العروض والمنتجات الجديدة مباشرة في بريدك',
    placeholder: 'أدخل بريدك الإلكتروني',
    subscribe: 'اشترك',
  },
  en: {
    title: 'Subscribe to Our Newsletter',
    subtitle: 'Get latest offers and new products directly to your email',
    placeholder: 'Enter your email',
    subscribe: 'Subscribe',
  },
}

export default function Newsletter({ lang }) {
  const t = translations[lang]

  return (
    <div className="bg-gradient-to-r from-secondary to-orange-600 text-white py-16">
      <div className="container text-center">
        <h2 className="text-4xl font-bold mb-4">{t.title}</h2>
        <p className="text-xl mb-8 opacity-90">{t.subtitle}</p>
        <div className="flex gap-2 max-w-md mx-auto flex-col md:flex-row">
          <input 
            type="email" 
            placeholder={t.placeholder}
            className="flex-1 px-4 py-3 rounded-lg text-primary focus:outline-none"
          />
          <button className="bg-primary hover:bg-slate-900 px-6 py-3 rounded-lg font-bold transition">
            {t.subscribe}
          </button>
        </div>
      </div>
    </div>
  )
}