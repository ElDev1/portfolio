import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'

export const Card = ({image}) => {
  return (
    <Box>
        <Image
             src={image}
             alt='devi'
             width='400px'
             height='400px'
         />
    </Box>
  )
}
