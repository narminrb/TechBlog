import React from 'react';

const CustomLast = ({ image, name }) => {
  return (
    <div className="w-full max-w-[190px] h-full max-h-[190px] rounded-md overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
      />
    </div>
  );
};

export default CustomLast;
