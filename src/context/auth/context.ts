import { createContext, useContext } from 'react'

import { UserProps } from '@/context/auth/provider'

interface AuthContextValue {
  readonly isViewer: boolean
  readonly user: UserProps
  readonly setUser: (values: any) => void
  readonly isAdmin: boolean
  readonly isUser: boolean
}

export const AuthContext = createContext<AuthContextValue | null>(null)

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
