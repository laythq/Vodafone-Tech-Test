import React from 'react';

export default class Picture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: './Apple_iPhone_8_Gold-full-product-front.png',
    };
    updateImage = updateImage.bind(this)
  }

  render() {
    return (
      <div>
        <img src={this.state.image} class="img-fluid" alt="Responsive image" />
      </div>
    )
  }
}

export function updateImage(newImage) {
  this.setState({
    image: newImage,
  });
}
