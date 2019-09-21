import React, { Component } from 'react'
import { getDevs } from '../../modules/dbQueries'

import './galery.scss'
import ImageCard from '../cards/ImageCard'
import Loader from '../loader/Loader'

class Galery extends Component {
  state = {
    devs: []
  }

  async componentDidMount() {
    const devs = await getDevs()
    this.setState({ devs })
  }

  renderGallery = () => {
    const {devs} = this.state
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
