const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const minify = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const gutil = require('gulp-util');
const notify = require('gulp-notify');

const DIST_DIRECTORY = './public';
const SCSS_DIRECTORY = './src/scss/**/*.scss';

function stylesheet () {
  return gulp.src(SCSS_DIRECTORY)
    .pipe(plumber({
      errorHandler: notify.onError({
        message: 'Error: <%= error.message %>',
        sound: 'Submarine' // deactivate sound?
      })
    }))
    .pipe(sass({
      includePaths: ['node_modules/foundation-sites/scss']
    }))
    .pipe(autoprefixer({
      cascade: false,
      flexbox: true,
      remove: false
    }))
    .on('error', gutil.log)
    .pipe(minify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(`${DIST_DIRECTORY}/css/`));
}

function watch (done) {
  gulp.watch(SCSS_DIRECTORY, gulp.series(stylesheet));
  done();
}

gulp.task('default', gulp.series(stylesheet, watch));
