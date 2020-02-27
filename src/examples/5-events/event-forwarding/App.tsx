import Outer from "./Outer.svelte";
import { MessageEvent } from "./Inner.svelte";

export default function App()
{
    function handleMessage(event: MessageEvent)
    {
        alert("event-forwarding: " + event.detail.text);
    }; // ; is necessary here

    <Outer onMessage={handleMessage} />
}