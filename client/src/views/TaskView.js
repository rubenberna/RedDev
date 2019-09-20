import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { Button } from 'react-materialize'
import { finishTask } from '../modules/dbQueries'

class TaskView extends Component {

  renderFinishButton = () => {
    const { task } = this.props.location.state
    if (task.status === 'ongoing') return (
      <Button
        type="submit"
        waves="light"
        className='finish-btn'
        onClick={ e => this.completeTask(task) }>
        Finish
      </Button>
    )
  }

  completeTask = async (task) => {
    let res = await finishTask(task)
    if (res === 'success') this.props.history.push('/ongoing')
  }

  render() {
    const { task } = this.props.location.state
    return(
      <div className='task-view container'>
        <h4>{task.title}</h4>
        <hr/>
        <div className='task-details'>
          <h6><span className='task-spec'>Requester: </span>{task.requester}</h6>
          <h6><span className='task-spec'>When? </span>{moment(task.reqDate).format("MMM Do")}</h6>
          <h6><span className='task-spec'>Description: </span>{task.description}</h6>
          <h6><span className='task-spec'>Type: </span>{task.type}</h6>
          <h6><span className='task-spec'>Assigned to: </span>{task.dev ? task.dev : ''}</h6>
          <h6><span className='task-spec'>Status: </span><span className={task.status === 'ongoing' ? 'ongoing' : 'complete'}>{task.status}</span></h6>
        </div>
        { this.renderFinishButton() }
      </div>
    )
  }
}

export default withRouter(TaskView);
