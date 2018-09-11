import React from 'react';
import { shallow } from 'enzyme';
import UpfrontPrice from '../upfrontPrice';

describe('Upfront Price Component', () => {
  const wrapper = shallow(<UpfrontPrice />);

  it('should render £149 by default', () => {
    expect(wrapper.find('p').text()).toEqual('From £149 upfront cost');
  });

  it('should update the price description when state is changed', () => {
    wrapper.setState({ price: '£250' });
    expect(wrapper.find('p').text()).toEqual('From £250 upfront cost');
  });
});
