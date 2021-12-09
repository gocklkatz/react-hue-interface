import React from 'react';
import './App.css';
import LightList from './components/LightList';

function App() {

  /*
  const [lightName, setLightName] = useState('');
  const [lightStateOn, setLightStateOn] = useState(false);

  const buttonClickHandler = () => {
    fetch('https://10.0.0.115/api/' + properties.key + '/lights')
    .then(res => res.json())
    .then(data => {
      setLightName(data["2"].name);
    })
    .catch(console.log)
  }
  */

  const dummyLights = [
    {
      id: 2,
      name: 'Küchenlampe',
      state: false
    },
    {
      id: 7,
      name: 'Hue ambiance lamp 2',
      state: false
    }
  ]

  return (
    <LightList lights={dummyLights} />
  );
}

export default App;