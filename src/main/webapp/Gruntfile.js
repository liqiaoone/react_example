'use strict';

module.exports = function (grunt) {

	// Time how long tasks take. Can help when optimizing build times
	  require('time-grunt')(grunt);

	  // Automatically load required Grunt tasks
	  require('jit-grunt')(grunt);

	  grunt.loadNpmTasks('grunt-browserify');
	  // Define the configuration for all the tasks
	  grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

	    // Make sure code styles are up to par and there are no obvious mistakes
	    jshint: {
	      options: {
	        jshintrc: '.jshintrc',
	        reporter: require('jshint-stylish')
	      },
	      all: {
	        src: [
	          'Gruntfile.js',
	          'dev/{,*/}*.js'
	        ]
	      }
	    }
	  });
	  
	  

	  grunt.registerTask('build', [
	    'grunt-browserify'
	  ]);

	  grunt.registerTask('default',['build']);
};
