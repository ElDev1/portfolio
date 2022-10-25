import { Box, Flex, Text } from "@chakra-ui/react"

export const Footer = () => {
  return (
    <Box
        as='footer'
        w='100%'  
        bg='black'
        left='0'
        bottom='0'
        style={{zIndex: 1}}
    >
        <Flex justify='center'>
            <Text color='#3a3a39'>Create with 🖤 by Devi</Text>
        </Flex>
    </Box>
  )
}
