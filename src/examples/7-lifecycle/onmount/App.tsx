import { onMount } from 'svelte';

export interface IPhoto
{
    thumbnailUrl: string;
    title: string;
}

export default function App()
{
    let photos = [];

    onMount(async () =>
    {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20`);
        photos = await res.json();
    });

    <h1>Photo album</h1>;

    <div class="photos">
        <if condition={photos.length === 0}>
            <p>loading...</p>
            <else>
                <each from={photos}>
                    {(photo: IPhoto) => (
                        <figure>
                            <img src={photo.thumbnailUrl} alt={photo.title} />
                            <figcaption>{photo.title}</figcaption>
                        </figure>)}
                </each>
            </else>
        </if>
    </div>
}
