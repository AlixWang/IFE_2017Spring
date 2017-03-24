var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('./binbin_course/task_1/*',function(file){
        console.log(file.path);
        gulp.src(file.path).pipe(livereload());
    });
})
