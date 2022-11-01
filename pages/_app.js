import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { Nav } from '../components/Nav/Nav'
import Head from 'next/head'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
