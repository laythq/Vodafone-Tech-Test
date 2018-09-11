import React from 'react';
import { shallow, mount } from 'enzyme';
import Colour from './colour.jsx';
import * as dependency from './picture.jsx'

describe('Colour component', () => {
  dependency.updateImage = jest.fn()
  const wrapper = shallow(<Colour />)

  it('renders a string and three buttons', () => {
    const colour_buttons = shallow(<Colour />).find("button")
    const colour_string = shallow(<Colour />).find("p")
    expect(colour_buttons.length).toBe(3)
    expect(colour_string.length).toBe(1)
  })

  it('changes the Colour description whenever the gold is pressed', () => {
    const gold = wrapper.find('button').at(0)
    gold.simulate('click')
    const description = wrapper.find('p').text()
    expect(description).toEqual("Colour: Gold")
  })
  it('changes the Colour description whenever the silver is pressed', () => {
    const silver = wrapper.find('button').at(1)
    silver.simulate('click')
    const description = wrapper.find('p').text()
    expect(description).toEqual("Colour: Silver")
  })
  it('changes the Colour description whenever the spacegrey is pressed', () => {
    const grey = wrapper.find('button').at(2)
    grey.simulate('click')
    const description = wrapper.find('p').text()
    expect(description).toEqual("Colour: Space Grey")
  })
})
