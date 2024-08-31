import React, { useEffect, useState } from 'react'
import VideoFilters from './VideoFilters'
import VideoCard from './VideoCard'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    fetchVideos();
  }, []);

  const fetchVideos = async ()=> {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  }

  return (
    <div className='videosWrapper'>
      <VideoFilters />
      <div className='videoPlay'>
        {videos.map((x)=> <VideoCard key={x.id} info={x} />)}        
      </div>
    </div>
  )
}

export default VideoContainer;