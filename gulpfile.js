const { src, dest } = require('gulp');
const sass = require('gulp-sass');


function css( done ) {
    
    src('src/scss/app.scss')// Identificar el archivo .scss a compilar
        .pipe( sass() ) // Compilarlo
        .pipe( dest('build/css') ) // Almacenar   
    done();
}

exports.css = css;