import React, { Component } from 'react'
import { getDevs } from '../../modules/dbQueries'

import './galery.scss'
import ImageCard from '../cards/ImageCard'

class Galery extends Component {
  state = {
    devs: []
  }

  async componentDidMount() {
    const devs = await getDevs()
    this.setState({ devs })
  }

  renderGallery = () => {
    return this.state.devs.map(dev => {
      return (<ImageCard dev={dev} key={dev.name} flashy={true} />)
    })
  }

  render() {
    return(
      <div className='gallery'>
        { this.renderGallery() }
      </div>
    )
  }
}

export default Galery;
