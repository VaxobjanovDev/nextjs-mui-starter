import { createContext, useContext } from 'react'

export const ThemeContext = createContext({
  toggleColorMode: () => {}
})

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
