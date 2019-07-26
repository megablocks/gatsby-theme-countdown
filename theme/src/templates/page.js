/** @jsx jsx */
import { jsx } from 'theme-ui'
import { css, Flex } from "theme-ui"
import Layout from "../components/layout"

const PageTemplate = ({ pageContext }) => (
  <Layout>
    <Flex css={css({
      border: "1px solid #eee",
      borderColor: "gray.0",
      flexDirection: ["column", "row", "row"],
      "& > div": {
        px: [2, 4, 5],
        py: [2, 2, 0],
        my: [1, 2, 4],
        mx: [4, 0, 0],
        borderRightWidth: [0, "1px", "1px"],
        borderRightStyle: [0, "solid", "solid"],
        borderBottomWidth: ["1px", 0, 0],
        borderBottomStyle: ["solid", 0, 0],
        borderColor: 'gray.0',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        "& > div:first-of-type": {
          fontSize: [6, 6, 7],
          fontWeight: 'bold',
          lineHeight: 1
        },
        "& > div:last-child": {
          fontSize: [14, 14, 16],
        }
      },
      "& > div:last-child": {
        border: 0
      }
    })}>
      <div>
        <div>169</div>
        <div>Days</div>
      </div>
      <div>
        <div>18</div>
        <div>Hours</div>
      </div>
      <div>
        <div>34</div>
        <div>Minutes</div>
      </div>
      <div>
        <div>11</div>
        <div>Seconds</div>
      </div>
    </Flex>
  </Layout>
)

export default PageTemplate
