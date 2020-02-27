export type PannableEvent = "panstart" | "panmove" | "panend";

export type PanStartEvent = {
    detail: { x: number, y: number }
}

export type PanEndEvent = {
    detail: { x: number, y: number }
}

export type PanMoveEvent = {
    detail: { x: number, y: number, dx: number, dy: number }
}

// TODO: support camel case?
export interface IPannableEventMap
{
    "panstart"?: (event: PanStartEvent) => void;
    "panmove"?: (event: PanMoveEvent) => void;
    "panend"?: (event: PanEndEvent) => void;
    [key: string]: Function;
}

export function pannable(node: HTMLElement)
{
    let x: number;
    let y: number;

    function handleMousedown(event: MouseEvent)
    {
        x = event.clientX;
        y = event.clientY;

        node.dispatchEvent(new CustomEvent('panstart', {
            detail: { x, y }
        }));

        window.addEventListener('mousemove', handleMousemove);
        window.addEventListener('mouseup', handleMouseup);
    }

    function handleMousemove(event: MouseEvent)
    {
        const dx = event.clientX - x;
        const dy = event.clientY - y;
        x = event.clientX;
        y = event.clientY;

        node.dispatchEvent(new CustomEvent('panmove', {
            detail: { x, y, dx, dy }
        }));
    }

    function handleMouseup(event: MouseEvent)
    {
        x = event.clientX;
        y = event.clientY;

        node.dispatchEvent(new CustomEvent('panend', {
            detail: { x, y }
        }));

        window.removeEventListener('mousemove', handleMousemove);
        window.removeEventListener('mouseup', handleMouseup);
    }

    node.addEventListener('mousedown', handleMousedown);

    return {
        destroy()
        {
            node.removeEventListener('mousedown', handleMousedown);
        }
    };
}