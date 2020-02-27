import { count } from './stores';
import Incrementer from './Incrementer';
import Decrementer from './Decrementer';
import Resetter from './Resetter';

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