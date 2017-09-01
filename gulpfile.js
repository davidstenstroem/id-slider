const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const prefixer = require('gulp-autoprefixer');
const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

gulp.task('sass', () => {
  return gulp.src('./sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(prefixer())
    .pipe(gulp.dest('./style'));
});

gulp.task('watchSass', () => {
  return gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass','watchSass']);
