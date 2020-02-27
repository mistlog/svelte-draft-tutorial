let current: HTMLAudioElement | null;

export interface IAudioPlayerProps
{
    src: string;
    title: string;
    composer: string;
    performer: string;
}
export default function AudioPlayer(props: IAudioPlayerProps)
{
    const { src, title, composer, performer } = props;

    let audio: HTMLAudioElement;
    let paused = true;

    function stopOthers()
    {
        console.log(current, audio);
        if (current && current !== audio)
        {
            current.pause();
        }
        current = audio;
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