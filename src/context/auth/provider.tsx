import React, { useCallback, useContext, useState } from 'react'

import { AuthContext } from '@/context/auth/context'

export enum AUTHORITIES {
  ROLE_ADMINISTRATOR = 'ADMIN',
  ROLE_USER = 'USER',
  ROLE_VIEWER = 'VIEWER '
}

export interface UserProps {
  readonly authorities: AUTHORITIES
  readonly address: string
  readonly email: string
  readonly firstName: string
  readonly id: number
  readonly lastName: string
  readonly phoneNumber: string
  readonly verified: boolean
}

const getUserFromStorage = () => {
  if (typeof window !== 'undefined') {
    const storageUser = localStorage.getItem('fintech-user')
    if (storageUser) {
      return JSON.parse(storageUser) as UserProps
    } else return {} as UserProps
  }
}

const initialState = {
  user: getUserFromStorage() as UserProps
}

export const useUser = () => {
  const { setUser, user, isAdmin, isUser, isViewer = true } = useContext(AuthContext) as any
  return { setUser, user, isAdmin, isUser, isViewer } as {
    user: UserProps
    setUser: (values: any) => void
    isAdmin: boolean
    isUser: boolean
    isViewer: boolean
  }
}

export default function Provider({ children }: { children: React.ReactNode }) {
  const [userState, setUserState] = useState(initialState)

  const isAdmin = userState.user?.authorities === AUTHORITIES.ROLE_ADMINISTRATOR
  const isUser = userState.user?.authorities === AUTHORITIES.ROLE_USER
  const isViewer = userState.user?.authorities === AUTHORITIES.ROLE_VIEWER

  const setUser = useCallback((values: UserProps) => {
    localStorage.setItem('fintech-user', JSON.stringify(values))
    setUserState({ user: values })
  }, [])

  return (
    <AuthContext.Provider value={{ user: userState.user, setUser, isAdmin, isUser, isViewer }}>
      {children}
    </AuthContext.Provider>
  )
}
