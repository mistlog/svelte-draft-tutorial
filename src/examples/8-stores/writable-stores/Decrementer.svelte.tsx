import { count } from './stores.js';

export default function Decrementer()
{
    function decrement()
    {
        count.update(n => n - 1);
    };

    <button onClick={decrement}>
        -
    </button>
}