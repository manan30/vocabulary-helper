import React from 'react';
import WordSearchInput from './components/input';
import Svg from './components/svg';

function App() {
  return (
    <div className='flex items-center flex-col h-full'>
      <div className='text-5xl my-8'>Vocabulary Helper</div>
      <WordSearchInput
        label='word-search'
        placeholder='Please enter a word to search'
        required
      />
      <div className='mt-12 h-c-24 w-c-24'>
        <Svg />
      </div>
    </div>
  );
}

export default App;
