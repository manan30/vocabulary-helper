import React, { useEffect, useState } from 'react';

function Input({
  label,
  type,
  placeholder,
  required,
  ready,
  callback,
  disabled
}) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(true);

  const handleChange = (e) => {
    e.persist();
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!isFocused || ready) callback(inputValue);
  }, [isFocused, callback, inputValue, ready]);

  return (
    <label htmlFor={label} className='w-2/4 text-center'>
      <input
        id={label}
        className={`bg-white border border-gray-500 rounded-lg p-2 block appearance-none leading-normal w-full focus:outline-none focus:shadow-outline text-base`.concat(
          disabled ? ' cursor-not-allowed' : ''
        )}
        type={type || 'text'}
        placeholder={placeholder || 'Enter text here'}
        required={required}
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </label>
  );
}

export default Input;
