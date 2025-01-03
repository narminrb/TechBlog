import React from 'react'
import { Link } from 'react-router-dom';

const CustomLeadership = ({ image, name, desc, url,author }) => {
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
            <h2 className='mt-[43px] font-semibold'>{author}</h2>
            <div class="flex items-center justify-between">
  <p class="mt-[3px] text-slate-500 text-[13px]">Jul 23 2022 2 min read</p>
  <ul class="flex space-x-2 social-share-transparent text-slate-500">
    <li>
      <a href="https://facebook.com/">
        <i class="ri-facebook-fill"></i>
      </a>
    </li>
    <li>
      <a href="https://twitter.com">
        <i class="ri-twitter-fill"></i>
      </a>
    </li>
    <li>
      <a href="https://instagram.com">
        <i class="ri-instagram-fill"></i>
      </a>
    </li>
    <li>
      <a href="https://linkedin.com">
        <i class="ri-linkedin-fill"></i>
      </a>
    </li>
  </ul>
</div>


        </div>
    </div>
</div>
  )
}

export default CustomLeadership