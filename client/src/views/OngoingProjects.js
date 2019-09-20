import React, { Component } from 'react'
import { getTasks } from '../modules/dbQueries'

import TableTasks from '../components/tables/Table'

class OngoingProjects extends Component {
  state = {
    tasks: []
  }

  async componentDidMount() {
    const tasks = await getTasks()
    this.setState({ tasks })
  }

  render() {
    return(
      <div className='container'>
        <h2>Ongoing Projects</h2>
        <TableTasks list={this.state.tasks} />
      </div>
    )
  }
}

export default OngoingProjects;
