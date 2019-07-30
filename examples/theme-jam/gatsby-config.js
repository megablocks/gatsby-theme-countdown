module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Jam Countdown",
    url: "https://gatsby-theme-countdown-theme-jam-example.netlify.com"
  },
  plugins: [
    {
      resolve: "@rafaelquintanilha/gatsby-theme-countdown",
      options: {
        mainHeader: "The Gatsby Theme Jam will end in:",
        targetDate: "2019-07-31T23:59:59-07:00",
      }
    }
  ],
}