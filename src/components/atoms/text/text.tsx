import * as React from 'react'
import { css } from '@emotion/core'
import { colors } from '../../_shared/styles'
import { media } from '../utils/media'

const defaultStyle = css`
  font-family: Josefin Sans;
  font-style: normal;
  font-size: 18px;
  color: ${colors.ZEUS};

  ${media.sm} {
    font-size: 24px;
  }
`

export type TextProps = React.HTMLProps<HTMLParagraphElement> & {}

export class Text {
  static Normal: React.FC<React.HTMLProps<HTMLParagraphElement> & TextProps> = ({ ...props }) => (
    <p
      {...props}
      css={css`
        ${defaultStyle};

        margin: 0;

        font-weight: lighter;
        line-height: normal;
        letter-spacing: 0.05em;
      `}
    />
  )

  static Heavy: React.FC<React.HTMLProps<HTMLParagraphElement> & TextProps> = ({ ...props }: TextProps) => (
    <p
      {...props}
      css={css`
        ${defaultStyle};

        margin: 0;

        font-weight: normal;
        line-height: 29px;
      `}
    />
  )

  static Hero: React.FC<React.HTMLProps<HTMLHeadingElement> & TextProps> = ({ ...props }) => (
    <h1
      {...props}
      css={css`
        margin: 0;
        max-width: 280px;

        font-size: 44px;
        line-height: 44px;
        font-weight: bold;
        font-family: Rajdhani, sans-serif;

        ${media.sm} {
          max-width: 420px;

          font-size: 64px;
          line-height: 64px;
        }
      `}
    />
  )
}
