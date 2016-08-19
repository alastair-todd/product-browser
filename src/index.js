import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import ProductBrowserContainer from './ProductBrowserContainer'
import ProductViewContainer from './ProductViewContainer'
import ProductEditContainer from './ProductEditContainer'
import App from './Layout/App'
import About from './About'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProductBrowserContainer} />
      <Route path="about" component={About} />
      <Route path="product/:id" component={ProductViewContainer} />
      <Route path="product/edit/:id" component={ProductEditContainer} />
    </Route>
  </Router>
), document.getElementById('app'))
