import Hoverable, { ISlotProps } from './Hoverable.svelte';

export default function App()
{
    <Hoverable>
        {({ hovering: active }: ISlotProps) => (
            <div class={active ? "active" : ""}>
                <if condition={active}>
                    <p>I am being hovered upon.</p>
                    <else>
                        <p>Hover over me!</p>
                    </else>
                </if>
            </div>
        )}
    </Hoverable>;

    <Hoverable>
        {({ hovering: active }: ISlotProps) => (
            <div class={active ? "active" : ""}>
                <if condition={active}>
                    <p>I am being hovered upon.</p>
                    <else>
                        <p>Hover over me!</p>
                    </else>
                </if>
            </div>
        )}
    </Hoverable>;

    <Hoverable>
        {({ hovering: active }: ISlotProps) => (
            <div class={active ? "active" : ""}>
                <if condition={active}>
                    <p>I am being hovered upon.</p>
                    <else>
                        <p>Hover over me!</p>
                    </else>
                </if>
            </div>
        )}
    </Hoverable>;
}