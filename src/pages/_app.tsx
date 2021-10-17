import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider, CssBaseline, StylesProvider } from '@material-ui/core'
import { theme } from '../app'
import { store } from 'src/store'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </Provider>
  )
}

export default MyApp
