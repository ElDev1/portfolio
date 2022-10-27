import { About } from '../components/About/About'
import { Main } from '../components/Main/Main'
import { Projects } from '../components/Projects/Projects'
import { Footer } from '../components/Footer/Footer'
import { Box, Divider } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box bg='#171c29' >
      <div style={{
        // margin: 0,
        // padding: 0,
        // minHeight: "100vh",
        // maxWidth:'1400px',
        // margin:'0 auto',
      }}>
        <Main />
        <Divider maxWidth='1400px' margin='0 auto'/>
        <About />
        <Divider maxWidth='1400px' margin='0 auto'/>
        <Projects />
        <Footer />
      </div>

    </Box>
  )
}
