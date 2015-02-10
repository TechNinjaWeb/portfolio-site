module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        express: {
            dev: {
                options: {
                    script: './server.js'
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['public/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            express: {
                files: ['**/*.js', '**/*.html'],
                tasks: ['jshint', 'express:dev'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        browserSync: {
            bsFiles: {
                src: 'assets/css/*.css'
            },
            options: {
                server: {
                    baseDir: "./"
                },
                watchTask: true
            }
        },
        open: {
            all: {
                path: 'http://localhost:3000/',
                options: {
                    openOn: 'serverListening',
                    target: 'http://localhost:8000', // target url to open
                    appName: 'open', // name of the app that opens, ie: open, start, xdg-open
                    callback: function() {
                            console.log("app opened")
                        } // called when the app has opened
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    base: './'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('test', ['jshint', 'qunit']);

    grunt.registerTask('server', ['express:dev', 'connect', 'open:dev']);

    grunt.registerTask('custom', ['server', 'watch']);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'watch']);

};