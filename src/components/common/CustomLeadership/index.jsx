import React from 'react'
import { Link } from 'react-router-dom';

const CustomLeadership = ({ image, name, desc, url }) => {
  return (
    <div className="w-full  overflow-hidden  mb-5">
    <div className="md:flex">
          <div
        style={{
          borderRadius: '8px',
          height: '250px',
          objectFit: 'cover',
          width: '295px',
          overflow: 'hidden',
        }}
        className="flex-none overflow-hidden"
      >
        <img
          className="h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
          src={image}
          alt={name}
        />
      </div>
        <div className="ml-4 p-8 rounded-xl bg-white shadow-md w-full"  style={{
                border: '1px solid #f0f2f5',
                padding: '32px 30px',
                flexGrow: 1,
              }}>
            <div style={{color:'#d93e40',fontSize:'13px'}} className=" mb-4 uppercase text-[14px] tracking-wide text-indigo-500 font-semibold">{name}</div>
            <Link to="#" class="block mt-1 text-[24px] leading-tight font-bold text-black hover:underline">{desc}
            </Link>
            <p className="mt-[46px] text-slate-500">Looking to take your team away on a 
            </p>
        </div>
    </div>
</div>
  )
}

export default CustomLeadership