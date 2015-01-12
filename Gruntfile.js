"use strict";

module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            gss: {
                files: ["styles/*.gss"],
                tasks: ["css_import"],
                options: {
                    // Start another live reload server on port 1337
                    livereload: true
                }
            },
            html: {
                files: ["test/*.html"],
                options: {
                    // Start another live reload server on port 1337
                    livereload: true
                }  
            }

        },

        css_import: {
            "test/assets/page.gss": ["styles/page.gss"],
            "test/assets/modal.gss": ["styles/modal.gss"],
            "test/assets/form.gss": ["styles/form.gss"]
        },
        connect: {
            test: {
                port: 3000
            }
        },
        concurrent: {
            watchAndServe: ["connect", "watch"]
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-css-import");
    grunt.loadNpmTasks("grunt-connect");
    grunt.loadNpmTasks("grunt-concurrent");

    grunt.registerTask("default", ["css_import", "concurrent:watchAndServe"]);
};