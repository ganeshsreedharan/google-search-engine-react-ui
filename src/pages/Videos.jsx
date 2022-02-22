import React from 'react'
import ReactPlayer from 'react-player'
import { useStateContext } from '../contexts/SearchContextProvider';

const Videos = () => {
    const { results } = useStateContext();
  return (
      
    <div className="flex flex-wrap ">
    {results?.results?.map((video, index) => (
      <div key={index} className="p-2">
        <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" />
      </div>
    ))}
  </div>
  )
}

export default Videos