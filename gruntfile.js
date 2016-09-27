module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      }
    },
	uglify: {
		dist: {
		src: ['js/dist/script.main.js'],
		dest: 'js/dist/script.main.js'
		}
	},
    concat_css: {
    options: {
        separator: ';' 
    },
    all: {
      src: ["css/src/*.css"],
      dest: "css/dist/styles.main.css"
    },
    },
    revizor: {
    options: {},
    src: ['css/dist/styles.main.css'],
    dest: 'css/dist/styles.main.css'
  }	
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify'); 
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-revizor');
  
  grunt.registerTask('default', ['concat', 'uglify', 'concat_css', 'revizor']);

};
