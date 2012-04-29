/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/**
 * Localization for Tabzilla (the global navigation for Mozilla projects)
 *
 * This code is licensed under the Mozilla Public License 1.1.
 *
 * @copyright 2012 Mozilla Foundation.
 * @license   http://www.mozilla.org/MPL/MPL-1.1.html Mozilla Public License 1.1
 * @author    Soumya Deb <debloper@gmail.com>
 */

( function () {

    var selector = document.createElement("select");
    selector.setAttribute("id", "tabzilla-locale");
    selector.setAttribute("title", "Choose your language for Tabzilla");

    selector.innerHTML = '<option value="en-US">Show Tabzilla in...</option>';

    jQuery(document).ready(function() {
        // Push the select-element into the DOM
        document.getElementById("tabzilla-search").appendChild(selector);
    });
})();
