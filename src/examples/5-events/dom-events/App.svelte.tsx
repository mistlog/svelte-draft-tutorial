export default function App()
{
    let m = { x: 0, y: 0 };

    function handleMousemove(event: Svelte.MouseEvent<HTMLDivElement, MouseEvent>)
    {
        m.x = event.clientX;
        m.y = event.clientY;
    }

    <div onMouseMove={handleMousemove}>
        The mouse position is {m.x} x {m.y}
    </div>
}