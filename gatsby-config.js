/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Simply Recipes",
    description: "Nice and clean recipe site",
    author: "John Doe",
    person: {
      name: "john",
      age: 20,
    },
    simpleData: ["item 1", "item 2"],
    complexData: [
      {
        name: "john",
        age: 32,
      },
      {
        name: "susan",
        age: 28,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     // The unique name for each instance
    //     name: `examples`,
    //     // Path to the directory
    //     path: `${__dirname}/src/examples`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     // The unique name for each instance
    //     name: `project`,
    //     // Path to the directory
    //     path: `${__dirname}/src`,
    //   },
    // },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `afsgmgei8h65`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Monserrat", // 'font-family' property
    //           variants: ["400"],
    //         },
    //         {
    //           family: "Inconsolata", // 'font-family' property
    //           variants: ["400", "500", "600", "700"],
    //         },
    //       ],
    //     },
    //   },
    // },
  ],
};
