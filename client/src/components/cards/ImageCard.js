import React from 'react'
import { withRouter } from 'react-router-dom'

import './card.scss'

const ImageCard = (props) => {
  const { dev, flashy, bigger } = props

  const greyScale = flashy ? 'flashy' : '';
  const bigFrame = bigger ? 'bigger' : '';
  const classes = `img-frame ${greyScale} ${bigFrame}`

  return(
    <>
    <div
      className={ classes }
      onClick={ e => props.history.push(`/profile/${dev.name}`) }>
      <img alt={ dev.name } src={ dev.photo } />
    </div>
    </>
  )
}

export default withRouter(ImageCard);
