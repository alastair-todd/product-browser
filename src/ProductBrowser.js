import React from 'react'
import ListProduct from './ListProduct'
import {Row, Col} from 'react-bootstrap'

class ProductBrowser extends React.Component {

  render () {
    return (
      <Row>
      { this.props.products.map(this.renderProduct) }
      </Row>
    )
  }
  renderProduct (product) {
    return (
      <Col xs={12} sm={12} md={6} lg={4} key={product.id}>
        <ListProduct product={product} />
      </Col>
    )
  }
}
ProductBrowser.propTypes = {
  products: React.PropTypes.array
}
export default ProductBrowser
