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
            type     :    'px-to-vw',
            width    :    750
        }))
        .pipe(gulp.dest('dist/'));
    
});


gulp.task('pxtorem',function(){
   
    gulp.src('src/css/*/*.css')
        .pipe(cssunit({
            type     :    'px-to-rem',
            rootSize :    16
        }))
        .pipe(gulp.dest('dist/'));
    
});

```


### API

options:
```
type     :    enum('px-to-vw','px-to-rem')
from     :    convert X to Y unit,from is hereby X
to       :    Y
width    :    designer's screen width,like 640,750, etc.
rootSize :    <html> tag's font size

```


### explain what kind of situations can use this current version.

PX to VW

designer give you a 750px sketch,but you want to adapt your mobile pages to all kind of screen

#### then you should do 
```
1 design your page according to 750px with all unit set to px   (750px is an example)
2.1 pipe your css process with this plugin

    .pipe(cssunit({
                type     :    'px-to-vw',
              //from     :    'px',//optional set to px
              //to       :    'vw',//optional set to vw
                width    :    750
            }))
            
            

*************************************************
or 2.2 
    .pipe(cssunit({
                    type     :    'px-to-rem',
                  //from     :    'px',//optional
                  //to       :    'rem',//optional
                    rootSize :    16          //this is your html tag's font size
                }))
                
*************************************************
            
3 get a responsive page css,yeah!

```


### CONTACT ME

**please feel free to add any your unit issues to my [GITHUB ISSUES](https://github.com/tsaowe/gulp-css-unit/issues)**
**I will check it!**

## License

MIT © [tsaowe](https://github.com/tsaowe)
