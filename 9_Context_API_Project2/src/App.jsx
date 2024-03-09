import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

const App = () => { 

  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Actual change in theme

  useEffect(() => {
    const remove = document.querySelector('html').classList.remove("light", "dark")
    const add = document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
        <div className="flex flex-wrap   min-h-screen items-center">
            <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  {/* Theam-Button */}
                  <ThemeBtn/>
              </div>

              <div className="w-full max-w-sm mx-auto">
                 {/* Card */}
                 <Card/>
              </div>
            </div>
        </div>
    </ThemeProvider>
  )
}

export default App