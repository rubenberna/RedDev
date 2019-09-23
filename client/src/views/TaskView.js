import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { Button } from 'react-materialize'
import { finishTask, assignTask } from '../modules/dbQueries'
import RadioButtons from '../components/forms/RadioButtons'

class TaskView extends Component {

  renderFinishButton = () => {
    const { task } = this.props.location.state
    const { userLoggedIn } = this.props
    if (task.status === 'ongoing' && userLoggedIn && userLoggedIn.name === task.dev) return (
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

  viewDevProfile = (dev) => {
    if (dev) this.props.history.push(`/profile/${dev}`)
  }

  renderAssignSelection = () => {
    const { userLoggedIn } = this.props
    if (userLoggedIn && userLoggedIn.admin) return <RadioButtons assign={this.assignTask}/>
  }

  assignTask = async (devName) => {
    const { task } = this.props.location.state
    const taskObj = {
      task,
      dev: devName
    }
    await assignTask(taskObj)
    this.props.history.push('/ongoing')
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
          <h6><span className='task-spec'>Assigned to: </span><span style={{ cursor: 'pointer' }} onClick={ e => this.viewDevProfile(task.dev) }>{task.dev ? task.dev : ''}</span></h6>
          <h6><span className='task-spec'>Status: </span><span className={task.status === 'ongoing' ? 'ongoing' : 'complete'}>{task.status}</span></h6>
        </div>
        { this.renderAssignSelection() }
        { this.renderFinishButton() }
      </div>
    )
  }
}

export default withRouter(TaskView);
