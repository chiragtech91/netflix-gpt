import React from 'react'

const VideoCard = ({info}) => {
  return (
    <div className='ytVideo'>
      <img src={info.snippet.thumbnails.standard.url} alt="Thumbnail" />
      <div className="videoWrap">
        <img src="https://yt3.ggpht.com/ytc/AIdro_l4ezbC_H6fM6Simi743mhE_y_9GhUGAO1SL4tKUNm2gFM=s68-c-k-c0x00ffffff-no-rj" alt="Channel DP" />
        <div className='videoInfo'>
          <h3>{info.snippet.title}</h3>
          <h5>{info.snippet.channelTitle}</h5>
          <ul>
            <li>{info.statistics.viewCount} Views</li>
            <li>5 years ago</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default VideoCard