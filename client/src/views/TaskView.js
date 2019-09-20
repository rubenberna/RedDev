import React, { Component } from 'react'

class TaskView extends Component {

  render() {
    const { task } = this.props.location.state

    return(
      <div className='task-view container'>
        {task.title}
      </div>
    )
  }
}

export default TaskView;
