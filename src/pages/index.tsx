import React from "react"
import { PageProps, graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { Text, Center, Button, useColorMode } from "@chakra-ui/react"
import '../styles/styles.css';
import { ChakraProvider } from "@chakra-ui/react";

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {

  return (
    <>
      <SEO title="Kwietniewski" />
      <Center h='calc(100vh)' >

        <Button colorScheme='whiteAlpha' variant='ghost'>
          <Link to="/tummy-tracker">
            <Text color='whiteAlpha.900' fontSize='3xl'>Tummy Tracker</Text>
          </Link>
        </Button>
      </Center>
    </>
  )
}

export default UsingTypescript

// export const query = graphql`
//   {
//     site {
//       buildTime(formatString: "YYYY-MM-DD hh:mm a z")
//     }
//   }
// `