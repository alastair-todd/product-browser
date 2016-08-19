import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import ProductBrowserContainer from './ProductBrowserContainer'
import About from './About'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/">Browse Products</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
App.propTypes = {
  children: React.PropTypes.any
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ProductBrowserContainer} />
      <Route path="about" component={About} />
    </Route>
  </Router>
), document.body)
