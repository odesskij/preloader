var gulp = require('gulp'),
    _    = require('lodash'),
    fs   = require('fs'),
    through2 = require('through2'),
    gutil = require('gulp-util'),
    rename = require('gulp-rename');


gulp.task('default', function(){
    gulp.src(__dirname + '/src/source/*.template')
	.pipe(through2.obj(function (file, enc, cb) {
    		var template = file.contents.toString();
		template = _.template(template).source;
		file.contents = new Buffer(template);
 
    		cb(null, file);
   	}))
	.pipe(rename(function(file){
	        file.extname = '.js';
	}))
	.pipe(gulp.dest('./dist'));
});
