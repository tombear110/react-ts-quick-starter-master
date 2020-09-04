import React, { Suspense } from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('Src/pages/home'))
const Users = React.lazy(() => import('Src/pages/users'))
const Contact = React.lazy(() => import('Src/pages/contact'))
const Notfound = React.lazy(() => import('Src/pages/not-found'))

const RouteElement = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/users' component={Users} />
          <Route path='/contact' component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </Suspense>
  )
}

export default RouteElement
