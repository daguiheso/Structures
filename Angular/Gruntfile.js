module.exports = function (grunt) {

	grunt.initConfig({
	  connect: {
	    server: {
	      options: {
      		port: 9000,
          base: 'public/'
        }
    	}
    },
    watch: {
      project: {
        files: ['public/**/*.js', 'public/**/*.html', 'public/**/*.json', 'public/**/*.css'],
        options: {
          livereload: true
        }
      }
    },
    bower: {
      install: {
        options: {
          targetDir: 'public/js/lib',
          layout: 'byType',
          install: true,
          verbose: false,
          cleanBowerDir: true
        }
      }
    }
  });
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['connect', 'watch']);
  grunt.loadNpmTasks('grunt-bower-task');
};