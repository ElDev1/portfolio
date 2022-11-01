import { Box, Flex, Divider, Heading, Grid, GridItem, Text, SimpleGrid } from "@chakra-ui/react"
import { Card } from "./Card"


export const Projects = ({ data }) => {
  return (
    <Box id='project'>
      <Flex maxWidth='1400px' m='0 auto' justify='center'>
        <Flex align='center' mt='55px' direction='column'>
            <Heading as='h1' fontSize='60px'bgGradient='linear(to-r, #7928CA, #ffbe65)' bgClip='text' >My Projects</Heading>
              <Box
                as='section'
                
                style={{
                  maxWidth: '100%',
                  margin: '50px',
                  columnCount: 3,
                  gap: '30px'
                }}
              >
                {
                  data.map(item => <Card key={item.id} id={item.id} title={item.title} image={item.image} shortDescription={item.shortDescription}/>)
                }
              </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

