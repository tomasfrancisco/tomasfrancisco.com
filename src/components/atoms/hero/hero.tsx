import css from '@emotion/css'
import React from 'react'

import { Button } from '../button'
import { Container } from '../container'
import { SocialLinks } from '../social-links'
import { Text } from '../text'
import { media } from '../utils/media'
import { HeroBackground } from './hero-background'
import { MobileNavbar } from 'src/components/organisms/navbar/mobile-navbar'

export const Hero: React.FC<{}> = ({ children }) => (
  <section>
    <HeroBackground>
      <Container
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;

          ${media.sm} {
            align-items: flex-start;
            text-align: start;
          }
        `}
      >
        <Text.Hero>Software & UI/UX Engineer</Text.Hero>
        <Text.Normal
          css={css`
            max-width: 420px;
          `}
        >
          Passionate craftman, javascript sportist and climbing enthusiast
        </Text.Normal>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-top: 30px;

            ${media.sm} {
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
            }
          `}
        >
          <div css={css``}>
            <Button sizeType="large">Hire me</Button>
          </div>
          <div
            css={css`
              ${media.sm} {
                margin-left: 25px;
              }
            `}
          >
            <SocialLinks />
          </div>
        </div>
      </Container>
    </HeroBackground>
  </section>
)
