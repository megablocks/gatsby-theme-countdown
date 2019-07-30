const nextYear = new Date().getFullYear() + 1;
const newYearsEve = `${nextYear}-01-01 00:00:00`;

module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Countdown Example",
    author: "Rafael Quintanilha",
    description: "Create beautiful countdown pages with Gatsby",
    showGithubButton: true,
    repoUrl: "https://github.com/rafaelquintanilha/gatsby-theme-countdown",
    targetDate: newYearsEve,
    showSeconds: true,
    showMinutes: true,
    showHours: true,
    showDays: true,
    text: {
      mainHeader: "Countdown to the New Year's Eve:",
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
