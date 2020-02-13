import Inner, { MessageEvent } from './Inner.svelte';

export interface IOuterProps
{
    onMessage: (event: MessageEvent) => void;
}

export default function Outer(props: IOuterProps)
{
    <Inner onMessage />
}