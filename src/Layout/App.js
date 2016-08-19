// Layout/App.js
import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import AppNavBar from './AppNavBar'

export default class App extends React.Component {
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
