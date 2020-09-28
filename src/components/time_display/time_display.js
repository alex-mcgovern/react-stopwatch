const TimeDisplay = (props) => {
  let duration = (in_milliseconds) => {
    let duration = {}
    let date = new Date(in_milliseconds)
    duration['hours'] = String(date.getUTCHours()).padStart(2, '0')
    duration['minutes'] = String(date.getUTCMinutes()).padStart(2, '0')
    duration['seconds'] = String(date.getUTCSeconds()).padStart(2, '0')
    duration['milliseconds'] = String(date.getUTCMilliseconds()).padStart(
      3,
      '0',
    )
    return duration
  }

  let time = duration(props.time)

  return String(
    time.hours +
      ':' +
      time.minutes +
      ':' +
      time.seconds +
      '.' +
      time.milliseconds,
  )
}
export default TimeDisplay
