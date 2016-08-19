import React from 'react'

class About extends React.Component {
  render () {
    return (
      <div>
        <h1>About the Product Browser</h1>
        <div>This is a simple playpen which brings together a number of front-end UI elements/components into one React JS ecosystem.</div>
        <h2>Highlights</h2>
        <ul>
          <li>ES6 React development using the Babel transpiler</li>
          <li>React Component Container paterner for component development</li>
          <li>Browserify for bundling dependencies and watchify for live build</li>
          <li>npm for packagement management and project build</li>
          <li>node-sass for live sass compilation</li>
          <li>boostrap and React Boostrap for reusable UI elements</li>
          <li>Jest for snapshot testing</li>
        </ul>
      </div>
      )
  }
  viewMore () {
    console.log('go product')
  }
}
export default About
