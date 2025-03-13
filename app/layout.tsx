import "styles/tailwind.css"
import { League_Spartan } from 'next/font/google'
import './globals.css'
import '../assets/css/tailwind.css'
import '../assets/css/materialdesignicons.min.css'
import Wrapper from "../components/wrapper"

const league_Spartan = League_Spartan({ 
  subsets: ['latin'] ,
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-league_Spartan",
})

export const metadata = {
  title: 'Lodash Next Test',
  description: 'Lodash Next Test at Frontend',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body className={`${league_Spartan.variable} font-body text-base text-black dark:text-white dark:bg-slate-900`}>
        <div>
          <Wrapper>{children}</Wrapper>
        </div>
      </body>
    </html>
  )
}
