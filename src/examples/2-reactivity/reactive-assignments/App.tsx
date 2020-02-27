export default function App()
{
	let count = 0;

	function handleClick() {
		count += 1;
	}

    <button onClick={handleClick}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
}