export interface ICat
{
    id: string;
    name: string;
}

export default function App()
{
    let cats: Array<ICat> = [
        { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
        { id: 'z_AbfPXTKms', name: 'Maru' },
        { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
    ];

    <h1>The Famous Cats of YouTube</h1>;

    <ul>
        <each from={cats}>
            {(cat: ICat, i: number) => (
                <li>
                    <a target="_blank" href={`https://www.youtube.com/watch?v=${cat.id}`}>
                        {i + 1}: {cat.name}
                    </a>
                </li>
            )}
        </each>
    </ul>;
}