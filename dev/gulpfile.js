const gulp = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');

gulp.task ('pug', function(){
 return gulp.src('*.pug').pipe(pug({pretty: true})).pipe( gulp.dest('../'));
});

gulp.task('sass', function () {
	return gulp.src('*.sass')
		.pipe(sass())
		.pipe(gulp.dest('../assets/'));
});

gulp.task('start', function() {
		gulp.watch('*.pug', ['pug']);
		gulp.watch('*.sass', ['sass']);
});
