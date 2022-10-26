import { Flex, Text, Center, Link } from "@chakra-ui/react"
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
        position='fixed'
        style={{zIndex: 1}}
    >
        <Flex justify='space-between' w='70%'>
            <Flex>
                <Image 
                    src='/images/logo.png'
                    alt='logo'
                    width='70px'
                    height='5px'
                    
                />
                <Center w='98px'>
                    <a href="#">
                        <Text 
                            color='white'
                            p='1'
                            transition='0.02s'
                            _hover={{
                                backgroundColor:'rgba(255,255,255,0.2)',
                                borderRadius:'10px',
                                transition:'0.4s'
                            }}
                        >
                            Home
                        </Text>
                    </a>
                </Center>
                <Center w='98px'>
                    <a href="#">
                        <Text 
                            color='white'
                            p='1'
                            transition='0.4s'
                            _hover={{
                                backgroundColor:'rgba(255,255,255,0.2)',
                                borderRadius:'10px',
                                transition:'0.4s'
                            }}
                        >
                            About
                        </Text>
                    </a>
                </Center>
                <Center w='98px'>
                    <a href="#">
                        <Text 
                            color='white'
                            p='1'
                            transition='0.4s'
                            _hover={{
                                backgroundColor:'rgba(255,255,255,0.2)',
                                borderRadius:'10px',
                                transition:'0.4s'
                            }}
                        >
                            Projects
                        </Text>
                    </a>
                </Center>
                <Center w='98px'>
                    <a href="#">
                        <Text 
                            color='white'
                            p='1'
                            transition='0.4s'
                            _hover={{
                                backgroundColor:'rgba(255,255,255,0.2)',
                                borderRadius:'10px',
                                transition:'0.4s'
                            }}
                        >
                            Contact
                        </Text>
                    </a>
                </Center>
            </Flex>
            <Flex pr='5px'>
                <Center mr='8px'>
                    <Link href="https://www.linkedin.com/in/devi-amaolo-773135161/" isExternal >
                        <AiFillLinkedin _hover={{fontSize:'35px'}} style={{fontSize: '30px', color:'lightblue'}}></AiFillLinkedin>
                    </Link>
                </Center>
                <Center mr='8px'>
                    <GrMail style={{fontSize: '30px', color:'red'}}></GrMail>
                </Center>
                <Center>
                    <Link href="https://github.com/ElDev1" isExternal>
                        <AiFillGithub style={{fontSize: '30px', color:'white'}}></AiFillGithub>
                    </Link>
                </Center>
            </Flex>
        </Flex>
    </Flex>
  )
}
