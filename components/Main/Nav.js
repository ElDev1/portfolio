import { Flex, Text, Center } from "@chakra-ui/react"
import { AiFillLinkedin } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'

export const Nav = () => {
  return (
    <Flex 
        as='nav'
        w='100%' 
        h='70px' 
        bg='#171723'
        justify='center'
    >
        <Flex justify='space-between' w='70%'>
            <Flex>
                <Image 
                    src='/images/logo.png'
                    alt='logo'
                    width='70px'
                    height='5px'
                />
                <Center w='100px'>
                    <Text color='white'>Home</Text>
                </Center>
                <Center w='100px'>
                    <Text color='white'>About</Text>
                </Center>
                <Center w='100px'>
                    <Text color='white'>Projects</Text>
                </Center>
                <Center w='100px'>
                    <Text color='white'>Contact</Text>
                </Center>
            </Flex>
            <Flex pr='5px'>
                <Center mr='8px'>
                    <AiFillLinkedin style={{fontSize: '30px', color:'lightblue'}}></AiFillLinkedin>
                </Center>
                <Center mr='8px'>
                    <GrMail style={{fontSize: '30px', color:'red'}}></GrMail>
                </Center>
                <Center>
                    <AiFillGithub style={{fontSize: '30px', color:'white'}}></AiFillGithub>
                </Center>
            </Flex>
        </Flex>
    </Flex>
  )
}
