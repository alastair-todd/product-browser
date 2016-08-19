// ListProduct.js
import React from 'react'
import ProductImageContainer from './ProductImageContainer'
import {Button} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

class ListProduct extends React.Component {
  render () {
    let product = this.props.product
    return (
      <div className="product-wrapper">
        <h2>{product.name}</h2>
        <ProductImageContainer product={product} />
        <p>{product.description}</p>
        <LinkContainer to={{ pathname: `/product/${product.id}` }}>
          <Button>View More</Button>
        </LinkContainer>
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
