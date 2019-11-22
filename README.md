Reproducible test repo for Webpack issue about stderr not being used to report errors.

This repo uses a custom/dummy "build tool" that mocks what other real build tools do when they wrap Webpack.

Execute `npm run build`, and notice the error message is not visible, because Webpack's messages all go to stdout whereas stderr stays empty.

```
$ npm run build

> webpack-nostderr@1.0.0 build /Users/nug/Dev/webpack-nostderr
> node my-build-tool.js

# Build has failed: Error: Command failed: webpack -d

# Error details below:

```

The error can be seen with `npx webpack -d`:
```
Hash: bf39fca7c3adfba85a58
Version: webpack 4.41.2
Time: 77ms
Built at: 2019-11-22 2:24:07 PM
  Asset      Size  Chunks             Chunk Names
main.js  4.21 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/index.js] 239 bytes {main} [built] [failed] [1 error]

ERROR in ./src/index.js 5:0
Module parse failed: Unexpected token (5:0)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
| 
| 
> 
```

But it cannot be extracted by a build tool calling `webpack` for us, and here lies the issue.
In this instance I'd like to see at least `Module parse failed: Unexpected token (5:0)` in stderr.

