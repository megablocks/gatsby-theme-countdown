module.exports = {
  siteMetadata: {
    title: "My Countdown",
    author: "Rafael Quintanilha"
  },
  plugins: [
    {
      resolve: "@rafaelquintanilha/gatsby-theme-countdown",
      options: {
        basePath: "/countdown",
        mainHeader: "My countdown will end in:",
        targetDate: "2020-04-28 00:00:00",
      }
    }
  ],
}
