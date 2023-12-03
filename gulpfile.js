const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const fileinclude = require('gulp-file-include');

// Таск для сборки HTML и шаблонов
gulp.task('html', function (callback) {
    return gulp.src('./app/html/*.html')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'HTML include',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(fileinclude({ prefix: '@@' }))
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.stream()); // Добавлено для обновления браузера
});

// Таск для компиляции SCSS в CSS
gulp.task('scss', function (callback) {
    return gulp.src('./app/scss/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return {
                    title: 'Styles',
                    sound: false,
                    message: err.message
                }
            })
        }))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions']
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css/'))
        .pipe(browserSync.stream()); // Добавлено для обновления браузера
});

// Задача для старта сервера из папки app
gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });

    // Слежение за HTML и SCSS
    gulp.watch('./app/html/**/*.html', gulp.series('html'));
    gulp.watch('./app/scss/**/*.scss', gulp.series('scss'));
});

// Дефолтный таск (задача по умолчанию)
// Запускаем одновременно задачи server, scss, html
gulp.task('default', gulp.parallel('server', 'scss', 'html'));
