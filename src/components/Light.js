import React, {useState} from 'react';
import './Light.css';

import { properties } from '../key.js'

const Light = ({ lightId, name, isOn }) => {
  const [lightState, setLightState] = useState(isOn);

  const onChangeHandler = () => {
    const url = 'https://10.0.0.115/api/' + properties.key + '/lights/' + lightId + '/state';

    fetch(url, {
      method: 'PUT',
      body: JSON.stringify({ on: !lightState })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.log)

    setLightState(prevState => !prevState);
  } 

  return (
    <li className='light'>
      <input
        id={`react-light-` + lightId}
        type="checkbox"
        checked={lightState}
        onChange={onChangeHandler}        
      />
      <label htmlFor={`react-light-` + lightId}>
        {name}
      </label>
    
    </li>
  );
};

export default Light;