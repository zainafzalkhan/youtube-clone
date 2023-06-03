import React from 'react'

const VideoCard = ({info}) => {

  const {snippet,statistics}=info;
  const {title,channelTitle,publishedAt,thumbnails}=snippet;
  const nFormatter=(num)=> {
    if (num >= 1000000000) {
       return (num / 1000000000).toFixed(0).replace(/\.0$/, '') + 'G';
    }
    if (num >= 1000000) {
       return (num / 1000000).toFixed(0).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
       return (num / 1000).toFixed(0).replace(/\.0$/, '') + 'K';
    }
    return num;
}
  const getTimeDiff=(publishedTime)=>{
      let diff=new Date().getTime()-new Date(publishedTime).getTime();
      let msec=diff;
      let hh = Math.floor(msec / 1000 / 60 / 60);
      msec -= hh * 1000 * 60 * 60;
      var mm = Math.floor(msec / 1000 / 60);
      msec -= mm * 1000 * 60;
      var ss = Math.floor(msec / 1000);
      msec -= ss * 1000;
      return `${hh} hrs:${mm} min ago`
  }
  return (
    <div className='video-card w-72 shadow-lg rounded-md '>
      <img className=' rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
      <div className="info flex flex-col p-2">
          <div className="title">
            <img src="" alt="" />
            <p className='v_title font-bold'>{title}</p>
          </div>
          <div className="name flex flex-row gap-1 text-slate-500 justify-start items-center">
            <p className="c_title">
              {channelTitle}
            </p>
            <span>
              <img className='w-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCh5JIx0PQloUG2tIxM4X1rLgLa15nQXUe8kElOTGqt36XeSSCp9hW1mDQ0dE0-f0GpGU" alt="" />
            </span>
          </div>
          <div className="timeline flex flex-row gap-1 text-slate-500">
            <p className="views">
                {`${nFormatter(statistics.viewCount)} views - `}
            </p>
            <p className="time">
                {getTimeDiff(publishedAt)}
            </p>
          </div>
      </div>
    </div>
  )
}

export default VideoCard