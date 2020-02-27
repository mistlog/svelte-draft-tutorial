export default function App()
{
    let src = 'https://svelte.dev/tutorial/image.gif';
    let name = 'Rick Astley';

    <img src={src} alt={`${name} dances.`} />
}