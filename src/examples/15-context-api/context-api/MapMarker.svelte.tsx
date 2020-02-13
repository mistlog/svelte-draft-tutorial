import { getContext } from 'svelte';
import { mapbox, key } from './mapbox.js';

export interface IMapMarkerProps
{
    lat: number;
    lon: number;
    label: string;
}

export default function MapMarker(props: IMapMarkerProps)
{
    const {lat, lon, label} = props;

    const { getMap } = getContext(key);
    const map = getMap();

    const popup = new mapbox.Popup({ offset: 25 })
        .setText(label);

    const marker = new mapbox.Marker()
        .setLngLat([lon, lat])
        .setPopup(popup)
        .addTo(map);
}