import React from 'react'

class ListProduct extends React.Component {
  render () {
    console.log(this.props)
    return <p>{this.props.productName}</p>
  }
}
ListProduct.propTypes = {
  productName: React.PropTypes.string.isRequired
}
ListProduct.defaultProps = {

}
export default ListProduct
