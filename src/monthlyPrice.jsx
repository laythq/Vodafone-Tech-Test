import React from 'react';

export default class MonthlyPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '£43.20',
    };
    updateMonthlyPrice = updateMonthlyPrice.bind(this)
  }

  render() {
    return (
      <div>
        <p>
          When you pay <span style={{fontSize: '30px', color:'red'}}>{this.state.price}</span> a month
        </p>
      </div>
    );
  }
}

export function updateMonthlyPrice(newPrice) {
  this.setState({
    price: newPrice,
  });
}
