import css from "@emotion/css";
import * as React from "react";

import { colors } from "../../_shared/styles";
import { H1, HeadingProps } from "../../atoms/heading";

export type SectionHeadingProps = HeadingProps & {};

export const SectionHeading = ({ label, ...props }: SectionHeadingProps) => (
  <div
    css={css`
      display: inline-block;
      position: relative;
    `}
  >
    <H1
      {...props}
      css={css`
        display: inline-block;
        text-transform: uppercase;
      `}
    />
    <span
      css={css`
        position: absolute;
        display: inline-block;
        width: 94px;
        height: 20px;
        background-color: ${colors.BRIGHT_SUN};
        bottom: -14px;
        right: 0;
      `}
    />
  </div>
);
