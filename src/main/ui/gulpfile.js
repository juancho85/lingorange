var gulp = require('gulp');

var TS_PATHS = {
    src: 'src/**/*.ts'
};

var JSON_PATHS = {
    src: 'src/**/*.json'
};

var HTML_PATHS = {
    src: 'src/**/*.html'
};

var CSS_PATHS = {
    src: 'src/**/*.css'
};

var JS_DESTINATION = '../resources/public/js';

var INDEX_LOCATION = '../resources/public/';

gulp.task('clean', function (done) {
    var del = require('del');
    del([JS_DESTINATION], done);
});

gulp.task('ts2js', ['copy-static'], function () {
    debug = true;
    var typescript = require('gulp-typescript');
    var tscConfig = require('./tsconfig.json');

    var tsResult = gulp
        .src(TS_PATHS.src)
        .pipe(typescript(tscConfig.compilerOptions));

    return tsResult.js.pipe(gulp.dest(JS_DESTINATION));
});

gulp.task('copy-html', function(){
    gulp.src([HTML_PATHS.src]).pipe(gulp.dest(JS_DESTINATION));
});

gulp.task('copy-css', function(){
    gulp.src([CSS_PATHS.src]).pipe(gulp.dest(JS_DESTINATION));
});

gulp.task('copy-json', function(){
    gulp.src([JSON_PATHS.src]).pipe(gulp.dest(JS_DESTINATION));
});

gulp.task('copy-static', function () {
    //html & css
    gulp.src([HTML_PATHS.src, CSS_PATHS.src, JSON_PATHS.src]).pipe(gulp.dest(JS_DESTINATION));
});

gulp.task('play', ['ts2js'], function () {
    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9000, app;

    gulp.watch(TS_PATHS.src, ['ts2js']);
    gulp.watch(HTML_PATHS.src, ['copy-html']);
    gulp.watch(CSS_PATHS.src, ['copy-css']);
    gulp.watch(JSON_PATHS.src, ['copy-json']);

    //app = connect().use(serveStatic(__dirname));
    app = connect().use(serveStatic(INDEX_LOCATION));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});

gulp.task('default', ['play']);
