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

    Tabzilla.l10n = { // The entire localization string tree

        "all"   : { // List of all available locale
            "en-US":    "English",
        },

    };

    // Build the DOM for the locale-selector
    Tabzilla.l10n.selector = document.createElement("select");
    Tabzilla.l10n.selector.setAttribute("id", "tabzilla-locale");
    Tabzilla.l10n.selector.setAttribute("title", "Choose your language for Tabzilla");

    // Insert the <option> elements into the locale-selector
    Tabzilla.l10n.selector.innerHTML = '<option value="en-US">Show Tabzilla in...</option>';
    for (var i in Tabzilla.l10n.all) {
          Tabzilla.l10n.selector.innerHTML += '<option value="' + i + '">'+ Tabzilla.l10n.all[i] +'</option>';
    }

    jQuery(document).ready(function() {
        // Push the select-element into the DOM
        document.getElementById("tabzilla-search").appendChild(Tabzilla.l10n.selector);
    });
})();
