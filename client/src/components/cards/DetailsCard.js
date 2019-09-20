import React from 'react'
import TaskChip from '../chips/Chip'

const DetailsCard = ({dev}) => {

  const renderSkillList = () => {
    if(dev.skills) return  (
      dev.skills.map((skill, i) =>
        <li key={i}>{skill}</li>
      )
    )
  }

  return(
    <div className='details-card'>
      <h6><span className='details-card-spec'>Name: </span>{dev.name}</h6>
      <h6><span className='details-card-spec'>Started: </span>{dev.started}</h6>
      <h6><span className='details-card-spec'>Introduction: </span>{dev.intro}</h6>
      <h6><span className='details-card-spec'>Tech skills:</span></h6>
        { renderSkillList() }
      <h6><span className='details-card-spec'>Ongoing Projects:</span></h6>
      <TaskChip/>
    </div>
  )
}

export default DetailsCard;
