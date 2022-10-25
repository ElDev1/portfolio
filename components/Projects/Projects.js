import { Box, Flex, Divider, Heading, Grid, GridItem, Text, SimpleGrid } from "@chakra-ui/react"
import { Card } from "./Card"
import { data } from '../../services/data'

export const Projects = () => {
  return (
    <Box>
      <Flex w='100%' justify='center'>
        <Flex w='70%' align='center' mt='55px' direction='column'>
            <Heading as='h1' fontSize='60px'bgGradient='linear(to-r, #7928CA, #ffbe65)' bgClip='text' >My Projects</Heading>
              <Box
                as='section'
                style={{
                  maxWidth: '100%',
                  margin: '50px',
                  padding: '30px 30px',
                  columnCount: 3,
                  gap: '30px'
                }}
              >
                {
                  data.map(item => <Card key={item.id} title={item.title} image={item.image} description={item.description}/>)
                }
              </Box>
        </Flex>
      </Flex>
      <Flex justify='center'>
        <Divider w='70%' bg='gray' /> 
      </Flex>
    </Box>
  )
}

