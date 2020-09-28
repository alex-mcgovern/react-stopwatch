import React, { useEffect, useRef } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import TimeDisplay from '../time_display/time_display'

//use memo to only re-render on prop change
const Laps = React.memo(function UpdateLaps(props) {
  const useStyles = makeStyles((theme) => ({
    root: {},
    list: {
      width: '100%',
      overflow: 'auto',
      maxHeight: '280px',
      padding: 0,
      backgroundColor: theme.palette.background.lightGrey,
    },
  }))

  const classes = useStyles()

  let LapsExist = () => {
    return props.lap_times.length ? <Laps /> : <NoLaps />
  }

  let NoLaps = () => {
    return (
      <ListItem>
        <Typography variant="overline">No laps yet</Typography>
      </ListItem>
    )
  }

  let Laps = () => {
    let ref = useRef()
    useEffect(() => ref.current.scrollIntoView({ behavior: 'smooth' }))
    return props.lap_times.map((item, index) => (
      <ListItem>
        <Typography variant="overline" ref={ref}>
          Lap {index + 1}: <TimeDisplay time={item} />
        </Typography>
      </ListItem>
    ))
  }

  return (
    <Card className={classes.root}>
      <CardHeader title="Laps" />
      <List className={classes.list}>
        <LapsExist />
      </List>
    </Card>
  )
})

export default Laps
