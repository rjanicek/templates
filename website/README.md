Website Template
================

`index.js`      - Main Node.js script that runs on server.  
`package.json`  - [reference](https://npmjs.org/doc/json.html)
`test.js`       - Test runner.
`/public`       - Public website files.  
`/scripts`      - JavaScript modules.  
`/scripts/browser`  - Browser CommonJS modules. These run only in the browser client.  
`/scripts/core`     - Core CommonJS modules. Reference these from browser or node modules.  
`/scripts/node`     - Node CommonJS modules. These run only on the website server.  

Tests can go anywhere inside `scripts` directory and end with `_test.js`

Two ways to build browser client modules:

1. They are automatically built by Express [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware). Just save changes and refresh browser. This works well for development.
2. Grunt tasks to build client modules. You may prefer to use this for production.

All of the following commands should be run from command prompt inside website directory.

Setup Dev:
```bash
npm install
```

Setup Production:
```bash
npm install --production
```

Test all `*_test.js`:
```bash
node test
```

Test specific `*pattern*_test.js`:
```bash
node test pattern
```

Start:
```bash
npm start
```

Debug Build:
```bash
npm run build-debug
```

Build:
```bash
npm run build
```