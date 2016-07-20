var gutil = require('gulp-util');
var through = require('through2');
var package = require('./package.json');
var _ = require('lodash');

module.exports = function (options) {
    return through.obj(function (file, enc, cb) {

        
        if (file.isNull()) {
            this.push(file);
            return cb();
        }

        if (file.isStream()) {
            this.emit('error', new gutil.PluginError(package.name, 'Streaming not supported'));
            return cb();
        }

        /**
         *
         * 1 px to vw
         * 2 vw to px
         * 
         *
         *
         *
         */

        /********************************************************************/

        options = options || {};
        var from = options.from || 'px';    // px
        var to = options.to || 'vw';        // vw
        var width = options.width || 750;  //screen width
        var onevw = width / 100;


        
        var content = file.contents.toString();
        var digital = '[0-9]+(\.[0-9]+)?';

        var matched = content.match(new RegExp(digital + from,'ig'));

        var sets1 = Array.from(new Set(matched));

        var sets2 = sets1.map(function (val, idx) {
            val = val.replace(from,'') * 1;
            var newvw =_.floor(val / onevw, 5);
            return newvw + to;
        });

        for(var i =0;i<sets1.length;i++){
            content = content.replace(new RegExp(sets1[i],'ig'),sets2[i]);
        }

        file.contents = new Buffer(content);

        /********************************************************************/
        
        this.push(file);
        cb();

    });
};