import React from 'react';
import './styles/colour.css';
import { updateImage } from './picture';

const goldImage = './Apple_iPhone_8_Gold-full-product-front.png';
const silverImage = './Apple_iPhone_8_Silver_WS2-full-product-front.png';
const greyImage = './Apple_iPhone_8_Space_Grey_WS2-full-product-front.png';

export default class Colour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: 'Space Grey',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(newColour, image) {
    this.setState({
      colour: newColour,
    });
    updateImage(image);
  }

  render() {
    return (
      <div>
        <p>
          Colour: {this.state.colour}
        </p>
        <button type="button" id="gold" onClick={this.handleClick.bind(this, 'Gold', goldImage)} />
        <button type="button" id="silver" onClick={this.handleClick.bind(this, 'Silver', silverImage)} />
        <button type="button" id="space_grey" onClick={this.handleClick.bind(this, 'Space Grey', greyImage)} />
      </div>
    );
  }
}
