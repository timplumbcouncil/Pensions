module.exports = function(grunt) {
    grunt.initConfig({
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['css/**', 'images/**', 'js/**',  'locale/**', '*.html'],
                    dest: 'h:/Pension'
                }
                ]
            }
        }
       

    });

 
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    grunt.registerTask('default', ['copy']);
};