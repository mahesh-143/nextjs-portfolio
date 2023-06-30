import { Providers } from "./components/utils/providers"
import "./globals.css"
import { inter } from "./components/utils/fonts"
import Navbar from "./components/sections/Navbar"
import Footer from "./components/sections/Footer"
export const metadata = {
  title: "Mahesh Odedara",
  description: "Fullstack Developer | React | Next Js | Tailwind CSS | Express JS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-medium`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
