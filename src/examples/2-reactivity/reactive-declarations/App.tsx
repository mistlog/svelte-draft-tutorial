export default function App() {
    let count = 0;

    function handleClick() {
        count += 1;
    }

    let doubled: number;

    {
        "use watch";
        doubled = count * 2;
    }

    <button onClick={handleClick}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>;
    <p>{count} doubled is {doubled}</p>

}