import React from 'react';
import { Link } from 'react-router-dom';

const CustomCard = ({ image, name, desc, url }) => {
  return (  
    <div class="max-w-2xl mx-auto mt-7">
    <div class="flex gap-3 bg-white overflow-hidden items-center justify-start">
        <div class="relative w-[100px] h-[100px] rounded-xl overflow-hidden">
            <img class="absolute object-center h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110" loading="lazy" src={image}/>
        </div>

        <div class="flex flex-col gap-2">

            <p  style={{ fontSize: '1rem',color:'#d93e40' }}>{name}</p>

            <p class="text-black w-[370px] text-[24px] leading-tight text-bold"
            style={{
              fontWeight: 'bold',
              marginTop: '0.5rem',
              color: '#4B5563',
              position: 'relative',
              display: 'inline',
              backgroundImage: 'linear-gradient(90deg, currentColor 0, currentColor)',
              backgroundSize: '0 2px',
              backgroundPosition: '0 95%',
              transition: 'background-size .25s cubic-bezier(.785,.135,.15,.86) 0s',
              padding: '.1% 0',
              backgroundRepeat: 'no-repeat',
              color: 'inherit',
              fontSize: '1.5rem',
              lineHeight:'1.2'
            }}
            >
                {desc}
            </p>

        </div>

    </div>
    <div className="border-b border-[#ced0d4] mt-7"></div>
</div>
  );
};

export default CustomCard;