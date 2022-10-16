import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Sphere from "./icons";

export const About = () => {
  return (
    <Flex w='100%' h='100vh' justify='center'>
        <Flex w='70%' align='center' justify='space-between'>
        <Box> 
            <Heading color='white'>
                About Me
            </Heading>
            <Text color='white'>
                I am a web developer and computer science student.
            </Text>
        </Box>
        <Box w='500px'>
            <Sphere /> 
        </Box>
        </Flex>
    </Flex>
  )
}
