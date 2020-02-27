export interface IFancyButtonProps
{
    onClick: (event: Svelte.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function FancyButton(props: IFancyButtonProps)
{
    <button onClick>
        Click me
    </button>
}