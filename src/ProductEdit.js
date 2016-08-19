// ProductEdit.js
import React from 'react'
import {Row, Col, Button, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
// import Environment from './Environment'

class ProductEdit extends React.Component {

  constructor (props) {
    super(props)
    this.updateName = this.updateName.bind(this)
    this.updateDescription = this.updateDescription.bind(this)
    this.saveForm = this.saveForm.bind(this)
    let product = props.product || {}
    this.state = {
      name: product.name,
      description: product.description
    }
  }
  getValidationState () {
    return 'success'
  }
  saveForm (e) {
    e.preventDefault()
    this.props.onSaveProduct(this.props.product)
  }
  updateName (e) {
    this.setState({name: e.target.value})
    this.props.product.name = e.target.value
  }
  updateDescription (e) {
    this.setState({description: e.target.value})
    this.props.product.description = e.target.value
  }
  render () {
    let product = this.props.product
    let state = this.state
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
            <FormGroup controlId="description">
              <ControlLabel>Product Name</ControlLabel>
              <FormControl
                type="text"
                value={state.description}
                onChange={this.updateDescription}
              />
            </FormGroup>
            <div>
              <LinkContainer to={{ pathname: `/product/${product.id}` }}>
                <Button>Cancel</Button>
              </LinkContainer>
              <Button type="button" onClick={this.saveForm}>
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
