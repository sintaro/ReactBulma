import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Test from './../Test'
const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/test' component={Test}/>
  </Switch>
)
export default Router