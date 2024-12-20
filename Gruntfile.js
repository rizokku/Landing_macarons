module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ['src/css']
                },
                files: {
                    'dist/styles.css': ['src/css/**.less']
                }
            },
            production: {
                options: {
                    paths: ['src/css'],

                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    'dist/styles.css': ['src/css/adaptiv.less', 'src/css/styles.less']
                }
            }
        },


        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/style.min.css': ['dist/styles.css']
                }
            }
        },
        clean: ['dist/styles.css'],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/css/*.less'],
                tasks: ['less','cssmin','clean'],
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less','cssmin','clean','watch']);

};