/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
export default {
  colors: {
    text: "#fff",
    background: "#232129",
    primary: "#4682b4",
    border: "#ccc",
  },
  fonts: {
    default:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [14, 16, 18, 20, 22, 27, 36, 64, 80],
  lineHeights: {
    text: "1.45",
    heading: "1.1",
  },
  sizes: {
    container: 650,
  },
  styles: {
    Layout: {
      backgroundColor: "background",
      //background: "linear-gradient(to right, #134e5e, #71b280);",
      //background: "url(https://i.stack.imgur.com/UJur5.png)",
      //backgroundSize: "cover",
      color: "text",
      fontFamily: "default",
      fontSize: 2,
      lineHeight: "text",
      padding: 0,
      overflowY: "auto",
    },
    Header: {
      fontSize: 5,
      height: ["20vh", "20vh"],
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      alignItems: "flex-end",
      pt: 3,
      pb: [3],
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
      alignItems: "center",
      flexDirection: "column",
      pt: [3],
      pb: 2,
      height: "20vh",
    },
    h1: {
      fontSize: [4, 5, 6],
      lineHeight: "heading",
      margin: 0,
      maxWidth: ["60vw", "500px", "800px"]
    },
    h2: {
      fontWeight: "normal",
      fontSize: 2,
      margin: 0,
      maxWidth: ["90vw", "80vw", "800px"],
    },
  },
}
