//import "./styles.css";
import Sphere from "./icons";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import Image from "next/image";

export const Main = () => {
  return (
    <Flex w='100%' h='100vh' justify='center'>
      <Flex w='70%' align='center' justify='space-between'>
        <Box pl='100px'>
          <Heading color='white' fontSize='30px'>{`Hello I'm`}</Heading>
          <Heading color='white' fontSize='50px'>Devi Amaolo</Heading>
          <Heading bgGradient='linear(to-r, #7928CA, #ffbe65)' bgClip='text' fontSize='60px'>Frontend Developer</Heading>
          <Flex>
            <Button w='100px' h='50px' color='white' bg='lightblue' rounded='5px'>My CV</Button>
            <Button>{`Let's talk`}</Button>
          </Flex>
        </Box>
        <Box>
          <Image 
            src='/images/me.png'
            alt='devi'
            width='400px'
            height='550px'
          />
        </Box>
      </Flex>
    </Flex> 
  )
}
