const gulp = require('gulp');

const browserSync = require('browser-sync').create();


function build(){
    console.log('building the prject...')
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

   
    
}
exports.build= build;