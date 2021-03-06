import Inner, { MessageEvent } from './Inner';

export default function App()
{
    function handleMessage(event: MessageEvent)
    {
        alert(event.detail.text);
    }; // ; is necessary here

    <Inner onMessage={handleMessage} />
}