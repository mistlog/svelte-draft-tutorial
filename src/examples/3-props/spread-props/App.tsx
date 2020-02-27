import Info from './Info';

export default function App()
{
	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};

    <Info {...pkg}/>
}