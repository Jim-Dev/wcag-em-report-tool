'use strict';

try {
  angular.module('wcagReporter');
} catch (e) {
  angular.module('wcagReporter', ['pascalprecht.translate']);
}

angular.module('wcagReporter').config(['$translateProvider',
  function ($translateProvider) {
    var translations = {
      'AUDIT': {
        'TITLE': 'Stap 4: Toets de sample',
        'INTRO': 'Beschrijf de resultaten uit de evaluatie van de webpagina\'s geselecteerd in de vorige stap. Vergelijk de resultaten tussen de geordende pagina\'s en de willekeurig gekozen pagina\'s, en waar nodig pas de geselecteerde sample in de vorige stap aan. Meer informatie over deze stap is te vinden in {0}. \n Opmerking: Voor elk WCAG 2.0 succescriterium,kunt u resultaten voor de volledige sample invullen, evenals resultaten voor individuele pagina\'s. Om individuele resultaten in te vullen, selecteer pagina\'s onder \'Te evalueren sample\' (in de linker kolom); vervolgens onder de succescriteria, kies \'Invoer voor per-pagina-resultaten weergeven\'',
        'INTRO_0': 'WCAG-EM Stap 4: Toets de sample',
        'HD_SAMPLE_SELECT': 'Te evalueren sample',
        'INF_AUDIT_SAMPLE': 'In dit onderdeel vindt u de webpagina\'s uit de vorige stap. De webpagina\'s die in dit onderdeel geselecteerd worden zullen onder \'Invoer voor per-pagin-aresultaten weergeven\' worden weergegeven wanneer deze uitgeklapt is in het onderdeel \'Te evalueren succescriteria\'. U kunt per pagina weergeven, of meerdere webpagina\'s tegelijk. Met het linkicoon kunt u pagina\'s in een nieuw venster openen.',
        'BTN_COMPLETE_SELECTED': 'Markeer selectie als voltooid',
        'BTN_UNCOMPLETE_SELECTED': 'Markeer selectie als onvoltooid',
        'BTN_OPEN_SELECTED': 'Open geselecteerde pagina\'s',
        'NO_SAMPLE': 'Geen sample beschikbaar. Maak een sample in stap 2 en stap 3.',
        'TESTED': 'Getest',
        'HD_CRITERIA': 'Succescriteria om te evalueren',
        'INF_AUDIT_CRITERIA': 'In dit onderdeel vindt u de WCAG 2.0 succescriteria. Gebruik de filter om succescriteria van andere niveaus (A, AA en AAA) te tonen of verbergen. Kies \'Voldoende\', \'Onvoldoende\', \'Niet van toepassing\', en \'Onduidelijk\' als resultaat. U kunt bevindingen en andere opmerkingen uit de evaluatie in het tekstveld invullen.',
        'FILTER': 'Filter',
        'PRINCIPLE': 'Principe',
        'NOTE': 'Opmerking',
        'BTN_SHOW_TEXT': 'criteriumtekst weergeven',
        'UNDERSTAND': 'Toelichting',
        'HOW_TO': 'Hoe te voldoen',
        'SAMPLE_FINDINGS': 'Resultaat van de hele sample',
        'BTN_EXPAND_PAGES': 'Invoer voor per-pagina-resultaten weergeven',
        'BTN_COLLAPSE_PAGES': 'Invoer voor per-pagina-resultaten verbergen',
        'LABEL_OUTCOME': 'Uitkomst',
        'NO_PAGE_SELECTED': 'Geen pagina geselecteerd onder \'Te evalueren sample\'',
        'PLH_ASSERT_DESC': 'Bevindingen uit de evaluatie',
        'CLICK_TO_DELETE': 'Klik om te verwijderen',
        'LABEL_PAGE_HANDLE': 'Korte paginatitel',
        'RESULTS_FOR': 'Uitkomst voor'
      },
      'COMMON': {
        'BROWSER_NOT_SUPPORTED': 'Enkele functionaliteiten zijn niet door uw webbrowser ondersteund, zoals het opslaan en openen van rapporten. Je kunt de rapport tool met beperkte functionaliteit gebruiken. Update of gebruik een andere webbrowser om van alle functionaliteiten in de Report Tool gebruik te kunnen maken.',
        'WARNING_BEFORE_UNLOAD': 'Uw data worden niet automatisch opgeslagen. Wanneer het venster van uw web browser sluit is de data verloren. Gebruik de \'Opslaan\' link (Ctrl + S of ⌘ S) bovenaan iedere pagina om uw data in een bestand op uw locale computer te bewaren en open deze later om door te werken.',
        'HIDE_MESSAGE': 'Verberg bericht',
        'BTN_INFO': 'Info uitklappen',
        'BTN_CLOSE_INFO': 'Sluit info',
        'YES': 'Ja',
        'NO': 'Nee',
        'CLICK_EXPAND': 'Klik om sectie te tonen',
        'CLICK_COLLAPSE': 'Klik om sectie te verbergen',
        'TO_TOP': 'Naar boven'
      },
      'DOWNLOAD': {
        'TITLE': 'Website Toegankelijkheid Evaluatie Rapport',
        'INTRO': 'Hieronder vindt u het evaluatierapport gebaseerd op de gegevens die u in vorige stappen heeft ingevuld. U kunt teruggaan naar vorige stappen voor verdere aanpassingen. U kunt de evaluatiedata downloaden zodat u hier later aan door kunt werken. (Hetzelfde als bij \'Opslaan\'.) \n Dit rapport is bedoeld als download. U kunt de HTML en CSS bestanden van het rapport hieronder downloaden. U kunt de presentatie en content van het rapport daarna verder aanpassen.',
        'DOWNLOAD_REPORT': 'Download het rapport',
        'BTN_SAVE_HTML': 'Download het evaluatierapport (HTML)',
        'BTN_SAVE_CSS': 'Download de stylesheet van het rapport (CSS)',
        'BTN_SAVE_JSON': 'Bewaar de evaluatiedata (JSON)'
      },
      'EARL': {
        'PASSED': 'Voldoende',
        'FAILED': 'Onvoldoende',
        'CANT_TELL': 'Onduidelijk',
        'NOT_PRESENT': 'Niet van toepassing',
        'NOT_CHECKED': 'Niet getoetst',
        'LEVEL_A': 'Niveau A',
        'LEVEL_AA': 'Niveau AA',
        'LEVEL_AAA': 'Niveau AAA'
      },
      'EXPLORE': {
        'TITLE': 'Stap 2: Verken de te onderzoeken website',
        'INTRO': 'Verken de website om zo het doel en de functie van de website te achterhalen. Deze stap helpt u te bepalen welke webpagina\'s te bekijken in de volgende stappen. Achterhaal welke webtechnologieën in de website zijn gebruikt, en als u wilt, neem notities over belangrijke aspecten van de website. Het is gebruikelijk om voor deze stap input van de eigenaar en ontwikkelaars van de website mee te nemen. Meer informatie over deze stap vindt u in {0}.',
        'INTRO_0': 'WCAG-EM Stap 2: Verken de te onderzoeken website',
        'HD_RELIEDUP_TECH': 'technologieën waarop gesteund wordt',
        'INF_RELIEDUP_TECH': 'Bepaal met welke webtechnologieën de website wordt geleverd. Voor meer informatie, zie {0}.\n Merk op: om andere technologieën toe te voegen, kies \'Anders\' and gebruik de velden \'Webtechnologie\' en \'Specificatie adres (URL)\'. In het veld \'Specificatie adres (URL)\' dient te verwijzen naar de specificatie van de technologie.',
        'INF_RELIEDUP_TECH_0': 'WCAG-EM Stap 2.d: Bepaal de technologieën waarop gesteund wordt',
        'INF_RELIEDUP_TECH_1': 'definitie van \'gesteund wordt\' in WCAG 2.0',
        'LABEL_TECH': 'Webtechnologie',
        'LABEL_TECH_SPEC': 'Specificatie adres (URL)',
        'PLH_TECH': 'Bv. HTML5, CSS, DOM',
        'PLH_TECH_SPEC': 'Locatie (URL) of instructie naar de specificatie',
        'BTN_REMOVE_TECH': 'Webtechnologie verwijderen',
        'BTN_ADD_TECH': 'Webtechnologie toevoegen',
        'HD_NOTE_TAKING': 'Eventuele aantekeningen uit verkenning',
        'INF_NOTE_TAKING': 'In dit onderdeel kunt u aantekeningen zetten die u maakt bij het verkennen van de website. Deze aantekeningen kunt u in de volgende stap gebruiken om webpagina\'s voor de sample te selecteren voor de evaluatie. <strong>Deze notities komen niet in het eindrapport.</strong> Wel worden ze bewaard wanneer u het onderzoek opslaat en het bestand later opent.',
        'LABEL_ESSENT_FUNC': 'Functionaliteiten essentieel voor de website',
        'INF_ESSENT_FUNC': 'Gebruik dit veld om essentiële functionaliteiten van de website te noteren. Voorbeelden van essentiële functionaliteiten zijn: \n \'Selecteer en bestel een product uit de webwinkel van de website\'\n \'Afronden en versturen van een formulier op de website\'\n\'Een account op de website registreren\'\n Meer informatie vindt u in {0}',
        'INF_ESSENT_FUNC_0': 'WCAG-EM Stap 2.b: Identificeer essentiële functionaliteiten van de website',
        'LABEL_VARIETY_PAGE_TYPES': 'Diverse paginatypes',
        'INF_VARIETY_PAGE_TYPES': 'Gebruik dit veld om bij te houden welke diverse typen webpagina\'s u op de website heeft gevonden. Het gaat hier bijvoorbeeld over verschillende (opmaak)stijlen, layouts, indelingen en functionaliteiten op de website. Meer informatie vindt u in {0}.\n Merk op: Een \'webpagina\' kan in verschillende \'webpagina toestanden\' bestaan; zie de definitie {1}.',
        'INF_VARIETY_PAGE_TYPES_0': 'WCAG-EM Stap 2.c: Identificeer diverse paginatypes',
        'INF_VARIETY_PAGE_TYPES_1': 'webpagina toestanden',
        'LABEL_OTHER': 'Anders...'
      },
      'HTML_REPORT': {
        'BY': 'Rapport auteur',
        'COMMISION_BY': 'Evaluatie opdrachtgever',
        'HD_SUMMARY': 'Samenvatting Evaluatieresultaten',
        'HD_SCOPE': 'Scope van de evaluatie',
        'LABEL_SITE_NAME': 'Website naam',
        'LABEL_SITE_SCOPE': 'Scope van de website',
        'LABEL_CONFORMANCE_TGT': 'Conformiteitsdoel',
        'LABEL_EXTRA_REQUIREMENTS': 'Verdere evaluatievereisten',
        'LABEL_SUPPORT_BASE': 'Basisniveau van toegankelijkheid ondersteund',
        'LABEL_RELIEDUP_TECH': 'technologieën waarop gesteund wordt',
        'HD_SCORE': 'Overzicht toetsresultaten',
        'RESULTS_OF': 'Resultaat voor',
        'PRINCIPLE': 'Principe',
        'TOTAL_SCORE': 'Totaal',
        'HD_CRITERIA_REPORT': 'Uitgebreide toetsresultaten',
        'LABEL_DESCR': 'Bevindingen',
        'NO_TEXT_PROVIDED': 'Geen tekst beschreven',
        'HD_SAMPLE': 'Sample met getoetste webpagina\'s',
        'HD_SPECIFICS': 'Onderbouwing van de evaluatie',
        'HD_DOCS': 'Informatie over WCAG 2.0'
      },
      'NAV': {
        'MENU_RESOURCES': 'Relevante links',
        'MENU_NEW': 'Nieuw rapport',
        'MENU_OPEN': 'Open',
        'MENU_SAVE': 'Opslaan',
        'MENU_SAVE_TITLE': 'Ctrl + S of ⌘ S',
        'MENU_LANGUAGE': 'Taalkeuze',
        'WZRD_START': 'Start',
        'WZRD_SCOPE': '1. Bepaal Scope',
        'WZRD_EXPLORE': '2. Verken Website',
        'WZRD_SAMPLE': '3. Selecteer Sample',
        'WZRD_AUDIT': '4. Toets Sample',
        'WZRD_REPORT': '5. Rapporteer Resultaat',
        'WZRD_ACTIVE': 'Actief',
        'WZRD_EXPORT': 'Bekijk Raport',
        'PREV_STEP': 'Vorige stap',
        'NEXT_STEP': 'Volgende stap',
        'STEP_START': 'Start',
        'STEP_SCOPE': 'Bepaal scope',
        'STEP_EXPLORE': 'Verken website',
        'STEP_SAMPLE': 'Selecteer Sample',
        'STEP_AUDIT': 'Toets Sample',
        'STEP_REPORT': 'Rapporteer Resultaat',
        'STEP_VIEW': 'Bekijk Report',
        'BTN_BACK_TO_EVAL': 'Terug'
      },
      'OPEN': {
        'TITLE': 'Open Evaluatierapport',
        'INTRO': 'Om een opgeslagen bestand opnieuw te openen, klik op \'verkennen\' op het JSON databestand dat u voorheen hebt bewaard en klik vervolgens op de \'Open data uit geselecteerd bestand\' knop.',
        'LABEL_SELECT_FILE': 'Selecteer het evaluatie-databestand',
        'MSG_LOADING': 'De evaluatie wordt geladen, even geduld a.u.b.',
        'BTN_LOAD_FILE': 'Open data uit geselecteerd bestand'
      },
      'REPORT': {
        'TITLE': 'Stap 5: Evaluatiebevindingen rapporteren',
        'INTRO': 'Benoem overige informatie uit de evaluatie die u in het rapport wilt hebben. De toetsresultaten uit de vorige stap vindt u onder \'Uitgebreide toetsresultaten\' ter review en om u te helpen bij het schrijven van de samenvatting. Meer informatie over deze stap vindt u in {0}.',
        'INTRO_0': 'WCAG-EM Stap 5: Evaluatiebevindingen rapporteren',
        'LABEL_TITLE': 'Rapporttitel',
        'TITLE_PREFIX': 'Rapportage van',
        'INF_TITLE': 'Vul hier de titel van het evaluatierapport van de website toegankelijkheid in. Bijvoorbeeld: \n \'Evaluatierapport voor Voorbeeldorganisatie\' \n \'Webshop Toegankelijkheidsanalyse en verbetersuggesties\'',
        'LABEL_COMMISSIONER': 'Evaluatie opdrachtgever',
        'INF_COMMISSIONER': 'De persoon, het team, de organisatie, het departement of andere entiteit die opdracht voor de evaluatie gaf.',
        'LABEL_CREATOR': 'Evaluator',
        'INF_CREATOR': 'De persoon, het team, de organisatie, het departement of andere entiteit verantwoordelijk voor het uitvoeren van de evaluatie.',
        'LABEL_DATE': 'Evaluatiedatum',
        'INF_DATE': 'Vul hier de datum in waarop de evaluatie werd afgerond, of de datums waarop de evaluatie plaats vond. U kunt elk datumformaat gebruiken.',
        'LABEL_SUMMARY': 'Managementsamenvatting',
        'INF_SUMMARY': 'Geef een korte samenvatting van de bevindingen uit de evaluatie om zo een overzicht van de resultaten te krijgen. Benoem bijvoorbeeld de algehele toegankelijkheid van de website, met enkele tekenende observaties uit het onderzoek, zoals de frequentie van bepaalde problemen.',
        'LABEL_SPECIFICS': 'Benoem de onderbouwing van de evaluatie (optioneel)',
        'INF_SPECIFICS': 'WCAG-EM raadt aan dat u de getoetste webpagina\'s bewaard. Meer informatie hierover vindt u in {0}. Gebruik dit tekstveld tevens om de gebruikte evaluatietools, webbrowsers, hulptechnologieën, andere software en toetsmethodes vast te leggen. Dit zal tevens in het eindrapport staan. U kunt deze informatie na het downloaden van het rapport als HTML-bestand nog bijwerken.',
        'INF_SPECIFICS_0': 'WCAG-EM Stap 5.b: Benoem de onderbouwing van de evaluatie',
        'HD_CRITERIA_REPORT': 'Uitgebreide toetsresultaten'
      },
      'SAMPLE': {
        'TITLE': 'Stap 3: Selecteer een representatieve sample',
        'INTRO': 'Selecteer webpagina\'s voor de evaluatie. Uw vindt hier uw aantekeningen uit de vorige stap, om u te helpen webpagina\'s voor de sample te selecteren. Zorg ervoor dat de gekozen webpagina\'s representatief zijn voor de te toetsen website. Meer informatie over deze stap vindt u in {0}.',
        'INTRO_0': 'WCAG-EM Stap 3: Selecteer een representatieve sample',
        'HD_STRUCT_SAMPLE': 'Geordende Sample',
        'HD_ESSENT_FUNC': 'Essentiële Functionaliteiten (optionele notities uit vorige stap)',
        'HD_VARIETY_PAGE_TYPES': 'Diverse aan paginatypes (optionele notities uit vorige stap)',
        'HD_STRUCT_SAMPLE_SUB': 'Geselecteerde webpagina sample',
        'INF_STRUCT_SAMPLE': 'Selecteer webpagina\'s representatief voor alle (1) veelgebruikte webpagina\'s, (2) essentiële functionaliteiten, (3) typen pagina\'s, (4) webtechnologieën waarop gesteund wordt, en (5) overige relevante pagina\'s. Meer informatie vindt u in {0}.\n Opmerking: \'webpagina\'s\' kunnen in verschillende \'toestanden\' (states) bestaan; zie de definitie van {1}',
        'INF_STRUCT_SAMPLE_0': 'WCAG-EM Stap 3.a: Gebruik een geordende sample',
        'INF_STRUCT_SAMPLE_1': 'webpagina toestand',
        'HD_RANDOM_SAMPLE': 'Willekeurige Sample',
        'INF_RAND_SAMPLE': 'Willekeurig geselecteerde samplepagina\'s: Gebruik 10% van de grootte van de geordende sample. Meer informatie vindt u in {0}.\n Opmerking: \'webpagina\'s\' kunnen in verschillende \'toestanden\' (states) bestaan; zie de definitie van {1}',
        'INF_RAND_SAMPLE_0': 'WCAG-EM Stap 3.b: Gebruik een willekeurige sample',
        'INF_RAND_SAMPLE_1': 'webpagina toestand',
        'RAND_SAMPLE_LENGTH': 'Op basis van de geordende sample van {0} webpagina\'s, selecteer tenminste {1} willekeurige webpagina\'s (om te voldoen aan de 10% eis uit WCAG-EM).',
        'LABEL_HANDLE': 'korte titel',
        'LABEL_PAGE': 'Locatie (URL) of instructie',
        'NO_PAGES_DEFINED': 'Er is geen pagina in deze lijst',
        'ITEM': 'Webpagina',
        'PLH_HANDLE': 'Identificerende naam voor de webpagina',
        'PLH_PAGE_URL': 'Locatie (URL) of instructie van het te volgen pad',
        'BTN_ADD_PAGE': 'Pagina toevoegen',
        'BTN_REMOVE_PAGE': 'Pagina verwijderen',
        'STRUCTURED_PAGE': 'Geordende pagina',
        'RANDOM_PAGE': 'Willekeurige pagina',
        'SAMPLE_PAGE': 'Samplepagina'
      },
      'SAVE': {
        'TITLE': 'Evaluatierapport opslaan',
        'INTRO': 'Gebruik onderstaande link om de door u ingevoerde gegevens van het evaluatierapport als JSON databestand lokaal op uw computer te bewaren.',
        'BTN_DOWNLOAD_DATA_FILE': 'Bewaar databestand lokaal op uw computer',
        'TIPS': 'U kunt onvoltooide rapporten (en aantekeningen) bewaren en hier later aan verder werken. U kunt deze openen in iedere webbrowser en het databestand naar een andere computer sturen.\n U dient uw werk regelmatig op te slaan om te voorkomen dat u werk verliest mocht de web browser sluiten. U kunt de sneltoets Ctrl+S voor windows of ⌘S voor Mac gebruiken om het opslaan-scherm te starten (of om automatisch naar uw downloads folder te plaatsen, afhankelijk van uw browser instellingen). \n Wanneer u het evaluatierapport heeft afgerond, kunt u een HTML-bestand met het volledige rapport downloaden de {0}.',
        'TIPS_0': '\'Bekijk rapport\'-pagina'
      },
      'SCOPE': {
        'TITLE': 'Stap 1: Bepaal de scope van de evaluatie',
        'INTRO': 'Bepaal de basiseisen en scope van de evaluatie. Idealiter wordt dit gedaan door de opdrachtgever van de evaluatie (dit kan, maar hoeft niet de eigenaar van de website te zijn), om ervoor te zorgen dat de verwachtingen op de opdracht aansluiten. Meer informatie over deze stap vindt u in {0}.',
        'INTRO_0': 'WCAG-EM Stap 1: Bepaal de scope van de evaluatie',
        'LABEL_SITE_NAME': 'Website naam',
        'INF_SITE_NAME': 'Vul een naam in van de te evalueren website. Bijvoorbeeld:\n \'Publieke website van Voorbeeld Organisatie\' \n \'Webshop van Voorbeeld Bedrijf\' \n \'Intranet van Voorbeeld Universiteit\'',
        'LABEL_SITE_SCOPE': 'Scope van de website',
        'INF_SITE_SCOPE_0': 'Definieer de scope van de website, zodat duidelijk is welke webpagina\'s binnen de evaluatie vallen. Bijvoorbeeld:',
        'INF_SITE_SCOPE_LI0': '\'Alle webcontent van de publieke website van Voorbeeld Org. op http://www.example.org\'',
        'INF_SITE_SCOPE_LI1': '\'Alle webcontent van de webwinkel van Voorbeeld Org. op http://www.example.org/shop/\'',
        'INF_SITE_SCOPE_LI2': '\'Alle webcontent op de mobiele versie van de publieke website van Voorbeeld Org. op http://m.example.org\'',
        'INF_SITE_SCOPE_1': 'Voor meer informatie, zie {0}.',
        'INF_SITE_SCOPE_1A': 'WCAG-EM Stap 1.a: Definieer de scope van de website',
        'LABEL_CONFORMANCE_TGT': 'Conformiteitsdoel',
        'INF_CONF_TGT': 'Bepaal het doel van de WCAG 2.0 conformiteitsniveau (\'A\', \'AA\' of \'AAA\') voor de evaluatie. Voor meer informatie, zie {0}. \n Dit onderdeel bepaald welke niveaufilters in stap 4 standaard aan zullen staan.',
        'INF_CONF_TGT_0': 'WCAG-EM Step 1.b: Bepaal het conformiteitsdoel',
        'LABEL_SUPPORT_BASE': 'Basisniveau van toegankelijkheid ondersteund',
        'INF_SUPPORT_BASE': 'Bepaal welke webbrowser, hulptechnologieën en andere {1} door {2} worden door de website. Bijvoorbeeld: \'Internet Explorer (IE) met JAWS\', \'Firefox met NVDA\', en \'iOS met VoiceOver\' zou het basisniveau kunnen zijn. Voor meer informatie, zie {0}.',
        'INF_SUPPORT_BASE_0': 'WCAG-EM Step 1.c: Bepaal het Basisniveau van toegankelijkheid ondersteund',
        'INF_SUPPORT_BASE_1': 'user agents',
        'INF_SUPPORT_BASE_2': 'toegankelijkheid ondersteund',
        'LABEL_EXTRA_REQUIREMENTS': 'Verdere evaluatievereisten',
        'INF_EXTRA_REQUIREMENTS_0': 'Bepaal overige evaluatievereisten. Bijvoorbeeld:',
        'INF_EXTRA_REQUIREMENTS_LI0': '\'In het rapport wordt een volledige lijst van de gevonden problemen opgenomen, in plaats van slechts enkele voorbeelden\'',
        'INF_EXTRA_REQUIREMENTS_LI1': '\'In het rapport zal een omschrijving van de problemen gegeven worden, samen met suggesties voor het oplossen van de problemen\'',
        'INF_EXTRA_REQUIREMENTS_LI2': '\'Alle webpagina\'s en webcontent van de website zullen in de evaluatie getest worden, in plaats van enkel de steekproef',
        'INF_EXTRA_REQUIREMENTS_1': 'Voor meer informatie, zie {0}.',
        'INF_EXTRA_REQUIREMENTS_1A': 'WCAG-EM Step 1.d: Bepaal overige evaluatievereisten'
      },
      'START': {
        'TITLE': 'WCAG-EM Report Tool',
        'SUBTITLE': 'Website Toegankelijkheid Evaluatie Rapport Generator',
        'INTRO_HD': 'Wat de tool doet',
        'INTRO_1': 'Deze tool helpt u bij het maken van rapporten volgens de {0}. Het voert geen toegankelijkheidstests voor u uit. Het begeleid je door de stappen van WCAG-EM, om een {1} te genereren op basis van de gegevens die u invult. De tool is ontworpen voor ervaren inspecteurs bekend met {2} en met enige kennis van WCAG-EM. U kunt een WCAG-EM introductie vinden op {3}.',
        'INTRO_1_0': 'Website Accessibility Conformance Evaluation Methodology (WCAG-EM)',
        'INTRO_1_1': 'gestructureerd report',
        'INTRO_1_2': 'Richtlijnen voor Toegankelijkheid van Webcontent (WCAG) 2.0',
        'INTRO_1_3': 'WCAG-EM Overzicht',
        'INTRO_2A': 'Let op:',
        'INTRO_2B': 'Deze tool bewaard niet automatisch uw werk. U kunt uw gegevens lokaal op uw computer bewaren met de sneltoets Ctrl+S in windows, of {{mac}} op Mac. Dit start het opslaan scherm. (U kunt dit ook doen door de \'Bewaar\' link bovenaan de pagina te klikken, en vervolgens op de link \'Bewaar databestand lokaal op uw computer\' te klikken.)',
        'USAGE_HD': 'Hoe deze tool werkt',
        'USAGE_LI1': 'Alle functionaliteit is direct in uw webbrowser beschikbaar. U heeft geen internetverbinding nodig vanaf dit punt. Wanneer u het venster van de webbrowser sluit, raken gegevens die u niet heeft bewaard verloren.',
        'USAGE_LI2': 'Alle gegevens die u invult worden als JSON data op de achtergrond bewaard (in uw webbrowser, niet op een server). U kunt periodiek opslaan terwijl u werkt om te voorkomen dat u data verliest mocht uw webbrowser sluiten.',
        'USAGE_LI3': 'Je kunt tussentijdse rapporten bewaren en er later aan verder werken. Klik op de \'Open\' link bovenin de pagina en laad daar het bestand wat je eerder hebt opgeslagen.',
        'USAGE_LI4': 'Links die die de tool verlaten (naar externe pagina\'s) openen in een nieuw browser venster.',
        'TIPS_HD': 'Tips om de tool te gebruiken',
        'TIPS_LI1': 'Je kunt heen en weer tussen de stappen schakelen. Geen van de velden zijn verplicht.',
        'TIPS_LI2A': 'Voor meer informatie over een veld, klik op het ',
        'TIPS_LI2B': ' icoon naast het veld.',
        'TIPS_LI3': 'De tool creëert uw rapport als HTML en CSS bestanden. U kunt deze bestanden downloaden op de \'Bekijk rapport\'-pagina. Daarna kun je het ontwerp en de content van het rapport bijwerken.',
        'TIPS_LI4': 'U kunt succescriteria aan uw WCAG 2.0 rapport toevoegen die hoger zijn dan het conformiteitsdoel. Bijvoorbeeld, de website dient aan niveau AA te voldoen, maar u wilt ook enkele AAA criteria in het rapport benoemen. In stap 4 kunt u het niveau filter gebruiken om succescriteria van een hoger niveau te tonen. Criteria met een ingevuld resultaat zullen altijd in het rapport komen'
      }
    };
    $translateProvider.translations('NL', translations);
    $translateProvider.translations(translations);
    if ($translateProvider.preferredLanguage) {
      $translateProvider.preferredLanguage('NL');
    }
  }
]).value('preferredLanguage', 'NL');