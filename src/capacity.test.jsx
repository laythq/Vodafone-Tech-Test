import React from 'react';
import { shallow, mount } from 'enzyme';
import Capacity from './capacity.jsx';
import * as dependency1 from './monthlyPrice.jsx'
import * as dependency2 from './upfrontPrice.jsx'

describe('Capacity component', () => {
  dependency1.updateMonthlyPrice = jest.fn()
  dependency2.updateUpFrontPrice = jest.fn()
  const wrapper = shallow(<Capacity />)

  it('renders two buttons and a string', () => {
    const capacity_buttons = shallow(<Capacity />).find("button")
    const capacity_string = shallow(<Capacity />).find("p")
    expect(capacity_buttons.length).toBeGreaterThan(1)
    expect(capacity_string.length).toBeGreaterThan(0)
  })

  it('changes the Capacity description whenever the button is pressed', () => {
    const sixtyfour = wrapper.find('button').at(0)
    sixtyfour.simulate('click')
    const capacity = wrapper.find('p').text()
    expect(capacity).toEqual("Capacity: 64")
  })

  it('changes the Capacity string whenever the button is pressed', () => {
    const twofivesix = wrapper.find('button').at(1)
    twofivesix.simulate('click')
    const capacity = wrapper.find('p').text()
    expect(capacity).toEqual("Capacity: 256")
  })
})
