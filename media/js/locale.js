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
            "bn-IN":    "বাংলা",
            "de-DE":    "Deutsch",
            "pt-BR":    "Português (Brasil)"
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
            firefoxFlicks:      "Great prizes! Hollywood judges! Exclamation marks! Enter Firefox Flicks, the global video contest to tell our story, or vote for your favorites!"
        },

        "bn-IN" : { // Locale strings for Indian Bengali

            // Title Strings
            titleMozilla:       "Mozilla",
            titleProducts:      "Products",
            titleInnovation:    "উদ্ভাবনা",
            titleGetInvolved:   "লিপ্ত হউন",

            // Link Strings
            linkMission:        "অভিলক্ষ্য",
            linkAbout:          "সম্বন্ধে",
            linkProjects:       "প্রকল্প",
            linkSupport:        "সহায়তা",
            linkMDN:            "Developer Network",
            linkFirefox:        "Firefox",
            linkThunderbird:    "Thunderbird",
            linkWebFWD:         "WebFWD",
            linkLabs:           "গবেষণাগার",
            linkVolunteers:     "স্বেচ্ছাসেবক",
            linkCareers:        "পেশা",
            linkFindUs:         "খুঁজে নিন",
            linkJoinUs:         "যোগ দিন",
            linkWebDir:         "Website Directory",

            // Locale for Firefox Flicks Promotions
            firefoxFlicks:      "দারুন পুরস্কার! হলিউডের বিচারক! রামগরুরের ছানা! আরো অনেক কিছু! Firefox Flicks &mdash; এই বিশ্বব্যাপী চলচিত্র প্রতিযোগিতায় যোগ দাও, অথবা পছন্দের প্রতিযোগী কে মনোনীত কর!"
        },

        "de-DE" : { // Locale strings for Germany German

            // Title Strings
            titleMozilla:       "Mozilla",
            titleProducts:      "Projekte",
            titleInnovation:    "Innovationen",
            titleGetInvolved:   "Machen Sie mit",

            // Link Strings
            linkMission:        "Erfahren Sie mehr",
            linkAbout:          "Über uns",
            linkProjects:       "Projekte",
            linkSupport:        "Unterstützung",
            linkMDN:            "Entwicklernetzwerk",
            linkFirefox:        "Firefox",
            linkThunderbird:    "Thunderbird",
            linkWebFWD:         "WebFWD",
            linkLabs:           "Labs",
            linkVolunteers:     "Helfen Sie uns",
            linkCareers:        "Jobangebote",
            linkFindUs:         "Finden Sie uns",
            linkJoinUs:         "Helfen Sie uns",
            linkWebDir:         "Webseitenverzeichnis",

            // Locale for Firefox Flicks Promotions
            firefoxFlicks:      "Tolle Preise! Hollywood judges! Viele Ausrufezeichen! Machen Sie bei Firefox Flicks mit, einem globalen Videowettbewerb um unsere Geschichte zu erzählen, oder stimmen Sie für Ihre Favoriten ab!"
        },

        "pt-BR" : { // Locale strings for Brazillian Portuguese

            // Title Strings
            titleMozilla:       "Mozilla",
            titleProducts:      "Produtos",
            titleInnovation:    "Inovação",
            titleGetInvolved:   "Participe",

            // Link Strings
            linkMission:        "Missão",
            linkAbout:          "Sobre",
            linkProjects:       "Projetos",
            linkSupport:        "Suporte",
            linkMDN:            "Developer Network",
            linkFirefox:        "Firefox",
            linkThunderbird:    "Thunderbird",
            linkWebFWD:         "WebFWD",
            linkLabs:           "Labs",
            linkVolunteers:     "Colaboradores",
            linkCareers:        "Oportunidades",
            linkFindUs:         "Encontre-nos",
            linkJoinUs:         "Faça parte",
            linkWebDir:         "Diretório de Sites",

            // Locale for Firefox Flicks Promotions
            firefoxFlicks:      "Ótimos prêmios! Juízes de Hollywood! Pontos de exclamação! Participe do Firefox Flicks, o concurso global de vídeo para contar a sua história, ou vote nos seus favoritos!"
        }



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

        // Read the preferred locale & preset content
        if ( $("#tabzilla").data("locale") ) {
            Tabzilla.l10n.now = $("#tabzilla").data("locale");
            Tabzilla.l10n.loadLocale();
        }

        // Set up event listener for the locale-selector
        Tabzilla.addEventListener(Tabzilla.l10n.selector, 'change', function(e) {
            Tabzilla.l10n.now = $(Tabzilla.l10n.selector).val();
            Tabzilla.l10n.loadLocale();
        });
    });
})();
