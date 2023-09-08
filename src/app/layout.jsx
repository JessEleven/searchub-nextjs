import '@/styles/globals.css'
import { Poppins } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Provider from '@/provider/ThemeChlidren'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'optional'
})

export const metadata = {
  title: 'SearHub',
  decription: 'Using API of GitHub and Tailwindcss',
  keyworks: 'web development, web design, reatc, html, css'
}
export default function RootLayout ({ children }) {
  return (
    <html lang='es' suppressHydrationWarning>
      <body className={`${poppins.className} dark:bg-[#242424] bg-white`}>

        <Provider>
          <div className='md:w-[675px] w-full mx-auto'>
            <Navbar />
            <div className='md:mx-0 mx-5'>
              {children}
            </div>
          </div>
        </Provider>

      </body>
    </html>
  )
}
