import React from 'react'
import ReactDOM from 'react-dom'
import {Grid, Row, Col} from 'react-bootstrap'
import AppNavBar from './Layout/AppNavBar'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import ProductBrowserContainer from './ProductBrowserContainer'
import About from './About'

class App extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <AppNavBar />
            {this.props.children}
          </Col>
        </Row>
      </Grid>
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
), document.getElementById('app'))
