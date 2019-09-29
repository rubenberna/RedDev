import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, Tabs, Tab } from 'react-materialize'
import RadioButtons from '../components/forms/RadioButtons'
import AddMessage from '../components/forms/AddMessage'
import { finishTask, assignTask, fetchLogs } from '../modules/dbQueries'
import { sendMsg } from '../modules/sendMsg'
import TaskCard from '../components/cards/TaskCard'
import Logs from '../components/tables/Logs'

class TaskView extends Component {
  state = {
    logs: []
  }

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

  sendMessage = (msg) => {
    sendMsg(msg)
  }

  fetchLogs = async () => {
    const { task } = this.props.location.state
    const logs = await fetchLogs(task.id)
    this.setState({logs: logs})
  }

  componentDidMount() {
    this.fetchLogs()
  }

  render() {
    const { task } = this.props.location.state
    const { userLoggedIn } = this.props
    return(
      <>
        <div className='task-view container'>
          <Tabs className="tab-demo z-depth-1">
            <Tab title="Details">
              <TaskCard task={task} viewDevProfile={this.viewDevProfile}/>
            </Tab>
            <Tab title="Message">
              <AddMessage
                sendTo={ userLoggedIn ? task.requester : `${task.dev}@redcarrots.be`} sendMessage={ this.sendMessage }
                from={ userLoggedIn ? `${task.dev}@redcarrots.be` : task.requester }
                task={ task }
                fetchLogs={this.fetchLogs}
              />
            </Tab>
            <Tab title="Logs">
              <Logs logs={this.state.logs}/>
            </Tab>
          </Tabs>
        </div>
        { this.renderFinishButton() }
        { this.renderAssignSelection() }
      </>
    )
  }
}

export default withRouter(TaskView);
