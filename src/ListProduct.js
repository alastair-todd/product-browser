import React from 'react'
import ProductImageContainer from './ProductImageContainer'

class ListProduct extends React.Component {
  render () {
    return (
      <div>
        <h2>{this.props.product.name}</h2>
        <ProductImageContainer product={this.props.product} />
        <p>{this.props.product.description}</p>
        <button onClick={this.viewMore}>View More</button>
      </div>
      )
  }
  viewMore () {
    console.log('go product')
  }
}
ListProduct.propTypes = {
  product: React.PropTypes.object.isRequired
}
export default ListProduct
