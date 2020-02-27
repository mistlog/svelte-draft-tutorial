import { fade } from 'svelte/transition';
import { ConfigTransition } from 'svelte-types';

export default function App()
{
    let visible = true;

    <label>
        <input type="checkbox" bindChecked={visible} />
        visible
    </label>;

    <if condition={visible}>
        <p transition={ConfigTransition(fade)}>
            Fades in and out
	    </p>
    </if>
}