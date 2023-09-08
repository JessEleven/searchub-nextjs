'use client'

import Link from 'next/link'
import ThemeButton from '@/provider/ThemeButton'
import { useState } from 'react'
import { SvgCloseMenu, SvgMenu } from './assets/SvgNavbar'

export default function MenuButton () {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <>
      <button type='button' onClick={handleMenu} className='md:hidden text-indigo-700 z-10'>
        { openMenu ? <SvgCloseMenu /> : <SvgMenu /> }
      </button>

      <div className={`${openMenu ? 'absolute md:hidden z-[1] ease-in transition duration-500 rounded-lg flex justify-center items-center left-4 right-4 top-4 h-56 dark:bg-opacity-90 dark:bg-slate-900 bg-[#E1E1E3] bg-opacity-90 shadow-lg dark:shadow-none' : 'hidden'}`
        }>
          <ul className='text-2xl text-center font-medium dark:text-neutral-200 text-neutral-800'>
              <li>
                <Link href={'/about'} className=''>
                  Acerca de!
                </Link>
              </li>
              <li className='mt-2.5'>
                <span className='flex justify-center items-center gap-x-2.5'>Tema <ThemeButton /></span>
              </li>
          </ul>
      </div>
    </>
  )
}
