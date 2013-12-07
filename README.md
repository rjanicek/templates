Templates & Workflow
====================

Curated list of my development tools, libraries and processes. Minimalism, and functional styles are preferred.

[Website Template](website/)

## Development Tools

* [TortoiseGit](https://code.google.com/p/tortoisegit/) - Interface to Git Version Control for Windows.
    * [msysgit](http://msysgit.github.io/) - Git for Windows.
* [Console](http://sourceforge.net/projects/console/) - Console is a Windows console window enhancement.
    * Some Node modules display special characters on the console that Windows is missing. To fix this:
        * Install `DejaVuSansMono.ttf` front from [DejaVu fonts](http://dejavu-fonts.org/wiki/Download)
        * Change font in Console settings to `DejaVuSansMono.ttf`.
* [Sublime Text 2](http://www.sublimetext.com/)
    * [Sublime Text Package Control](https://sublime.wbond.net/)
    * [Doc​Blockr](https://github.com/spadgos/sublime-jsdocs)
    * [HTML5](https://github.com/mrmartineau/HTML5)
    * [Markdown Preview](https://github.com/revolunet/sublimetext-markdown-preview)
    * [Pretty JSON](https://github.com/dzhibas/SublimePrettyJson)
    * [Sublime​Linter](https://github.com/SublimeLinter/SublimeLinter)
        * JSHint Options
```javascript
/* jshint 
    browser: true, jquery: true, node: true,
    bitwise: true, camelcase: true, curly: true, eqeqeq: true, es3: true, evil: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, noarg: true, noempty: true, nonew: true, quotmark: single, regexdash: true, strict: true, sub: true, trailing: true, undef: true, unused: vars, white: true
*/

                "browser": true,
                "jquery": true,
                "node": true,

                "bitwise": true,
                "camelcase": true,
                "curly": true,
                "eqeqeq": true,
                "es3": true,
                "evil": true,
                "forin": true,
                "immed": true,
                "indent": 4,
                "latedef": true,
                "newcap": true,
                "noarg": true,
                "noempty": true,
                "nonew": true,
                "quotmark": "single",
                "regexdash": true,
                "strict": true,
                "sub": true,
                "trailing": true,
                "undef": true,
                "unused": "vars",
                "white": true
```
* [Node.js](http://nodejs.org/) - JavaScript platform.
* [NPM](https://npmjs.org/)
    * [NPM Status](http://status.npmjs.org/) - In case NPM goes down, you can get info here.
    * [registry.npmjs.eu](http://npmjs.eu/) - NPM mirror.
* [Browserify](http://browserify.org/) - Write your browser code with node.js-style requires.
    * Why? Require.js configurations are unwanted complexity. Async module loading was not a big enough benefit. Easier sharing of core modules between client and server is sweet.
* [nodemon](http://rss.thepiratebay.org/207) - Restarts node if files change, for use during development of a node.js app.

### Tasks
* [NPM](https://npmjs.org)
    * Add simple tasks to package.json [`scripts`](https://npmjs.org/doc/misc/npm-scripts.html)
    * Run tasks with [`NPM run`](https://npmjs.org/doc/cli/npm-run-script.html)
    * More complex tasks, just make a module for that.
    * [glob](https://npmjs.org/package/glob) - Match files using the patterns the shell uses, like stars and stuff.
    * See: [task automation with npm run](http://substack.net/task_automation_with_npm_run)
    * What about [Grunt](http://gruntjs.com/)?
        * Most of the time, you don't need it.
        * Unnecessary complexity.
        * Grunt depends on special interface modules so you need to learn the module and the module's Grunt interface (and Grunt).

### Tests
* [Nodeunit](https://github.com/caolan/nodeunit) - Simple syntax, powerful tools. Nodeunit provides easy async unit testing for node.js and the browser.
    * Why? It's simple, and has robust async support.

### Documentation
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [JSDoc](http://en.wikipedia.org/wiki/JSDoc) - JSDoc is a markup language used to annotate JavaScript source code files.
    * [jsdoc](https://github.com/jsdoc3/jsdoc) - An API documentation generator for JavaScript. http://usejsdoc.org

### Components
* [rfile](https://npmjs.org/package/rfile) & [rfileify](https://npmjs.org/package/rfileify)
* Encapsulate all the things for the component.
* Inject into dom with jQuery.
* Component can have own package.json and dependencies.
* Weakness: You will need to re-build JS after changes to non JS files.
* Why? Works good enough and seems simpler then [Component](http://component.io/) or [Bower](http://bower.io/).

## Libraries

### Core
* [Lo-Dash](http://lodash.com/) - Utilities, functional patterns.
    * Template settings that work well with Sublime Text

```javascript
    _.templateSettings = {
        'evaluate' : /<~([\s\S]+?)~>/g,     // <~ ~>
        'interpolate' : /<=([\s\S]+?)~>/g,  // <= ~>
        'escape' : /<-([\s\S]+?)~>/g        // <- ~>
    };
```
* [Lazy.js](http://danieltao.com/lazy.js/) - Functional patterns faster then Lo-Dash because of lazy evaluation.
* [mori](http://swannodette.github.io/mori/) - A library for using ClojureScript's persistent data structures and supporting API from the comfort of vanilla JavaScript.
* [Moment.js](http://momentjs.com/) - Date library for parsing, validating, manipulating, and formatting dates.
* [JS-quantities](https://github.com/gentooboontoo/js-quantities) - Javascript port of Ruby Units for quantity calculation and unit conversion.
    * Beware, point and pica units are Traditional American instead of modern Desk Top Publishing standard of 72 / inch.
* [hpdf.js](https://github.com/manuels/hpdf.js) - Best PDF maker.

### Browser
* [jQuery](http://jquery.com/) - HTML document traversal and manipulation, event handling, animation, and Ajax API that works across a multitude of browsers.
* [Bootstrap](http://getbootstrap.com/) - Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.
    * [Bootstrap CDN](http://www.bootstrapcdn.com/) - The recommended CDN for Bootstrap, Font Awesome, and Bootswatch.
* [cookie-component](https://npmjs.org/package/cookie-component) - Client-Side Cookie Manipulation API

### Server
* [express](http://expressjs.com/) - Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.
    * [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware) - Server automatically browserifies modules.
        * Use environment variable NODE_ENV=production to set sensible defaults in production.
* [LevelUP](https://github.com/rvagg/node-levelup) - Fast & simple storage - a Node.js-style LevelDB wrapper.

## Server Tools
* [http-proxy](https://npmjs.org/package/http-proxy) - A full-featured http reverse proxy for node.js
* [Forever](https://github.com/nodejitsu/forever) - A simple CLI tool for ensuring that a given script runs continuously.
    * `sudo NODE_ENV=production forever start -a -l forever.log -o out.log -e err.log index.js`

## Profiling

* [Console API](https://developers.google.com/chrome-developer-tools/docs/console-api) - console.time, console.timeEnd

## Formative Articles
* [task automation with npm run](http://substack.net/task_automation_with_npm_run)
* [Functional Haxe](http://blackdog66.wordpress.com/toolbox/haxe-the-functional-parts/)
* [substack / stream-handbook](https://github.com/substack/stream-handbook)