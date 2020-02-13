import Inner, { MessageEvent } from './Inner.svelte';

export default function App()
{
    function handleMessage(event: MessageEvent)
    {
        alert(event.detail.text);
    }; // ; is necessary here

    <Inner onMessage={handleMessage} />
}