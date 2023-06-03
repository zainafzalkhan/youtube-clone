import React from 'react'
import TagButtons from './TagButtons'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='main-container col-span-11 px-5 py-2'>
      <TagButtons/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer