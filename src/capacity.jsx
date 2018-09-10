import React from 'react'
import css from './capacity.css'
import {updateMonthlyPrice} from './monthlyPrice.jsx'
import {updateUpfrontPrice} from './upfrontPrice.jsx'

export default class Capacity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      capacity: '64'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(new_capacity, monthlyPrice, upfrontPrice){
    this.setState(state => ({
      capacity: new_capacity,
    }))
    updateMonthlyPrice(monthlyPrice)
    updateUpfrontPrice(upfrontPrice)
  }
  render() {
    return (
      <div id="buttons">
      <p>Capacity: {this.state.capacity}</p>
      <button onClick={this.handleClick.bind(this, '64', '$200', '$5m')}>64</button>
      <button onClick={this.handleClick.bind(this, '256', '$400', '$10m')}>256</button>
      </div>
    )
  }
}
