module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Countdown Example",
    author: "Rafael Quintanilha",
    description: "Create beautiful countdown pages with Gatsby",
    showGithubButton: true,
    repoUrl: "https://github.com/rafaelquintanilha/gatsby-theme-countdown",
    targetDate: "2020-01-01 00:00:00",
    showSeconds: true,
    showMinutes: true,
    showHours: true,
    showDays: true,
    text: {
      mainHeader: "The Fifa 2022 World Cup will take place in Qatar and start in:",
      secondaryHeader: "Spread the word!",
      daysLabel: "Days",
      hoursLabel: "Hours",
      minutesLabel: "Minutes",
      secondsLabel: "Seconds",
    },
    showWhatsappShareButton: true,
    showTwitterShareButton: true,
    showFacebookShareButton: true,
    showParticles: true,
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
