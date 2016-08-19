// ProductViewContainer.js
import React from 'react'
import $ from 'jquery'
import ProductView from './ProductView'
import Environment from './Environment'

class ProductViewContainer extends React.Component {
  constructor () {
    super()
    this.state = { product: null }
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
    return <ProductView product={this.state.product} />
  }
}
ProductViewContainer.propTypes = {
  params: React.PropTypes.object.isRequired
}
export default ProductViewContainer
