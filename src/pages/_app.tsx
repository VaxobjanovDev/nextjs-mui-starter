import '@/styles/globals.css'
import 'nprogress/nprogress.css'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import ThemeProvider from '@/context/theme/provider'
import { Provider as AuthProvider } from '@/context/auth'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <AuthProvider>
      <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </AuthProvider>
  )
}

export default App
