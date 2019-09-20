import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './card.scss'

const ImageCard = (props) => {
  const { dev, flashy } = props

  return(
    <>
    <div
      className={ flashy ? 'img-frame flashy' : 'img-frame' }
      onClick={ e => props.history.push(`/profile/${dev.name}`) }>
      <img alt={ dev.name } src={ dev.photo } />
    </div>
    </>
  )
}

export default withRouter(ImageCard);
