import React from 'react'

import ImageCard from './ImageCard'
import DetailsCard from './DetailsCard'

const ProfileCard = (props) => {

  return(
    <div className='profile-card'>
      <ImageCard dev={props.profile} />
      <DetailsCard dev={props.profile} tasks={props.taskList}/>
    </div>
  )
}

export default ProfileCard;
