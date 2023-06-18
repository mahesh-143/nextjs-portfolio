import { Providers } from "./components/utils/providers"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"

export const inter = Inter({ weight:"700", subsets: ["latin"] })
export const poppins = Poppins({weight: ["400", "500", "700"], subsets: ["latin"]})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
         <Providers>{children}</Providers>
        </body>
    </html>
  )
}
