import './globals.css'

export const metadata = {
  title: 'متجري | Premium Store',
  description: 'متجر إلكتروني فخم لبيع الملابس والأحذية والإلكترونيات',
  keywords: 'متجر, تسوق, ملابس, أحذية, إلكترونيات',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-light">
        {children}
      </body>
    </html>
  )
}
