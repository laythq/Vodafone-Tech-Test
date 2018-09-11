import React from 'react';
import { shallow, mount } from 'enzyme';
import MonthlyPrice from '../monthlyPrice.jsx';

describe('Monthly Price Component', () => {
  it('should render £43.20 by default', () => {
    const wrapper = shallow(<MonthlyPrice />)
    expect(wrapper.find('p').text()).toEqual('When you pay £43.20 a month')
  })
  it('should update the price description when state is changed', () => {
    const wrapper = shallow(<MonthlyPrice />)
    wrapper.setState({price: '£100'})
    expect(wrapper.find('p').text()).toEqual('When you pay £100 a month')
  })
})
