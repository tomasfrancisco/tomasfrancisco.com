import css from "@emotion/css"
import * as React from "react"
import { Hero } from "src/components/atoms/hero/hero"
import { SEO } from "src/components/atoms/seo"
import { RootLayout } from "src/components/layout/root-layout"
import { Navbar } from "src/components/organisms/navbar"

const IndexPage = () => (
  <RootLayout>
    <SEO />
    <Navbar />
    <Hero
      css={css`
        padding-top: 100px;
      `}
    />
  </RootLayout>
)

export default IndexPage
