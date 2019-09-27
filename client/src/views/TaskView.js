import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { Button } from 'react-materialize'
import RadioButtons from '../components/forms/RadioButtons'
import AddMessage from '../components/forms/AddMessage'
import { finishTask, assignTask } from '../modules/dbQueries'
import { sendMsg } from '../modules/sendMsg'

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
        Finish task
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

  renderAddMessage = () => {
    const { userLoggedIn } = this.props
    const { task } = this.props.location.state
    return (
      <AddMessage
        sendTo={ userLoggedIn ? task.requester : `${task.dev}@redcarrots.be`} sendMessage={ this.sendMessage }
        from={ userLoggedIn ? `${task.dev}@redcarrots.be` : task.requester }
        title={ task.title }
      />)
  }

  sendMessage = (msg) => {
    sendMsg(msg)
  }

  render() {
    const { task } = this.props.location.state
    return(
      <>
        <div className='task-view container'>
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
            <h6><span className='task-spec'>Assigned to: </span><span style={{ cursor: 'pointer' }} onClick={ e => this.viewDevProfile(task.dev) }>{task.dev ? task.dev : ''}</span></h6>
            <h6><span className='task-spec'>Status: </span><span className={task.status === 'ongoing' ? 'ongoing' : 'complete'}>{task.status}</span></h6>
          </div>
          { this.renderAddMessage() }
          { this.renderFinishButton() }
        </div>
        { this.renderAssignSelection() }
      </>
    )
  }
}

export default withRouter(TaskView);
