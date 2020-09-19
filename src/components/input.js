import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Input({ label, type, placeholder, required, callback, disabled }) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(true);

  const handleChange = (e) => {
    e.persist();
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!isFocused) callback(inputValue);
  }, [isFocused, callback, inputValue]);

  return (
    <label htmlFor={label} className='w-2/4 text-center'>
      <input
        id={label}
        className={`bg-white border border-gray-500 rounded-lg p-2 block appearance-none leading-normal w-full focus:outline-none focus:shadow-outline text-base`.concat(
          disabled ? ' cursor-not-allowed' : ''
        )}
        type={type}
        placeholder={placeholder}
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

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  callback: PropTypes.func,
  disabled: PropTypes.bool
};

Input.defaultProps = {
  label: '',
  type: 'text',
  placeholder: 'Enter text here',
  required: true,
  callback: () => {},
  disabled: false
};

export default Input;
