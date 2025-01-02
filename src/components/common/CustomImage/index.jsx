import React from 'react';

const CustomImage = ({ image, name, desc, url }) => {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full h-full p-4">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="absolute bg-gradient-to-t from-gray-900 via-gray-900/40"></div>

      <div className="relative z-10 p-8">
        <h3 className="text-[16px] text-white">{name}</h3>
        <div className="mt-1 text-[30px] font-bold leading-8 text-white">{desc}</div>
      </div>
    </article>
  );
};

export default CustomImage;
