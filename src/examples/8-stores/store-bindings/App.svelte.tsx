import { name, greeting } from './stores.js';
import { AutoSubscribe } from 'svelte-types';

export default function App()
{
    let $name = AutoSubscribe(name);
    let $greeting = AutoSubscribe(greeting);

    <h1>{$greeting}</h1>;
    <input bindValue={$name} />;

    <button onClick={() => $name += '!'}>
        Add exclamation mark!
    </button>
}