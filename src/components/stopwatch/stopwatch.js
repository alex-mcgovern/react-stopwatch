import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CachedIcon from '@material-ui/icons/Cached'
import ClearIcon from '@material-ui/icons/Clear'
import PauseIcon from '@material-ui/icons/Pause'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import AnalogDisplay from '../analog_display/analog_display'
import DigitalDisplay from '../digital_display/digital_display'
import Laps from '../laps/laps'
import About from '../about/about'

export default class Stopwatch extends Component {
  state = {
    time: 0,
    init: 0,
    timer: 0,
    running: 0,
    lap_times: [],
  }

  render() {
    return (
      <Grid container>
        <Grid item sm={12} md={3}>
          <About />
        </Grid>
        <Grid item sm={12} md={6}>
          <Card>
            <AnalogDisplay time={this.state.timer} />
            <DigitalDisplay time={this.state.timer} />
            <CardActions>
              {this.start_pause_button()}
              {this.lap_button()}
              {this.reset_button()}
            </CardActions>
          </Card>
        </Grid>
        <Grid item sm={12} md={3}>
          <Laps lap_times={this.state.lap_times} />
        </Grid>
      </Grid>
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  timer() {
    let startDate = this.state.init
    let endDate = new Date().getTime()

    this.setState({
      timer: Math.abs(startDate - endDate),
    })
  }

  start() {
    this.setState({
      running: 1,
      init: Math.abs(new Date().getTime() - this.state.timer),
    })
    this.intervalID = setInterval(() => this.timer(), 10)
  }

  pause() {
    this.setState({
      init: new Date().getTime(),
      running: 0,
    })
    clearInterval(this.intervalID)
  }

  reset() {
    this.setState({
      timer: 0,
      lap_times: [],
    })
  }

  lap() {
    if (this.state.timer > 0) {
      this.setState({
        lap_times: [...this.state.lap_times, this.state.timer],
        init: new Date().getTime(),
        timer: 0,
      })
    }
  }

  start_pause_button() {
    return (
      <Button
        fullWidth="true"
        size="small"
        onClick={() => {
          this.state.running > 0 ? this.pause() : this.start()
        }}
        endIcon={this.state.running > 0 ? <PauseIcon /> : <PlayArrowIcon />}
      >
        {this.state.running > 0 ? 'Pause' : 'Start'}
      </Button>
    )
  }

  lap_button() {
    return (
      <Button
        size="small"
        fullWidth="true"
        variant="outlined"
        disabled={this.state.timer > 0 ? false : true} //ternary condition to disable lap when timer is at 0
        endIcon={<CachedIcon />}
        onClick={() => {
          this.lap()
        }}
      >
        Lap
      </Button>
    )
  }

  reset_button() {
    return (
      <Button
        size="small"
        fullWidth="true"
        variant="outlined"
        disabled={
          this.state.running === 1 ||
          (this.state.timer === 0 && this.state.lap_times.length === 0)
            ? true
            : false
        } //ternary xor condition to disable reset if its running, or it's already reset
        endIcon={<ClearIcon />}
        onClick={() => {
          this.reset()
        }}
      >
        Reset
      </Button>
    )
  }
}
