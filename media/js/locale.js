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

        "now"   : "en-US", // The current-locale, default to en-US

        "all"   : { // List of all available locale
            "en-US":    "English",
        },

        "en-US" : { // Locale strings for US English

            // Title Strings
            titleMozilla:       "Mozilla",
            titleProducts:      "Products",
            titleInnovation:    "Innovation",
            titleGetInvolved:   "Get Involved",

            // Link Strings
            linkMission:        "Mission",
            linkAbout:          "About",
            linkProjects:       "Projects",
            linkSupport:        "Support",
            linkMDN:            "Developer Network",
            linkFirefox:        "Firefox",
            linkThunderbird:    "Thunderbird",
            linkWebFWD:         "WebFWD",
            linkLabs:           "Labs",
            linkVolunteers:     "Volunteer",
            linkCareers:        "Careers",
            linkFindUs:         "Find Us",
            linkJoinUs:         "Join Us",
            linkWebDir:         "Website Directory",

            // Locale for Firefox Flicks Promotions
            firefoxFlicks:      "Great prizes! Hollywood judges! Exclamation marks! Enter Firefox Flicks, the global video contest to tell our story, or vote for your favorites!",
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

    Tabzilla.l10n.loadLocale = function(ev) {
        $(".tabzillaLocale").each(function() {
            $(this).html( Tabzilla.l10n[Tabzilla.l10n.now][$(this).data("locale")] );
        });
    };

    jQuery(document).ready(function() {
        // Push the select-element into the DOM
        document.getElementById("tabzilla-search").appendChild(Tabzilla.l10n.selector);

        // Change the locale-selector's reference to actual DOM element now
        Tabzilla.l10n.selector = document.getElementById('tabzilla-locale');

        // Set up event listener for the locale-selector
        Tabzilla.addEventListener(Tabzilla.l10n.selector, 'change', function(e) {
            Tabzilla.l10n.now = $(Tabzilla.l10n.selector).val();
            Tabzilla.l10n.loadLocale();
        });
    });
})();
