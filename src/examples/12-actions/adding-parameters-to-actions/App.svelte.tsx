import { longpress } from './longpress.js';
import { ConfigAction as action, ConfigEvent as event } from 'svelte-types';

export default function App()
{
    let pressed = false;
    let duration = 2000;

    <label>
        <input type="range" bindValue={duration} max={2000} step={100} />
        {duration}ms
    </label>;

    // we can rename imported config functions
    <button use={action(longpress, duration)}
        on={event({
            longpress: () => pressed = true,
            mouseenter: () => pressed = false
        })}
    >
        press and hold
    </button>;

    <if condition={pressed}>
        <p>congratulations, you pressed and held for {duration}ms</p>
    </if>
}