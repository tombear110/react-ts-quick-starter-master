import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('Src/pages/home'))
const Users = React.lazy(() => import('Src/pages/users'))
const Contact = React.lazy(() => import('Src/pages/contact'))
const Notfound = React.lazy(() => import('Src/pages/not-found'))

const RouteElement = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={Users} />
      <Route path='/contact' component={Contact} />
      <Route component={Notfound} />
    </Switch>
  )
}

export default RouteElement
