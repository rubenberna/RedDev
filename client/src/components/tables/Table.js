import React, { Component } from "react"
import { withRouter } from 'react-router-dom'

import { Table } from "react-materialize"
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
              <th data-field="requester">Requester</th>
              <th data-field="dev">Developer</th>
              <th data-field="status">Status</th>
            </tr>
          </thead>
          { this.renderTabeBody() }
        </Table>
      )
    }
  }

  seeDevProfile = (dev) => {
    if (dev) this.props.history.push(`/profile/${dev}`)
  }

  renderTabeBody = () => {
    const { list } = this.props;
    return list.map((task, index) => {
      return (
        <tbody key={index} style={{ cursor: 'default' }}>
          <tr>
            <td>{ task.title }</td>
            <td>{ task.requester }</td>
            <td onClick={ e => this.seeDevProfile(task.dev) }>{ task.dev || '' }</td>
            <td>{ task.status }</td>
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
