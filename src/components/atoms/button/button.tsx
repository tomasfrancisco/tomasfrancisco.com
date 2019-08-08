import { css } from '@emotion/core'
import React from 'react'

import { boxShadows, colors, transitions } from '../../_shared/styles'
import { Icon, IconType } from '../icon'
import { media } from '../utils/media'

export type ButtonProps = React.HTMLProps<HTMLButtonElement> & {
  type?: 'default' | 'outline' | 'no-style'
  sizeType?: 'default' | 'large'
  icon?: string
  iconType?: IconType
}

export const Button = ({
  type = 'default',
  sizeType = 'default',
  icon,
  iconType,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      css={css`
          display: inline-block;
          border-radius: 50px;
          color: ${colors.ZEUS};
          box-shadow: ${boxShadows.DEFAULT};
          text-transform: uppercase;
          transition: ${`all ${transitions.DEFAULT_FUNCTION} ${
            transitions.DEFAULT_TIME
          }`};
          cursor: pointer;

          /* typography */
          font-family: Rajdhani, sans-serif;
          font-style: normal;
          font-weight: bold;
          line-height: normal;
          text-align: center;
          text-transform: uppercase;
          vertical-align: middle;

          ${sizeType === 'default' &&
            css`
              height: 44px;
              min-width: 44px;
              font-size: 14px;
              padding: 12px 54px;
            `}

          ${sizeType === 'large' &&
            css`
              height: 54px;
              min-width: 54px;
              font-size: 18px;
              padding: 12px 44px;

              ${media.sm} {
                height: 64px;
                min-width: 64px;
                font-size: 24px;
                padding: 15px 54px;
              }
            `}

          ${icon &&
            !children &&
            css`
              border-radius: 50%;
              padding: 11px;
            `}

          ${type === 'default' &&
            css`
              background: linear-gradient(
                to right,
                ${colors.SALOMIE} 0%,
                ${colors.AMBER} 100%
              );
              border-width: 0px;
            `}
          ${type === 'outline' &&
            css`
              background: ${colors.WHITE};
              border: 2px solid ${colors.BRIGHT_SUN};
            `}

          &:hover {
            transform: translateY(-6px);
            box-shadow: ${boxShadows.ON_HOVER};
          }

          ${type === 'no-style' &&
            css`
              height: auto;
              min-width: auto;
              border: none;
              background-color: transparent;
              padding: 0px;
              box-shadow: none;

              &:hover {
                transform: none;
                box-shadow: none;
                color: ${colors.BRIGHT_SUN};
              }
            `}
        `}
    >
      {icon && (
        <Icon
          name={icon}
          styleType={iconType}
          css={css`
              vertical-align: top;

              ${sizeType === 'default' &&
                css`
                  font-size: 24px;
                `}

              ${sizeType === 'large' &&
                css`
                  font-size: 34px;
                `}

              ${children &&
                css`
                  margin-right: 12px;
                `}
            `}
        />
      )}
      {children}
    </button>
  )
}
