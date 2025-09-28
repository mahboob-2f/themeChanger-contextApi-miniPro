import React, { useState } from 'react'
import Theme from './Theme'

export default function ThemProvider({children}) {

  const [themeMode,setThemeMode]= useState('light');
  const darkTheme = ()=>setThemeMode('dark')
  const lightTheme = ()=>setThemeMode('light')

  return (
    <Theme.Provider value={{themeMode,setThemeMode,darkTheme,lightTheme}}>
        {children}
    </Theme.Provider>     
  )
}
