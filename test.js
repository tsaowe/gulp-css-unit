/**
 * Created by tsaowe on 16/7/20.
 */

var fs = require('fs');

var _ = require('lodash');

var csscontent = '';

fs.readFile("/Users/tsaowe/Desktop/first-grade.css", 'utf-8', function (err, data) {
    if (err) {
        console.log("error");
    } else {
        csscontent = data;

        /**
         *
         *
         */
        var from = 'px';    // px
        var to = 'vw';        // vw
        var screenWidth = 640;
        var onevw = screenWidth / 100;


        var digital = '[0-9]+(\\.[0-9]+)?';

        var content = csscontent;
        var matched = content.match(new RegExp(digital + from, 'ig'));

        var sets1 = Array.from(new Set(matched));
        sets1 = sets1.sort(function (a, b) {
            a = a.replace(from, '') * 1;
            b = b.replace(from, '') * 1;
            return b - a;
        });

        var sets2 = sets1.map(function (val, idx) {
            val = val.replace(from, '') * 1;
            var newvw = _.floor(val / onevw, 5);
            return newvw + to;
        });

        for (var i = 0; i < sets1.length; i++) {
            content = content.replace(new RegExp(sets1[i], 'ig'), sets2[i]);
        }

        console.log(content);

        /**
         *
         */

    }
});



