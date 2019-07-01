// eslint-disable-next-line
const proxy = require('http-proxy-middleware');
// eslint-disable-next-line
const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Lakey',
    description: 'Make Big Data Small',
    author: '@gatsbyjs',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  developMiddleware: (app) => {
    app.use(
      '/api',
      proxy({
        target: `http://localhost:${process.env.LAKEY_PORT}`,
        pathRewrite: {
          '/api': '',
        },
      }),
    );
  },
};
