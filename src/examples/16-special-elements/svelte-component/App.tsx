import RedThing from './RedThing';
import GreenThing from './GreenThing';
import BlueThing from './BlueThing';

interface IOption
{
    color: string;
    component: Function;
}

export default function App()
{
    const options: Array<IOption> = [
        { color: 'red', component: RedThing },
        { color: 'green', component: GreenThing },
        { color: 'blue', component: BlueThing },
    ];

    let selected = options[0];

    <select bindValue={selected}>
        <each from={options}>
            {(option: IOption) => (
                <option value={option}>{option.color}</option>
            )}
        </each>
    </select>;

    <svelte-component this={selected.component} />
}