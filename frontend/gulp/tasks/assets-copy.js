module.exports = function(paths, dist) {
var gulp = require("gulp"),
    debug = require("gulp-debug"),
    gulpSequence = require('gulp-sequence');

var input = {
    images: paths.root + 'css/images/**/*.{png,gif,jpg,jpeg,svg}',
    cssApp: paths.root + 'css/**/*.css',
    cssBootstrap: paths.modules + '/bootstrap/dist/css/bootstrap.css',
    cssOwlCarousel: paths.modules + '/owlcarousel-pre/owl-carousel/owl.carousel.css',
    cssOwlCarouselTheme: paths.modules + '/owlcarousel-pre/owl-carousel/owl.theme.css',
    fontsApp: paths.root + 'css/fonts/**/*',
    fontsFontAwesome: paths.modules + '/font-awesome/fonts/**/*',
    html: paths.root + 'app/**/*.html',
    js: paths.root + 'js/*.js',
    jsJquery: paths.modules + '/jquery/dist/jquery.js',
    jsBootstrap: paths.modules + '/bootstrap/dist/js/bootstrap.js',
    jsWow: paths.modules + '/wow/dist/wow.js',
    jsOwlCarousel: paths.modules + '/owlcarousel-pre/owl-carousel/owl.carousel.js'
}

var dist = {
    images: paths.webroot + "/css/images/",
    cssApp: paths.webroot + "/css/",
    cssVendor: paths.webroot + "/css/vendor/",
    jsVendor: paths.webroot + "/js/vendor",
    fonts: paths.webroot + "/css/fonts",
    html: paths.webroot + 'app/html'
}

gulp.task('assets-copy', gulpSequence('clean:dist', ['copy:css', 'copy:fonts', 'copy:html', 'copy:images', 'copy:js']));

gulp.task('copy:css', ['copy:css:vendor', 'copy:css:app']);
gulp.task('copy:js', ['copy:js:vendor']);//, 'copy:js:app']);

gulp.task("copy:css:vendor",
    function (cb) {
        return gulp.src([input.cssOwlCarousel, input.cssOwlCarouselTheme, input.cssBootstrap])
               .pipe(gulp.dest(dist.cssVendor));
    });

gulp.task("copy:css:app",
    function (cb) {
        return gulp.src([input.cssApp])
               .pipe(gulp.dest(dist.cssApp));
    });
    
gulp.task("copy:js:vendor",
    function (cb) {
        return gulp.src([input.jsJquery, input.jsBootstrap, input.jsWow, input.jsOwlCarousel, input.js])
               .pipe(gulp.dest(dist.jsVendor));
    });

// gulp.task("copy:js:app",
//     function (cb) {
//         // todo compile typescript.
//         return null;
//         // return gulp.src([input.cssApp])
//         //        .pipe(gulp.dest(dist.jsApp));
//     });

gulp.task("copy:html",
    function (cb) {
        return gulp.src(input.html)
              .pipe(gulp.dest(dist.html));
    });


gulp.task("copy:images",
    function (cb) {
        return gulp.src(input.images)
              .pipe(gulp.dest(dist.images));
    });

gulp.task("copy:fonts", function (cb) {
        return gulp.src([input.fontsApp, input.fontsFontAwesome])
               .pipe(gulp.dest(dist.fonts));
    });
}