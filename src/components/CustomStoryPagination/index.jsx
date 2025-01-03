import React from 'react';
import { Link } from 'react-router-dom';

const CustomStoryPagination = ({ image, name, desc, url }) => {
  return (
    <div
      className="flex w-full  shadow flex-nowrap justify-center text-center"
      style={{
        border:"1px solid #ced0d4",
        borderRadius: '6px',
        padding: '10px 20px',
        height: '46px',
        alignItems:'center',
        fontWeight: '700',
        fontSize: '18px',
        color: '#878787',
        background: '#FFFFFF',
        outline: 'none',
        cursor: 'pointer',
      }}
    >
      <Link
        to={url}
        className=""
      >
        {name}
      </Link>
    </div>
  );
};

export default CustomStoryPagination;
