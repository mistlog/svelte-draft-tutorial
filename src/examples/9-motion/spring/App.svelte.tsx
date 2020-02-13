import { spring } from 'svelte/motion';
import { AutoSubscribe } from 'svelte-types';

export default function App()
{
    let coords = spring({ x: 50, y: 50 }, {
        stiffness: 0.1,
        damping: 0.25
    });

    let size = spring(10);

    //
    let $coords = AutoSubscribe(coords);
    let $size = AutoSubscribe(size);
    
    //
    <div style="position: absolute; right: 1em;">
        <label>
            <h3>stiffness ({coords.stiffness})</h3>
            <input bindValue={coords.stiffness} type="range" min="0" max="1" step="0.01" />
        </label>

        <label>
            <h3>damping ({coords.damping})</h3>
            <input bindValue={coords.damping} type="range" min="0" max="1" step="0.01" />
        </label>
    </div>;

    <svg onMouseMove={e => coords.set({ x: e.clientX, y: e.clientY })} onMouseDown={() => size.set(30)} onMouseUp={() => size.set(10)}>
        <circle cx={$coords.x} cy={$coords.y} r={$size} />
    </svg>
}