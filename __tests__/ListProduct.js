// ListProduct.react-test.js
import React from 'react'
import ListProduct from '../src/ListProduct'
import renderer from 'react-test-renderer'

jest.mock('react-dom')

describe('ListProduct', () => {
  it('is rendered', () => {
    let product = {
      id: '5076c659-d921-419a-b0e5-6e20c8320721',
      name: 'test product',
      description: 'test product description',
      amount: 450
    }
    const component = renderer.create(
      <ListProduct product={product} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
