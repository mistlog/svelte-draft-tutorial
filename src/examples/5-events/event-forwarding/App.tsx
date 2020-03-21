import Outer from "./Outer";
import { MessageEvent } from "./Inner";

export default function App()
{
    function handleMessage(event: MessageEvent)
    {
        alert("event-forwarding: " + event.detail.text);
    }; // ; is necessary here

    <Outer onMessage={handleMessage} />
}