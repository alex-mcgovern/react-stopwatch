import React from 'react'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import TimeDisplay from '../time_display/time_display'

const DigitalDisplay = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.lightGrey,
    },
    list: {},
    header: {
      backgroundColor: theme.palette.background.Grey,
    },
  }))

  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <Typography align="center" variant="h3">
        <TimeDisplay time={props.time} />
      </Typography>
    </Card>
  )
}
export default DigitalDisplay
