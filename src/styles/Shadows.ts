import { css } from "emotion"
// #e2e1e0 background

let toShadow = (width, height, alpha) =>
  `0 ${width}px ${height}px rgba(0,0,0,${alpha})`

// transition: all 0.3s cubic-bezier(.25,.8,.25,1);
export const resting = css`
  box-shadow: ${toShadow(1, 2, 0.12)}, ${toShadow(1, 2, 0.24)};
`

export const waiting = css`
  box-shadow: ${toShadow(1, 2, 0.16)}, ${toShadow(3, 6, 0.24)};
`

export const hovering = css`
  box-shadow: ${toShadow(10, 20, 0.19)}, ${toShadow(6, 6, 0.23)};
`

export const active = css`
  box-shadow: ${toShadow(14, 28, 0.25)}, ${toShadow(10, 10, 0.22)};
`

export const flying = css`
  box-shadow: ${toShadow(19, 38, 0.3)}, ${toShadow(15, 12, 0.22)};
`
