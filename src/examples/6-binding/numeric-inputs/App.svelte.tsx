export default function App()
{
    let a = 1;
    let b = 2;

    <label>
        <input type="number" bindValue={a} min={0} max={10} />
        <input type="range" bindValue={a} min={0} max={10} />
    </label>;

    <label>
        <input type="number" bindValue={b} min={0} max={10} />
        <input type="range" bindValue={b} min={0} max={10} />
    </label>;

    <p>{a} + {b} = {a + b}</p>;
}