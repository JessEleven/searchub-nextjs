'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function ThemeChlidren ({ children }) {
  return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}