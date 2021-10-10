import React from 'react'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = ({ completed }) => {
  return (
    <div style={{ width: 150, height: 150 }}>

      <CircularProgressbarWithChildren value={completed}>
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>{completed}%</strong> completed
        </div>
      </CircularProgressbarWithChildren>;
    </div>
  )
}

export default ProgressBar;