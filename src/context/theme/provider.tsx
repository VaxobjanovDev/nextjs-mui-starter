'use client'
import React, { useMemo, useState } from 'react'
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { CssBaseline, PaletteMode } from '@mui/material'
import { ThemeOptions } from '@mui/material/styles/createTheme'

import { ThemeContext } from '@/context/theme/context'
import { customShadows, overrides, palette, shadows, typography } from '@/styles/theme'
import { CustomShadows } from '@/styles/theme/custom-shadow'

interface CustomThemeOptions extends ThemeOptions {
  customShadows?: CustomShadows
}

interface Props {
  readonly children: React.ReactNode
}

export default function ThemeProvider({ children }: Props) {
  const [themeMode, setThemeMode] = useState<PaletteMode>('light')

  const theme = useMemo(
    () =>
      createTheme({
        palette: palette(themeMode),
        shadows: shadows(),
        typography: typography(themeMode),
        shape: { borderRadius: 8 }
      }) as CustomThemeOptions,
    [themeMode]
  )

  theme.customShadows = customShadows()
  theme.components = overrides(theme)

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setThemeMode((prevMode: string) => (prevMode === 'light' ? 'dark' : 'light'))
      }
    }),
    []
  )
  return (
    <ThemeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
