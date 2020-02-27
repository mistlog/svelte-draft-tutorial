export default function App()
{
    let key;
    let keyCode;

    function handleKeydown(event)
    {
        key = event.key;
        keyCode = event.keyCode;
    }

    <svelte-window onKeydown={handleKeydown} />;

    <div style="text-align: center">
        <if condition={key}>
            <kbd>{key === ' ' ? 'Space' : key}</kbd>
            <p>{keyCode}</p>
            <else>
                <p>Focus this window and press any key</p>
            </else>
        </if>
    </div>
}