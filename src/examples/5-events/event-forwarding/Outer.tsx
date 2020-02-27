import Inner, { MessageEvent } from './Inner';

export interface IOuterProps
{
    onMessage: (event: MessageEvent) => void;
}

export default function Outer(props: IOuterProps)
{
    <Inner onMessage />
}