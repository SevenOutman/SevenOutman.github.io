import React from 'react'
import { Router, Route, Switch } from 'dva/router'

import Events from './routes/Events.js'

import Repos from './routes/Repos.js'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Events} />
        <Route path="/events" exact component={Events} />
        <Route path="/repos" exact component={Repos} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
