import React, { Component } from 'react'
import { Chip } from 'react-materialize'
import { findTasksPerDev } from '../../modules/dbQueries'

const TaskChip = ({taskList}) => {
  return(
    <div>
      {taskList.map((task, i) => <Chip key={i}>{task.title}</Chip>)}
    </div>
  )
}

export default TaskChip;
