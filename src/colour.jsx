import React from 'react'
import './colour.css'
import {updateImage} from './picture.jsx'

const goldImage = "./Apple_iPhone_8_Gold-full-product-front.png"
const silverImage = "./Apple_iPhone_8_Silver_WS2-full-product-front.png"
const greyImage = "./Apple_iPhone_8_Space_Grey_WS2-full-product-front.png"

export default class Colour extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      colour: 'Space Grey'
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(new_colour, image) {
      this.setState(state => ({
        colour: new_colour
      }));
      updateImage(image)
    }

  render() {
    return (
      <div>
        <p>Colour: {this.state.colour}</p>
        <button id="gold" onClick={this.handleClick.bind(this, 'Gold', goldImage)}></button>
        <button id="silver" onClick={this.handleClick.bind(this, 'Silver', silverImage)}></button>
        <button id="space_grey" onClick={this.handleClick.bind(this, 'Space Grey', greyImage)}></button>
      </div>
    )
  }
}
