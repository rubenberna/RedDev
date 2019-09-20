import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { findDev } from '../modules/dbQueries'

import ProfileCard from '../components/cards/ProfileCard'

class DeveloperProfile extends Component {

  state = {

  }

  decodeUrl = async () => {
    const dev = this.props.match.params.name
    const [ profile ] = await findDev(dev)
    this.setState({ ...profile })
  }

  componentDidMount() {
    this.decodeUrl()
  }
  render() {
    return(
      <div className='developer-profile container'>
        <ProfileCard profile={ this.state }/>
      </div>
    )
  }
}

export default withRouter(DeveloperProfile);
