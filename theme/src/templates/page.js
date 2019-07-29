import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container, Footer } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import GithubLink from "../components/github-link";
import ShareButtons from "../components/share-buttons";
import Credits from "../components/credits";
import Particles from '../components/particles';
import MainHeader from "../components/main-header";
import SecondaryHeader from "../components/secondary-header";
import CountdownContainer from "../components/countdown-container";
import SEO from "../components/seo";

const Layout = () => {
  const { 
    site: {
      siteMetadata: {
        title,
        text,
        showGithubButton,
        repoUrl,
        targetDate,
        showSeconds,
        showMinutes,
        showHours,
        showDays,
        showWhatsappShareButton,
        showTwitterShareButton,
        showFacebookShareButton,
        showParticles,
      }
    }
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          text {
            mainHeader
            secondaryHeader
            daysLabel
            hoursLabel
            minutesLabel
            secondsLabel
          }
          showGithubButton
          repoUrl
          targetDate
          showSeconds
          showMinutes
          showHours
          showDays
          showWhatsappShareButton
          showTwitterShareButton
          showFacebookShareButton
          showParticles
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <SEO title={title} />
      <Header>
        {showGithubButton && <GithubLink url={repoUrl} />}
        <MainHeader text={text.mainHeader} />
      </Header>
      <Main>
        <Container>
          <CountdownContainer 
            targetDate={targetDate}
            showDays={showDays}
            showHours={showHours}
            showMinutes={showMinutes}
            showSeconds={showSeconds}
            daysLabel={text.daysLabel}
            hoursLabel={text.hoursLabel}
            minutesLabel={text.minutesLabel}
            secondsLabel={text.secondsLabel}
          />
        </Container>
      </Main>
      <Footer>
        <SecondaryHeader text={text.secondaryHeader} />
        <ShareButtons 
          title={title}
          showWhatsappShareButton={showWhatsappShareButton}
          showTwitterShareButton={showTwitterShareButton}
          showFacebookShareButton={showFacebookShareButton}
        />
        <Credits />
      </Footer>
      {showParticles && <Particles />}
    </StyledLayout>
  )
}

export default Layout
