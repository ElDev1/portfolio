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
        id='about'
        h='100vh' 
        maxWidth='1400px' 
        as='section'
        position='relative'
        margin='0 auto'
        p='0 30px'
        display='flex'
        alignItems='center'
    >
        <Flex align='center' justify='space-between'>
            <Box w={['100%','100%','50%','50%']}> 
                <Heading bgGradient='linear(to-r, #7928CA, #ffbe65)' bgClip='text' fontSize='60px'>
                    About Me
                </Heading>
                    <Text color='white' p='2' >
                       { 'Hi! I am a web developer and I am passionate about everything related to software, computer science and code. I am currently focused on Frontend Development using mostly React and Nextjs, take a look at my technology stack :) '}
                    </Text>
                    <Text color='white' p='2' fontWeight='bold'>
                        My Tech Stack: 
                    </Text>
                    <Box ml='5px'>
                        <Flex flexWrap='wrap'>
                            <Button 
                                style={{cursor: 'default'}} 
                                mr='10px'
                                mb='10px'
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
                                mr='10px' 
                                colorScheme='twitter' 
                                leftIcon={<FaReact />}>
                                React
                            </Button>
                        
                            <Button
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
                display={["none","none","none","block"]}
            >
                <Sphere /> 
            </Box>
            </Flex>
    </Box>
  )
}
