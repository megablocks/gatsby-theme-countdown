module.exports = {
  siteMetadata: {
    title: "2022 FIFA World Cup Countdown",
    url: "https://gatsby-theme-countdown-world-cup-example.netlify.com"
  },
  plugins: [
    {
      resolve: "@rafaelquintanilha/gatsby-theme-countdown",
      options: {
        mainHeader: "Qatar 2022",
        secondaryHeader: "",
        targetDate: "2022-11-21 00:00:00",
        hideParticles: true,
        hideWhatsappShareButton: true,
        hideTwitterShareButton: true,
        hideFacebookShareButton: true,
        daysLabel: "يوم",
        hoursLabel: "ساعة",
        minutesLabel: "دقيقة",
        secondsLabel: "ثان",
      }
    }
  ],
}