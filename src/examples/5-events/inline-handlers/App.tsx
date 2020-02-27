export default function App()
{
    let m = { x: 0, y: 0 };

    <div onMouseMove={e => m = { x: e.clientX, y: e.clientY }}>
        inline: The mouse position is {m.x} x {m.y}
    </div>
}