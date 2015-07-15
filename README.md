# Tabzilla

This is the home of Tabzilla, the universal tab you can add to your website. Below
follows simple instructions on how to get, and use Tabzilla.

## Bower Package

Do you use [Bower](http://bower.io/) to manage your front-end dependencies? Well, then you will be
happy to hear that you can install Tabzilla using Bower.

```Shell
bower install mozilla-tabzilla
```

That's it! Now you have all the bits you need. Next step, add it to your site.

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
    <a href="https://mozilla.org">Mozilla</a>
</div>
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
