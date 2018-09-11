import React from 'react';
import './styles/capacity.css';
import { updateMonthlyPrice } from './monthlyPrice.jsx';
import { updateUpFrontPrice } from './upfrontPrice.jsx';

export default class Capacity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      capacity: '64',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newCapacity, monthlyPrice, upfrontPrice) {
    this.setState(({
      capacity: newCapacity,
    }));
    updateMonthlyPrice(monthlyPrice);
    updateUpFrontPrice(upfrontPrice);
  }

  render() {
    return (
      <div id="buttons">
        <p>
          Capacity: {this.state.capacity}GB
        </p>
        <button type="button" id="sixtyfour" onClick={this.handleClick.bind(this, '64', '£43.20', '£149')}>64</button>
        <button type="button" id="twofivesix" onClick={this.handleClick.bind(this, '256', '£46.80', '£275')}>256</button>
      </div>
    );
  }
}
