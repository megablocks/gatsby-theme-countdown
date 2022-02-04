/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    url: "https://flamboyant-kilby-43f6fe.netlify.app/"
  },
  plugins: [
    {
      resolve: "@megablocks/gatsby-theme-countdown",
      options: {
        basePath: "/",
      }
    }
  ],
}
