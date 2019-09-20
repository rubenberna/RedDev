import React from 'react'
import { Chip } from 'react-materialize'

const TaskChip = ({taskList}) => {
  return(
    <div>
      {taskList.map((task, i) => <Chip key={i}>{task.title}</Chip>)}
    </div>
  )
}

export default TaskChip;
