import React from 'react';

const CustomDesign = ({ image, name, desc }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden w-full max-w-[600px] mx-auto">
      <div className="overflow-hidden">
        <div className="pt-5 pb-5">
          <div className="px-5 py-4">
            <div style={{ color: '#d93e40' }} className="text-[16px] mb-2">
              {name}
            </div>
            <p className="text-[20px] md:text-[26px] text-black font-bold leading-7">
              {desc}
            </p>
          </div>
        </div>
        <div className="relative w-full h-[200px] md:h-[338px] overflow-hidden">
          <img
            className="absolute object-center h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
            loading="lazy"
            src={image}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomDesign;
