import React, { Component, useState } from 'react';
import Switch from './components/Switch';
import { properties } from './key.js'
import './App.css';


function App() {
  const [lightStateOn, setLightStateOn] = useState(false);
  const [lights, setLights] = useState(false);

  fetch('https://10.0.0.115/api/' + properties.key + '/lights')
  .then(res => res.json())
  .then((data) => {
    setLights(data)
  })
  .catch(console.log)

  let lightName = '';
  if(Object.keys(lights).length !== 0) {
    lightName = lights["2"].name;
  }

  return (
    <div>
      <Switch
        name={lightName}
        isOn={lightStateOn}
        handleToggle={() => setLightStateOn(!lightStateOn)}
      />
    </div>
  );
}

/*
class App extends Component {

  state = {
    lights: {},
    lightStateOn: true
  }

  componentDidMount() {
    fetch('https://10.0.0.115/api/' + properties.key + '/lights')
    .then(res => res.json())
    .then((data) => {
      this.setState({ lights: data })
    })
    .catch(console.log)
  }

  render() {
    let lightName = '';
    if(Object.keys(this.state.lights).length !== 0) {
      lightName = this.state.lights["2"].name;
    }

    return (
      <div>
      <center><h1>Light List</h1></center>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{lightName}</h5>
          </div>
        </div>
    </div>
    );
  }
}
*/

export default App;
