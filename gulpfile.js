const gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var cleaner = require('gulp-clean');
const browserSync = require('browser-sync').create();



function clean (){
    return gulp.src('./output/*', { read: false})
    .pipe(cleaner());
}

function build(callback){
    console.log('building the prject...')
    callback();
}
function styles(){

    return gulp.src('./src/main.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./output/')).addListener.
    pipe(browserSync.stream());
}
function scripts(){

    return gulp.src('./src/app.css')
    .pipe(cssnano())
    .pipe(gulp.dest('./output/'));
}
function watchAll(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./src/**/*.css',styles)
    gulp.watch('./src/**/*.css',scripts)
    
}
exports.watch = watchAll

exports.clean  = clean;
exports.build  = build;
exports.styles  = styles;

 exports.default = gulp.series(clean,clean,watchAll);
 //gulpexports.buildProjecet = gulp.series(clean,gulp.parallel(scripts,styles,images));