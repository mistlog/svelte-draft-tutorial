import { spring } from 'svelte/motion';
import { pannable, IPannableEventMap, PanStartEvent, PanMoveEvent, PanEndEvent } from './pannable.js';
import { ConfigAction, ConfigEvent } from 'svelte-types';

export default function App()
{
	const coords = spring({ x: 0, y: 0 }, {
		stiffness: 0.2,
		damping: 0.4
	});

	function handlePanStart(event: PanStartEvent) {
		coords.stiffness = coords.damping = 1;
	}

	function handlePanMove(event: PanMoveEvent) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
	}

	function handlePanEnd(event: PanEndEvent) {
		coords.stiffness = 0.2;
		coords.damping = 0.4;
		coords.set({ x: 0, y: 0 });
	}

    <div class="box"
        use={ConfigAction(pannable)}
        on={ConfigEvent<IPannableEventMap>({
            panstart: handlePanStart,
            panmove: handlePanMove,
            panend: handlePanEnd
        })}
        style="transform:
            translate({$coords.x}px,{$coords.y}px)
            rotate({$coords.x * 0.2}deg)"
    />
}