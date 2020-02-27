import { createEventDispatcher } from 'svelte';

export interface IInnerProps
{
    // boolean:  for event forwarding
    onMessage: boolean | ((event: MessageEvent) => void);
}

export type MessageEvent = Svelte.MouseEvent<HTMLButtonElement, MouseEvent> & IMessageData;

export interface IMessageData
{
    detail: {
        text: string;
    }
}

export default function Inner(props: IInnerProps)
{
    const dispatch = createEventDispatcher();

    function sayHello()
    {
        dispatch('message', {
            text: 'Hello!'
        });
    }

    <button onClick={sayHello}>
        Click to say hello
    </button>
}