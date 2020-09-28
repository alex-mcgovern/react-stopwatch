import CssBaseline from '@material-ui/core/CssBaseline'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </React.Fragment>
  )
}

export default App
