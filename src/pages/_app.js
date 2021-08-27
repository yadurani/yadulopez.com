import { ThemeProvider } from 'styled-components'

import Theme from 'constants/uiTheme'
import GlobalStyle from 'styles/GlobalStyles'
import App from 'context/ContextApp'
import Layout from 'components/Layout'

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
