Templates & Workflow
====================

Curated list of my development tools, libraries and processes. Minimalisim, and functional styles are preferred.

## Development Tools

* [TortoiseGit](https://code.google.com/p/tortoisegit/) - Interface to Git Version Control for Windows.
    * [msysgit](http://msysgit.github.io/) - Git for Windows.
* [Sublime Text 2](http://www.sublimetext.com/)
    * [Sublime Text Package Control](https://sublime.wbond.net/)
    * [Doc​Blockr](https://github.com/spadgos/sublime-jsdocs)
    * [HTML5](https://github.com/mrmartineau/HTML5)
    * [Markdown Preview](https://github.com/revolunet/sublimetext-markdown-preview)
    * [Pretty JSON](https://github.com/dzhibas/SublimePrettyJson)
    * [Sublime​Linter](https://github.com/SublimeLinter/SublimeLinter)
        * JSHint Options
```javascript
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
    * [NPM Status](http://status.npmjs.org/) - In rare case NPM goes down, you can get info here.
* [Browserify](http://browserify.org/) - Write your browser code with node.js-style requires.
    * Why? Require.js configurations are unwanted complexity. Async module loading was not a big enough benefit. Easier sharing of core modules between client and server is sweet.
* [Grunt](http://gruntjs.com/) - The JavaScript Task Runner.
    * [grunt-browserify](https://github.com/jmreidy/grunt-browserify)
    * [grunt-contrib-nodeunit](https://github.com/gruntjs/grunt-contrib-nodeunit)
    * [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)

### Tests
* [Nodeunit](https://github.com/caolan/nodeunit) - Simple syntax, powerful tools. Nodeunit provides easy async unit testing for node.js and the browser.
    * Why? It's simple, and has robust async support.

### Documentation
* [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
* [JSDoc](http://en.wikipedia.org/wiki/JSDoc) - JSDoc is a markup language used to annotate JavaScript source code files.
* [grunt-jsdoc](https://npmjs.org/package/grunt-jsdoc) - Integrates jsdoc3 generation into your Grunt build.

## Libraries
### Core
* [Lo-Dash](http://lodash.com/) - Utilities, functional patterns.
* [Moment.js](http://momentjs.com/) - Date library for parsing, validating, manipulating, and formatting dates.
### Browser
* [jQuery](http://jquery.com/) - HTML document traversal and manipulation, event handling, animation, and Ajax API that works across a multitude of browsers.
* [Bootstrap](http://getbootstrap.com/) - Sleek, intuitive, and powerful mobile first front-end framework for faster and easier web development.
### Server
* [express](http://expressjs.com/) - Express is a minimal and flexible node.js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications.
    * [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware) - Server automatically browserifies modules.
* [LevelUP](https://github.com/rvagg/node-levelup) - Fast & simple storage - a Node.js-style LevelDB wrapper.

## Server Tools

* [Forever](https://github.com/nodejitsu/forever) - A simple CLI tool for ensuring that a given script runs continuously.

## Profiling

* [Console API](https://developers.google.com/chrome-developer-tools/docs/console-api) - console.time, console.timeEnd