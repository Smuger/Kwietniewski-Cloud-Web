import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Kwietniewski`,
    description: `Software development`,
    author: `Krzysztof Kwietniewski`,
  },
  graphqlTypegen: true,
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Kwietniewski",
        short_name: "Kwietniewski",
        start_url: "/",
        background_color: "#000",
        theme_color: "#ce8b54",
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        crossOrigin: `use-credentials`,
      },
    },
  ]
}

export default config
