import React, { Component } from 'react'
import  { fetchLogs } from '../../modules/dbQueries'

class Logs extends Component {
  state = {

  }

  componentDidMount() {
    this.fetchLogs()
  }

  fetchLogs = async () => {
    const { task } = this.props
    const logs = await fetchLogs(task.id)
    // console.log(logs);
  }

  render() {
    return(
      <div>
        Hello
      </div>
    )
  }
}

export default Logs;
