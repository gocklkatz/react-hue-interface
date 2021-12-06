 //alert(JSON.stringify(data, null, 4));
 //alert(Object.keys(this.state.lights["2"].modelid));

//import React, { useState } from 'react';
//import Switch from './components/Switch';
import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    lights: {}
  }

  componentDidMount() {
    fetch('https://10.0.0.115/api/<KEY>/lights')
    .then(res => res.json())
    .then((data) => {
      this.setState({ lights: data })
      //alert(this.state.lights["2"].name)
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

  /*
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <Switch
        name="Schlafzimmer"
        isOn={value}
        handleToggle={() => setValue(!value)}
      />
    </div>
  );
  */

export default App;
