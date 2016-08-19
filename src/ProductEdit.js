// ProductEdit.js
import React from 'react'
import {Row, Col, Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class ProductEdit extends React.Component {

  constructor (props) {
    super(props)
    this.updateName = this.updateName.bind(this)
    let product = props.product || {}
    this.state = {
      name: product.name,
      description: product.description
    }
  }
  getValidationState () {
    return 'success'
  }
  handleChange (e) {
  }
  saveForm (e) {
    console.log('saving')
    var self
    e.preventDefault()
    self = this

    console.log(self.state)
  }
  updateName (e) {
    console.log(this)
    console.log(e)
  }
  render () {
    let product = this.props.product
    let state = this.state
    let me = this
    if (!state.name) return <div />
    return (
      <Row>
        <Col xs={6}>
          <h1>Edit {product.name}</h1>
          <form onSubmit={this.saveForm}>
            <FormGroup controlId="name">
              <ControlLabel>Product Name</ControlLabel>
              <FormControl
                type="text"
                value={state.name}
                onChange={this.updateName}
              />
            </FormGroup>
            {/* <FormGroup controlId="description">
              <ControlLabel>Product Name</ControlLabel>
              <FormControl
                type="text"
                value={state.description}
                onChange={this.updateField.bind(this, '')}
              />
            </FormGroup> */}
            <div>
              <LinkContainer to={{ pathname: `/product/${product.id}` }}>
                <Button>Cancel</Button>
              </LinkContainer>
              <Button type="submit">
                Save
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    )
  }
}
ProductEdit.propTypes = {
  product: React.PropTypes.object,
  onSaveProduct: React.PropTypes.func.isRequired
}
export default ProductEdit
