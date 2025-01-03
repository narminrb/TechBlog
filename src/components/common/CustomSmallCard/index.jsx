import React from 'react'

const CustomSmallCard = ({image,name}) => {
  return (
    <div class="flex flex-col bg-white rounded-xl">
    <div class="flex flex-col sm:flex-row  p-2 w-full text-center sm:text-left">
      <div class="flex-shrink-0  w-[50px] h-[50px] rounded-full overflow-hidden bg-gray-400 self-center">
      <img
        className="h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
          src={image}
          alt={name}
        />
      </div>
      <div class="flex flex-col p-2 pr-2 self-center">
        <h4 style={{color:"#65676b", fontSize:"18px", fontWeight:"700"}} class="text-xl font-light">{name}</h4>
      </div>
    </div>
  </div>
  )
}

export default CustomSmallCard