import './LightList.css'
import Switch from './Switch';

const LightList = (props) => {
    return (
        <ul>
            {props.lights.map(light => (
                <Switch
                    key={light.id}
                    mKey={light.id}
                    name={light.name}
                    isOn={light.state}
                />
            ))}
        </ul>
    );
}

export default LightList;