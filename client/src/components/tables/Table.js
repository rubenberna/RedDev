import React, { Component } from "react"
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { pokeDev } from '../../modules/poke'
import { Table, Button, Icon } from "react-materialize"

import './table.scss'
import Loader from '../loader/Loader'

class TableTasks extends Component {
  state = {
    onlyOngoing: true,
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

  viewTaskDetails = (task) => {
    this.props.history.push({
      pathname: `/task/${task.title}`,
      state: { task }
    })
  }

  poke = (index, task) => {
    this.setState({[`index${index}`]: 'poked' })
    pokeDev(task)
  }

  renderIcon = (index, task) => {
    let position = `index${index}`
    if (this.state[position] === 'poked') return <Icon className='stop'>notifications_off</Icon>
    else return <div onClick={e => this.poke(index, task)}><Icon className='intermitent'>notifications_active</Icon></div>
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
          <tr className='table-row'>
            <td onClick={ e => this.viewTaskDetails(task) }>
              { task.title }
            </td>
            <td onClick={ e => this.viewTaskDetails(task) }>
              { task.requester }
            </td>
            <td onClick={ e => this.viewTaskDetails(task) }>
              { task.dev || '' }
            </td>
            <td onClick={ e => this.viewTaskDetails(task) }>
              { moment(task.reqDate).format("MMM Do")  || '' }
            </td>
            <td className={task.status === 'ongoing' ? 'ongoing' : 'complete'}>
              { task.status }
            </td>
            <td>
              { this.renderIcon(index, task) }
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
