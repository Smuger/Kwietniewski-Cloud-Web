import React from "react"
import { PageProps, graphql } from "gatsby"
import SEO from "../../../components/seo"
import { Text, Center, Stack, ChakraProvider, Box, Heading } from "@chakra-ui/react"
import { color } from "framer-motion"
import Footer from "../../../components/footer"
import Header from "../../../components/header"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <>
    <SEO title="Tummy Tracker" />
    <Header title="support" />
    <Center>
      <Stack spacing={3}>
        <Box maxW="600px" textAlign={"justify"} mx={2}>
          <Heading as="h1" mb="6">Support</Heading>

          <Heading size='md' mt={4}>
            Email
          </Heading>
          <Text fontSize={{ base: "sm", md: "md" }}>
            If you're encountering any issues or have feedback regarding our app, we're here to help!

          </Text>
          <Text>
            Please don't hesitate to reach out to us via email at tummy.tracker@yahoo.com.
            Our dedicated team is ready to assist you and ensure your experience with our app is as smooth as possible.
          </Text>
        </Box>
      </Stack>
    </Center >
    <Footer />
  </>
)

export default UsingTypescript

// export const query = graphql`
//     {
//       site {
//       buildTime(formatString: "YYYY-MM-DD hh:mm a z")
//     }
//   }
//     `