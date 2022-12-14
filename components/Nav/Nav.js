import { Flex, Text, Center, Box, Link, IconButton } from "@chakra-ui/react"
import { AiFillLinkedin } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose} from 'react-icons/ai'
import { useState } from "react"

export const Nav = () => {
    const [display, changeDisplay] = useState('none')
  
    return (
    <Box 
        as='header' 
        top='0' 
        bg='#171723'
        position='sticky'
        zIndex='2'
    >
        <Flex 
            maxWidth='1400px'
            h={16}
            justifyContent='space-between' 
            m='0 auto'
            display={["none","none","flex","flex"]}
        >
            <Flex>
                <Image 
                    src='/images/logo.png'
                    alt='logo'
                    width='70px'
                    height='55px'
                    
                />
                <Center w='98px' cursor='pointer'>
                    <Link href="/">
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
                    </Link>
                </Center>
                <Center w='98px' cursor='pointer'>
                    <Link href="/#about" scroll={false}>
                        <Text 
                            color='white'
                            p='1'
                            transition='0.2s'
                            _hover={{
                                backgroundColor:'rgba(255,255,255,0.2)',
                                borderRadius:'10px',
                                transition:'0.4s'
                            }}
                        >
                            About
                        </Text>
                    </Link>
                </Center>
                <Center w='98px' cursor='pointer'>
                    <Link href="/#project" scroll={false}>
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
                    </Link>
                </Center>
                <Center w='98px' cursor='pointer'>
                    <Link href="/#contact" scroll={false}>
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
                    </Link>
                </Center>
            </Flex>
            <Flex pr='5px'>
                <Center mr='8px' cursor='pointer'>
                    <Box
                        _hover={{
                            backgroundColor:'rgba(255,255,255,0.2)',
                            borderRadius:'10px',
                            transition:'0.01s'
                        }}
                    >
                        <Link href="https://www.linkedin.com/in/devi-amaolo-773135161/" isExternal >
                                <AiFillLinkedin _hover={{color:'white'}} fontSize='30px' color='lightblue'></AiFillLinkedin>
                        </Link>
                    </Box>
                </Center>
                <Center mr='8px' cursor='pointer'>
                    <Box
                        _hover={{
                            backgroundColor:'rgba(255,255,255,0.2)',
                            borderRadius:'10px',
                            transition:'0.01s'
                        }}
                    >
                        <Link href="mailto: deviamaolo@gmail.com">
                                <GrMail style={{fontSize: '30px', color:'red'}}></GrMail>
                        </Link>
                    </Box>
                </Center>
                <Center cursor='pointer'>
                    <Box
                        _hover={{
                            backgroundColor:'rgba(255,255,255,0.2)',
                            borderRadius:'10px',
                            transition:'0.01s'
                        }}
                    >
                        <Link href="https://github.com/ElDev1" isExternal>
                                <AiFillGithub style={{fontSize: '30px', color:'white'}}></AiFillGithub>
                        </Link>
                    </Box>
                </Center>
            </Flex>
        </Flex>
        <Flex 
            maxWidth='1400px'
            h={16}
            justifyContent='space-between' 
            m='0 auto'
            display={["flex","flex","none","none"]}
        >
            <IconButton
                    size='lg'
                    mr='5px'
                    icon={<GiHamburgerMenu/>}
                    display={['flex','flex','none','none']}
                    onClick={() => changeDisplay('flex')}
                >
            </IconButton>
        </Flex>
        
        <Flex 
            w='100%'
            bgColor='#171723'
            zIndex='20'
            h='100vh'
            pos='fixed'
            top='0'
            left='0'
            overflowY='auto'
            flexDirection='column'
            display={display}
        >
            <Flex>
                <IconButton
                    mt={2}
                    mr={2}
                    size='lg'
                    icon={<AiOutlineClose />}
                    onClick={() => changeDisplay('none')}
                >

                </IconButton>
            </Flex>
            <Flex 
                flexDirection='column'
                align='center'
            >
                <Center w='98px' cursor='pointer'>
                    <Link href="/">
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
                    </Link>
                </Center>
                <Center w='98px' cursor='pointer'>
                    <Link href="/#about" scroll={false}>
                        <Text 
                            color='white'
                            p='1'
                            transition='0.2s'
                            _hover={{
                                backgroundColor:'rgba(255,255,255,0.2)',
                                borderRadius:'10px',
                                transition:'0.4s'
                            }}
                        >
                            About
                        </Text>
                    </Link>
                </Center>
                <Center w='98px' cursor='pointer'>
                    <Link href="/#project" scroll={false}>
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
                    </Link>
                </Center>
                <Center w='98px' cursor='pointer'>
                    <Link href="/#contact" scroll={false}>
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
                    </Link>
                </Center>
            </Flex>
        </Flex>
    </Box>
  )
}
