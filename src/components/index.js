import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { ThemeProvider } from '@material-ui/core/styles'
import About from './about/about'
import Stopwatch from './stopwatch/stopwatch'
import theme from '../theme'

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Stopwatch />
      </Container>
    </ThemeProvider>
  )
}

export default Home
