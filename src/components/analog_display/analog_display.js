import React from 'react'
import './styles.scss'

const TimeDisplay = (props) => {
  const rotate_seconds = {
    transform: `rotate(${props.time * 0.006}deg)`,
  }
  const rotate_minutes = {
    transform: `rotate(${props.time * 0.0001}deg)`,
  }

  return (
    <div className={'clock'}>
      <div className={'analog-clock'}>
        <div className={'dial minutes'} style={rotate_minutes} />
        <div className={'dial seconds'} style={rotate_seconds} />
      </div>
    </div>
  )
}
export default TimeDisplay
