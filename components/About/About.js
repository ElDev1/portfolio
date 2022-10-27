import { Box, Flex, Heading, Text, Button, Divider } from "@chakra-ui/react";
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiExpress } from 'react-icons/si'
import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiMongodb } from 'react-icons/di'
import { BiGitBranch } from 'react-icons/bi'
import Sphere from "./icons";

export const About = () => {
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
        <Flex w='70%' align='center' justify='space-between'>
            <Box> 
                <Heading bgGradient='linear(to-r, #7928CA, #ffbe65)' bgClip='text' fontSize='60px'>
                    About Me
                </Heading>
                    <Text color='white' p='2' w='600px'>
                        I am a web developer and computer science student from Argentina passionate about coding and software in general, now focused on Frontend development using mainly React.js and Next.js but I also have knowledge working with
                        backend technologies.
                    </Text>
                    <Text color='white' p='2' fontWeight='bold'>
                        My Tech Stack: 
                    </Text>
                    <Box ml='5px'>
                        <Flex>
                            <Button 
                                style={{cursor: 'default'}} 
                                mr='10px'
                                _hover={{
                                    color:'white',
                                    backgroundColor: 'rgba(255,255,255,0)',
                                    border: 'white solid 1px'
                                }} 
                                colorScheme='orange' 
                                leftIcon={<AiFillHtml5 />}>
                                HTML 5
                            </Button>
                            <Button 
                                style={{cursor: 'default'}} 
                                mr='10px'
                                _hover={{
                                    color:'white',
                                    backgroundColor: 'rgba(255,255,255,0)',
                                    border: 'white solid 1px'
                                }} 
                                colorScheme='telegram' 
                                leftIcon={<DiCss3 />}>
                                CSS 3
                            </Button>
                            <Button 
                                style={{cursor: 'default'}} 
                                mr='10px'
                                _hover={{
                                    color:'white',
                                    backgroundColor: 'rgba(255,255,255,0)',
                                    border: 'white solid 1px'
                                }} 
                                colorScheme='yellow' 
                                leftIcon={<SiJavascript />}>
                                Javascript
                            </Button>
                            <Button 
                                style={{cursor: 'default'}} 
                                _hover={{
                                    backgroundColor: 'rgba(255,255,255,0)',
                                    border: 'white solid 1px'
                                }} 
                                colorScheme='twitter' 
                                leftIcon={<FaReact />}>
                                React
                            </Button>
                        </Flex>
                        <Flex>
                            <Button
                                mt='10px'
                                mr='10px' 
                                style={{cursor: 'default'}} 
                                _hover={{
                                    backgroundColor: 'rgba(255,255,255,0)',
                                    border: 'white solid 1px'
                                }} 
                                colorScheme='green' 
                                leftIcon={<FaNodeJs />}>
                                Node
                            </Button>
                            <Button
                                mt='10px'
                                mr='10px' 
                                style={{cursor: 'default'}} 
                                _hover={{
                                    backgroundColor: 'rgba(255,255,255,0)',
                                    color:'white',
                                    border: 'white solid 1px'
                                }} 
                                colorScheme='gray' 
                                leftIcon={<SiExpress />}>
                                Express
                            </Button>
                            <Button
                                mt='10px'
                                mr='10px'
                                color='white'
                                bg='#425F57' 
                                style={{
                                    cursor: 'default'
                                    
                                }} 
                                _hover={{
                                    backgroundColor: 'rgba(255,255,255,0)',
                                    color:'white',
                                    border: 'white solid 1px'
                                }} 
                                leftIcon={<DiMongodb />}>
                                MongoDb
                            </Button>
                            <Button
                                mt='10px'
                                mr='10px'
                                color='black'
                                bg='#D8D9CF' 
                                style={{
                                    cursor: 'default'
                                    
                                }} 
                                _hover={{
                                    backgroundColor: 'rgba(255,255,255,0)',
                                    color:'white',
                                    border: 'white solid 1px'
                                }} 
                                leftIcon={<BiGitBranch />}>
                                Git
                            </Button>
                        </Flex>
                    </Box>
            </Box>
            <Box 
                w='400px'
                position='absolute'
                right='0'
                top='30%'
            >
                <Sphere /> 
            </Box>
            </Flex>
    </Box>
  )
}
