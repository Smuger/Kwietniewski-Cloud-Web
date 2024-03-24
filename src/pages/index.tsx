import React from "react"
import { PageProps, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Text, Center, Button, useColorMode } from "@chakra-ui/react"
import '../styles/styles.css';
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {

  return (
    <ChakraProvider theme={theme}>
      <SEO title="Kwietniewski" />
      <Center h='calc(100vh)' >

        <Button colorScheme='whiteAlpha' variant='ghost'>
          <Link to="/tummy-tracker/privacy">
            <Text color='whiteAlpha.900' fontSize='3xl'>Tummy Tracker</Text>
          </Link>
        </Button>
      </Center>
    </ChakraProvider>
  )
}

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`