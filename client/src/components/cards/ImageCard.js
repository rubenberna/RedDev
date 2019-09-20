import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './card.scss'

class ImageCard extends Component {

  renderCard = () => {
    const { dev } = this.props
    return (
      <div className='img-frame' onClick={ e => this.props.history.push(`/profile/${dev.name}`) }>
        <img alt={ dev.name } src={ dev.photo } />
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

export default withRouter(ImageCard);
