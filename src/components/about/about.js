import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardHeader from '@material-ui/core/CardHeader'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { GitHub } from '@material-ui/icons'

const About = () => {
  return (
    <Card>
      <CardHeader title="React Stopwatch" subheader="by Alex McGovern Smith" />

      <CardContent>
        <Typography variant="body1" gutterBottom>
          A simple stopwatch built with React & Material UI.
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          fullWidth="true"
          endIcon={<GitHub />}
          href="https://github.com/lxdesign-ie/react-stopwatch/"
        >
          Source Code
        </Button>
      </CardActions>
    </Card>
  )
}

export default About
