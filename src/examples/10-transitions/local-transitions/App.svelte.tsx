import { slide } from 'svelte/transition';
import { ConfigTransition } from 'svelte-types';

export default function App()
{
    let showItems = true;
    let i = 5;
    let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];


    <label>
        <input type="checkbox" bindChecked={showItems} />
        show list
    </label>;

    <label>
        <input type="range" bindValue={i} max={10} />
    </label>;

    <if condition={showItems}>
        <each from={items.slice(0, i)}>
            {(item: string) => (
                <div localTransition={ConfigTransition(slide)}>
                    {item}
                </div>
            )}
        </each>
    </if>
}