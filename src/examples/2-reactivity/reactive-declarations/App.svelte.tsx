export default function App()
{
    <Count/>;

    let doubled;

    //@ts-ignore
    <TrackChange />;

    //@ts-ignore
    <Doubled />;
}

function Count()
{
    let count = 0;

    function handleClick()
    {
        count += 1;
    }

    <button onClick={handleClick}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
}

function TrackChange(count: number, doubled: number)
{
    "use watch";

    doubled = count * 2;
}

function Doubled(count: number, doubled)
{
    <p>{count} doubled is {doubled}</p>
}