import React from 'react';
import { shallow, mount } from 'enzyme';
import Picture from './picture.jsx';

describe('Picture Component', () => {
  const picture = shallow(<Picture />)

  it('should render space grey image by default', () => {
    expect(picture.find("img").prop("src")).toEqual("./Apple_iPhone_8_Gold-full-product-front.png")
  })
  it('should render the gold image when state is changed to gold', () => {
    picture.setState({image: 'gold image'})
    expect(picture.find("img").prop("src")).toEqual('gold image')
  })
  it('should render the silver image when state is changed to gold', () => {
    picture.setState({image: 'silver image'})
    expect(picture.find("img").prop("src")).toEqual('silver image')
  })
})
