import { Box, Flex, Heading, Button, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import data from '../../services/data.json'
import { projectIcon } from "../../utils/projectIcon";

const InfoProject = ( { dataProject } ) => {
    return(
        <>
            <Head>
                <title>{`${dataProject.title || "project"}  | Devi`}</title>
            </Head>
            <Flex 
                as='main'
                m='0'
                p='0'
                bg='#171c29'
                w='100%'
                h='100vh'
                justify='center'
            >
                <Flex 
                    w='70%' 
                    align='center'
                    direction='column'
                >
                    <Box 
                        mt='100px'
                        w='600px' 
                        h='auto' 
                        overflow='hidden' 
                        rounded='10px'
                        border='10px outset violet'
                        mb='30px'
                    >
                        <Image
                            width='600px'
                            height='400px'
                            objectFit='cover'
                            layout='responsive'
                            src={dataProject.image}
                            alt={dataProject.title}
                        />
                    </Box>
                    <Box color='white' w='600px'>
                        <Heading mb='30px' display='inline-block' borderBottom=' solid #ffb494'>
                            {dataProject.title}
                        </Heading>
                        <Box mb='30px'>
                            <Text fontWeight='bold' display='inline-block' borderBottom=' solid #ffb494' mb='10px'>Description</Text>
                            <Text>
                                {dataProject.description}
                            </Text>
                        </Box>
                        <Text fontWeight='bold' mb='10px'>Tech stack:</Text>
                        <UnorderedList  
                            m='0px' 
                            color='white' 
                            display='inline-flex'
                            gap='15px'
                            border='1px solid #3c404b;'
                            boxShadow='2px 2px 10px rgba(106, 130, 251, 0.1)'
                            rounded='10px'
                            p='10px'
                        >
                            {dataProject.techStack.map((technology, i) => (
                                <ListItem display='flex' key={i} >
                                    {projectIcon(technology)}
                                    {technology}
                                </ListItem>
                            ))}
                        </UnorderedList>
                        <Flex mt='35px'>
                            <Button
                                _hover={{
                                backgroundImage: 'linear-gradient(to right, #7928CA , #ffbe65)',
                                color: 'white',
                                border: 'hidden'
                                }}
                                color='white'
                                variant='outline'
                                mr='15px'
                                onClick={() => {
                                    window.open(`${dataProject.github}`, '_blank');
                                }}
                            >
                                Github
                            </Button>
                            <Button
                                color='black'
                                bg='white'
                                _hover={{
                                color:'white',
                                backgroundImage: 'linear-gradient(to right, #7928CA , #ffbe65)',
                                }}
                                onClick={() => {
                                    window.open(`${dataProject.demo}`, '_blank');
                                }}
                            >
                                Live Demo
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export async function getStaticProps(context) {
    const { id } = context.params;
    
    const dataProject = data.find((item) => item.id === id)

    return {
      props: { dataProject },
    }
}

export async function getStaticPaths() {
    const paths = data.map((project) => ({
      params: { id : String(project.id) },
    }));
  
    return { paths, fallback: "blocking" };
}

export default InfoProject