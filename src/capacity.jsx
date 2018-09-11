import React from 'react'
import './styles/capacity.css'
import {updateMonthlyPrice} from './monthlyPrice.jsx'
import {updateUpFrontPrice} from './upfrontPrice.jsx'

export default class Capacity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      capacity: '64'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(new_capacity, monthlyPrice, upfrontPrice){
    this.setState(({
      capacity: new_capacity,
    }))
    updateMonthlyPrice(monthlyPrice)
    updateUpFrontPrice(upfrontPrice)
  }

  render() {
    return (
      <div id="buttons">
      <p>Capacity: {this.state.capacity}GB</p>
      <button id="sixtyfour" onClick={this.handleClick.bind(this, '64', '£43.20', '£149')}>64</button>
      <button id="twofivesix" onClick={this.handleClick.bind(this, '256', '£46.80', '£275')}>256</button>
      </div>
    )
  }
}
