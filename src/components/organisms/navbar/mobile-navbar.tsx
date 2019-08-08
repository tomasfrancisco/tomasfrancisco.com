import css from '@emotion/css'
import React, { useState } from 'react'
import { boxShadows, colors, transitions } from 'src/components/_shared/styles'
import { Icon } from 'src/components/atoms'
import { NavbarLink } from 'src/components/molecules'
import { Scroller } from 'src/components/atoms/scroller'
import { mix } from 'polished'

export const MobileNavbar: React.FC<{}> = () => {
  const [isVisible, setVisibility] = useState(false)

  return (
    <Scroller delay={0}>
      {({ scrollTop }) => (
        <nav
          css={css`
            --border-radius-timing: 0.1s;
            --width-timing: 0.5s;

            background: ${mix(
              Math.min(scrollTop / 600, 1).toFixed(2),
              colors.FRENCH_GRAY,
              colors.WHITE
            )};
            color: ${mix(
              Math.min(scrollTop / 500, 1).toFixed(2),
              colors.WHITE,
              colors.FIORD
            )};

            transition: all ${transitions.DEFAULT_TIME}
              ${transitions.DEFAULT_FUNCTION};
            height: 50px;
            bottom: 5px;
            right: 5px;
            z-index: 10;
            position: fixed;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            width: 50px;
            border-radius: 50%;
            transition: border-radius var(--border-radius-timing) ease-in-out,
              width var(--width-timing) ease-in-out 0.05s;
            box-shadow: ${boxShadows.DEFAULT};

            ${!isVisible &&
              css`
                transition: width var(--width-timing) ease-in-out,
                  border-radius var(--border-radius-timing) ease-in-out 0.4s;
              `};

            &:hover {
              box-shadow: ${boxShadows.ON_HOVER};
            }

            ${isVisible &&
              css`
                overflow-x: scroll;
                border-radius: 4px;
                width: calc(100% - 10px);
                background-color: ${colors.WHITE};
              `};
          `}
        >
          {!isVisible && (
            <Icon
              name="menu"
              css={css`
                cursor: pointer;
              `}
              onClick={() => {
                setVisibility(true)
              }}
            />
          )}
          {isVisible && (
            <>
              <NavbarLink
                to="#hero"
                onClick={() => {
                  setVisibility(false)
                }}
              >
                Home
              </NavbarLink>
              <NavbarLink
                to="#about"
                onClick={() => {
                  setVisibility(false)
                }}
              >
                About
              </NavbarLink>
              <NavbarLink
                to="#portfolio"
                onClick={() => {
                  setVisibility(false)
                }}
              >
                Porfolio
              </NavbarLink>
              <NavbarLink
                to="#contact"
                onClick={() => {
                  setVisibility(false)
                }}
              >
                Contact
              </NavbarLink>
            </>
          )}
        </nav>
      )}
    </Scroller>
  )
}
