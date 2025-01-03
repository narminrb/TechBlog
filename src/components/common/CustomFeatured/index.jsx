import React from 'react'

const CustomFeatured = ({image,desc}) => {
  return (
    <div className="flex flex-col justify-center w-[330px] h-[270px] items-center">
    <div className="bg-white rounded-lg  w-[330px] h-[220px] overflow-hidden">
        <img src={image} alt="Mountain" className=" h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110" />
    </div>
        <div className="">
            <p className="text-black font-semibold p-2 leading-tight mb-4">
                {desc}
            </p>
            
        </div>
    </div>
  )
}

export default CustomFeatured