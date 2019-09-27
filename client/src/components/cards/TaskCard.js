import React, { Component } from 'react'
import moment from 'moment'

class TaskCard extends Component {
  render() {
    const { task } = this.props
    return(
      <div>
        <h4>{task.title}</h4>
        <hr/>
        <div className='task-details'>
          <h6><span className='task-spec'>Requester: </span>
          <a
          href={`mailto:${task.requester}?Subject=${task.title}`}
          target="_blank"
          rel="noopener noreferrer">
          { task.requester }
          </a>
          </h6>
          <h6><span className='task-spec'>When? </span>{moment(task.reqDate).format("MMM Do")}</h6>
          <h6><span className='task-spec'>Description: </span>{task.description}</h6>
          <h6><span className='task-spec'>Type: </span>{task.type}</h6>
          <h6><span className='task-spec'>Assigned to: </span><span style={{ cursor: 'pointer' }} onClick={ e => this.props.viewDevProfile(task.dev) }>{task.dev ? task.dev : ''}</span></h6>
          <h6><span className='task-spec'>Status: </span><span className={task.status === 'ongoing' ? 'ongoing' : 'complete'}>{task.status}</span></h6>
        </div>
      </div>
    )
  }
}

export default TaskCard;
