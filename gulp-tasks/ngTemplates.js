// currently not functional
var gulp = require('gulp')
var templateCache = require('gulp-angular-templatecache')

gulp.task('ngTemplateCache', function() {
	return gulp.src('./client/partials/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('./public'))
})
