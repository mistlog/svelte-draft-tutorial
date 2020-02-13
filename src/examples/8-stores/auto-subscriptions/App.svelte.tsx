import { count } from './stores.js';
import Incrementer from './Incrementer.svelte';
import Decrementer from './Decrementer.svelte';
import Resetter from './Resetter.svelte';
import { AutoSubscribe } from 'svelte-types';

export default function App()
{
    let $count = AutoSubscribe(count);

    <h1>auto subscribe: The count is {$count}</h1>;

    <Incrementer />;
    <Decrementer />;
    <Resetter />;
}