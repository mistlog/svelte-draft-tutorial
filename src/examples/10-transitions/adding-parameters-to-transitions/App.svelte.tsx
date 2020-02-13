import { fly } from 'svelte/transition';
import { ConfigTransition } from 'svelte-types';

export default function App()
{
    let visible = true;

    <label>
        <input type="checkbox" bindChecked={visible} />
        visible
    </label>;

    <if condition={visible}>
        <p transition={ConfigTransition(fly, { y: 200, duration: 2000 })}>
            Flies in and out
	    </p>
    </if>
}