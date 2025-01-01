import React from 'react';

const CustomTopics = ({ image, name, desc, url }) => {
  return (
    <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl w-full h-full p-4">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>

      <div className="absolute  bg-gradient-to-t from-gray-900 via-gray-900/40"></div>

      <div className="relative z-10 p-1 text-center">
        <h3 className="text-[18px] font-bold text-white">{name}</h3>
      </div>
    </article>
  );
};

export default CustomTopics;
