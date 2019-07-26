/** @jsx jsx */
import { jsx } from 'theme-ui'
import { css, Flex } from "theme-ui"
//import GitHubLogo from '../../assets/github-logo.svg';

const ShareButtons = () => (
  <div css={css({
    position: 'absolute',
    top: "20px",
    right: "20px",
    "& > img": {
      width: 48,
      height: 48,
      color: "white",
      fill: "red",
      filter: "invert(1)"
    }
  })}>
    {/*<GitHubLogo />*/}
  </div>
);

export default ShareButtons;