import { fade } from 'svelte/transition';
import { ConfigTransition as t } from 'svelte-types';
import { spin } from './transition.js';

export default function App()
{
    let visible = true;

    <label>
        <input type="checkbox" bindChecked={visible} />
        visible
    </label>;

    <if condition={visible}>
        <div class="centered" in={t(spin, { duration: 8000 })} out={t(fade)}>
            <span>transitions!</span>
        </div>
    </if>
}
