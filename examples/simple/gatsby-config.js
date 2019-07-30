/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    url: "https://gatsby-theme-countdown-simple-example.netlify.com"
  },
  plugins: [
    {
      resolve: "@rafaelquintanilha/gatsby-theme-countdown",
      options: {
        basePath: "/",
      }
    }
  ],
}
