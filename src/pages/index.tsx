import React from "react"
import { PageProps, graphql } from "gatsby"
import SEO from "../components/seo"
import { Text, Center } from "@chakra-ui/react"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <>
    <SEO title="Welcome" />
    <Center h='calc(100vh)' bgGradient='linear(to-r, #FFFF5A, #ce8b54)'>
      <Text color='whiteAlpha.900' fontSize='6xl'>We love poo.</Text>
    </Center>
  </>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`