import { count } from './stores.js';
import Incrementer from './Incrementer.svelte';
import Decrementer from './Decrementer.svelte';
import Resetter from './Resetter.svelte';

export default function App()
{
    let count_value: number;

    const unsubscribe = count.subscribe(value =>
    {
        count_value = value;
    });

    <h1>The count is {count_value}</h1>;
    <Incrementer />;
    <Decrementer />;
    <Resetter />;
}