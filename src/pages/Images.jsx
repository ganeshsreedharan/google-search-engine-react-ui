import React from 'react'
import { useStateContext } from '../contexts/SearchContextProvider';

const Images = () => {

    const { results } = useStateContext();
  return (
    <div className="flex flex-wrap justify-center items-center">
    {results?.image_results?.map(({ image, link: { href, title } }, index) => (
      <a href={href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
        <img src={image?.src} alt={title} loading="lazy" />
        <p className="sm:w-36 w-36 break-words text-sm mt-2">{title}</p>
      </a>
    ))}
  </div>
  )
}

export default Images