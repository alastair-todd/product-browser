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
        this.forceUpdate()
      }.bind(this)
    })
  }
  render () {
    return <ProductEdit
      product={this.state.product}
      onSaveProduct={this.onSaveProduct}
    />
  }
  onSaveProduct (product) {
    console.log(product)
  }
}
ProductEditContainer.propTypes = {
  params: React.PropTypes.object.isRequired
}
export default ProductEditContainer
