import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import { AutoSubscribe } from "svelte-types";

export default function App()
{
    const progress = tweened(0, {
        duration: 400,
        easing: cubicOut
    });

    let $progress = AutoSubscribe(progress);

    <progress value={$progress}></progress>;

    <button onClick={() => progress.set(0, {})}>
        0%
    </button>;

    <button onClick={() => progress.set(0.25, {})}>
        25%
    </button>;

    <button onClick={() => progress.set(0.5, {})}>
        50%
    </button>;

    <button onClick={() => progress.set(0.75, {})}>
        75%
    </button>;

    <button onClick={() => progress.set(1, {})}>
        100%
    </button>
}