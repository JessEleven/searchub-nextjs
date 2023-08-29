'use client'

import { ThemeProvider } from 'next-themes'

export default function ThemeChlidren ({ children }) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
