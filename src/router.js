import React from 'react'
import { Router, Route, Switch, Redirect } from 'dva/router'

import Events from './routes/Events.js'

import Repos from './routes/Repos.js'

import Dashboard from './routes/Dashboard.js'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Switch>
        {/*<Route path="/" exact render={() => (<Redirect to="/dashboard" />)} />*/}
        <Route path="/" exact component={Dashboard} />
        <Route path="/events" exact component={Events} />
        <Route path="/repos" exact component={Repos} />
      </Switch>
    </Router>
  )
}

export default RouterConfig
