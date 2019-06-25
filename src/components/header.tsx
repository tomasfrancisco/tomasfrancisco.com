import { Link } from "gatsby"
import React from "react"
import { css } from "@emotion/core"

const Header: React.FC<{ siteTitle: string }> = ({ siteTitle = `` }) => (
  <header
    css={css`
      background: rebeccapurple;
      margin-bottom: 1.45rem;
    `}
  >
    <div
      css={css`
        margin: 0 auto;
        max-width: 960;
        padding: 1.45rem 1.0875rem;
      `}
    >
      <h1
        css={css`
          margin: 0;
        `}
      >
        <Link
          to="/"
          css={css`
            color: white;
            text-decoration: none;
          `}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
