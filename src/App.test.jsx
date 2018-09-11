import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme'
configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders a div element', () => {
    const wrapper = shallow(<App />).find("div")
    expect(wrapper.length).toBeGreaterThan(0)
  })
})
