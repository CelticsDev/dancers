module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /*=============================
    =            WATCH            =
    =============================*/

    watch: {
      html: {
        files: ['src/dancers.html',
                'src/html/*.html'],
        tasks: ['htmlmin', 'import','notify:done']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['import','notify:done',]
      },
      css: {
        files: ['src/scss/*.scss',
                'src/scss/mixins/*.scss'],
        tasks: ['sass', 'import','notify:done']
      }
    },

    /*===================================
    =            MINIFY HTML            =
    ===================================*/

    htmlmin: {
       dist: {
         options: {
           removeComments: true,
           collapseWhitespace: true,
           gruntLogHeader: false,
         },
         files: {
           'src/html/min/_output.min.html': 'src/html/_output.html' // CHANGE TEMPLATE NAME
         }
       }
     },

     /*====================================
     =            COMPILE SASS            =
     ====================================*/

    sass: {
      dist: {
        options: {
          gruntLogHeader: false,
          sourcemap: 'none',
        },
        files: {
          'dist/css/dancers.css': 'src/scss/dancers.scss'
        }
      },
      min: {
        options: {
          gruntLogHeader: false,
          sourcemap: 'none',
          style: 'compressed'
        },
        files: {
          'dist/css/dancers.min.css': 'src/scss/dancers.scss',
          'dist/css/dancer-bios.min.css': 'src/scss/dancer-bios.scss' //FOR CDN
        }
      }
    },

    /*=========================================
    =            UGLIFY JAVASCRIPT            =
    =========================================*/

    uglify: {
      dist: {
        files: {
          'dist/js/dancers.min.js': 'dist/js/dancers.js'
        }
      }
    },

    /*==============================
    =            ESLINT            =
    ==============================*/

    eslint: {
      options: {
        configFile: 'src/js/eslint.json',
      },
      target: ['src/js/*.js']
    },

    /*==============================
    =            IMPORT            =
    ==============================*/

    import: {
      options: {
        gruntLogHeader: false
      },
      dist: {
        files: {
          'dist/js/dancers.js' : 'src/js/dancers.js',
          'dist/dancers.ready.html' : 'src/dancers.html'
        }
      }
    },

    /*==============================
    =            NOTIFY            =
    ==============================*/

    notify_hooks: {
      options: {
        enabled: true,
        max_jshint_notifications: 5,
        title: "dancers",
        success: false,
        duration: 1,
      }
    },
    notify: {
      done: {
        options: {
          gruntLogHeader: false,
          title: 'Grunt - dancers',
          message: 'DONE!',
        }
      }
    }
  });

  /*==================================
  =            LOAD TASKS            =
  ==================================*/

  require('grunt-log-headers')(grunt);
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-import');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-notify');
  grunt.registerTask('default',['watch']);
};
