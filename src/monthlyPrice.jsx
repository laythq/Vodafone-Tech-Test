import React from 'react'
// import Capacity from './capacity.jsx'

export default class MonthlyPrice extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      price: '£43.20'
    }
    updateMonthlyPrice = updateMonthlyPrice.bind(this)
  }

  render() {
    return (
      <div>
      <p> When you pay {this.state.price} a month</p>
      </div>
    )
  }
}

export function updateMonthlyPrice(new_price) {
  this.setState(state => ({
    price: new_price
  }))
}
