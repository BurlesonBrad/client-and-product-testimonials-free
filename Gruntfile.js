'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),
		
        // js minification
        uglify: {
			options: {
			  banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			my_target: {
				/* Only three of the shortcodes require js files */
				files: {
					/* Basic Slider Scripts */
					'lib/public/js/min/testimonial-slider-init.min.js': [ 
						'lib/public/js/testimonial-slider-init.js',
					],
				}
			}
        },

		// css minify all contents of our directory and add .min.css extension
		cssmin: {
			target: {
				files: {
					'lib/public/css/min/client-and-product-testimonials.min.css': [ 
						'lib/public/css/*.css' 
					]
				}
			}
		},

        // watch our project for changes
       watch: {
			public_css: { // admin css
				files: 'lib/public/css/*.css',
				tasks: ['cssmin'],
				options: {
					spawn:false,
					event:['all']
				},
			},
			public_js: { // public js
				files: 'lib/public/js/*.js',
				tasks: ['uglify'],
				options: {
					spawn:false,
					event:['all']
				},
			},
		},
		
		// Borwser Sync
		browserSync: {
			bsFiles: {
				src : [ 'lib/public/css/min/*.min.css' , 'lib/public/js/min/*.min.js' ],
			},
			options: {
				proxy: "localhost/yikes-mailchimp/",
				watchTask : true
			}
		},
		
		// Autoprefixer for our CSS files
		postcss: {
			options: {
                map: true,
                processors: [
                    require('autoprefixer-core')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
			dist: {
			  src: [ 'lib/public/css/*.css' ]
			}
		},
		  		
		auto_install: { 
			local: {}
		},
		
    });

    // load tasks
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync'); // browser-sync auto refresh
	grunt.loadNpmTasks('grunt-postcss'); // CSS autoprefixer plugin (cross-browser auto pre-fixes)
	grunt.loadNpmTasks('grunt-auto-install'); // autoload all of ourd ependencies (ideally, you install this one package, and run grunt auto_install to install our dependencies automagically)

    // register task
    grunt.registerTask('default', [
		'uglify',
        'cssmin',
		'postcss',
		'browserSync',
        'watch',
    ]);

};