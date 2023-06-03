import React, { useEffect, useState } from 'react'
import VideoCard, { addVideo } from './VideoCard'
import YOUTUBE_POPOLUER_VDO_API from '../utils/constant'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos, setVideos]=useState([])
  const fetchVideos=async()=>{
  
    let jsonData=await fetch(YOUTUBE_POPOLUER_VDO_API);
    let videos=await jsonData.json();
    setVideos(videos.items)
  }
  useEffect(()=>{
    fetchVideos()
  },[])
  return (
    <div className='video-container flex gap-4 flex-wrap my-4'>
      {videos[0] && addVideo(videos[0])}
      {
        videos?.map(video=>(
        <Link key={video.id} to={`/watch?v=${video.id}`} > <VideoCard key={video.id} info={video}/> </Link>
        ))
      }
        
    </div>
  )
}

export default VideoContainer