# Tabzilla

This is the home of Tabzilla, the universal tab you can add to your website. Below
follows simple instructions on how to get, and use Tabzilla.

## Upgrading to the new Tabzilla

Before you switch to the new Tabzilla, there are a couple of caveats you need to be
aware of.

- Tabzilla is no longer available as a hosted service. You have to add it to your
website using one of the options below.
- Tabzilla no longer needs any fonts bundled with it so, we are no longer including
`@font-face` declarations for Open Sans in the CSS. *NOTE:* You can still load
the Open-Sans fonts using the Mozilla CDN, or another CDN of your choosing, for example:

```CSS
@font-face{
    font-family: 'Open Sans Light';
	src: url('https://mozorg.cdn.mozilla.net/media/fonts/OpenSans-Light-webfont.eot?#iefix') format('embedded-opentype'),
         url('https://mozorg.cdn.mozilla.net/media/fonts/OpenSans-Light-webfont.woff') format('woff'),
         url('https://mozorg.cdn.mozilla.net/media/fonts/OpenSans-Light-webfont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
```

- This version of Tabzilla is static and there is no requirement for JavaScript,
as such, we no longer inject jQuery.

If you have been relying on any of these assets being included/injected by Tabzilla,
you will now have to manually include them on your site.

* [Download OpenSans](https://www.mozilla.org/styleguide/communications/typefaces/)
* [Download jQuery](https://jquery.com/)

## Bower Package

Do you use [Bower](http://bower.io/) to manage your front-end dependencies? Well, then you will be
happy to hear that you can install Tabzilla using Bower.

```Shell
bower install mozilla-tabzilla
```

That's it! Now you have all the bits you need. Next step, add it to your site.

## npm

Already have a `package.json` and use `npm` to install dependencies? Well, you can also [install Tabzilla
using npm](https://www.npmjs.com/package/mozilla-tabzilla). So either add it to your dependency list
or, install it using:

```Shell
npm install mozilla-tabzilla -S
```

## Manual Download

Don't use [Bower](http://bower.io/)? No problem, you can [download the latest release right here from the releases page](https://github.com/mozilla/tabzilla/releases).

Once downloaded, extract the package and add the `css` and `media` folders to your
project.

## Using Tabzilla

First step is to add the `tabzilla.css` file to you main `HTML` file:

```HTML
<link rel="stylesheet" type="text/css" href="css/tabzilla.css" media="screen" />
```

Next, you need to add the following required `HTML` to your document.

```HTML
<div id="tabzilla">
    <a href="https://www.mozilla.org/">Mozilla</a>
</div>
```

### Using Tabzilla with Sass

After installing Tabzilla using [npm](#npm), it is easy to import the styles into your Sass style sheets.

If you're using [Gulp](http://gulpjs.com), you can `require` the mozilla-tabzilla module and specify the Tabzilla `includePaths` using the following snippet:

```sass
var gulp = require('gulp');
var sass = require('gulp-sass');
var tabzilla = require('mozilla-tabzilla');

gulp.task('sass', function () {
  gulp.src('*.scss')
    .pipe(sass({
      includePaths: tabzilla.includePaths
    }))
    .pipe(gulp.dest('css'));
});
```

Then simply call `@import "tabzilla";` from within your Sass file to import the Tabzilla styles.

If you're using [Grunt](http://gruntjs.com), you can `require` the mozilla-tabzilla module using the following snippet:

```sass
var tabzilla = require('mozilla-tabzilla');

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-sass');

  grunt.initConfig({
    sass: {
      options: {
        includePaths: [tabzilla.includePaths]
      },
      dist: {
        files: {
          'css/main.css': '*.scss'
        }
      }
    }
  });
};
```

## Changing The Color of the Wordmark

By default the color of the wordmark on Tabzilla is transparent, as below:

![Tabzilla with transparent wordmark](https://raw.github.com/mozilla/tabzilla/master/docs-assets/transparent.png)

You might want to change this to be a solid color instead. You can change
the color of the wordmark by adding the following override to your `CSS`:

```CSS
#tabzilla:before {
    background-color: #0C99D5;
}
```

The above will result in the wordmark being displayed as follows:

![Tabzilla with custom pink wordmark](https://raw.github.com/mozilla/tabzilla/master/docs-assets/default.png)

## [i18n] Right To Left Languages

For right to left languages it makes more sense to have Tabzilla float to the left, as apposed to the right. If you are using Tabzilla in a right to left language website, you need to add the following to the HTML element:

```HTML
<html dir="rtl">
...
```

## License
MPL-2.0
