import App from "./examples/2-reactivity/reactive-declarations/App";
// import App from "./examples/lib-sveltestrap/App";
// import App from "./examples/lib-svelte-routing/App";

import { createRenderFunction } from 'svelte-draft/utility';

const render = createRenderFunction(document.body, App, null);

export default render;