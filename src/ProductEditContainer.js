// ProductEditContainer.js
import React from 'react'
import $ from 'jquery'
import ProductEdit from './ProductEdit'
import Environment from './Environment'

class ProductEditContainer extends React.Component {
  constructor () {
    super()
    this.state = { product: null }
  }
  componentDidMount () {
    $.ajax({
      url: Environment.API_URL + '/v1/products/' + this.props.params.id,
      dataType: 'json',
      success: function (product) {
        this.setState({product: product})
      }.bind(this)
    })
  }
  render () {
    return this.state.product ? <ProductEdit
      product={this.state.product}
      onSaveProduct={this.onSaveProduct}
    /> : null
  }
  onSaveProduct (product) {
    console.log(product)
  }
}
ProductEditContainer.propTypes = {
  params: React.PropTypes.object.isRequired
}
export default ProductEditContainer
