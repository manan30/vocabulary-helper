import React from 'react';
import PropTypes from 'prop-types';
import ReadingSVG from '../assets/svg/reading.svg';
import LoadingSVG from '../assets/svg/loading.svg';
import ErrorSVG from '../assets/svg/error.svg';

function Svg({ type }) {
  return (
    <div className='grid place-items-center h-full w-full bg-gray-200 rounded-full'>
      {type === 'loading' && (
        <LoadingSVG className='h-full w-full transform scale-75' />
      )}
      {type === 'initial' && (
        <ReadingSVG className='h-full w-full transform scale-75' />
      )}
      {type === 'error' && (
        <ErrorSVG className='h-full w-full transform scale-75' />
      )}
    </div>
  );
}

Svg.propTypes = {
  type: PropTypes.string
};

Svg.defaultProps = {
  type: ''
};

export default Svg;
