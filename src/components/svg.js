import React from 'react';
import ReadingSVG from '../assets/svg/reading.svg';

function Svg() {
  return (
    <div className='grid place-items-center h-full w-full bg-gray-200 rounded-full'>
      <ReadingSVG className='h-full w-full transform scale-75' />
    </div>
  );
}

export default Svg;
