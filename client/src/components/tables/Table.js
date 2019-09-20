import React, { Component } from "react"
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { Table } from "react-materialize"

import './table.scss'
import Loader from '../loader/Loader'

class TableTasks extends Component {

  renderTable = () => {
    const { list } = this.props;
    if (list.length < 1) return <Loader/>
    else {
      return(
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
          { this.renderTabeBody() }
        </Table>
      )
    }
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

  renderTabeBody = () => {
    const { list } = this.props;
    return list.map((task, index) => {
      return (
        <tbody key={index} style={{ cursor: 'pointer' }}>
          <tr>
            <td onClick={ e => this.viewTaskDetails(task) }>{ task.title }</td>
            <td>{ task.requester }</td>
            <td onClick={ e => this.viewDevProfile(task.dev) }>{ task.dev || '' }</td>
            <td>{ moment(task.reqDate).format("MMM Do")  || '' }</td>
            <td className={task.status === 'ongoing' ? 'ongoing' : 'complete'}>{ task.status }</td>
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
