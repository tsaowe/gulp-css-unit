### install
```
$ npm install --save-dev gulp-css-unit
```


### usage
```
const gulp = require('gulp');
const cssunit = require('gulp-css-unit');

...

gulp.task('pxtovw',function(){
   
    gulp.src('src/css/*/*.css')
        .pipe(cssunit({
            from     :   'px',
            to       :   'vw',
            width    :  750
        }))
        .pipe(gulp.dest('dist/'));
    
});

```


### API

options:
```
from     : convert X to Y unit,from is hereby X
to       : Y
width    : designer's screen width,like 640,750, etc.
```


### explain what kind of situations can use this current version.

PX to VW

designer give you a 750px sketch,but you want to adapt your mobile pages to all kind of screen

#### then you should do 
```
1 design your page according to 750px with all unit set to px   (750px is an example)
2 pipe your css process with this plugin

    .pipe(cssunit({
                from     :   'px',
                to       :   'vw',
                width    :  750
            }))
            
3 get a responsive page css,yeah!

```


## License

MIT © [tsaowe](https://github.com/tsaowe)
