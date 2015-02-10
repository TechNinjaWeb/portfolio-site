module.exports = function(grunt) {
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                options: {
                    separator: ';'
                },
                src: [
                    'public/<%= basename %>/**/*.js'
                ],
                dest: 'public/js/main.min.js'
            },
        },
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'public/js/main.min.js': ['public/js/main.min.js']
                }
            }
        },
        less: {
            style: {
                files: {
                    "public/css/style.css": "less/style.less"
                }
            }
        },
        watch: {
            js: {
                files: [
                    'public/*.js',
                    'public/js/*.js',
                    'public/controllers/*.js',
                    'public/services/*.js',
                    'public/data/*.js',
                    'public/directives/*.js',
                    'public/routes/*.js',
                    'vender/*.js',
                    'public/<%= basename %>/**/*.js'
                ],
                tasks: ['concat:js', 'uglify:js'],
                options: {
                    livereload: true,
                }
            },
            css: {
                files: ['less/*.less'],
                tasks: ['less:style'],
                options: {
                    livereload: true,
                }
            },
            html: {
                files: ['public/template/**/*.html'],
                options: {
                    livereload: true,
                }
            }
        },
        browserSync: {
            bsFiles: {
                src: ['public/**/*.css', 'public/**/*.css'],
                options: {
                    server: {
                        baseDir: "./"
                    }
                }
            },
            options: {
                server: {
                    baseDir: "./"
                },
                watchTask: true
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'public/**/*.js', 'test/**/*.js'],
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
        express: {
            dev: {
                options: {
                    script: './server.js',
                    bases: ['.'],
                    livereload: true
                }
            },
            all: {
                options: {
                    script: './server.js'
                }
            }
        },
        connect: {
            options: {
                port: 3000,
                hostname: 'localhost'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('server', ['express:dev', 'watch']);
    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('default', ['server']);

};