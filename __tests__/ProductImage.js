// ProductImage.react-test.js
import React from 'react'
import ProductImage from '../src/ProductImage'
import renderer from 'react-test-renderer'

jest.mock('react-dom')

describe('ProductImage', () => {
  it('is rendered', () => {
    const component = renderer.create(
      <ProductImage imageUrl="assets/img/bear2.png" />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})