//import "./styles.css";
import { Box, Button, Flex, Heading, Link} from "@chakra-ui/react";
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
            <Heading bgGradient='linear(to-r, #7928CA, #ffbe65)' bgClip='text' fontSize='60px'>Web Developer</Heading>
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
                  <Link  href="https://drive.google.com/file/d/13LX2Xy08Xg27qtJgxpc89G8qplAzgBLX/view?usp=share_link" isExternal>My CV</Link>
              </Button>
              <Button
                _hover={{
                  color:'white',
                  backgroundImage: 'linear-gradient(to right, #7928CA , #ffbe65)',
                }}
              >
                  <Link href="/#contact" scroll={false}>
                    {`Let's talk`}
                  </Link>
              </Button>
            </Flex>
          </Box>
          <Box
            position='absolute'
            right='0'
            top='22%'
            display={["none","none","none","block"]}
          >
            <Image
              src='/images/computer.gif'
              alt='devi'
              width='550px'
              height='550px'
              priority
              quality={40}
            />
          </Box>
        </Flex>
      </Box>
  
  )
}

