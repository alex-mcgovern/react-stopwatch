import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import makeStyles from '@material-ui/core/styles/makeStyles'
import About from '../about/about'
import Stopwatch from '../stopwatch/stopwatch'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}))

const App = () => {
  const classes = useStyles()

  return (
    <Container className={classes.root} maxWidth="md">
      <Grid item s={12} sm={12}>
        <About />
      </Grid>
      <Grid item s={12} sm={12}>
        <Stopwatch />
      </Grid>
    </Container>
  )
}

export default App
