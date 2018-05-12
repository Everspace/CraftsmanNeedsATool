import React from "react";
import styles from './ProgressBar.module.scss';
//
// A shameless copy of bootstrap's progress thing.
//

let Bar = props => <div
    className={`${styles.bar} ${props.color || ""}`}
    style={{width: props.percent + "%", ...props.style}}
  >
    {props.text}
  </div>

const ProgressBar = props => {
  let max = props.max || 100
  let elements = []

  elements = props.bars.map((element, index) =>
    <Bar
      {...element}
      percent={element.value / max * 100}
      key={index}
    />
  );

  return <div className={styles.container}>{elements}</div>
}

export default ProgressBar
