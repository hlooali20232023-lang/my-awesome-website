'use client'

const productsAr = [
  { id: 1, name: 'تي شيرت فاخر', price: 89.99, rating: 4.8, image: '👕', badge: 'الأفضل مبيعاً' },
  { id: 2, name: 'حذاء رياضي', price: 129.99, rating: 4.9, image: '👟', badge: 'جديد' },
  { id: 3, name: 'سماعات لاسلكية', price: 199.99, rating: 4.7, image: '🎧', badge: 'خصم 20%' },
  { id: 4, name: 'ساعة ذكية', price: 299.99, rating: 4.9, image: '⌚', badge: 'حصري' },
  { id: 5, name: 'حقيبة جلدية', price: 149.99, rating: 4.8, image: '👜', badge: 'محدود' },
  { id: 6, name: 'هاتف ذكي', price: 799.99, rating: 4.9, image: '📱', badge: 'الأفضل' },
]

const productsEn = [
  { id: 1, name: 'Premium T-Shirt', price: 89.99, rating: 4.8, image: '👕', badge: 'Best Seller' },
  { id: 2, name: 'Sports Shoe', price: 129.99, rating: 4.9, image: '👟', badge: 'New' },
  { id: 3, name: 'Wireless Headphones', price: 199.99, rating: 4.7, image: '🎧', badge: '20% Off' },
  { id: 4, name: 'Smart Watch', price: 299.99, rating: 4.9, image: '⌚', badge: 'Exclusive' },
  { id: 5, name: 'Leather Bag', price: 149.99, rating: 4.8, image: '👜', badge: 'Limited' },
  { id: 6, name: 'Smartphone', price: 799.99, rating: 4.9, image: '📱', badge: 'Best' },
]

const translationsFeatured = {
  ar: {
    title: 'المنتجات المميزة',
    addToCart: 'أضف للسلة',
  },
  en: {
    title: 'Featured Products',
    addToCart: 'Add to Cart',
  },
}

export default function FeaturedProducts({ lang }) {
  const t = translationsFeatured[lang]
  const products = lang === 'ar' ? productsAr : productsEn

  return (
    <div className="bg-light py-16">
      <div className="container">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">
          {t.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="card overflow-hidden hover:scale-105 transition duration-300">
              <div className="relative">
                <div className="text-7xl p-6 bg-gradient-to-br from-secondary to-orange-600 text-center">
                  {product.image}
                </div>
                <span className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">
                  {product.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{product.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-secondary">${product.price}</span>
                  <span className="text-yellow-500">⭐ {product.rating}</span>
                </div>
                <button className="btn-primary w-full">{t.addToCart}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}