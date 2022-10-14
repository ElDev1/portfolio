import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const theme = {
    styles: {
      global: (props) => ({
        body: {
            margin: 0,
            padding: 0,
            minHeight: "100vh",
            background: "#171c29"
        },
        a: {
          color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500',
        },
      }),
    },
  }

export default theme