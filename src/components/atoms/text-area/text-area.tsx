import css from "@emotion/css";
import React, { useState } from "react";
import TextareaAutosize, {
  TextareaAutosizeProps
} from "react-textarea-autosize";

import { colors, transitions } from "../../_shared/styles";

export type TextAreaProps = TextareaAutosizeProps;

export const TextArea = ({
  label: labelValue,
  onChange,
  onBlur,
  onFocus,
  // Exclude incompatible input props
  ref,
  ...props
}: TextAreaProps) => {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(!!props.value);

  const onFocusHandler = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(true);
    if (onFocus) {
      onFocus(event);
    }
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      currentTarget: { value }
    } = event;
    setHasValue(!!value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div
      css={css`
        position: relative;
        height: auto;
      `}
    >
      {labelValue && (
        <label
          css={css`
            position: absolute;
            z-index: 1;
            display: block;
            color: ${colors.SHADY_LADY};
            pointer-events: none;
            transition: ${`all ${transitions.DEFAULT_FUNCTION} ${
              transitions.DEFAULT_TIME
            }`};
            margin-left: 1px;

            /* Typography */
            font-family: Rajdhani;
            font-style: normal;
            font-weight: normal;
            line-height: normal;
            font-size: 18px;

            ${!focused &&
              !hasValue &&
              css`
                transform: translateY(24px);

                /* Typography */
                font-size: 24px;
              `}
          `}
          htmlFor=""
        >
          {labelValue}
        </label>
      )}
      <TextareaAutosize
        css={css`
          width: 100%;
          min-height: 30px;
          border: none;
          border-bottom: 2px solid ${colors.ZEUS};
          outline: none;
          transition: ${`border-color ${transitions.DEFAULT_FUNCTION} ${
            transitions.DEFAULT_TIME
          }`};
          transform: translateY(24px);

          /* Typography */
          font-family: Rajdhani;
          font-style: normal;
          font-weight: normal;
          line-height: normal;
          font-size: 24px;

          &:focus {
            border-color: ${colors.BRIGHT_SUN};
          }
        `}
        id=""
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        {...props}
      />
    </div>
  );
};
