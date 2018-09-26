import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './../Home'
import Tabs from './../Tabs'
import Pagination from './../Pagination'
const Router = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/tabs' component={Tabs}/>
    <Route path='/pagination' component={Pagination}/>
  </Switch>
)
export default Router