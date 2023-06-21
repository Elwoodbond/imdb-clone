"use client";

import { ThemeProvider } from 'next-themes';
import React from 'react'

export default function Providers({children}) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
        <div class='dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 ease-in-out select-none h-screen
        ' >
        {children}
        </div>
    </ThemeProvider>
  )
}

