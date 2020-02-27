import { fade, fly } from 'svelte/transition';
import { ConfigTransition as t } from 'svelte-types';

export default function App()
{
    let visible = true;

    <label>
        <input type="checkbox" bindChecked={visible} />
        visible
    </label>;

    // the config function doesn't matter 
    // thus we can use any name such as just "t" for simplicity
    <if condition={visible}>
        <p in={t(fly, { y: 200, duration: 2000 })} out={t(fade)}>
            Flies in, fades out
	    </p>
    </if>
}