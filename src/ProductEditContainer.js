// ProductEditContainer.js
import React from 'react'
import $ from 'jquery'
import ProductEdit from './ProductEdit'
import Environment from './Environment'

class ProductEditContainer extends React.Component {
  constructor () {
    super()
    this.state = { product: null }
    this.onSaveProduct.bind(this)
  }
  componentDidMount () {
    $.ajax({
      url: Environment.getUrl('/v1/products/' + this.props.params.id),
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
    $.ajax({
      url: Environment.getUrl('/v1/products/' + product.id),
      // dataType: 'json',
      // contentType: 'application/json',
      method: 'PUT',
      data: JSON.stringify(product),
      success: function (product) {
        console.log('saved')
      },
      error: function () {
        window.alert('API PUT failed')
      }
    })
  }
}
ProductEditContainer.propTypes = {
  params: React.PropTypes.object.isRequired
}
export default ProductEditContainer
