import Thing from './Thing.svelte';

export interface IThing
{
    id: number;
    color: string;
}

export default function App()
{
    let things = [
        { id: 1, color: '#0d0887' },
        { id: 2, color: '#6a00a8' },
        { id: 3, color: '#b12a90' },
        { id: 4, color: '#e16462' },
        { id: 5, color: '#fca636' }
    ];

    function handleClick()
    {
        things = things.slice(1);
    }

    <button onClick={handleClick}>
        Remove first thing
    </button>;

    <each from={things}>
        {(thing: IThing, index: number, key = thing.id) => (
            <Thing current={thing.color} />
        )}
    </each>
}