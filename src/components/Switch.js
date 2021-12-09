import React, { useState } from 'react';
import './Switch.css';
import { properties } from '../key.js'

const Switch = ({ mKey, name, isOn }) => {
  const [lightState, setLightState] = useState(false);

  const clickHandler = () => {
    const url = 'https://10.0.0.115/api/' + properties.key + '/lights/' + mKey + '/state';

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({ on: !lightState })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.log)

    setLightState((prevState) => {
      return !prevState;
    });
  }

  return (
    <li>
      {name}: &nbsp;
      <input
        checked={lightState}
        onChange={clickHandler}
        id={`react-switch-new`}
        type="checkbox"
      />
    </li>
  );
};

export default Switch;