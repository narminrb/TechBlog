import React from 'react'
import { Link } from 'react-router-dom';
const CustomInstagram = ({image,url}) => {
  return (
    <div class="relative w-[106px] h-[106px] rounded-xl overflow-hidden mb-2">
    <img class="absolute object-center h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110" loading="lazy" src={image}/>
    </div>
  )
}

export default CustomInstagram