import React from 'react';
import './LightList.css'

import Light from './Light';

const LightList = (props) => {
    const filteredLights = props.lights.filter((light) => light.title.includes('lamp'));

    return (
        <ul className={'light-list'}>
            {filteredLights.length > 0 &&
             filteredLights.map(light => (
                <Light
                    key={light.id}
                    lightId={light.id}
                    name={light.title}
                    isOn={light.state}
                />
            ))}
            {filteredLights.length === 0 && <p>Keine Lichter vorhanden!</p>}
        </ul>
    );
}

export default LightList;