import { Box, Flex, Heading, Text, UnorderedList } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import data from '../../services/data.json'


const InfoProject = ( { dataProject } ) => {
    console.log(dataProject)

    return(
        <>
            <Head>
                <title>{dataProject.title || "project" } | Devi</title>
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
                    //justify='space-around'
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
                        <Heading mb='30px' textDecoration='underline #ffb494'>
                            {dataProject.title}
                        </Heading>
                        <Box mb='30px'>
                            <Text fontWeight='bold' mb='5px'>Description</Text>
                            <Text>
                                {dataProject.description}
                            </Text>
                        </Box>
                        <Text fontWeight='bold'>Tech stack:</Text>
                        <UnorderedList>

                        </UnorderedList>
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