import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { Provider } from 'react-redux'

//store
import store from './store'

//pages
import About from './pages/About'
import Languages from './pages/Languages'
import Layout from './pages/Layout'
import LandingPage from './pages/LandingPage'
import Portfolio from './pages/Portfolio'
import ThingsILike from './pages/ThingsILike'

//entry point
const app = document.getElementById('app')

ReactDOM.render(
   <Provider store={store}>
      <Router history={hashHistory}>
           <Route path='/' component={Layout}>
             <IndexRoute component={LandingPage}/>
             <Route path='/about' component={About}></Route>
             <Route path='/languages' component={Languages}></Route>
             <Route path='/portfolio(/:project)' component={Portfolio}></Route>
             <Route path='/thingsilike' component={ThingsILike}></Route>
           </Route>
       </Router>
   </Provider>, app
)
