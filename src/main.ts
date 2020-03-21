import App from "./examples/10-transitions/custom-css-transitions/App";
// import App from "./examples/lib-sveltestrap/App";
// import App from "./examples/lib-svelte-routing/App";

import { createRenderFunction } from 'svelte-draft/utility';

const render = createRenderFunction(document.body, App, null);

export default render;