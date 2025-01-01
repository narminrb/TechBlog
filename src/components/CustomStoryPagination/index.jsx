import React from 'react';
import { Link } from 'react-router-dom';

const CustomStoryPagination = ({ image, name, desc, url }) => {
  return (
    <div className="flex w-full md:max-w-xl mx-4 rounded shadow flex-nowrap">
      <Link
        to={url}
        className="w-full flex justify-center font-medium rounded-l px-5 py-2 border bg-white text-gray-800 border-gray-200 hover:bg-gray-100"
      >
        {name}
      </Link>
    </div>
  );
};

export default CustomStoryPagination;
