'use client'

const categoriesAr = [
  { name: 'الملابس', icon: '👕', products: 2500 },
  { name: 'الأحذية', icon: '👟', products: 1800 },
  { name: 'الإلكترونيات', icon: '💻', products: 3200 },
  { name: 'الإكسسوارات', icon: '⌚', products: 1500 },
  { name: 'الحقائب', icon: '👜', products: 900 },
  { name: 'الألعاب', icon: '🎮', products: 1100 },
]

const categoriesEn = [
  { name: 'Clothes', icon: '👕', products: 2500 },
  { name: 'Shoes', icon: '👟', products: 1800 },
  { name: 'Electronics', icon: '💻', products: 3200 },
  { name: 'Accessories', icon: '⌚', products: 1500 },
  { name: 'Bags', icon: '👜', products: 900 },
  { name: 'Games', icon: '🎮', products: 1100 },
]

const translationsCategories = {
  ar: {
    title: 'التصنيفات الرئيسية',
    explore: 'استكشف',
    product: 'منتج',
  },
  en: {
    title: 'Main Categories',
    explore: 'Explore',
    product: 'products',
  },
}

export default function Categories({ lang }) {
  const t = translationsCategories[lang]
  const categories = lang === 'ar' ? categoriesAr : categoriesEn

  return (
    <div className="bg-white py-16">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div key={i} className="card p-6 text-center cursor-pointer hover:scale-105 transition">
              <div className="text-6xl mb-4">{cat.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-2">{cat.name}</h3>
              <p className="text-gray-600">{cat.products} {t.product}</p>
              <button className="btn-primary mt-4 w-full">{t.explore}</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}