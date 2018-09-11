import React from 'react';
import { shallow } from 'enzyme';
import Capacity from '../capacity';
import * as dependency1 from '../monthlyPrice';
import * as dependency2 from '../upfrontPrice';

describe('Capacity component', () => {
  dependency1.updateMonthlyPrice = jest.fn();
  dependency2.updateUpFrontPrice = jest.fn();
  const wrapper = shallow(<Capacity />);

  it('renders two buttons and a string', () => {
    const capacityButtons = wrapper.find('button');
    const capacityString = wrapper.find('p');
    expect(capacityButtons.length).toBe(2);
    expect(capacityString.length).toBe(1);
  });

  describe('64GB Button', () => {
    beforeAll(() => {
      const sixtyfour = wrapper.find('button').at(0);
      sixtyfour.simulate('click');
    });

    it('changes the Capacity description whenever the button is pressed', () => {
      const capacity = wrapper.find('p').text();
      expect(capacity).toEqual('Capacity: 64GB');
    });

    it('calls #updateMonthlyPrice with the monthly price when the first button is clicked', () => {
      expect(dependency1.updateMonthlyPrice.mock.calls).toEqual([['£43.20']]);
    });

    it('calls #updateUpFrontPrice with the upfront price when the first button is clicked', () => {
      expect(dependency2.updateUpFrontPrice.mock.calls).toEqual([['£149']]);
    });

    describe('256GB Button', () => {
      beforeAll(() => {
        const twofivesix = wrapper.find('button').at(1);
        twofivesix.simulate('click');
      });

      it('changes the Capacity string whenever the button is pressed', () => {
        const capacity = wrapper.find('p').text();
        expect(capacity).toEqual('Capacity: 256GB');
      });

      it('calls #updateMonthlyPrice with the monthly price when the first button is clicked', () => {
        expect(dependency1.updateMonthlyPrice.mock.calls[1]).toEqual(['£46.80']);
      });

      it('calls #updateUpFrontPrice with the upfront price when the first button is clicked', () => {
        expect(dependency2.updateUpFrontPrice.mock.calls[1]).toEqual(['£275']);
      });
    });
  });
});
