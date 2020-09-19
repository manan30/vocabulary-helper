import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import WordSearchInput from '../components/input';
import Svg from '../components/svg';

function Index() {
  const [searchWord, setSearchWord] = useState('');
  const history = useHistory();
  const location = useLocation();

  // useEffect(() => {
  //   const enterKeyHandler = (e) => {
  //     if (e.keyCode !== 13) return;
  //     setReadyToSubmit(true);
  //     handleSearch();
  //     setReadyToSubmit(false);
  //   };
  //   document.addEventListener('keyup', enterKeyHandler);
  //   return () => {
  //     document.removeEventListener('keyup', enterKeyHandler);
  //   };
  // }, [handleSearch]);

  return (
    <div className='flex items-center flex-col'>
      <div className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center my-8 text-primary'>
        Vocabulary Helper
      </div>
      <div className='flex w-4/5 md:w-1/2 lg:w-1/2 lg:mx-24'>
        <div className='flex-auto'>
          <WordSearchInput
            label='word-search'
            placeholder='Please enter a word to search'
            callback={setSearchWord}
            // disabled={isLoading}
            required
          />
        </div>
        <button
          type='button'
          className={`ml-4 p-2 w-24 bg-primary rounded-lg text-white font-bold`.concat(
            false ? ' cursor-not-allowed' : ''
          )}
          // disabled={isLoading}
          onClick={() => history.push(searchWord)}
        >
          Search
        </button>
      </div>
      {location.pathname === '/' && (
        <div className='mt-12 h-48 w-48 sm:h-64 sm:w-64 md:h-c-24 md:w-c-24 lg:h-c-24 lg:w-c-24'>
          <Svg type='initial' />
        </div>
      )}
    </div>
  );
}

export default Index;
