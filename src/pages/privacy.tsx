import React from "react"
import { PageProps, graphql } from "gatsby"
import SEO from "../components/seo"
import { Text, Center, Stack } from "@chakra-ui/react"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <>
    <SEO title="Welcome" />
    <Center h='calc(100vh)' bgGradient='linear(to-r, #FFFF5A, #ce8b54)'>
      <Stack spacing={3}>
        <Text color='whiteAlpha.900' fontSize='6xl'>Privacy policy</Text>
        <Center>
          <Text color='whiteAlpha.900' fontSize='4xl'>Placeholder</Text>
        </Center>

      </Stack>

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