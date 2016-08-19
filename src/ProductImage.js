import React from 'react'

class ProductImage extends React.Component {
  render () {
    return this.props.imageUrl
      ? <img className="img-responsive" src={this.props.imageUrl} />
      : <div className="no-image" />
  }
}
ProductImage.propTypes = {
  imageUrl: React.PropTypes.string
}
export default ProductImage
