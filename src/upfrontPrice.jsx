import React from 'react';

export default class UpfrontPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '£149',
    };
    updateUpFrontPrice = updateUpFrontPrice.bind(this);
  }


  render() {
    return (
      <div>
      <p>From <span style={{fontSize: '30px', color:'red'}}>{this.state.price}</span> upfront cost</p>
      </div>
    );
  }
}

export function updateUpFrontPrice(newPrice) {
  this.setState({
    price: newPrice,
  });
}
