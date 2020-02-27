export default function App()
{
    let name = 'world';

    <input bindValue={name}/>;

    <h1>Hello {name}!</h1>;
}