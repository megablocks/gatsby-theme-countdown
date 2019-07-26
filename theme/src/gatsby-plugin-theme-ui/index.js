/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: "#232129",
    background: "#fff",
    primary: "#639",
    gray: ["#eee", "#aaa", "#555" ],
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 20, 22, 27, 36, 64, 80],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 650,
  },
  styles: {
    Layout: {
      //backgroundColor: "text",
      background: "linear-gradient(to right, #134e5e, #71b280);",
      //background: "url(https://i.stack.imgur.com/UJur5.png)",
      //backgroundSize: "cover",
      color: "background",
      fontFamily: "default",
      fontSize: 1,
      lineHeight: "text",
      padding: [3, 3, 0],
    },
    Header: {
      fontSize: 4,
      mt: [5, 7, 7],
      mb: [1, 1, 4],
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      textAlign: "center",
      "& > p": {
        margin: 0,
      },
    },
    Main: {
      flex: 1,
      display: "flex"
    },
    Container: {
      padding: 0,
      my: 'auto',
      width: 'auto',
    },
    Footer: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      mb: [5, 7, 7],
      mt: [1, 1, 4],
    },
    h1: {
      color: "background",
      fontSize: [3, 4, 5],
      lineHeight: "heading",
      margin: 0,
      maxWidth: ["100%", "80vw", "80vw"]
    },
  },
}
