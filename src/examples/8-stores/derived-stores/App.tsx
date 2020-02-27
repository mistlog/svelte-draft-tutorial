import { time, elapsed } from './stores';
import { AutoSubscribe } from 'svelte-types';

export default function App()
{
    let $time = AutoSubscribe(time);
    let $elapsed = AutoSubscribe(elapsed)
    
    const formatter = new Intl.DateTimeFormat('en', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
    });

    <h1>The time is {formatter.format($time)}</h1>;

    <p>
        This page has been open for {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
    </p>;
}