// ProductView.js
import React from 'react'
import ProductImageContainer from './ProductImageContainer'
import {Row, Col, Button} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

class ProductView extends React.Component {
  render () {
    let product = this.props.product
    if (!product) return <div />
    return (
      <Row>
        <Col xs={12}>
          <h1>{product.name}</h1>
          <ProductImageContainer product={product} />
          <p>{product.description}</p>
          <p><strong>Inventory: </strong>{product.amount}</p>
          <div>
            <IndexLinkContainer to="/">
              <Button>Back</Button>
            </IndexLinkContainer>
            <LinkContainer to={{ pathname: `/product/edit/${product.id}` }}>
              <Button>Edit</Button>
            </LinkContainer>
          </div>
        </Col>
      </Row>
    )
  }
}
ProductView.propTypes = {
  product: React.PropTypes.object
}
export default ProductView
