import merge from "lodash.merge";
import theme from "@rafaelquintanilha/gatsby-theme-countdown/src/gatsby-plugin-theme-ui/index";

export default merge({}, theme, {
  colors: {
    primary: "#663399",
  },
  svg: {
    fill: "#663399"
  }
})