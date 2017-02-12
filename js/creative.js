var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    $('.openPressGallery').magnificPopup({
      //items: $(this).attr("data-images"),
      items: [{"src": "img/press/fullsize/03-01-19_Kleine.jpg", "titleSrc": function(item) {return '<p>Kleine Zeitung 19.01.2003</p>';}},{"src": "img/press/fullsize/03-04-28_VN.jpg"},{"src": "img/press/fullsize/07-07-20_Kleine.jpg"},{"src": "img/press/fullsize/08-04-09_Kleine.jpg"},{"src": "img/press/fullsize/08-10-08_Krone.jpg"},{"src": "img/press/fullsize/09-06-11_Kleine.jpg"},{"src": "img/press/fullsize/09-07-12_KLeine.jpg"},{"src": "img/press/fullsize/13-06-26_Krone.jpg"},{"src": "img/press/fullsize/13-07-12_KleineZeitungK.jpg"},{"src": "img/press/fullsize/14-04-29_Konzertkritik_Krone.jpg"},{"src": "img/press/fullsize/14-04-29_Nachrichten_at-TanzendeBohnendosenundschwirrendeSchlaegel-(20140508).jpg"},{"src": "img/press/fullsize/97-01-02_Kleine.jpg"},{"src": "img/press/fullsize/99-09-28_Minoriten.jpg"},{"src": "img/press/fullsize/Krone_oA.jpg"},{"src": "img/press/fullsize/off-beat_12-04.jpg"},{"src": "img/press/fullsize/off-beat_13-01.jpg"},{"src": "img/press/fullsize/off-beat_13-04.jpg"},{"src": "img/press/fullsize/Ohne_Angaben.jpg"}],
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
      },
      type: 'image' // this is default type
    });

    $('.openAcademyGallery').magnificPopup({
      items: [
        {
          src: '<div class="white-popup">Nur ein Beispiel Galerie-Button für zukünftige Academy Percussion Alben</div>', // HTML string
          type: 'inline'
        }
      ],
      gallery: {
        enabled: true
      },
      type: 'image'
    });

    var translateAll = function() {
      $('.navbar-toggle').localize();
      $('header').localize();
      $('.nav').localize();
      $('#gallery').localize();
      $('#about').localize();
      $('#courses').localize();
      $('#contact').localize();
      $('.call-to-action').localize();
    }

    $('.changeLng').click(function()
    {
        var newLng;
        if(i18next.language == 'en') {
          newLng = 'de';
        } else {
          newLng = 'en';
        }
        i18next.changeLanguage(newLng, function (err, t) {
          // resources have been loaded
          /* add language as "lng" parameter to url once changed, so that the last set language
          will automatically be selected through the url if returning to the page through browser navigation */
          history.pushState({info: "Ulrike Stadler - Percussion"}, "Ulrike Stadler - Percussion", "?lng="+newLng);
          translateAll();
        });
    });

    var language = 'de';
    var lngUrlParam = getUrlParameter('lng');
    if(typeof lngUrlParam !== 'undefined') {
      if(lngUrlParam == 'en' || lngUrlParam == 'de') {
        language = lngUrlParam;
      }
    }

    i18next.init({
      lng: language,
      whitelist: ['de', 'en'],
      resources: {
        de: {
          translation: {
            'navigation-toggle': '<span class="sr-only">Navigation anzeigen</span> Menü <i class="fa fa-bars"></i>',
            'nav': {
              'about': 'Über mich',
              'courses': 'Kurse',
              'gallery': 'Galerie',
              'contact': 'Kontakt'
            },
            'lebenslauf': {
              'ueberschrift': 'Musikalischer Werdegang und pädagogische Tätigkeit',
              'absatz_1': '<p>Ulrike Stadler studierte an der Kunstuniversität Graz und Oberschützen bei Gerald Fromme und Martin Kerschbaum. Sie absolvierte das Konzertfach und IGP Studium mit Auszeichnung.<br/>Im Jahr 2004 wurde ihr die venia docendi für das Fach Schlaginstrumente erteilt. Sie ist Dozentin für das künstlerische Haupftfach Schlaginstrumente, Kammermusik, Vorbereitung und Hochbegabtenlehrgang an der Kunstuniversität Graz und Professorin für Schlaginstrumente am Joseph Haydn Konservatorium des Landes Burgenland.</p><p>Ulrike Stadler ist Gründerin und künstlerische Leiterin der internationalen Sommerakademie für Schlagwerk Percussion meets Identity, sowie Jurorin bei zahlreichen Wettbewerben.</p>',
              'absatz_2': '<p><span class="heading-about-me">Engagements in unterschiedlichesten Ensemble-Formationen</span><ul class="text-left"><li>RSO-Wien</li><li>Grazer Oper</li><li>Grazer Philharmonisches Orchester</li><li>Niederösterreichisches Tonkünstlerorchester</li><li>Klangforum Wien</li><li>styriarte Festspiel-Orchester</li><li>Concentus Musicus Wien</li><li>Le Concert des Nations</li><li>Ensemble Phace</li><li>Stadttheater Klagenfurt</li><li>Ensemble Wiener Collage</li><li>Austrian Art Ensemble</li><li>die reihe</li><li>Ensemble Kontrapunkte</li><li>Festival Orchester Klangbogen Wien</li><li>Wiener Symphoniker</li></ul></p><p>Ulrike Stadler ist Paukistin im recreation – Großes Orchester Graz</p>',
              'absatz_3': '<span class="heading-about-me">Teilnahme an verschiedenen Festivals</span><ul class="text-left" style="margin-bottom:20px;"><li>styriarte</li><li>Wien Modern</li><li>Hörgänge Wien</li><li>Carinthischer Sommer</li><li>Wiener Festwochen</li><li>Salzburger Festspiele</li><li>Brucknerfest Linz</li><li>Musikprotokoll im steirischen herbst</li><li>Biennale Zagreb</li><li>Schleswig Holstein Musikfestival</li><li>Festival für Neue Musik St. Petersburg</li><li>und noch viele mehr...</li></ul>',
              'absatz_4': '<p><span class="heading-about-me">Engagements ihrer Studentierenden und SchülerInnen</span><ul class="text-left"><li>Solopauker der Volksoper Wien</li><li>Erster Pauker der Grazer Oper</li><li>Schlagwerkerin der Oper Maribor</li><li>Dozent für Schlagwerk am Chengdu Institute Sichuan International Studies University</li><li>Professor am Johann-Josef-Fux-Konservatorium des Landes Steiermark</li></ul></p><p>Ihre Studierenden wirken in Ensembles wie Wiener Staatsoper, Wiener Philharmoniker, Grazer Oper, Wiener Volksoper, Niederösterreichisches Tonkünstlerorchester, recreation – Großes Orchester Graz, Wiener Jeunesse Orchester, Berliner Philharmoniker und der Oper Shanghai mit.</p>'
            },
            'kurse': {
              'ueberschrift': 'Kurse',
              'academyLinkText': 'Weiter zur Website',
              'academyText': '<p>Die ACADEMY | PERCUSSION MEETS IDENTITY steht für ein völlig neuartiges, ganzheitlichen Konzept, das musikalisches mit Persönlichkeits-Training (PERCUSSION meets IDENTITY) kombiniert.</p><p>Mit herausragenden Dozentinnen und Dozenten kannst du deine musikalischen und technischen Fertigkeiten und deinen Auftritt, deine Körpersprache und deine Persönlichkeit effektiv weiterentwickeln. Wir arbeiten mit dir an der Entfaltung deiner Stärken und an deren ausdrucksstarker Performance!</p>'
            },
            'galerie': {
              'ueberschrift': 'Galerie',
              'presseAlbum': 'Presse-Album',
            },
            'kontakt': {
              'ueberschrift': 'Kontakt',
              'text': '<p>Du interessierst dich für Percussion und willst mehr darüber erfahren?</p><p>Zögere nicht mich zu kontaktieren!</p>'
            },
            'aufruf': {
              'text': 'Academy Percussion 2017 steht vor der Tür!',
              'buttonText': 'Jetzt anmelden!'
            },
            'switchLngButton': '<i class="fa fa-language sr-language" style="padding-right:10px;"></i>Switch to english',
            'startUeberschrift': 'Schlagwerk: Der Pulsschlag der Musik',
            'willkommenstext': 'Herzlich willkommen auf der Website der Percussionistin Ulrike Stadler!'
          }
        },
        en: {
          translation: {
            'navigation-toggle': '<span class="sr-only">Show navigation</span> Menu <i class="fa fa-bars"></i>',
            'nav': {
              'about': 'About me',
              'courses': 'Courses',
              'gallery': 'Gallery',
              'contact': 'Contact'
            },
            'lebenslauf': {
              'ueberschrift': 'Musical career and educational activities',
              'absatz_1': '<p>Ulrike Stadler studied at Kunstuniversität Graz and Oberschützen with Gerald Fromme and Martin Kerschbaum. She studied concert and music education voice and instrument and graduated with distinction (Masters of Arts).<br/>In 2004 she was awarded with the venia docendi for percussion. She is a lecturer for percussion instruments, chamber music, preparation as well highly gifted student classes at Kunstuniversität Graz and is the head of the preparation class for percussion instruments at Joseph Haydn Conservatory in Burgenland.</p><p>Ulrike Stadler is also jury member of the state- and national wide competition prima la musica.</p>',
              'absatz_2': '<p><span class="heading-about-me">Engagements in diverse forms</span><ul class="text-left"><li>RSO-Wien</li><li>Grazer Oper</li><li>Grazer Philharmonisches Orchester</li><li>Niederösterreichisches Tonkünstlerorchester</li><li>Klangforum Wien</li><li>styriarte Festspiel-Orchester</li><li>Concentus Musicus Wien</li><li>Le Concert des Nations</li><li>Ensemble Phace</li><li>Stadttheater Klagenfurt</li><li>Ensemble Wiener Collage</li><li>Austrian Art Ensemble</li><li>die reihe</li><li>Ensemble Kontrapunkte</li><li>Festival Orchester Klangbogen Wien</li><li>Wiener Symphoniker</li></ul></p><p>Ulrike Stadler is a timpanist at Recreation – Großes Orchester Graz</p>',
              'absatz_3': '<span class="heading-about-me">Participation at various festivals</span><ul class="text-left" style="margin-bottom:20px;"><li>styriarte</li><li>Wien Modern</li><li>Hörgänge Wien</lili>Carinthischer Sommer</li><li>Wiener Festwochen</li><li>Salzburger Festspiele</li><li>Brucknerfest Linz</li><li>Musikprotokoll im steirischen herbst</li><li>Biennale Zagreb</li><li>Schleswig Holstein Musikfestival</li><li>Festival für Neue Musik St. Petersburg</li><li>and many more...</li></ul>',
              'absatz_4': '<p><span class="heading-about-me">Success of her students</span>Her students won numerous awards and first prizes at PENDIM International Competition for Percussion Instruments, prima la musica.</p><p>Two of her students are also working as lecturer for percussion at the Chengdu Institute Sichuan International Studies University and as professor at the Johann-Fux-Konservatorium in Styria.</p><p>Her students perform in ensembles such as Wiener Staatsoper, Grazer Oper, Wiener Volksoper, Niederösterreichisches Tonkünstlerorchester, Recreation – Großes Orchester Graz, Vienna Jeunesse Orchester, Berliner Philharmoniker and Shanghai Opera.</p>'
            },
            'kurse': {
              'ueberschrift': 'Courses',
              'academyLinkText': 'go to page',
              'academyText': '<p>The ACADEMY | PERCUSSION MEETS IDENTITY stands for a completely new concept in itself that combines musical with personality training (PERCUSSION meets IDENTITY).</p><p>Together with exceptional teachers you will improve your musical and technical skills, your on stage performance, your body language and your personality. We will work with you to develop your strengths and their strong performance!</p>'
            },
            'galerie': {
              'ueberschrift': 'Gallery',
              'presseAlbum': 'Press Album',
            },
            'kontakt': {
              'ueberschrift': 'Contact',
              'text': '<p>You are interested in percussion and want to experience it even more?</p><p>Don\'t hesitate to contact me!</p>'
            },
            'aufruf': {
              'text': 'Academy Percussion 2017 is around the corner!',
              'buttonText': 'Register now!'
            },
            'switchLngButton': '<i class="fa fa-language sr-language" style="padding-right:10px;"></i>Zu Deutsch wechseln',
            'startUeberschrift': 'Percussion: The Pulse of Music',
            'willkommenstext': 'Welcome to the website of the percussionist Ulrike Stadler!'
          }
        }
      }
    }, function (err, t) {
        // initialized and ready to go!
        jqueryI18next.init(i18next, $);
        // start localizing, details:
        // https://github.com/i18next/jquery-i18next#usage-of-selector-function
        translateAll();
    });

})(jQuery); // End of use strict
