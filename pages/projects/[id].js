import { Box } from "@chakra-ui/react";
import Head from "next/head";
import data from '../../services/data.json'


const InfoProject = ( { dataProject } ) => {
    console.log(dataProject)

    return(
        <>
            <Head>
                <title>{dataProject.title || "project" } | Devi</title>
            </Head>
            <Box as='main'>
                <Box>{dataProject.title}</Box>
            </Box>
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