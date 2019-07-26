import React from "react"
import { css, Global } from "@emotion/core"
import { Layout as StyledLayout, Header, Main, Container, Footer, Styled } from "theme-ui"
import { graphql, useStaticQuery } from "gatsby"
import ShareButtons from "./share-buttons";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <StyledLayout>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Header>
        <ShareButtons />
        <Styled.h1>
          The Fifa 2022 World Cup will start in:
        </Styled.h1>
      </Header>
      <Main>
        <Container>{children}</Container>
      </Main>
      <Footer>
        We will back to something amazing.
        <br />
        Please subscribe.
      </Footer>
    </StyledLayout>
  )
}

export default Layout
