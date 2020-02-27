import { count } from './stores';

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