var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('./.*',function(file){
        
        server.changed(file.path);
    });
})
