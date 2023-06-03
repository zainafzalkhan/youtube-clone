import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch=useDispatch();
    //const [videoId,setVideoId]=useState(null)
    const [searchPrms,setSearchPrms]=useSearchParams()
    let videoId=searchPrms.get('v')
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
  return (
    <div>
        <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage