import css from "@emotion/css";
import * as React from "react";

const defaultStyle = css`
  margin: 0;
  font-family: Rajdhani;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.05em;
`;

export type HeadingProps = React.HTMLProps<HTMLHeadingElement> & {};

export const H1 = ({ ...props }: HeadingProps) => (
  <h1
    {...props}
    css={css`
      ${defaultStyle}
      font-weight: bold;
      font-size: 64px;
    `}
  />
);
export const H2 = ({ ...props }: HeadingProps) => (
  <h2
    {...props}
    css={css`
      ${defaultStyle};

      font-weight: normal;
      font-size: 64px;
    `}
  />
);
export const H3 = ({ ...props }: HeadingProps) => (
  <h3
    {...props}
    css={css`
      ${defaultStyle};

      font-weight: bold;
      font-size: 54px;
    `}
  />
);
export const H4 = ({ ...props }: HeadingProps) => (
  <h4
    {...props}
    css={css`
      ${defaultStyle};

      font-weight: normal;
      font-size: 54px;
    `}
  />
);
export const H5 = ({ ...props }: HeadingProps) => (
  <h5
    {...props}
    css={css`
      ${defaultStyle};

      font-weight: bold;
      font-size: 44px;
    `}
  />
);
export const H6 = ({ ...props }: HeadingProps) => (
  <h6
    {...props}
    css={css`
      ${defaultStyle};

      font-weight: normal;
      font-size: 44px;
    `}
  />
);
