import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { findDev, findTasksPerDev } from '../modules/dbQueries'

import ProfileCard from '../components/cards/ProfileCard'

class DeveloperProfile extends Component {

  state = {
    profile: {},
    tasks: []
  }

  getDevProfile = async () => {
    const dev = this.props.match.params.name
    const [ profile ] = await findDev(dev)
    this.setState({ profile: profile })
    this.getTasksPerDev(profile.name)
  }

  getTasksPerDev = async (name) => {
    let taskList = await findTasksPerDev(name)
    this.setState({ tasks: taskList })
  }

  componentDidMount() {
    this.getDevProfile()
  }

  render() {
    return(
      <div className='developer-profile container'>
        <ProfileCard profile={ this.state.profile } taskList={this.state.tasks}/>
      </div>
    )
  }
}

export default withRouter(DeveloperProfile);
