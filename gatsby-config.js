const config = require('./src/config');

module.exports = {
  // এই লাইনটি অত্যন্ত গুরুত্বপূর্ণ সাব-ডিরেক্টরিতে হোস্টিং এর জন্য
  pathPrefix: "/portfolio-of-fahim", 
  
  siteMetadata: {
    title: 'Farhan Hasin Fahim',
    description:
      'Farhan Hasin Fahim is an ETE student at RUET with a dedicated focus on Telecommunication Systems. Passionate about wireless communication, network infrastructure, and the future of mobile connectivity.',
    siteUrl: 'https://mdfhf2020-ui.github.io', // আপনার গিটহাব ইউআরএল দিন
    image: '/og.png', 
    twitterUsername: '@farhanhasin', // আপনার ইউজারনেম দিতে পারেন
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Farhan Hasin Fahim',
        short_name: 'Fahim',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
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
              // tracedSVG সরিয়ে দেওয়া হয়েছে কারণ এটি আপনার গ্যাটসবি ভার্সনে ওয়ার্নিং দিচ্ছিল
            },
          },
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },
  ],
};
