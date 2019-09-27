import React, { Component } from 'react'
import moment from 'moment'
import  { fetchLogs } from '../../modules/dbQueries'
import { Table } from "react-materialize"

class Logs extends Component {
  state = {
    logs: []
  }

  componentDidMount() {
    this.fetchLogs()
  }

  fetchLogs = async () => {
    const { task } = this.props
    const logs = await fetchLogs(task.id)
    this.setState({logs: logs})
  }

  renderLogs = () => {
    const { logs } = this.state
    console.log(logs);

    if (logs.length) {
      return logs.map((log, i) => {
        return (
          <tbody key={i}>
            <tr className='table-row'>
              <td>
                Date: { moment(log.date).format('MMMM Do YYYY') }
              </td>
              <td>
                From: {log.from}
              </td>
            </tr>
          </tbody>
        )
      })
    } else return (
      <tbody>
        <tr>
          <td>
            No messages
          </td>
        </tr>
      </tbody>)
  }

  render() {
    return(
      <Table>
        {this.renderLogs()}
      </Table>
    )
  }
}

export default Logs;
