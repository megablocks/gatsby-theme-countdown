module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Countdown Example",
    author: "Rafael Quintanilha",
    description: "Create beautiful countdown pages with Gatsby",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ],
}
