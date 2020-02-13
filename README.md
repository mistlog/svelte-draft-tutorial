# Svelte Draft Tutorial

This project is typescript version of examples in https://svelte.dev/tutorial, and is used to demonstrate how to use [svelte-draft](https://github.com/mistlog/svelte-draft) to develop svelte app with full power of typescript.


## Run

```
> npm install
> npm run dev
```

Change path in ```main.js``` to switch to another example, default one is:

``` typescript
import App from './examples/10-transitions/custom-css-transitions/App.svelte';
```

### Need help

If build failed, see 
* https://github.com/mistlog/svelte-draft-template/issues/3
* https://github.com/sveltejs/svelte/issues/3677#issuecomment-585496141.

Temp fix:

```
> npm install
> npm run transcribe:watch
```

then, in another window:
```
> npx rollup -c -w
```

## License

This project is [MIT licensed](https://github.com/mistlog/svelte-draft-tutorial/blob/master/LICENSE).