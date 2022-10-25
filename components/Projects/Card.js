import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'

export const Card = ({title,image,description}) => {
  return (
    <Box 
      as='article'
      style={{
        position: 'relative',
        height: 'auto',
        width: '100%',
        display: 'inline-block',
        marginBottom: '30px',
        color: 'white',
        zIndex: 0,
      }}
    >
      <Box 
        border='1px solid rgb(127, 127, 127);'
        rounded='10px'
      >
        <Box overflow='hidden' rounded='10px 10px 0 0'>
          <Image
              src={image}
              alt={title}
              width='100px'
              height='80px'
              objectFit='cover'
              layout='responsive'
          />
        </Box>
        <Box as='section'>
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          <Text>View</Text>
        </Box>
      </Box>
    </Box>
  )
}
