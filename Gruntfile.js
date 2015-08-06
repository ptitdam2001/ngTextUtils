'use strict';

module.exports = function(grunt) {

    var dist_path = 'dist/';
    var src_path = 'src/';

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-angular-template-inline-js');
    grunt.loadNpmTasks('grunt-contrib-clean');

    function init(params) {
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),
            angular_template_inline_js: {
                options: {
                    basePath: __dirname
                },
                production: {
                    src:  src_path + '<%= pkg.name %>.js',
                    dest: 'dist/tmp.js'
                }
            },
            clean: {
                dist: [dist_path + "tmp.js"]
            },
            concat: {
                devCss: {
                    src:    [],
                    dest:   []
                }
            },
            jshint: {
                options: {
                    //force: true,
                    globalstrict: true,
                    //sub: true,
                    node: true,
                    loopfunc: true,
                    browser: true,
                    devel: true,
                    globals: {
                        angular: false,
                        $: false,
                        moment: false,
                        Pikaday: false,
                        module: false,
                        forge: false
                    }
                },
                beforeconcat:   {
                    options: {
                        force:	false,
                        ignores: ['**.min.js']
                    },
                    files: {
                        src: []
                    }
                },
                //quick version - will not fail entire grunt process if there are lint errors
                beforeconcatQ:   {
                    options: {
                        force:	true,
                        ignores: ['**.min.js']
                    },
                    files: {
                        src: ['**.js']
                    }
                }
            },
            uglify: {
                options: {
                    mangle: false
                },
                build: {
                    files:  {},
                    src: dist_path + 'tmp.js',
                    dest: dist_path + '<%= pkg.name %>.min.js'
                }
            },
            less: {
                development: {
                    options: {},
                    files: {
                        "dist/<%= pkg.name %>.css": src_path + "<%= pkg.name %>.less"
                    }
                }
            },
            cssmin: {
                dev: {
                    src: [dist_path + '<%= pkg.name %>.css'],
                    dest: dist_path + '<%= pkg.name %>.min.css'
                }
            }
        });

        grunt.registerTask('default', ['jshint:beforeconcatQ', /*'less:development', 'cssmin' , */'angular_template_inline_js:production', 'uglify:build', 'clean:dist']);

    }
    init({});
};