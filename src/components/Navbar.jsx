import Link from 'next/link'
import Image from 'next/image'
import ThemeButton from '@/provider/ThemeButton'
import Logo from '../../public/logo-app.png'
import MenuButton from './MenuButton'

export default function Navbar () {
  return (
    <div className ='mt-0 mx-5 md:mx-0 rounded-lg dark:bg-opacity-20 dark:bg-slate-500 bg-[#E1E1E3]'>
      <div className='mt-5 h-14 md:h-16 px-5 flex items-center justify-between'>

        <Link translate='no' href={'/'} className='flex items-center gap-1.5 text-2xl font-bold md:text-3xl'>
          <Image
            className='w-7 md:w-9'
            src={Logo}
            alt='Logo'
            priority />
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-pink-500'>Searc<span className='text-emerald-500'>Hub</span></p>
        </Link>

        <div className='hidden md:flex md:items-center md:gap-x-2.5'>
          <ul>
              <li>
                <Link href={'/about'} className='text-sm 2xl:text-base font-medium underline underline-offset-4 decoration-emerald-500 hover:decoration-emerald-600 transition-all duration-300 decoration-2 dark:text-neutral-200 text-neutral-800'>
                  Acerca de!
                </Link>
              </li>
          </ul>
          <span className='text-emerald-500 hover:text-emerald-600 transition-all duration-300 md:w-6 md:h-6 flex items-center justify-center'>
            <ThemeButton />
          </span>
        </div>

        <MenuButton />

      </div>
    </div>
  )
}
