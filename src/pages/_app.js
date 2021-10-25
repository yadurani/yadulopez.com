import { ThemeProvider } from 'styled-components'

import Layout from 'components/Layout'

import Theme from 'constants/uiTheme'

import App from 'context/ContextApp'

import GlobalStyle from 'styles/GlobalStyles'

const MyApp = ({ Component, pageProps }) => {
  return (
    <App initialValues={pageProps}>
      <ThemeProvider theme={Theme}>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </App>
  )
}

export default MyApp
