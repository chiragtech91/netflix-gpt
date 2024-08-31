import React, { useState } from 'react'
import { SEARCH_FILTERS } from '../utils/constants';

const VideoFilters = () => {
  const filterList = SEARCH_FILTERS;

  return (
    <div className='filters'>
      {filterList .map((x, index)=> <button key={index} className="btn btn-outline-dark btn-light">{x}</button>)}
      
    </div>
  )
}

export default VideoFilters