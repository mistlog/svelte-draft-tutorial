import { tick } from 'svelte';

export default function App()
{
	let text = `Select some text and hit the tab key to toggle uppercase`;

	async function handleKeydown(event: Svelte.KeyboardEvent<HTMLTextAreaElement>) {
		if (event.which !== 9) return;

		event.preventDefault();

		const { selectionStart, selectionEnd, value } = this;
		const selection = value.slice(selectionStart, selectionEnd);

		const replacement = /[a-z]/.test(selection)
			? selection.toUpperCase()
			: selection.toLowerCase();

		text = (
			value.slice(0, selectionStart) +
			replacement +
			value.slice(selectionEnd)
		);

		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}

    <textarea value={text} onKeyDown={handleKeydown}></textarea>
}