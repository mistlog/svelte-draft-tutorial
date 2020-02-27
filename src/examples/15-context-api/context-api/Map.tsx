import { onMount, setContext } from 'svelte';
import { mapbox, key } from './mapbox';

export interface IMapProps
{
    lat: number;
    lon: number;
    zoom: number;
}

export default function Map(props: IMapProps)
{
    const { lat, lon, zoom } = props;

    setContext(key, {
        getMap: () => map
    });

    let container;
    let map;


    onMount(() =>
    {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/mapbox-gl/dist/mapbox-gl.css';

        link.onload = () =>
        {
            map = new mapbox.Map({
                container,
                style: 'mapbox://styles/mapbox/streets-v9',
                center: [lon, lat],
                zoom
            });
        };

        document.head.appendChild(link);

        return () =>
        {
            map.remove();
            link.parentNode.removeChild(link);
        };
    });

    <div bindRef={container}>
        <if condition={map}>
            <slot></slot>
        </if>
    </div>
}