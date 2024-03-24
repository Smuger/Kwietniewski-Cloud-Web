import React from "react"
import { PageProps, graphql } from "gatsby"
import SEO from "../../components/seo"
import { Text, Center, Stack, ChakraProvider } from "@chakra-ui/react"
import PrivacyTextComponent from "./privacyTextComponent"
import { color } from "framer-motion"
import Footer from "../../components/footer"
import Header from "../../components/header"
import theme from "../theme";

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <ChakraProvider theme={theme}>
    <SEO title="Tummy Tracker" />
    <Header />
    <Center>
      <Stack spacing={3}>
        <PrivacyTextComponent></PrivacyTextComponent>
      </Stack>
    </Center >
    <Footer />
  </ChakraProvider>
)

export default UsingTypescript

export const query = graphql`
    {
      site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
    `