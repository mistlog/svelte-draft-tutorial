import { time } from './stores.js';
import { AutoSubscribe } from 'svelte-types';

export default function App()
{
	let $time = AutoSubscribe(time);
	
	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

    <h1>The time is {formatter.format($time)}</h1>
}