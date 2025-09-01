// MiddleComponent.js
import React, { useState } from 'react';

const MiddleComponent = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState('option1');
  const [dialogMessage, setDialogMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setDialogMessage(`You submitted: ${inputValue} with option: ${selectedOption}`);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter some text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: '10px' }}>
          <label>
            <input
              type="radio"
              name="options"
              value="option1"
              checked={selectedOption === 'option1'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Option 1
          </label>

          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="options"
              value="option2"
              checked={selectedOption === 'option2'}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            Option 2
          </label>
        </div>

        <div style={{ marginTop: '10px' }}>
          <button type="submit">Submit</button>
        </div>
      </form>

      {dialogMessage && (
        <div style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px', display: 'inline-block' }}>
          {dialogMessage}
        </div>
      )}
    </div>
  );
};

export default MiddleComponent;
