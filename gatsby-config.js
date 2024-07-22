require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Vjersha per femije ne shqip",
    description: "Vjersha per femije ne shqip, kenge per femije, perralla shqip, flasim shqip",
  },
  plugins: [
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST
      },
    },
    {
         resolve: `gatsby-plugin-google-gtag`,
         options: {
           // You can add multiple tracking ids and a pageview event will be fired for all of them.
           trackingIds: [
             "G-8EE5X45QK4", // Google Analytics / GA
           ],
           // This object is used for configuration specific to this plugin
           pluginConfig: {
             // Puts tracking script in the head instead of the body
             head: true,
             // Setting this parameter is also optional
             respectDNT: true,
             // Avoids sending pageview hits from custom paths
             exclude: ["/preview/**", "/do-not-track/me/too/"],
           },
         },
       },
  ],
};
