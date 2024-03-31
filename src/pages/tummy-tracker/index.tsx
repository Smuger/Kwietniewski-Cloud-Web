import React from "react"
import { PageProps, Link } from "gatsby"
import SEO from "../../components/seo"
import { Text, Center, Button, Stack } from "@chakra-ui/react"
import '../../styles/styles.css';

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
          <Stack spacing={3}>
            <Link to="/tummy-tracker/privacy">
              <Text mt={4} color='whiteAlpha.900' fontSize='3xl'>Privacy</Text>
            </Link>
            <Link to="/tummy-tracker/support">
              <Text mt={4} color='whiteAlpha.900' fontSize='3xl'>Support</Text>
            </Link>
          </Stack>
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