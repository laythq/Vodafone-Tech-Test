import React from 'react';
import { shallow, mount } from 'enzyme';
import MonthlyPrice from './monthlyPrice.jsx';

describe('Monthly Price Component', () => {
  it('should render £43.20 by default', () => {
    const wrapper = shallow(<MonthlyPrice />)
    expect(wrapper.find('p').text()).toEqual('When you pay £43.20 a month')
  })
})
