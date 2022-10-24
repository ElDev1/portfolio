import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export const Card = ({title,image,description}) => {
  return (
    <Box as='article' h='auto' w='100%' display='inline-block' mb='30px' color='white' position='relative'>
      <Grid 
        templateRows='300px 1fr'
        border='1px solid rgb(127, 127, 127);'
        rounded='10px'
      >
        <Image
             src={image}
             alt='devi'
             width='100px'
             height='100px'
             objectFit='cover'
             layout='responsive'
             rounded='10px'
         />
         <Box as='section'>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <Text>View</Text>
         </Box>
      </Grid>
    </Box>
  )
}
