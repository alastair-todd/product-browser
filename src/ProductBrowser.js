import React from 'react'
import ListProduct from './ListProduct'

class ProductBrowser extends React.Component {
  constructor () {
    super()
    let newProduct = <ListProduct key="1" productName="Product1" />
    this.state = {
      products: [newProduct]
    }
  }
  render () {
    return (
      <ul>
        {this.state.products && this.state.products.map(function (result) {
          return result
        })}
      </ul>
    )
  }
}
export default ProductBrowser
