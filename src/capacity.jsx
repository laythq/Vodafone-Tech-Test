import React from 'react'
import css from './capacity.css'
import {updatePrice} from './monthlyPrice.jsx'

export default class Capacity extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      capacity: '64'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(new_capacity, price){
    this.setState(state => ({
      capacity: new_capacity,
    }))
    updatePrice(price)
  }
  render() {
    return (
      <div id="buttons">
      <p>Capacity: {this.state.capacity}</p>
      <button onClick={this.handleClick.bind(this, '64', '$200')}>64</button>
      <button onClick={this.handleClick.bind(this, '256', '$400')}>256</button>
      </div>
    )
  }
}
