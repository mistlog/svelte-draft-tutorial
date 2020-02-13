import { count } from './stores.js';

export default function Resetter()
{
    function reset()
    {
        count.set(0);
    };
    
    <button onClick={reset}>
        reset
    </button>
}