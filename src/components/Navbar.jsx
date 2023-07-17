import Link from 'next/link'
import Image from 'next/image'
import { SvgInfo } from './assets/SvgNavbar'
import ThemeButton from '@/provider/ThemeButton'
import Logo from '../../public/logo-app.png'

export default function Navbar () {
  return (
    <div className ='mt-0 rounded-lg dark:bg-opacity-20 dark:bg-slate-500 bg-gray-500 bg-opacity-60'>
      <div className='h-12 mt-4 md:h-14 mx-auto px-3 lg:px-6 flex items-center justify-between'>

        <Link translate='no' href={'/'} className='flex items-center gap-1.5'>
          <Image
            className='w-8 md:w-10'
            src={Logo}
            alt='Logo'
            priority />
          <p className='text-2xl font-bold md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-yellow-400'>Searc<span className='text-green-300 text-2xl md:text-3xl font-bold'>Hub</span></p>
        </Link>

        <div className='flex items-center gap-x-2.5'>
          <ul className=''>
              <li>
                <Link href={'/about'}>
                  <SvgInfo className='stroke-indigo-800 hover:stroke-yellow-400 transition-colors duration-1000 w-5 h-5 md:w-6 md:h-6' />
                </Link>
              </li>
          </ul>
          <ThemeButton />
        </div>
      </div>
    </div>
  )
}
