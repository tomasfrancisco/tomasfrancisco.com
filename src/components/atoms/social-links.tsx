import css from '@emotion/css'
import React from 'react'

import { Icon } from './icon'
import { Link } from './link'

const linkStyle = css`
  &:not(:first-of-type) {
    margin-left: 15px;
  }
`

export const SocialLinks: React.FC<{}> = () => (
  <div
    css={css`
      margin: 25px 0;
    `}
  >
    <Link href="https://twitter.com/ttomasfrancisco/" target="__blank" css={linkStyle}>
      <Icon name="twitter" styleType="logo" />
    </Link>
    <Link href="https://www.instagram.com/mr.t.francisco/" target="__blank" css={linkStyle}>
      <Icon name="instagram" styleType="logo" />
    </Link>
    <Link href="https://www.linkedin.com/in/tomas-francisco/" target="__blank" css={linkStyle}>
      <Icon name="linkedin" styleType="logo" />
    </Link>
  </div>
)
