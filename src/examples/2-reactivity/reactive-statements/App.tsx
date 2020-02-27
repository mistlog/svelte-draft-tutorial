export default function App()
{
	let count = 0;

    //@ts-ignore
	<AlertAndResetCount/>;

	function handleClick() {
		count += 1;
	}

    <button onClick={handleClick}>
        Clicked {count} {count === 1 ? 'time' : 'times'}
    </button>
}

function AlertAndResetCount(count: number)
{
    "use watch";
    
    if (count >= 10) {
		alert(`count is dangerously high!`);
		count = 9;
	}
}