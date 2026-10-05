'use client'

const testimonialsAr = [
  { name: 'محمد علي', city: 'الرياض', text: 'جودة ممتازة وخدمة متميزة! أنصح بهذا المتجر.', rating: 5 },
  { name: 'فاطمة أحمد', city: 'جدة', text: 'سرعة التسليم والمنتجات أفضل من المتوقع، شكراً!', rating: 5 },
  { name: 'عمر خالد', city: 'القاهرة', text: 'متجر موثوق وأسعار تنافسية جداً، ستعود لهم.', rating: 4.8 },
]

const testimonialsEn = [
  { name: 'John Smith', city: 'London', text: 'Excellent quality and outstanding service! Highly recommended.', rating: 5 },
  { name: 'Sarah Johnson', city: 'New York', text: 'Fast delivery and products exceeded my expectations. Thank you!', rating: 5 },
  { name: 'Mike Davis', city: 'Toronto', text: 'Trustworthy store with very competitive prices. Will return!', rating: 4.8 },
]

const translationsTestimonials = {
  ar: { title: 'آراء العملاء' },
  en: { title: 'Customer Reviews' },
}

export default function Testimonials({ lang }) {
  const t = translationsTestimonials[lang]
  const testimonials = lang === 'ar' ? testimonialsAr : testimonialsEn

  return (
    <div className="bg-primary text-white py-16">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">{t.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-slate-800 p-6 rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-yellow-400 text-xl">
                    {j < testimonial.rating ? '⭐' : '☆'}
                  </span>
                ))}
              </div>
              <p className="text-gray-200 mb-4 italic">"{testimonial.text}"</p>
              <h4 className="font-bold">{testimonial.name}</h4>
              <p className="text-gray-400 text-sm">{testimonial.city}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}