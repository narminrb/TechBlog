import React from 'react';
import { Link } from 'react-router-dom';

const CustomCardVideo = ({ image, name, desc, url }) => {
  return (
    <div className='w-full h-full' style={{height: '100%',  width: '100%',overflow: 'hidden', position: 'relative', marginBottom: '20px'}}>
      <Link
        className="overflow-hidden  rounded-2xl   flex flex-col"
        to={url}
      >
        <div style={{
            borderRadius: '8px',
            height: '500px',
            objectFit: 'cover',
            width: '600px',
            overflow: 'hidden',
          }} className="inset-0 overflow-hidden">
        <img
        className="h-full w-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
          src={image}
          alt={name}
        />
        </div>
       <div style={{ padding: '1rem 0' }}>
  <h4 style={{ fontSize: '1rem',color:'#d93e40' }}>{name}</h4>
  <p
    style={{
      fontWeight: 'bold',
      marginTop: '0.5rem',
      color: '#FFFFFF',
      position: 'relative',
      display: 'inline',
      backgroundImage: 'linear-gradient(90deg, currentColor 0, currentColor)',
      backgroundSize: '0 2px',
      backgroundPosition: '0 95%',
      transition: 'background-size .25s cubic-bezier(.785,.135,.15,.86) 0s',
      padding: '.1% 0',
      backgroundRepeat: 'no-repeat',
      lineHeight:'1.2',
      fontSize: '2rem',
    }}
  >
    {desc}
  </p>
  <div style={{ marginTop: '1.25rem' }}></div>
</div>

      </Link>
    </div>
  );
};

export default CustomCardVideo;
