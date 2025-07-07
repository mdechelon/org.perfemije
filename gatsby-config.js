require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.perfemije.org/",
    title: "Vjersha per femije ne shqip, Kenge per femije ne shqip",
    description: "Vjersha per femije ne shqip, kenge per femije ne shqip, perralla per femije ne shqip, flasim shqip",
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
    {
        resolve: "gatsby-plugin-sitemap",
        options: {

           query: `
             {
               site {
                 siteMetadata {
                   siteUrl
                 }
               }
               allContentfulBlogPost {
                 edges {
                     node {
                       path: slug
                       updatedAt
                     }
                   }
               }
               allContentfulVjersha {
                    edges {
                        node {
                          path: slug
                          updatedAt
                        }
                      }
                  }

             }
           `,
           resolveSiteUrl: () => "https://www.perfemije.org/",
           resolvePages: ({
             allContentfulBlogPost,
             allContentfulVjersha
           }) => {

            const kenge = allContentfulBlogPost.edges.map(
                      (edge) => {

                          return {
                            path: `/kenge/${edge.node.path}/`,
                            updatedAt: edge.node.updatedAt
                          }
                      }
                    );

              const vjersha = allContentfulVjersha.edges.map(
                                    (edge) => {

                                        return {
                                          path: `/vjersha/${edge.node.path}/`,
                                          updatedAt: edge.node.updatedAt
                                        }
                                    }
                                  );
              const otherPages = [{
                    path: 'https://www.perfemije.org/',
                    updatedAt: '2025-07-06T21:24:42.976Z'
              },
              {
                                  path: 'https://www.perfemije.org/kenge/',
                                  updatedAt: '2025-07-06T21:24:42.976Z'
                            },
                            {
                                                path: 'https://www.perfemije.org/vjersha/',
                                                updatedAt: '2025-07-06T21:24:42.976Z'
                                          }];
             return [...kenge, ...vjersha, ...otherPages];
           },
           serialize: ({ path, updatedAt  }) => {
               return {
                 url: `${path}`,
                 lastmod: updatedAt,
                 priority: 0.7,
                 changefreq: "daily",
               };

           },
         },
    },

  ],
};
