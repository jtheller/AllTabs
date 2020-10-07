module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            build: {
                files: [{
                    expand: true,
                    src: ['src/**/*.less'],
                    ext: '.css'
                }]
            }
        },
        watch: {
            less:  {
                files: ['src/**/*.less'],
                tasks: [ 'less:build' ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('build', ['less']);
};