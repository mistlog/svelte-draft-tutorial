export default function App()
{
    let numbers = [1, 2, 3, 4];

    function addNumber()
    {
        numbers = [...numbers, numbers.length + 1];
    }

    let sum;

    //@ts-ignore
    <TrackChange/>;

    <p>{numbers.join(' + ')} = {sum}</p>;

    <button onClick={addNumber}>
        Add a number
    </button>;
}

function TrackChange(sum: number, numbers: Array<number>)
{
    "use watch";
    
    sum = numbers.reduce((t, n) => t + n, 0);
}