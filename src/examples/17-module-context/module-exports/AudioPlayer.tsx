const elements = new Set<HTMLAudioElement>();

export function stopAll()
{
    elements.forEach(element =>
    {
        element.pause();
    });
}

export interface IAudioPlayerProps
{
    src: string;
    title: string;
    composer: string;
    performer: string;
}

import { onMount } from 'svelte';

export default function AudioPlayer(props: IAudioPlayerProps)
{
    const { src, title, composer, performer } = props;

    let audio: HTMLAudioElement;
    let paused = true;

    onMount(() =>
    {
        elements.add(audio);
        return () => elements.delete(audio);
    });

    function stopOthers()
    {
        elements.forEach(element =>
        {
            if (element !== audio) element.pause();
        });
    }

    <article class={paused ? "" : "playing"}>
        <h2>{title}</h2>
        <p><strong>{composer}</strong> / performed by {performer}</p>

        <audio
            bindRef={audio}
            bindPaused={paused}
            onPlay={stopOthers}
            controls
            src={src}
        />
    </article >
}