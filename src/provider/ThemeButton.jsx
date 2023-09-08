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
          <SvgSunLight className='w-7 h-7 md:w-6 md:h-6' />
          )
        : (
          <SvgHalfMoon className='w-7 h-7 md:w-6 md:h-6' />
          )
      }
    </button>
  )
}
