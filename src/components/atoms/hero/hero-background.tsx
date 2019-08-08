import React from 'react'
import css from '@emotion/css'
import background from 'src/static/img/montains.svg'

export const HeroBackground: React.FC<{}> = ({ children }) => (
  <>
    <div
      css={css`
        position: absolute;
        width: 100%;
        height: 100vh;
      `}
    >
      <div
        css={css`
          width: 100%;
          height: 100%;
          background-image: url(${background});
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        `}
      />
      <div
        css={css`
          margin-top: -2px;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(226, 224, 226, 100%), rgba(226, 224, 226, 0%));
        `}
      />
    </div>
    <div
      css={css`
        position: absolute;
        z-index: 1;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
      `}
    >
      {children}
    </div>
  </>
)
