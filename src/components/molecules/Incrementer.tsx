import React, { useState, useRef } from "react"
import { css, cx } from "emotion"
import { Button } from "components/atoms/Button"
import { interactive } from "styles/Misc"
import { InteractiveGroup } from "components/atoms/InteractiveGroup"
import { secondary } from "styles/Colors"

interface IncrementerProps {
  initialValue?: number
  max?: number
  min?: number
  step?: number
  className?: string
  color?: any
  callback: (number) => void
}

export const Incrementer: React.SFC<IncrementerProps> = ({
  initialValue = 5,
  max = 99,
  min = -9,
  step = 1,
  callback,
  color = secondary,
  className,
}) => {
  const [count, setCount] = useState(initialValue)
  const input: any = useRef(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newNumber = e.target.value
    if (newNumber !== "") {
      const cast = Number(newNumber)
      setCount(cast)
      callback && callback(cast)
    } else {
      setCount(newNumber)
    }
  }

  return (
    <InteractiveGroup color={color as any} seperated className={className}>
      <Button onClick={() => input.current.stepDown()}>-</Button>
      <input
        ref={input}
        max={max}
        min={min}
        step={step}
        className={cx(interactive(color as any), numberInputStyle)}
        value={count}
        onChange={onChange}
        type="number"
      />
      <Button onClick={() => input.current.stepUp()}>+</Button>
    </InteractiveGroup>
  )
}

let numberInputStyle = css`
  width: 2.5em;
  text-align: center;
  box-shadow: none;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    appearance: none;
    margin: 0;
  }
`

export default Incrementer
