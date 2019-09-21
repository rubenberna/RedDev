import React, { Component } from 'react'
import TaskChip from '../chips/Chip'

class DetailsCard extends Component {

  state = {

  }

  skillsList = () => {
    const { dev } = this.props
    if(dev.skills) return  (
      dev.skills.map((skill, i) =>
        <li key={i}>{skill}</li>
      )
    )
  }

  render () {
    const { dev, tasks } = this.props
    return(
      <div className='details-card'>
        <h6><span className='details-card-spec'>Name: </span>{dev.name}</h6>
        <h6><span className='details-card-spec'>Started on: </span>{dev.started}</h6>
        <h6><span className='details-card-spec'>Role: </span>{dev.role}</h6>
        <h6><span className='details-card-spec'>Introduction: </span>{dev.intro}</h6>
        <h6><span className='details-card-spec'>Tech skills:</span></h6>
          { this.skillsList() }
        <h6><span className='details-card-spec'>Ongoing Projects:</span></h6>
        <TaskChip taskList={tasks}/>
      </div>
    )
  }
}

export default DetailsCard;
