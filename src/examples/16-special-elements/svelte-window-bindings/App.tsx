export default function App()
{
    const layers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    let y: number;

    <svelte-window bindScrollY={y} />;

    <a class="parallax-container" href="https://www.firewatchgame.com">
        <each from={layers}>
            {(layer: number) => (
                <img
                    style={`transform: translate(0,${-y * layer / (layers.length - 1)}px)`}
                    src={`https://www.firewatchgame.com/images/parallax/parallax${layer}.png`}
                    alt={`parallax layer ${layer}`}
                />
            )}
        </each>
    </a>;

    <div class="text">
        <span style={`opacity: ${1 - Math.max(0, y / 40)}`}>
            scroll down
	    </span>
        <div class="foreground">
            You have scrolled {y} pixels
	    </div>
    </div>
}