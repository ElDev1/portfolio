import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import { Nav } from '../components/Nav/Nav'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} cssVarsRoot="body">
      <Nav />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
