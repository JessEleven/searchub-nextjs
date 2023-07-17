'use client'

import { SvgHalfMoon, SvgSunLight } from '@/components/assets/SvgNavbar'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeButton () {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button type='button' onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      { resolvedTheme === 'dark'
        ? (
          <SvgSunLight className='stroke-indigo-800 hover:stroke-yellow-400 transition-colors duration-1000 w-5 h-5 md:w-6 md:h-6' />
          )
        : (
          <SvgHalfMoon className='stroke-indigo-800 hover:stroke-yellow-400 transition-colors duration-1000 w-5 h-5 md:w-6 md:h-6' />
          )
      }
    </button>
  )
}
