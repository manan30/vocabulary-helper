import React from 'react';
import WordSearchInput from './components/input';

function App() {
  return (
    <div className='grid place-items-center h-full'>
      <WordSearchInput
        label='word-search'
        placeholder='Please enter a word to search'
        required
      />
    </div>
  );
}

export default App;
