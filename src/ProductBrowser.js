import React from 'react'
import ListProduct from './ListProduct'

class ProductBrowser extends React.Component {

  render () {
    return (
      <ul>
        { this.props.products.map(this.renderProduct) }
      </ul>
    )
  }
  renderProduct (product) {
    return <ListProduct key={product.id} product={product} />
  }
}
ProductBrowser.propTypes = {
  products: React.PropTypes.array
}
export default ProductBrowser
