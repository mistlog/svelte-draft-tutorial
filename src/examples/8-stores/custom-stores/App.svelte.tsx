import { count } from './stores.js';
import { AutoSubscribe } from 'svelte-types';

export default function App()
{
    let $count = AutoSubscribe(count);
    
    <h1>The count is {$count}</h1>;

    <button onClick={count.increment}>+</button>;
    <button onClick={count.decrement}>-</button>;
    <button onClick={count.reset}>reset</button>;
}