//@ts-ignore: there is no type file for this lib
import Eliza from 'elizabot';
import { beforeUpdate, afterUpdate } from 'svelte';

export interface IComment
{
	author: string;
	text: string;
	placeholder?: boolean;
}

export default function App()
{

	let div: HTMLDivElement;
	let autoscroll: boolean;

	beforeUpdate(() =>
	{
		autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
	});

	afterUpdate(() =>
	{
		if (autoscroll) div.scrollTo(0, div.scrollHeight);
	});

	const eliza = new Eliza();

	let comments: Array<IComment> = [
		{ author: 'eliza', text: eliza.getInitial() }
	];

	function handleKeydown(event: Svelte.KeyboardEvent<HTMLInputElement> & { target: { value: string } })
	{
		if (event.which === 13)
		{
			const text = event.target.value;
			if (!text) return;

			comments = comments.concat({
				author: 'user',
				text
			});

			event.target.value = '';

			const reply = eliza.transform(text);

			setTimeout(() =>
			{
				comments = comments.concat({
					author: 'eliza',
					text: '...',
					placeholder: true
				});

				setTimeout(() =>
				{
					comments = comments.filter(comment => !comment.placeholder).concat({
						author: 'eliza',
						text: reply
					});
				}, 500 + Math.random() * 500);
			}, 200 + Math.random() * 200);
		}
	}

	<div class="chat">
		<h1>Eliza</h1>

		<div class="scrollable" bindRef={div}>
			<each from={comments}>
				{(comment: IComment) => (
					<article class={comment.author}>
						<span>{comment.text}</span>
					</article>
				)}
			</each>
		</div>

		<input onKeyDown={handleKeydown} />
	</div>
}