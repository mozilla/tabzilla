tabzilla
========

*tabzilla* is the universal tab displayed on Mozilla websites.

Adding the universal tab requires to a site requires:

1. Add the static tab link (example below) and associated tabzilla.css CSS to the top of your template  
    ```<a href="http://mozilla.org/tab" id="tabzilla">mozilla</a>```
2. Include the tabzilla.js file in your template (preferably in the footer)  
    ```<script src="//www.mozilla.org/tabzilla/media/js/tabzilla.js"></script>```

Requirements
------------

As the universal tab does inject HTML/CSS into the DOM, some there are some requirements that must be met by including sites.

1. Background images must not be attached to the ```<body>``` element.
2. Absolutely positioned elements must not be positioned relative to the ```<body>``` element.

Any background image or absolutely positioned element attached to the ```body``` element would not move with the rest of the contents when the tab slides open. Instead, any such background or element should be attached to anoter HTML element in the page (a wrapper div, for example). Note that this issue does not apply to solid background colors, or backgrounds that do not vary vertically (solid vertical stripes, for example).