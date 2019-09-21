import React, { Component } from 'react'

import './galery.scss'
import ImageCard from '../cards/ImageCard'
import Loader from '../loader/Loader'

class Galery extends Component {

  renderGallery = () => {
    const {devs} = this.props
    if (!devs.length) return <Loader/>
    else {
      return devs.map(dev => {
        return (<ImageCard dev={dev} key={dev.name} flashy={true} />)
      })
    }
  }

  render() {
    return(
      <div className='gallery'>
        <h4>Meet our team</h4>
        <div className='gallery-images'>
          { this.renderGallery() }
        </div>
      </div>
    )
  }
}

export default Galery;
