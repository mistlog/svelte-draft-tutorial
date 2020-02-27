import marked from 'marked';

export default function App()
{
	let value = `Some words are *italic*, some are **bold**`;

    <textarea bindValue={value}></textarea>;

    <p>{marked(value)}</p>
}