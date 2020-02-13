import { count } from './stores.js';

export default function Incrementer()
{
	function increment() {
		count.update(n => n + 1);
	};

    <button onClick={increment}>
        +
    </button>
}