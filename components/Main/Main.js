//import "./styles.css";
import { Box, Button, Flex, Heading} from "@chakra-ui/react";
import Image from "next/image";

export const Main = () => {
  
  return (
      <Box 
        h='100vh' 
        maxWidth='1400px' 
        as='section'
        position='relative'
        margin='0 auto'
        p='0 30px'
        display='flex'
        alignItems='center'
      >
        <Flex flexDirection='column' zIndex='0'>
          <Box >
            <Heading color='white' fontSize='30px'>{`Hello I'm`}</Heading>
            <Heading color='white' fontSize='50px'>Devi Amaolo</Heading>
            <Heading bgGradient='linear(to-r, #7928CA, #ffbe65)' bgClip='text' fontSize='60px'>Frontend Developer</Heading>
            <Flex mt='35px'>
              <Button
                _hover={{
                  backgroundImage: 'linear-gradient(to right, #7928CA , #ffbe65)',
                  border: 'hidden'
                }}
                color='white'
                variant='outline'
                mr='15px' 
              >
                  My CV
              </Button>
              <Button
                _hover={{
                  color:'white',
                  backgroundImage: 'linear-gradient(to right, #7928CA , #ffbe65)',
                }}
              >
                {`Let's talk`}
              </Button>
            </Flex>
          </Box>
          <Box
            position='absolute'
            right='0'
            top='33%'
          >
              <Image
                src='/images/icons.png'
                alt='devi'
                width='350px'
                height='350px'
              />
          </Box>
        </Flex>
      </Box>
  
  )
}

