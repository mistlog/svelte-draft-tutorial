import { count } from './stores';
import Incrementer from './Incrementer';
import Decrementer from './Decrementer';
import Resetter from './Resetter';
import { AutoSubscribe } from 'svelte-types';

export default function App()
{
    let $count = AutoSubscribe(count);

    <h1>auto subscribe: The count is {$count}</h1>;

    <Incrementer />;
    <Decrementer />;
    <Resetter />;
}