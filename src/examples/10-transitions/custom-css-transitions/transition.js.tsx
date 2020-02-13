import { TransitionConfig } from 'svelte/transition';
import { elasticOut } from 'svelte/easing';

export function spin(node: HTMLElement, { duration }: { duration: number }): TransitionConfig
{
    return {
        duration,
        css: (t: number) =>
        {
            const eased = elasticOut(t);

            return `
                transform: scale(${eased}) rotate(${eased * 1080}deg);
                color: hsl(
                    ${~~(t * 360)},
                    ${Math.min(100, 1000 - 1000 * t)}%,
                    ${Math.min(50, 500 - 500 * t)}%
                );`
        }
    };
}