import React from 'react'
import css from '@emotion/css'

export const Container: React.FC<{}> = ({ ...props }) => (
  <div
    css={css`
      width: 100%;
      padding: 0 5%;
      display: flex;
      justify-content: center;
    `}
  >
    <div
      css={css`
        width: 100%;
        max-width: 1200px;
      `}
      {...props}
    />
  </div>
)
