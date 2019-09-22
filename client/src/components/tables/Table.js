import React, { Component } from "react"
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { Table, Button } from "react-materialize"

import './table.scss'
import Loader from '../loader/Loader'

class TableTasks extends Component {
  state = {
    onlyOngoing: false
  }

  renderTable = () => {
    const { list } = this.props;
    if (list.length < 1) return <Loader/>
    else {
      return(
        <div>
          { this.renderFilterBtn() }
          <Table className='highlight'>
            <thead>
              <tr>
                <th data-field="title">Title</th>
                <th data-field="requester">By who</th>
                <th data-field="dev">Assigned to</th>
                <th data-field="date">Requested</th>
                <th data-field="status">Status</th>
              </tr>
            </thead>
            { this.renderTaskBody() }
          </Table>
        </div>
      )
    }
  }

  renderFilterBtn = () => {
    const { onlyOngoing } = this.state
    if (!onlyOngoing) return (
      <Button flat waves="light" className='filter-btn' onClick={e => this.setState({ onlyOngoing: true })}> Show Ongoing</Button>
    )
    else return (
      <Button flat waves="light" className='filter-btn' onClick={e => this.setState({ onlyOngoing: false })}> Show all</Button>
    )
  }

  viewDevProfile = (dev) => {
    if (dev) this.props.history.push(`/profile/${dev}`)
  }

  viewTaskDetails = (task) => {
    this.props.history.push({
      pathname: `/task/${task.title}`,
      state: { task }
    })
  }

  renderTaskBody = () => {
    let taskList = []
    const { list } = this.props;

    if (this.state.onlyOngoing) {
      taskList = list.filter(task => {
        return task.status === 'ongoing'
      })
    } else {
      taskList = list
    }

    return taskList.map((task, index) => {
      return (
        <tbody key={index} style={{ cursor: 'pointer' }}>
          <tr>
            <td onClick={ e => this.viewTaskDetails(task) }>
              { task.title }
            </td>
            <td>
              <a
                href={`mailto:${task.requester}?Subject=${task.title}`}
                target="_blank"
                rel="noopener noreferrer">
                { task.requester }
              </a>
            </td>
            <td onClick={ e => this.viewDevProfile(task.dev) }>
              { task.dev || '' }
            </td>
            <td>
              { moment(task.reqDate).format("MMM Do")  || '' }
            </td>
            <td className={task.status === 'ongoing' ? 'ongoing' : 'complete'}>
              { task.status }
            </td>
          </tr>
        </tbody>
      )}
    )
  }

  render() {
    return (
      <>
        { this.renderTable() }
      </>
    );
  }
}

export default withRouter(TableTasks);
