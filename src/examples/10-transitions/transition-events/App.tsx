import { fly } from 'svelte/transition';
import { ConfigTransition } from 'svelte-types';

export default function App()
{
    let visible = true;
    let status = 'waiting...';

    <p>status: {status}</p>;

    <label>
        <input type="checkbox" bindChecked={visible} />
        visible
    </label>;

    <if condition={visible}>
        <p
            transition={ConfigTransition(fly, { y: 200, duration: 2000 })}
            onIntroStart={() => status = 'intro started'}
            onOutroStart={() => status = 'outro started'}
            onIntroEnd={() => status = 'intro ended'}
            onOutroEnd={() => status = 'outro ended'}
        >
            Flies in and out
        </p>
    </if>
}