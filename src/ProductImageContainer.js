// ProductImageContainer.js
import React from 'react'
import $ from 'jquery'
import ProductImage from './ProductImage'
import Environment from './Environment'

class ProductImageContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = { imageUrl: null }
  }
  componentDidMount () {
    let apiCall = `https://api.flickr.com/services/rest?method=flickr.photos.search&text=${encodeURIComponent(this.props.product.name)}&per_page=10&page=1&format=json&api_key=${Environment.FLICKR_SEARCH_API_KEY}&jsoncallback=?`
    // let url = `https://www.googleapis.com/customsearch/v1?key=${Environment.GOOGLE_SEARCH_API_KEY}&cx=${Environment.GOOGLE_SEARCH_ENGINE_KEY}&q=${encodeURIComponent(this.props.product.name)}`
    var me = this
    $.getJSON(apiCall, function (searchResults) {
      // console.log(searchResults)
      if (searchResults.photos.total !== '0') {
        let photo = searchResults.photos.photo[0]
        // https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
        let imageUrl = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
        me.setState({ imageUrl: imageUrl })
      }
    })
  }
  render () {
    return <ProductImage imageUrl={this.state.imageUrl} />
  }
}
ProductImageContainer.propTypes = {
  product: React.PropTypes.object.isRequired
}
export default ProductImageContainer
