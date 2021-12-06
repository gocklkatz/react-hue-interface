/* https://upmostly.com/tutorials/build-a-react-switch-toggle-component */

import React from 'react';
import './Switch.css';

const Switch = ({ name, isOn, handleToggle }) => {
    return (
      <>
        {name}: &nbsp;
        <input
          checked={isOn}
          onChange={handleToggle}
          id={`react-switch-new`}
          type="checkbox"
        />
      </>
    );
  };
  
  export default Switch;