export default function App()
{
    let html = '<p>Write some text!</p>';

    <div contentEditable="true" bindInnerHTML={html}></div>;
    <pre>{html}</pre>;
}