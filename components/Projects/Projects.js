import { Box, Flex, Divider, Heading, Grid, GridItem, Text } from "@chakra-ui/react"

export const Projects = () => {
  return (
    <Box>
      <Flex w='100%' h='100vh' justify='center'>
        <Flex w='70%' align='center' mt='55px' direction='column'>
            <Heading as='h1' fontSize='60px'bgGradient='linear(to-r, #7928CA, #ffbe65)' bgClip='text' >My Projects</Heading>
            <Box as='section' w='100%' bg='red' style={{columnCount: 3, gap:'30px'}}>
             
            </Box>
        </Flex>
      </Flex>
      <Flex justify='center'>
        <Divider w='70%' bg='gray' /> 
      </Flex>
    </Box>
  )
}

