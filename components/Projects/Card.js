import { Box, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import image from '../../public/images/logo.png'

export const Card = ({id,title,image,shortDescription}) => {
  return (
    <Link href={`/projects/${id}`}>
      <Box
        cursor='pointer' 
        as='article'
        _hover={{
          transform:'scale(1.05)',
          transition:'0.4s',
          textDecoration: 'underline'
      }}
        transition='all .2s ease-in-out'
        position='relative'
        height='auto'
        width='100%'
        display='inline-block'
        marginBottom='30px'
        color='white'
        zIndex='0'
      >
        <Box 
          border='1px solid #3c404b;'
          boxShadow= '2px 2px 10px rgba(106, 130, 251, 0.1)'
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
                placeholder='blur'
                blurDataURL={image}
                quality={40}
            />
          </Box>
          <Box as='section'>
            <Heading
              as='h2'
              size='lg'
              p='15px'
            >
              {title}
            </Heading>
            <Text
              pr='15px'
              pl='15px'
              color='#6b7c96'
            >
              {shortDescription}
            </Text>
            <Text
              p='15px'
              color='#b803a9'
              fontWeight='bold'
            >
              View
            </Text>
          </Box>
        </Box>
      </Box>
    </Link>
  )
}
