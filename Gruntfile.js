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
        tasks: ['import','notify:done', 'uglify']
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
           gruntLogHeader: false,
           removeComments: true,
           collapseWhitespace: true
         },
         files: {
           'src/html/min/template.min.html': 'src/html/template.html' // CHANGE TEMPLATE NAME
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
          'dist/css/dancers.min.css': 'src/scss/dancers.scss'
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
    =            IMPORT            =
    ==============================*/

    import: {
      options: {},
      dist: {
        files: {
          gruntLogHeader: false,
          'dist/js/dancers.js' : 'src/js/dancers.js',
          'dist/dancers.ready.html' : 'src/dancers.html'
        }
      }
    },

    /*==============================
    =            NOTIFY            =
    ==============================*/

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
