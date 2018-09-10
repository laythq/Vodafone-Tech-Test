import React from 'react'

export default class UpfrontPrice extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        price: '$5m'
      }
      updateUpfrontPrice = updateUpfrontPrice.bind(this)
    }


  render() {
    return (
      <div>
      <p> From {this.state.price} upfront cost </p>
      </div>
    )
  }
}

export function updateUpfrontPrice(new_price) {
  this.setState(state => ({
    price: new_price
  }))
}
