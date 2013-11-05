'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodeunit: {
            all: ['scripts/**/*<%= glob %>*_test.js', '!scripts/**/node_modules/**']
        },
        browserify: {
            options: { debug : '<%= debug %>'},
            build: {
                src: ['scripts/browser/index.js'],
                dest: 'public/index.js'
            }
        },
        uglify: {
            build: {
                src: ['public/index.js'],
                dest: 'public/index.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['browserify', 'uglify']);
    grunt.registerTask('debug', function () {
        grunt.config('debug', true);
        grunt.task.run('browserify');
    });

    grunt.registerTask('test', function (glob) {
        grunt.config('glob', glob);
        grunt.task.run('nodeunit');
    });
};