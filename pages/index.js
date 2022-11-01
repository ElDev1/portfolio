import { About } from '../components/About/About'
import { Main } from '../components/Main/Main'
import { Projects } from '../components/Projects/Projects'
import { Footer } from '../components/Footer/Footer'
import { Contact } from '../components/Contact/Contact'
import { Box, Divider } from '@chakra-ui/react'
import Head from 'next/head'

import data from '../services/data.json'

export default function Home({ data }) {
  return (
    <Box bg='#171c29'>
      <Head>
        <title>Devi Amaolo</title>
      </Head>
      <main>
        <Main />
        <Divider maxWidth='1400px' margin='0 auto'/>
        <About />
        <Divider maxWidth='1400px' margin='0 auto'/>
        <Projects data={data}/>
        <Contact />
        <Footer />
      </main>

    </Box>
  )
}

export async function getStaticProps() {
  return {
    props: { data }
  }
}