import React from 'react'
import './colour.css'

export default class Colour extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      colour: 'Space Grey'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(new_colour) {
      this.setState(state => ({
        colour: new_colour
      }));
    }

  render() {
    return (
      <div>
        <p>Colour: {this.state.colour}</p>
        <button id="gold" onClick={this.handleClick.bind(this, 'Gold')}></button>
        <button id="silver" onClick={this.handleClick.bind(this, 'Silver')}></button>
        <button id="space_grey" onClick={this.handleClick.bind(this, 'Space Grey')}></button>
      </div>
    )
  }
}
