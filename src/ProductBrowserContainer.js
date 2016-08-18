// ProductBrowserContainer.js
import React from 'react'
import $ from 'jquery'
import ProductBrowser from './ProductBrowser'
import Environment from './Environment'

class ProductBrowserContainer extends React.Component {
  constructor () {
    super()
    this.state = { products: [] }
  }
  componentDidMount () {
    $.ajax({
      url: Environment.API_URL + '/v1/products ',
      dataType: 'json',
      success: function (products) {
        // for (let [index, product] of products.entries()) {
        //   product.key = index
        // }
        this.setState({products: products})
      }.bind(this)
    })
  }
  render () {
    return <ProductBrowser products={this.state.products} />
  }
}
export default ProductBrowserContainer
