import React from 'react'
import { Global, css } from '@emotion/core'

export const RootLayout: React.FC<{}> = ({ children }) => (
  <>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400|Rajdhani:400,700|Caveat+Brush');

        html,
        body {
          margin: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
    {children}
  </>
)
