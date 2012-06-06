tabzilla
========

*tabzilla* is the universal tab displayed on Mozilla websites.

Adding the universal tab requires to a site requires:

1. Add the static tab link (example below) to the top of your template  
    ```<a href="http://www.mozilla.org/" id="tabzilla">mozilla</a>```
2. Include the tabzilla.css CSS file either as a CSS include or built into your minified styles  
    ```<link href="http://www.mozilla.org/tabzilla/media/css/tabzilla.css" rel="stylesheet" />```
3. Include the tabzilla.js file in your template (preferably in the footer)  
    ```<script src="http://www.mozilla.org/tabzilla/media/js/tabzilla.js"></script>```

Requirements
------------

As the universal tab does inject HTML/CSS into the DOM, some there are some requirements that must be met by including sites.

1. Background images must not be attached to the ```<body>``` element.
2. Absolutely positioned elements must not be positioned relative to the ```<body>``` element.
3. An element other than the ```<body>``` should add a 2 pixel white border to the top of the page (```border-top: 2px solid #fff;```)

Any background image or absolutely positioned element attached to the ```body``` element would not move with the rest of the contents when the tab slides open. Instead, any such background or element should be attached to anoter HTML element in the page (a wrapper div, for example). Note that this issue does not apply to solid background colors, or backgrounds that do not vary vertically (solid vertical stripes, for example).

Testing Bookmarklet
-------------------
To test the universal tab on your mozilla website, create a new bookmark with the contents of <a href="https://github.com/mozilla/tabzilla/blob/master/media/bookmarklet/tabzilla.url">this file</a> as the Location. Then, click this bookmarklet while on one of your pages to see how the tab will appear on your site.

Note the following limitations of the bookmarklet:

* The tab is aligned to the top right of the viewport, not the top-right of your layout, as it should be.
* The tab has a float:left; which may interfere with other content on your page, or slip behind other elements and be invisible.

