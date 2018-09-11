import React from 'react';
import { shallow } from 'enzyme';
import Colour from '../colour';
import * as dependency from '../picture';

describe('Colour component', () => {
  dependency.updateImage = jest.fn();
  const wrapper = shallow(<Colour />);

  it('renders a string and three buttons', () => {
    const colourButtons = shallow(<Colour />).find('button');
    const colourString = shallow(<Colour />).find('p');
    expect(colourButtons.length).toBe(3);
    expect(colourString.length).toBe(1);
  });

  describe('Gold button', () => {
    beforeAll(() => {
      const gold = wrapper.find('button').at(0);
      gold.simulate('click');
    });

    it('changes the Colour description whenever the gold is pressed', () => {
      const description = wrapper.find('p').text();
      expect(description).toEqual('Colour: Gold');
    });

    it('calls #updateImage with the gold image when clicked', () => {
      expect(dependency.updateImage.mock.calls).toEqual([['./Apple_iPhone_8_Gold-full-product-front.png']]);
    });
  });

  describe('Silver button', () => {
    beforeAll(() => {
      const silver = wrapper.find('button').at(1);
      silver.simulate('click');
    });

    it('changes the Colour description whenever the silver is pressed', () => {
      const description = wrapper.find('p').text();
      expect(description).toEqual('Colour: Silver');
    });

    it('calls #updateImage with the silver image when clicked', () => {
      expect(dependency.updateImage.mock.calls[1]).toEqual(['./Apple_iPhone_8_Silver_WS2-full-product-front.png']);
    });
  });

  describe('Space Grey button', () => {
    beforeAll(() => {
      const spacegrey = wrapper.find('button').at(2);
      spacegrey.simulate('click');
    });

    it('changes the Colour description whenever the Space Grey is pressed', () => {
      const description = wrapper.find('p').text();
      expect(description).toEqual('Colour: Space Grey');
    });

    it('calls #updateImage with the space grey image when clicked', () => {
      expect(dependency.updateImage.mock.calls[2]).toEqual(['./Apple_iPhone_8_Space_Grey_WS2-full-product-front.png']);
    });
  });
});
