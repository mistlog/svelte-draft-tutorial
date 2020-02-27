import { ConfigProps } from "svelte-types";

export interface IHoverableProps
{

}

export interface ISlotProps
{
    hovering?: boolean;
}

export default function Hoverable(props: IHoverableProps)
{
    let hovering: boolean;

    function enter()
    {
        hovering = true;
    }

    function leave()
    {
        hovering = false;
    }

    <div onMouseEnter={enter} onMouseLeave={leave}>
        <slot props={ConfigProps<ISlotProps>({ hovering: hovering })} ></slot>
    </div>
}