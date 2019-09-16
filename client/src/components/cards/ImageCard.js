import React, { Component } from 'react'

import './card.scss'

class ImageCard extends Component {

  renderCard = () => {
    const { dev } = this.props
    return (
      <div className='img-frame'>
        <img alt={ dev.name } src={ dev.photo } />
        <h5 className='img-frame-name'>{dev.name}</h5>
      </div>
    )
  }

  render() {
    return(
      <>
        {this.renderCard()}
      </>
    )
  }
}

export default ImageCard;
