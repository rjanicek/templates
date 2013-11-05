Website Template
================

```index.js```      - Main Node.js script that runs on server.  
```package.json```  - [reference](https://npmjs.org/doc/json.html)  
```Gruntfile.js```  - [reference](http://gruntjs.com/sample-gruntfile)  
```/public```       - Public website files.  
```/scripts```      - JavaScript modules.  
```/scripts/browser```  - Browser CommonJS modules. These run only in the browser client.  
```/scripts/core```     - Core CommonJS modules. Reference these from browser or node modules.  
```/scripts/node```     - Node CommonJS modules. These run only on the website server.  

Tests can go anywhere inside scripts directory and end with _test.js

Two ways to build browser client modules:

1. They are automatically built by Express [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware). Just save changes and refresh browser. This works well for development.
2. Grunt tasks to build client modules. You may prefer to use this for production.

All of the following commands should be run from command prompt inside website directory.

Setup:
```bash
npm install
```

Test all ```*_test.js```:
```bash
grunt test
```

Test specific ```*pattern*_test.js```:
```bash
grunt test:pattern
```

Start:
```bash
node index
```

Debug Build:
```bash
grunt debug
```

Build:
```bash
grunt
```