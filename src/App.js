import React, {useState, useEffect, useCallback} from 'react';
import './App.css';

import LightList from './components/LightList';

import { properties } from './key.js'

function App() {
  const [lights, setLights] = useState([]);

    /*
    {
      id: 2,
      name: 'Küchenlampe',
      state: true
    },
    {
      id: 7,
      name: 'Hue ambiance lamp 2',
      state: false
    }
    */

  const fetchLightsHandler = useCallback(async () => {
    try {
      const url = 'https://10.0.0.115/api/' + properties.key + '/lights';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      const loadedLights = [];
      for (const key in data) {
        loadedLights.push({
          id: key,
          title: data[key].name,
          state: data[key].state.on
        });
      }

      setLights(loadedLights);
    } catch (error) {
    }
  }, []);

  useEffect(() => {
    fetchLightsHandler();
  }, [fetchLightsHandler]);

  return (
    <LightList lights={lights} />
  );
}

export default App;
