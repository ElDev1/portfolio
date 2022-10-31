import { Box, Flex, Heading, Image, Button } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { RiArticleLine } from 'react-icons/ri'

export const Contact = () => {
  return (
    <Box id='project'>
    <Flex h='100vh' maxWidth='1400px' m='0 auto' justify='center' align='center'>
      <Flex align='center' mt='55px' direction='column'>
          <Box
           align='center' 
          >
            <Image
                src='/images/contact.png'
                alt='contact image'
                width='130px'
                height='130px'
              />
            <Heading color='white'>{`Let's Connect`}</Heading>
            <Button
                _hover={{
                  backgroundImage: 'linear-gradient(to right, #7928CA , #ffbe65)',
                  border: 'hidden'
                }}
                color='white'
                variant='outline'
                mt='15px' 
              >
                  Send a Message!
            </Button>
            <Flex 
                mt='25px'
                justify='space-around' 
                rounded='15px' 
                border='solid 1px #3c404b' 
                p='5px'
                boxShadow='2px 2px 10px rgba(106, 130, 251, 0.1)'    
            >
                <Link href="https://github.com/ElDev1" isExternal rounded='10px' _hover={{backgroundColor:'rgba(255,255,255,0.2)', fontSize:'10px'}}>
                    <AiFillGithub _hover={{color:'violet', fontSize:'10px'}} fontSize='30px' color='white'></AiFillGithub>
                </Link>
                <Link href="https://www.linkedin.com/in/devi-amaolo-773135161" isExternal rounded='10px' _hover={{backgroundColor:'rgba(255,255,255,0.2)', fontSize:'10px'}}>
                    <AiFillLinkedin _hover={{color:'violet', fontSize:'10px'}} fontSize='30px' color='white'></AiFillLinkedin>
                </Link>
                <Link href="https://dev.to/deviamaolo" isExternal rounded='10px' _hover={{backgroundColor:'rgba(255,255,255,0.2)', fontSize:'10px'}}>
                    <RiArticleLine _hover={{color:'violet', fontSize:'10px'}} fontSize='30px' color='white'></RiArticleLine>
                </Link>
            </Flex>
          </Box>
      </Flex>
    </Flex>
  </Box>
)
}
