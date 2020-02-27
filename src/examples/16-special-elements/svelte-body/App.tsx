export default function App()
{
    let hereKitty = false;

    const handleMouseenter = () => hereKitty = true;
    const handleMouseleave = () => hereKitty = false;


    <svelte-body
        onMouseEnter={handleMouseenter}
        onMouseLeave={handleMouseleave}
    />;

    <img
        class={hereKitty ? "curious" : ""}
        alt="Kitten wants to know what's going on"
        src="https://svelte.dev/tutorial/kitten.png"
    />
}