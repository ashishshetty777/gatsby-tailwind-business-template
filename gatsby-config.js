module.exports = {
  siteMetadata: {
    title: 'Business Template',
    author: `Ashish Shetty`,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    siteUrl: `https://ashishsh.com/`,
    social: {
      twitter: `ashishshetty777`,
    },
  },
  plugins: [
    `gatsby-plugin-postcss`,
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // edit below
        trackingId: ``,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Business Template`,
        short_name: `Business Template`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#00173A`,
        display: `standalone`,
        // edit below
        icon: `static/image-512.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
};
