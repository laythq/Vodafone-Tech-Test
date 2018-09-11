import React from 'react'
// import updateUpfrontPrice from './updatePrice.jsx'

export default class UpfrontPrice extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        price: '£149'
      }
      updateUpFrontPrice = updateUpFrontPrice.bind(this)
    }


  render() {
    return (
      <div>
      <p> From {this.state.price} upfront cost </p>
      </div>
    )
  }
}

export function updateUpFrontPrice(new_price) {
  this.setState(state => ({
    price: new_price
  }))
}
