//import "./styles.css";
import { Divider, Box, Button, Flex, Heading} from "@chakra-ui/react";
import Image from "next/image";

export const Main = () => {
  
  return (
    <Box>
      <Flex w='100%' h='100vh' justify='center'>
        <Flex w='70%' align='center' justify='space-between'>
          <Box >
            <Heading color='white' fontSize='30px'>{`Hello I'm`}</Heading>
            <Heading color='white' fontSize='50px'>Devi Amaolo</Heading>
            <Heading bgGradient='linear(to-r, #7928CA, #ffbe65)' bgClip='text' fontSize='60px'>Frontend Developer</Heading>
            <Flex mt='35px'>
              <Button
                _hover={{
                  backgroundColor:'white',
                  color: 'black'
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
                  backgroundColor:'#171c29',
                  border: 'solid white 1px'
                }}
              >
                {`Let's talk`}
              </Button>
            </Flex>
          </Box>
            <Box
            >
                <Image 
                  src='/images/icons.png'
                  alt='devi'
                  width='400px'
                  height='400px'
                />
            </Box>
        </Flex>
      </Flex>
      <Flex justify='center'>
        <Divider w='70%' bg='gray' /> 
      </Flex>
    </Box>
  )
}
