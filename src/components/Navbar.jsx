import Link from 'next/link'
import Image from 'next/image'
import ThemeButton from '@/provider/ThemeButton'
import Logo from '../../public/logo-app.png'

export default function Navbar () {
  return (
    <div className ='mt-0 mx-4 md:mx-0 rounded-lg dark:bg-opacity-20 dark:bg-slate-500 bg-neutral-500 bg-opacity-10'>
      <div className='h-12 mt-4 md:h-14 px-4 flex items-center justify-between'>

        <Link translate='no' href={'/'} className='flex items-center gap-1.5'>
          <Image
            className='w-7 md:w-10'
            src={Logo}
            alt='Logo'
            priority />
          <p className='text-xl font-bold md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 to-yellow-400'>Searc<span className='text-xl text-green-300 md:text-3xl font-bold'>Hub</span></p>
        </Link>

        <div className='flex items-center gap-x-2.5'>
          <ul className=''>
              <li>
                <Link href={'/about'} className='text-sm font-medium underline underline-offset-4 decoration-indigo-700 decoration-2 dark:text-neutral-200 text-neutral-800'>
                  Acerca de!
                </Link>
              </li>
          </ul>
          <span className='w-5 h-5 text-indigo-700 hover:text-yellow-400 transition-colors duration-300 md:w-6 md:h-6 flex items-center justify-center'>
            <ThemeButton />
          </span>
        </div>
      </div>
    </div>
  )
}
