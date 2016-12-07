import React from 'react'

export default class SPA extends React.Component{

  render(){
    return(
      <div class="portfolio_block_wrapper">
          <div class="portfolio_block">
            <div className="javascriptSummary">
              <div className="portfolio_block_image_summary_wrapper">
                <img src="../../../resources/images/projects/ocwebtech/about.png" className="portfolio_block_image_summary" alt=" image"/>
              </div>
              <br /><br />

              <p>
                OCWebTech is a single page application. There is only one html page that is being rendered to. It uses the react router to navigate around the
                different views but always only has one html page. This makes the site faster and very efficient. OCWebTech was originally created using vanilla
                js and multiple pages but since changing to reactJs and a single page application has seen considerable improvements in speed and efficiency.
              </p>

              <br /><br />

              <div className="codeBlock">
                <pre>
{`
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
  `}
                </pre>
              </div>

              <br /><br />

              <p>
                As we can see from the router above the routes are set up with a provider to provide the state from our redux store. It controls the routes via the
                url path. Depending on what the url path is it will load a different component. It’s important to note a point of entry is needed (where the
                  application will appear in the page) and this is the constant app.
              </p>

              <br /><br />
            </div>
          </div>
      </div>
    )
  }
}
