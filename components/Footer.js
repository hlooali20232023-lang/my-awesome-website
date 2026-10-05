'use client'

const translations = {
  ar: {
    brand: 'متجري',
    description: 'متجرك الأول للتسوق الإلكتروني الآمن والموثوق',
    categories: 'الفئات',
    clothes: 'الملابس',
    shoes: 'الأحذية',
    electronics: 'الإلكترونيات',
    help: 'المساعدة',
    faq: 'الأسئلة الشائعة',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الخدمة',
    contact: 'التواصل',
    phone: '+966 50 123 4567',
    email: 'info@store.com',
    copyright: '© 2024 متجري. جميع الحقوق محفوظة. ✨',
  },
  en: {
    brand: 'Premium Store',
    description: 'Your first choice for safe and trusted online shopping',
    categories: 'Categories',
    clothes: 'Clothes',
    shoes: 'Shoes',
    electronics: 'Electronics',
    help: 'Help',
    faq: 'FAQ',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    contact: 'Contact',
    phone: '+966 50 123 4567',
    email: 'info@store.com',
    copyright: '© 2024 Premium Store. All rights reserved. ✨',
  },
}

export default function Footer({ lang }) {
  const t = translations[lang]

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">{t.brand}</h3>
            <p className="text-gray-300">{t.description}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-accent">{t.categories}</h4>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-secondary transition">{t.clothes}</a></li>
              <li><a href="#" className="hover:text-secondary transition">{t.shoes}</a></li>
              <li><a href="#" className="hover:text-secondary transition">{t.electronics}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-accent">{t.help}</h4>
            <ul className="text-gray-300 space-y-2">
              <li><a href="#" className="hover:text-secondary transition">{t.faq}</a></li>
              <li><a href="#" className="hover:text-secondary transition">{t.privacy}</a></li>
              <li><a href="#" className="hover:text-secondary transition">{t.terms}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-accent">{t.contact}</h4>
            <ul className="text-gray-300 space-y-2">
              <li>📞 {t.phone}</li>
              <li>📧 {t.email}</li>
              <li className="flex gap-3 pt-2">
                <a href="#" className="text-xl hover:text-secondary">📘</a>
                <a href="#" className="text-xl hover:text-secondary">🐦</a>
                <a href="#" className="text-xl hover:text-secondary">📸</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-gray-400">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}