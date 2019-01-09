module.exports = {
  siteMetadata: {
    title: `Ranaplaza Arrangement`,
    author: `RPCC`,
    description: `Providing payments for losses suffered by the victims of Rana Plaza`,
    siteUrl: `https://ranaplaza-arrangement.org`
  },
  pathPrefix: '/',
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/section`,
        name: "section",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '7',
        matomoUrl: 'https://piwik.cleanclothes.org',
        siteUrl: 'https://ranaplaza-arrangement.org'
      }
      }  ,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pdf`,
        path: `${__dirname}/src/assets/pdf`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false //Optional: Will remove related videos from the end of an embedded YouTube video.
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationdir: 'pdf',
            }
        },
          "gatsby-remark-copy-images",
          "gatsby-remark-responsive-iframe",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`
  ],
}
