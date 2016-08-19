// About.js
import React from 'react'

class About extends React.Component {
  render () {
    return (
      <div>
        <h1>About the Product Browser</h1>
        <div>A React JS primer; bringing together a number of front-end UI elements/components into one React JS ecosystem.</div>
        <h2>Highlights</h2>
        <ul>
          <li>ES6 React development using the Babel transpiler and standard linting</li>
          <li>npm (naughty prized marrows) for packagement management and project build</li>
          <li>Browserify for bundling dependencies and watchify for live build</li>
          <li>node-sass for live sass compilation</li>
          <li>React Component Container pattern for component development</li>
          <li>React Router for single-page-application support</li>
          <li>React Boostrap for responsive, reusable UI elements</li>
          <li>Jest for snapshot testing</li>
        </ul>
        <h2>Nice to haves but didn't make the cut</h2>
        <ul>
          <li>Redux - looks a winner for handling state and data</li>
        </ul>
        <h2>Dedication</h2>
        <i className="fa fa-heart-o" />&nbsp;To David, my pet bear...<br /><br />
        <img src="assets/img/bear.png" />
      </div>
      )
  }
}
export default About
