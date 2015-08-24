var gulp = require('gulp'),
gutil = require('gulp-util'),
_ = require('lodash'),
through2 = require('through2'),
rename = require('gulp-rename'),
coffee = require('gulp-coffee');

gulp.task('templates', function () {
    gulp.src('./src/source/*.template')
        .pipe(through2.obj(function (file, enc, cb) {
            var template = file.contents.toString();
            template = _.template(template).source;
            file.contents = new Buffer(template);

            cb(null, file);
        }))
        .pipe(rename(function (file) {
            file.extname = '.js';
        }))
        .pipe(gulp.dest('./dist/temp/template'));
});


gulp.task('coffee', [ 'templates' ], function () {
    gulp.src('./src/*.coffee')
        .pipe(coffee({bare: true})
            .on('error', gutil.log))
        .pipe(gulp.dest('./dist/temp'))
});


gulp.task('compile', [ 'coffee' ], function () {
    var fs = require('fs'),
    glob = require('glob'),
    path = require('path');


    var template = fs.readFileSync('./src/preloader.js.template').toString(),
    tool = fs.readFileSync('./dist/temp/tool.js').toString(),
    dom = fs.readFileSync('./dist/temp/domManipilation.js').toString();


    var preloaderCode = fs.readFileSync('./dist/temp/preloader.js').toString();

    glob('./dist/temp/template/*.js', {}, function (er, files) {
        var pluguins = _.uniq(_.reduce(files, function (memo, file) {
            var filename = path.basename(file);
            filename = filename.substr(0, filename.length - path.extname(filename).length);
            var ext = path.extname(filename),
            name = filename.substr(0, filename.length - ext.length);
            memo.push(name);
            return memo;
        }, []));


        _.each(pluguins, function (plugin) {
            var styles = fs.readFileSync('./dist/temp/template/' + plugin + '.css.js').toString(),
            html = fs.readFileSync('./dist/temp/template/' + plugin + '.html.js').toString();

            var code = _.template(template)({
                "tool": tool,
                "dom": dom,
                "styles": styles,
                "html": html,
                "preloaderCode": preloaderCode
            });

            fs.writeFileSync('./dist/preloader.' + _.kebabCase(plugin) + '.js', code)


        });


    })

});