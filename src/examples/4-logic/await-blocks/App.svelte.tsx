export default function App()
{
    let promise = getRandomNumber();

    async function getRandomNumber()
    {
        const res = await fetch(`https://svelte.dev/tutorial/random-number`);
        const text = await res.text();

        if (res.ok)
        {
            return text;
        } else
        {
            throw new Error(text);
        }
    }

    function handleClick()
    {
        promise = getRandomNumber();
    }

    <button onClick={handleClick}>
        generate random number
    </button>;

    <await>
        {{
            loading: <p>...waiting</p>,
            promise: promise
                .then(number => <p>The number is {number}</p>)
                .catch((error: Error) => <p style="color: red">{error.message}</p>)
        }}
    </await>

}