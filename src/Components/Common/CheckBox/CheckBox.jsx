import React from 'react';

function CheckBox({ size, checked, onChange }) {
  const checkboxStyles = {
    width : size || '1rem',
    height : size || '1rem',
  };

  return (
    <div>
      <input
        type="checkbox"
        style={checkboxStyles}
        checked={checked}
        onChange={onChange}
      />
    </div>
  );
}

export default CheckBox;
