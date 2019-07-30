import merge from "lodash.merge";
import theme from "@rafaelquintanilha/gatsby-theme-countdown/src/gatsby-plugin-theme-ui/index";
import BG from '../@rafaelquintanilha/gatsby-theme-countdown/components/desert.jpeg';

export default merge({}, theme, {
  colors: {
    primary: "#7e003d",
    text: "#000",
    border: "transparent"
  },
  svg: {
    fill: "#7e003d"
  },
  styles: {
    Layout: {
      background: `url(${BG})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    },
    Header: {
      height: "30vh"
    },
    Footer: {
      height: "15vh"
    },
  }
})