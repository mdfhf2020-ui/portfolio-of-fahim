const config = require('./src/config');
const path = require('path');

module.exports = {
  pathPrefix: '/portfolio-of-fahim',

  siteMetadata: {
    title: 'Farhan Hasin Fahim',
    description:
      'Farhan Hasin Fahim is an ETE student at RUET with a dedicated focus on Telecommunication Systems.',
    siteUrl: 'https://mdfhf2020-ui.github.io',
    image: '/og.png',
    twitterUsername: '@farhanhasin',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Farhan Hasin Fahim',
        short_name: 'Fahim',
        start_url: '/',
        background_color: config.colors?.darkNavy || '#020c1b',
        theme_color: config.colors?.navy || '#0a192f',
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, `content`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
            },
          },
          'gatsby-remark-code-titles',
          `gatsby-remark-prismjs`,
        ],
      },
    },
  ],
};
