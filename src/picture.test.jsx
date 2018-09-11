import React from 'react';
import { shallow, mount } from 'enzyme';
import Picture from './picture.jsx';

describe('Picture Component', () => {
  const picture = shallow(<Picture />)

  it('should render space grey image by default', () => {
    expect(picture.find("img").prop("src")).toEqual("./Apple_iPhone_8_Gold-full-product-front.png")
  })
  it('should render a different image when state is changed to gold', () => {
    picture.setState({image: 'new image'})
    expect(picture.find("img").prop("src")).toEqual('new image')
  })
})
