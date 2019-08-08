import * as React from 'react'
import css from '@emotion/css'
import { colors, transitions } from '../../_shared/styles'

export type LinkProps = React.HTMLProps<HTMLAnchorElement> & {}

export const Link = ({ ...props }: LinkProps) => (
  <a
    {...props}
    css={css`
      font-family: Josefin Sans;
      font-style: normal;
      font-weight: normal;
      line-height: normal;
      font-size: 24px;

      transition: ${`all ${transitions.DEFAULT_FUNCTION} ${transitions.DEFAULT_TIME}`};
      color: ${colors.FIORD};

      &:hover {
        color: ${colors.BRIGHT_SUN};
      }
    `}
  />
)
