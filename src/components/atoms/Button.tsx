import React from "react"
import { css, cx } from "emotion"
import { resting, waiting, hovering } from "styles/Shadows"
import { cssClass, color } from "styles/Colors"

export const ButtonStyle = css`
  background: none;
  border: none;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;

  font-size: 1.15rem;
  font-weight: 900;

  ${resting};
  ${cssClass.secondary.main};

  border-radius: 0.25rem;
  transition: 0.25s all ease-in-out;

  &:focus {
    transition: none;
    outline-style: dotted;
    outline-color: ${color.secondary.light};
    outline-offset: -0.25rem;
    outline-width: 0.15rem;
  }

  ::placeholder {
    color: ${color.text.light};
    opacity: 1; /* Firefox */
  }

  &:hover {
    ${waiting};
    ${cssClass.secondary.dark};
  }

  &:active {
    ${hovering};
    ${cssClass.secondary.light};
  }
`

export const Button: React.SFC<ButtonComponent> = ({ className, ...props }) => {
  return <button {...props} className={cx(ButtonStyle, className)} />
}
