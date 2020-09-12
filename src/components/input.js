import React, { useState } from 'react';

function Input({ label, type, placeholder, required, onSubmit }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    e.persist();
    setInputValue(e.target.value);
  };

  return (
    <label htmlFor={label} className='w-2/4 text-center'>
      <input
        id={label}
        className='bg-white border border-gray-500 rounded-lg p-2 block appearance-none leading-normal w-full focus:outline-none focus:shadow-outline'
        type={type || 'text'}
        placeholder={placeholder || 'Enter text here'}
        required={required}
        value={inputValue}
        onChange={handleChange}
      />
    </label>
  );
}

export default Input;
