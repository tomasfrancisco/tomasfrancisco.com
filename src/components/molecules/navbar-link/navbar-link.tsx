import * as React from 'react'
import css from '@emotion/css'
import { colors, transitions } from '../../_shared/styles'
import { Link } from 'gatsby'
import { LinkProps } from '@reach/router'
import { media } from 'src/components/atoms/utils/media'

type NavbarLinkProps = LinkProps<{}> & {
  active?: boolean
}

export const NavbarLink = ({ active = false, ...props }: NavbarLinkProps) => (
  <Link
    {...props}
    css={css`
      font-family: Rajdhani;
      font-style: normal;
      font-weight: bold;
      line-height: normal;
      font-size: 18px;
      letter-spacing: 0.05em;
      cursor: pointer;
      text-decoration: none;

      color: ${colors.FRENCH_GRAY};
      transition: ${`all ${transitions.DEFAULT_FUNCTION} ${
        transitions.DEFAULT_TIME
      }`};

      ${media.md} {
        font-size: 24px;
      }

      &:hover {
        color: ${colors.BRIGHT_SUN};
      }

      ${active &&
        css`
          color: ${colors.ZEUS};
          cursor: text;

          &:hover {
            color: currentColor;
          }
        `};

      &:not(:first-of-type) {
        margin-left: 30px;
      }
    `}
  />
)
