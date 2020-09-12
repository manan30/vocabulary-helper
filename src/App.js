import React from 'react';

function App() {
  return (
    <div className='grid place-items-center h-full'>
      <label htmlFor='word' className='w-2/4 text-center'>
        {/* Word Search */}
        <input
          id='word'
          className='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal w-full'
          type='text'
          placeholder='Please enter a word to search'
        />
      </label>
    </div>
  );
}

export default App;
