# Cœur-Lingo – Inhaltsprüfung 30.09.2026

Geprüft: 8606 von 8606 Items in 58 von 58 Batches. Befunde nach Integration: 1841 (2 vom Integrator verworfen).

## Fehlerquote je Datei

| Datei | Items | Befunde | Items mit Befund | Quote | Items mit „hoch“ | Quote hoch |
|---|---:|---:|---:|---:|---:|---:|
| inhalte.js | 156 | 15 | 14 | 9.0% | 3 | 1.9% |
| inhalte-b2c1.js | 140 | 19 | 18 | 12.9% | 2 | 1.4% |
| inhalte-themen.js | 614 | 55 | 55 | 9.0% | 2 | 0.3% |
| inhalte-vokabeln.js | 2048 | 333 | 299 | 14.6% | 27 | 1.3% |
| inhalte-vokabeln-b2.js | 1848 | 1193 | 1171 | 63.4% | 6 | 0.3% |
| inhalte-vokabeln-c1.js | 3800 | 226 | 207 | 5.4% | 26 | 0.7% |

## Zählung je Fehlerart und Niveau

| Fehlerart | A2 | B1 | B2 | C1 | Gesamt |
|---|---:|---:|---:|---:|---:|
| artikel_fehlt | 31 | 92 | 1107 | 8 | 1238 |
| kopfwort_zusammengeklebt | 28 | 89 | 43 | 82 | 242 |
| uebersetzung_en | 0 | 22 | 24 | 70 | 116 |
| duplikat_dateiuebergreifend | 24 | 14 | 10 | 5 | 53 |
| sonstiges | 1 | 8 | 9 | 21 | 39 |
| duplikat_im_batch | 1 | 14 | 4 | 12 | 31 |
| rechtschreibung | 9 | 8 | 0 | 11 | 28 |
| duplikat_in_datei | 3 | 10 | 3 | 9 | 25 |
| grammatik | 8 | 8 | 1 | 6 | 23 |
| loesung_falsch | 8 | 4 | 5 | 2 | 19 |
| kopfwort_fehlt_im_satz | 8 | 4 | 0 | 0 | 12 |
| genus | 1 | 0 | 0 | 9 | 10 |
| niveau_zu_hoch | 2 | 1 | 0 | 0 | 3 |
| plural | 0 | 0 | 0 | 2 | 2 |

| Schwere | A2 | B1 | B2 | C1 | Gesamt |
|---|---:|---:|---:|---:|---:|
| hoch | 19 | 14 | 8 | 30 | 71 |
| mittel | 73 | 216 | 1172 | 162 | 1623 |
| niedrig | 32 | 44 | 26 | 45 | 147 |

## Die 20 schwersten Befunde

| # | ID | Datei | Niveau | Fehlerart | Befund | Vorschlag |
|---:|---|---|---|---|---|---|
| 1 | sv0169 | inhalte-vokabeln.js | A2 | kopfwort_zusammengeklebt | Kopfwort "der Führer" ist ein Fragment von "Führerschein"; "der Führer" bedeutet "leader/guide" (zudem historisch belastet) und passt nicht zu en "driving licence" | der Führerschein |
| 2 | sv0513 | inhalte-vokabeln.js | A2 | genus | Falscher Artikel "das Verkehrs" – Verkehr ist maskulin | "der Verkehr" |
| 3 | sv0145 | inhalte-vokabeln.js | A2 | kopfwort_zusammengeklebt | Kopfwort "der Familien" ist ein abgeschnittenes Fragment von "Familienname"; passt weder zu en "surname" noch zum Genus | der Familienname |
| 4 | sv0253 | inhalte-vokabeln.js | A2 | kopfwort_zusammengeklebt | Kopfwort "das Kranken" ist ein Fragment von "Krankenhaus"; passt nicht zu en "hospital" | das Krankenhaus |
| 5 | sv0292 | inhalte-vokabeln.js | A2 | kopfwort_zusammengeklebt | Kopfwort "das Mineral" ist ein Fragment von "Mineralwasser"; "das Mineral" bedeutet "mineral", nicht "mineral water" | das Mineralwasser |
| 6 | sv0297 | inhalte-vokabeln.js | A2 | kopfwort_zusammengeklebt | Kopfwort "das Mobil" ist ein abgeschnittenes Fragment von "Mobiltelefon" (Satz); "das Mobil" bedeutet nicht "mobile phone" | das Mobiltelefon |
| 7 | sv0710 | inhalte-vokabeln.js | B1 | kopfwort_zusammengeklebt | Kopfwort "Bäumen" ist Dativ Plural (aus "unter den Bäumen"), übersetzt als "trees" – Lernende lernen eine falsche Pluralform; Artikel fehlt | der Baum, die Bäume |
| 8 | sv1480 | inhalte-vokabeln.js | B1 | uebersetzung_en | falscher Freund: "das Menü" im Restaurant ist ein festes Gericht/Tagesmenü, nicht "the menu" (= die Speisekarte); der Satz "das Menü des Tages" meint set meal | en: the set meal / set menu (menu = die Speisekarte) |
| 9 | g06 | inhalte.js | B2 | loesung_falsch | Die als richtig markierte Lösung ergibt einen ungrammatischen Satz: "Ich hätte gern einen Tisch reservieren." – "hätte gern" verbindet sich mit einem Nomen (Ich hätte gern einen Kaffee) bzw. mit Partizip (reserviert), nicht mit einem Infinitiv; explainEn lehrt die falsche Konstruktion. | Satz "Ich ___ gern einen Tisch reservieren." mit Optionen ["würde","werde","wurde"], answer 0; oder "Ich ___ gern einen Tisch für zwei Personen." mit ["hätte","habe","hatte"]. |
| 10 | sv1533 | inhalte-vokabeln.js | B1 | kopfwort_zusammengeklebt | Kopfwort "Nachbarländern" ist eine flektierte Dativ-Plural-Form statt Grundform, zudem ohne Artikel | das Nachbarland, die Nachbarländer |
| 11 | sv0890 | inhalte-vokabeln.js | B1 | kopfwort_zusammengeklebt | Kopfwort "dung" ist ein Wortfragment (abgeschnittenes "Verbindung"), kein Wort; auch das Suffix heißt "-ung", nicht "dung"; en "-tion/-ment (suffix)" passt nicht zum Satz | die Verbindung (en: the connection) oder Eintrag streichen |
| 12 | sv0993 | inhalte-vokabeln.js | B1 | kopfwort_zusammengeklebt | Kopfwort "das Essen kümmern" ist ein Fragment ohne Reflexivpronomen und Präposition; so ungrammatisch | sich um das Essen kümmern / en: to take care of the food |
| 13 | kx01 | inhalte-b2c1.js | B2 | loesung_falsch | Mit der Lösung "würde" bleibt der Satz unvollständig: "Wenn ich an deiner Stelle wäre, würde ich diesen Job sofort." – der Infinitiv "kündigen" fehlt im Satz, obwohl hintEn sagt, er stehe am Ende. Zudem wäre "kündigte" (synthetischer Konj. II) ebenfalls korrekt. | Prompt: "Wenn ich an deiner Stelle wäre, ___ ich diesen Job sofort kündigen. (werden, Konjunktiv II)", answer "würde". |
| 14 | sv1797 | inhalte-vokabeln.js | B1 | uebersetzung_en | en "oneself to" ist keine sinnvolle Übersetzung | to remember (sth.) |
| 15 | sv1506 | inhalte-vokabeln.js | B1 | uebersetzung_en | "das Möbel" (Sg.) ist ein einzelnes Möbelstück; "the furniture" entspricht dem Plural "die Möbel", den auch der Satz verwendet | das Möbel = the piece of furniture; die Möbel (Pl.) = the furniture |
| 16 | sx2314 | inhalte-vokabeln-c1.js | C1 | genus | falscher Artikel "die Neurologe"; der Satz dekliniert korrekt maskulin "an einen Neurologen" | der Neurologe |
| 17 | sx2988 | inhalte-vokabeln-c1.js | C1 | plural | Kopfwort "das Symptome" verbindet den Singularartikel mit der Pluralform; Singular ist "das Symptom", Plural "die Symptome". | das Symptom (Pl. die Symptome) |
| 18 | sx1110 | inhalte-vokabeln-c1.js | C1 | genus | Falsches Genus im Kopfwort: "die Fluch" – Fluch ist maskulin | der Fluch |
| 19 | sx0454 | inhalte-vokabeln-c1.js | C1 | kopfwort_zusammengeklebt | Kopfwort "die Berufs" ist ein Genitiv-Fragment (aus "des richtigen Berufs") mit falschem Artikel; weder Grundform noch korrekter Plural | der Beruf, die Berufe (en: profession, job) |
| 20 | sx1285 | inhalte-vokabeln-c1.js | C1 | uebersetzung_en | "geöffnet haben" bedeutet 'geöffnet sein' (Öffnungszeiten), nicht "to have opened"; die Übersetzung lehrt eine falsche Bedeutung und passt nicht zum Satz | to be open (of shops etc.) |

## Alle Befunde

| ID | Datei | Niveau | Feld | Fehlerart | Schwere | Befund | Vorschlag | Prüfung |
|---|---|---|---|---|---|---|---|---|
| g06 | inhalte.js | B2 | items[2] | loesung_falsch | hoch | Die als richtig markierte Lösung ergibt einen ungrammatischen Satz: "Ich hätte gern einen Tisch reservieren." – "hätte gern" verbindet sich mit einem Nomen (Ich hätte gern einen Kaffee) bzw. mit Partizip (reserviert), nicht mit einem Infinitiv; explainEn lehrt die falsche Konstruktion. | Satz "Ich ___ gern einen Tisch reservieren." mit Optionen ["würde","werde","wurde"], answer 0; oder "Ich ___ gern einen Tisch für zwei Personen." mit ["hätte","habe","hatte"]. | bestätigt |
| l01 | inhalte.js | A2 | options | loesung_falsch | hoch | Zwei Optionen sind korrekt: "Ich mache morgen einen Termin beim Arzt" (= einen Termin vereinbaren) ist ebenso grammatisch und sinnvoll wie "habe"; der Hinweis wird erst nach der Antwort angezeigt, der Satz selbst schließt "mache" nicht aus. | Distraktor "mache" ersetzen, z. B. Optionen ["habe","bin","hat"] | bestätigt |
| l03 | inhalte.js | A2 | options | loesung_falsch | hoch | "Du musst in Mannheim aussteigen" und "Du musst in Mannheim einsteigen" sind ebenso korrekt wie "umsteigen"; der Hinweis "To change trains" erscheint erst nach der Antwort. | Formdistraktoren statt Bedeutungsdistraktoren: Optionen [„umsteigen“,„umgestiegen“,„steigst um“]; der Originalvorschlag mit „umziehen“ ist selbst korrekt (Du musst in Mannheim umziehen = den Wohnort wechseln). | bestätigt |
| kx01 | inhalte-b2c1.js | B2 | prompt/answer | loesung_falsch | hoch | Mit der Lösung "würde" bleibt der Satz unvollständig: "Wenn ich an deiner Stelle wäre, würde ich diesen Job sofort." – der Infinitiv "kündigen" fehlt im Satz, obwohl hintEn sagt, er stehe am Ende. Zudem wäre "kündigte" (synthetischer Konj. II) ebenfalls korrekt. | Prompt: "Wenn ich an deiner Stelle wäre, ___ ich diesen Job sofort kündigen. (werden, Konjunktiv II)", answer "würde". | bestätigt |
| ky05 | inhalte-b2c1.js | C1 | prompt/answer | loesung_falsch | hoch | Beim trennbaren Verb "sich anbieten" fehlt die Lücke für die Partikel: mit der Lösung ergibt sich "Es böte sich, die ausstehenden Honorare … zu begleichen" – ungrammatisch, richtig wäre "Es böte sich an, …". | Partikel in den Satz holen, damit eine Lücke bleibt: „Es ___ sich an (anbieten), die ausstehenden Honorare …“, answer „böte“. | bestätigt |
| tml040 | inhalte-themen.js | A2 | options | loesung_falsch | hoch | Im Satz "Guten Tag, ich möchte einen Termin ___." sind auch die Distraktoren "verschieben" und "absagen" grammatisch und inhaltlich völlig korrekt; nichts im Satz grenzt auf eine Erstvereinbarung ein, die Erklärung behauptet aber, nur "vereinbaren" passe. | Kontext ergänzen, z. B. "Guten Tag, ich war noch nie bei Ihnen. Ich möchte gern einen Termin ___." oder Distraktoren durch nicht passende Verben ersetzen (z. B. "erreichen", "hinterlassen"). | bestätigt |
| tml067 | inhalte-themen.js | A2 | options | loesung_falsch | hoch | Der Satz "Ich hätte gern einen ___ für morgen Vormittag." hat keinen Friseur-Kontext; "einen Tisch für morgen Vormittag" (Reservierung) und "einen Platz für morgen Vormittag" sind ebenfalls korrekt. Der Hinweis nennt den Friseur, der Satz aber nicht. | Kontext in den Satz holen: "Beim Friseur: Ich hätte gern einen ___ für morgen Vormittag." oder Ablenker ersetzen, z. B. ["Termin","Rechnung","Schere"] | bestätigt |
| sv0057 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "beantworter" ist ein Fragment von "Anrufbeantworter" (kleingeschrieben, ohne Artikel, kein eigenständiges Wort) | "der Anrufbeantworter" | bestätigt |
| sv0125 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "das Einkaufs" ist ein abgeschnittenes Fragment von "Einkaufszentrum" | "das Einkaufszentrum" | bestätigt |
| sv0128 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "einzel" ist kein eigenständiges Wort (nur Bestimmungswort Einzel-); der Satz enthält nur "Einzelzimmer" | "das Einzelzimmer" (en "the single room") oder "einzeln" (en "individual(ly), single") mit passendem Satz | bestätigt |
| sv0145 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "der Familien" ist ein abgeschnittenes Fragment von "Familienname"; passt weder zu en "surname" noch zum Genus | der Familienname | bestätigt |
| sv0169 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "der Führer" ist ein Fragment von "Führerschein"; "der Führer" bedeutet "leader/guide" (zudem historisch belastet) und passt nicht zu en "driving licence" | der Führerschein | bestätigt |
| sv0208 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "herberge" ist ein kleingeschriebenes Fragment von "Jugendherberge", ohne Artikel | die Jugendherberge | bestätigt |
| sv0253 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "das Kranken" ist ein Fragment von "Krankenhaus"; passt nicht zu en "hospital" | das Krankenhaus | bestätigt |
| sv0292 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "das Mineral" ist ein Fragment von "Mineralwasser"; "das Mineral" bedeutet "mineral", nicht "mineral water" | das Mineralwasser | bestätigt |
| sv0297 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "das Mobil" ist ein abgeschnittenes Fragment von "Mobiltelefon" (Satz); "das Mobil" bedeutet nicht "mobile phone" | das Mobiltelefon | bestätigt |
| sv0422 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "das Schwimm" ist ein Fragment von "Schwimmbad" (Satz); kein deutsches Wort | das Schwimmbad | bestätigt |
| sv0423 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "die Sehens" ist ein Fragment von "Sehenswürdigkeiten" (Satz); kein deutsches Wort | die Sehenswürdigkeit, die Sehenswürdigkeiten | bestätigt |
| sv0428 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "setzung" ist ein kleingeschriebenes Fragment von "Übersetzung" (Satz), ohne Artikel | die Übersetzung | bestätigt |
| sv0513 | inhalte-vokabeln.js | A2 | de | genus | hoch | Falscher Artikel "das Verkehrs" – Verkehr ist maskulin | "der Verkehr" | bestätigt |
| sv0513 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "Verkehrs" ist eine Genitivform (vermutlich aus einem Kompositum/Satz herausgelöst), keine Grundform | "der Verkehr" | bestätigt |
| sv0566 | inhalte-vokabeln.js | A2 | ex | grammatik | hoch | "Die Würdigkeit jedes Menschen ist wichtig." ist unidiomatisch; gemeint ist "Würde" | Mit dem Kopfwort zusammen ersetzen: „die Würde“ + „Die Würde des Menschen ist unantastbar.“ oder Eintrag streichen. | bestätigt |
| sv0710 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "Bäumen" ist Dativ Plural (aus "unter den Bäumen"), übersetzt als "trees" – Lernende lernen eine falsche Pluralform; Artikel fehlt | der Baum, die Bäume | bestätigt |
| sv0890 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "dung" ist ein Wortfragment (abgeschnittenes "Verbindung"), kein Wort; auch das Suffix heißt "-ung", nicht "dung"; en "-tion/-ment (suffix)" passt nicht zum Satz | die Verbindung (en: the connection) oder Eintrag streichen | bestätigt |
| sv0993 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "das Essen kümmern" ist ein Fragment ohne Reflexivpronomen und Präposition; so ungrammatisch | sich um das Essen kümmern / en: to take care of the food | bestätigt |
| sv1150 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "das Gerät ein" ist ein Satzfragment (abgetrennte Verbpartikel), kein Lemma | einschalten (en: to switch on); Satz kann bleiben | bestätigt |
| sv1151 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | hoch | "the device turns on" ist falsch: "(man) das Gerät einschaltet" ist transitiv = someone switches the device on | en: "to switch on (a device)" | bestätigt |
| sv1171 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "die Getränke besorgst" ist eine konjugierte Satzform (2. Sg.), kein Lemma | besorgen (en: to get, to buy) | bestätigt |
| sv1311 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "jemandem verwechselt" ist ein Satzfragment (Dativ + Partizip) statt Grundform | jemanden mit jemandem verwechseln (en: to mistake someone for someone else) | bestätigt |
| sv1417 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | hoch | "leisten" allein bedeutet "to achieve / to perform"; "to afford" gilt nur für reflexives "sich etwas leisten" | de: sich (Dat.) etwas leisten, en: to afford something | bestätigt |
| sv1427 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "das Licht gebrannt" ist eine Partizip-Satzform statt Grundform | brennen (vom Licht) – to be on; Satz kann bleiben. | bestätigt |
| sv1480 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | hoch | falscher Freund: "das Menü" im Restaurant ist ein festes Gericht/Tagesmenü, nicht "the menu" (= die Speisekarte); der Satz "das Menü des Tages" meint set meal | en: the set meal / set menu (menu = die Speisekarte) | bestätigt |
| sv1506 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | hoch | "das Möbel" (Sg.) ist ein einzelnes Möbelstück; "the furniture" entspricht dem Plural "die Möbel", den auch der Satz verwendet | das Möbel = the piece of furniture; die Möbel (Pl.) = the furniture | bestätigt |
| sv1533 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "Nachbarländern" ist eine flektierte Dativ-Plural-Form statt Grundform, zudem ohne Artikel | das Nachbarland, die Nachbarländer | bestätigt |
| sv1797 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "sich an" ist ein Fragment ohne Verb, als Vokabel unbrauchbar | sich erinnern an + Akk. (en: to remember) | bestätigt |
| sv1797 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | hoch | en "oneself to" ist keine sinnvolle Übersetzung | to remember (sth.) | bestätigt |
| sw0673 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | hoch | "Gymnastik" mit "gymnastics" übersetzt; dt. Gymnastik = Bewegungs-/Fitnessübungen (Rückengymnastik), engl. gymnastics = Turnen (Geräteturnen) – falscher Freund, passt nicht zum Satz | exercises; keep-fit (Rückengymnastik: back exercises) | bestätigt |
| sw0786 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | hoch | "came about (has)" ist falsch: "came about" = entstand/geschah; im Satz bedeutet "auf jemanden zukommen" = auf jemanden kommen, jemanden erwarten | to come sb.'s way; to be in store for sb. | bestätigt |
| sw1298 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | hoch | "rest room" bedeutet im (amerikanischen) Englisch Toilette; Lernende verstehen "Ruheraum" falsch | relaxation room; quiet room | bestätigt |
| sw1320 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | hoch | "twist of fate" bezeichnet eine überraschende Wendung, "Schicksalsschlag" dagegen einen schweren Unglücksfall (Satz: "schweren Schicksalsschlag") | stroke of fate; (heavy) blow of fate; personal tragedy | bestätigt |
| sw1381 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "sich besehen besetzen" klebt zwei Verben zusammen; Übersetzung und Satz betreffen nur "besetzen" | besetzen (eine Stelle besetzen) | bestätigt |
| sw1382 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "sich ein" ist ein Fragment (Rest von "sich einsetzen"); unbrauchbar als Lernwort | sich einsetzen (für) | bestätigt |
| sx0144 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "anheim" ist kein eigenständiges Wort, sondern Verbzusatz; der Satz verwendet das Verb "anheimstellen" ("stellte ... anheim") | anheimstellen | bestätigt |
| sx0214 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | hoch | Falscher Freund: "argumentative" heißt im Englischen streitlustig; "argumentativ" bedeutet 'in Bezug auf die Argumentation' (Satz: "argumentativ klar überlegen") | en: "in terms of argument / argumentatively" | bestätigt |
| sx0231 | inhalte-vokabeln-c1.js | C1 | de | grammatik | hoch | Lehnübersetzung aus dem Englischen: "auf schlechte Ideen bringen" ist keine deutsche Wendung; idiomatisch ist "jemanden auf dumme Gedanken bringen" (auch Objekt "jemanden" fehlt im Kopfwort) | de: "jemanden auf dumme Gedanken bringen"; ex: "… sonst bringt die Langeweile sie noch auf dumme Gedanken."; en: "to put silly ideas into sb.'s head" | bestätigt |
| sx0454 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "die Berufs" ist ein Genitiv-Fragment (aus "des richtigen Berufs") mit falschem Artikel; weder Grundform noch korrekter Plural | der Beruf, die Berufe (en: profession, job) | bestätigt |
| sx0757 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "dritt" ist ein Fragment; es kommt nur in der festen Wendung "zu dritt" vor (Ordinalzahl wäre "der/die/das dritte") | zu dritt | bestätigt |
| sx0757 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | hoch | "third" passt nicht zur Bedeutung im Satz "zu dritt" (= zu dreien) | (the) three of us/them; in a group of three | bestätigt |
| sx0844 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | hoch | "to rush in, storm in" trifft die Bedeutung im Satz nicht; "auf jemanden einstürmen" heißt jemanden bedrängen/überhäufen | to assail, bombard (auf jdn. einstürmen) | bestätigt |
| sx0872 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | hoch | "energetic" (= lebhaft, tatkräftig) ist ein falscher Freund; "energetische Sanierung" meint energiebezogen/energieeffizient | energy-related (energetische Sanierung = energy-efficient renovation) | bestätigt |
| sx0942 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "die Erkenntnis durchgesetzt" ist ein Satzfragment (Nomen plus Partizip aus dem Beispielsatz); auch en "established insight" gibt keine lernbare Einheit wieder | Kopfwort "sich durchsetzen (Die Erkenntnis setzt sich durch.)" mit en "to prevail, become accepted" oder nur "die Erkenntnis" mit en "insight, realization" | bestätigt |
| sx1110 | inhalte-vokabeln-c1.js | C1 | de | genus | hoch | Falsches Genus im Kopfwort: "die Fluch" – Fluch ist maskulin | der Fluch | bestätigt |
| sx1285 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | hoch | "geöffnet haben" bedeutet 'geöffnet sein' (Öffnungszeiten), nicht "to have opened"; die Übersetzung lehrt eine falsche Bedeutung und passt nicht zum Satz | to be open (of shops etc.) | bestätigt |
| sx1511 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | hoch | "years of manhood" trifft die Bedeutung nicht: "Herrenjahre" (Lehrjahre sind keine Herrenjahre) meint Jahre, in denen man sein eigener Herr ist bzw. es bequem hat, nicht das Mannesalter | en: "years of being one's own master (idiom: Lehrjahre sind keine Herrenjahre = apprenticeship is no picnic)" | bestätigt |
| sx1584 | inhalte-vokabeln-c1.js | C1 | de | uebersetzung_en | hoch | "der Hochschulraum" bedeutet nicht "lecture hall" (das ist der Hörsaal), sondern den Hochschulbereich (z. B. Europäischer Hochschulraum); Satz "Der Hochschulraum war derart überfüllt" ist dadurch unidiomatisch | Kopfwort ersetzen durch "der Hörsaal" (lecture hall) und Satz: "Der Hörsaal war derart überfüllt, ..."; alternativ en: "higher education area" mit passendem neuen Satz | bestätigt |
| sx1889 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "die kontaktiert" ist Artikel plus Partizip, kein Wort; gemeint ist offenbar das substantivierte Partizip. Der Satz enthält nur die Verbform "kontaktiert worden war". | Item streichen (kontaktieren ist bereits sx1888) oder Kopfwort "die/der Kontaktierte" (en: contacted person) mit passendem Satz, z. B. "Die Kontaktierte meldete sich erst nach einer Woche zurück." | bestätigt |
| sx1923 | inhalte-vokabeln-c1.js | C1 | de | genus | hoch | "der Kriegswaise": Waise und damit Kriegswaise ist feminin, auch wenn es um Jungen oder Männer geht (Duden: die Kriegswaise). | die Kriegswaise | bestätigt |
| sx2314 | inhalte-vokabeln-c1.js | C1 | de | genus | hoch | falscher Artikel "die Neurologe"; der Satz dekliniert korrekt maskulin "an einen Neurologen" | der Neurologe | bestätigt |
| sx2446 | inhalte-vokabeln-c1.js | C1 | de | genus | hoch | "das Pommes" ist falsch; Pommes (frites) ist ein Plural mit "die", "das Pommes" gibt es standardsprachlich nicht | die Pommes (Pl.) | bestätigt |
| sx2653 | inhalte-vokabeln-c1.js | C1 | de | plural | hoch | Kopfwort "das Schicksale" vermischt Singularartikel mit Pluralform; Singular ist "das Schicksal", Plural "die Schicksale" | das Schicksal (en: fate); alternativ "die Schicksale" (en: fates) | bestätigt |
| sx2863 | inhalte-vokabeln-c1.js | C1 | de | genus | hoch | Falsches Genus im Kopfwort: "das Spielzug" – Zug ist maskulin, also der Spielzug (im Satz korrekt "einem Spielzug", aber das Kopfwort lehrt das falsche Genus). | der Spielzug | bestätigt |
| sx2864 | inhalte-vokabeln-c1.js | C1 | de | genus | hoch | Falsches Genus im Kopfwort: "der Spießertum" – Substantive auf -tum sind (bis auf der Irrtum/der Reichtum) neutral: das Spießertum. | das Spießertum | bestätigt |
| sx2988 | inhalte-vokabeln-c1.js | C1 | de | plural | hoch | Kopfwort "das Symptome" verbindet den Singularartikel mit der Pluralform; Singular ist "das Symptom", Plural "die Symptome". | das Symptom (Pl. die Symptome) | bestätigt |
| sx3109 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | hoch | "überhand" ist kein eigenständiges Wort, nur Verbpartikel von "überhandnehmen" (das als sx3110 bereits im Batch steht) | Eintrag streichen oder als "überhandnehmen" mit sx3110 zusammenführen | bestätigt |
| sx3109 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | hoch | "excessive" (Adjektiv) ist falsche Wortart/Bedeutung; "überhand" kommt nur in "überhandnehmen" = to get out of hand vor | en: to get out of hand (überhandnehmen) | bestätigt |
| sx3160 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "die Umsetzung so aus" ist ein Satzfragment aus "sieht die Umsetzung so aus"; "die Umsetzung" steht bereits als sx3159 im Batch | Kopfwort "so aussehen, dass …" (en "to look like this, work like this") oder Item streichen | bestätigt |
| sx3219 | inhalte-vokabeln-c1.js | C1 | de | genus | hoch | Falsches Genus: "die Universalgenie" – Genie ist Neutrum | das Universalgenie | bestätigt |
| sx3569 | inhalte-vokabeln-c1.js | C1 | de | genus | hoch | Falscher Artikel: "die Weltruf" – Weltruf ist maskulin (der Ruf). | der Weltruf | bestätigt |
| sx3693 | inhalte-vokabeln-c1.js | C1 | de | genus | hoch | Falsches Genus: "der Zeitintervall" – Intervall ist Neutrum (das Intervall, das Zeitintervall). | das Zeitintervall | bestätigt |
| sx3761 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | hoch | Kopfwort "zurecht" ist nur das abgetrennte Verbpräfix aus dem Beispielsatz ("kommt ... zurecht" = zurechtkommen); als eigenständiges Wort existiert es nach amtlicher Regelung nicht ("zu Recht" wird getrennt geschrieben) | zurechtkommen (mit etwas) | bestätigt |
| sx3761 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | hoch | "rightly, properly" ist die Bedeutung von "zu Recht", nicht von zurecht-/zurechtkommen im Beispielsatz (= to cope, to manage) | to cope, to get along (with sth.) | bestätigt |
| g03 | inhalte.js | B1 | items[1], items[2] | loesung_falsch | mittel | Mehrere Optionen ergeben korrekte Sätze: "Wir waren nach Hause gegangen." und "Sie war pünktlich angekommen." sind grammatisch richtiges Plusquamperfekt und werden trotzdem als falsch gewertet. | Distraktoren "waren"/"war" durch falsche Formen ersetzen, z. B. ["sind","haben","seid"] und ["ist","hat","sind"]. |  |
| g06 | inhalte.js | B2 | items[0] | loesung_falsch | mittel | Zwei Optionen sind korrekt: "Können Sie mir bitte helfen?" ist ebenso grammatisch und höflich wie "Könnten"; die Frage enthält keinen Hinweis, dass Konjunktiv II verlangt ist. | Hinweis in die Frage aufnehmen, z. B. "___ Sie mir bitte helfen? (very polite, Konjunktiv II)", oder "Können" durch eine falsche Form ersetzen (z. B. "Könntest"). |  |
| s02 | inhalte.js | A2 | loesung | loesung_falsch | mittel | Exakter Abgleich: die ebenso korrekte Stellung "Können wir die Rechnung bitte haben" wird als falsch gewertet. | Alternativlösung zulassen oder "bitte" streichen |  |
| s06 | inhalte.js | B1 | loesung | loesung_falsch | mittel | Satzbau prüft exakt gegen die Lösung (index.html: got===it.loesung); die ebenso korrekte Stellung "Ich muss leider den Termin absagen" wird als falsch gewertet. | Alternativlösungen zulassen (alt-Feld) oder "leider" streichen: "Ich muss den Termin absagen" |  |
| s11 | inhalte.js | B2 | loesung | loesung_falsch | mittel | Exakter Abgleich: die ebenso korrekte Stellung "Wir ziehen ernsthaft einen Umzug in Erwägung" wird als falsch gewertet. | Alternativlösung zulassen oder "ernsthaft" streichen |  |
| gy01 | inhalte-b2c1.js | C1 | items[1] | loesung_falsch | mittel | Die Lückenfrage enthält bereits "sich" ("___ sich die Behörde um Transparenz bemüht"), die Optionen ebenfalls ("Sosehr sich"); die richtige Lösung ergibt "Sosehr sich sich die Behörde …". | Optionen ohne "sich": ["Sosehr","Sodass","Sowie"] – oder "sich" aus der Frage streichen. | bestätigt |
| kx05 | inhalte-b2c1.js | B2 | prompt/answer | loesung_falsch | mittel | Das Objekt steht nur im Klammerhinweis; mit der Lösung ergibt sich der unvollständige Satz "Sie ärgert sich seit Wochen über bei ihrer Krankenkasse." (außerdem wird in einer Konjugationsübung eine Präposition abgefragt). | Prompt: "Sie ärgert sich seit Wochen ___ die schlechte Behandlung bei ihrer Krankenkasse. (sich ärgern + Präposition)", answer "über". |  |
| ky04 | inhalte-b2c1.js | C1 | prompt/hintEn | sonstiges | mittel | Der Satz ist in sich widersprüchlich: "Kaum hatte sie die Kündigung ausgesprochen, bereute der Arbeitgeber seine vorschnelle Entscheidung" – "sie" spricht die Kündigung aus, aber "der Arbeitgeber" bereut "seine" Entscheidung. Zudem ist hintEn falsch: "hatte" rückt nach "Kaum" nicht auf "position 1", sondern auf Position 2. | "Kaum ___ der Arbeitgeber die Kündigung ___ (aussprechen), bereute er seine vorschnelle Entscheidung."; im hintEn "moves to position 2 (right after 'kaum')". |  |
| ly07 | inhalte-b2c1.js | C1 | en | sonstiges | mittel | Die Erklärung behauptet "„fundamentieren“ does not exist" – das Wort steht im Duden (Bauwesen: ein Fundament legen); falsche Sachaussage im Lernhinweis. | "„fundamentieren“ is a construction term (to lay a foundation) and does not collocate with „Vorurteile“; „stabilisieren“ is too neutral." |  |
| ty06 | inhalte-b2c1.js | C1 | alt[0] | grammatik | mittel | "widrigenfalls" ist ein Adverb, keine Konjunktion; in der akzeptierten Alternative steht das Verb trotzdem am Ende: "widrigenfalls dem Steuerpflichtigen eine Steuernachzahlung droht". | "…, widrigenfalls droht dem Steuerpflichtigen eine Steuernachzahlung." | bestätigt |
| tmd009 | inhalte-themen.js | A2 | zeilen[5].de | niveau_zu_hoch | mittel | "Den Bescheid brauchen Sie hier nicht abzuwarten." ist mit "brauchen … nicht zu" und dem Amtswort "Bescheid" deutlich über A2 und inhaltlich verwirrend, weil die Bescheinigung im selben Satzpaar sofort ausgedruckt wird. | "Ja, die drucke ich Ihnen sofort aus. Sie müssen nicht warten." (en: "Yes, I'll print it out for you right away. You don't have to wait.") |  |
| tmd017 | inhalte-themen.js | A2 | zeilen[1].de | grammatik | mittel | "Bringen Sie bitte Ihren Ausweis und eine Meldebescheinigung mit?" passt nicht zur Situation: Die Kundin steht schon am Schalter und antwortet "beides habe ich dabei"; so fragt kein Muttersprachler. Die englische Zeile "Are you bringing your ID…" übernimmt den Fehler. | "Gerne. Haben Sie Ihren Ausweis und eine Meldebescheinigung dabei?" (en: "Gladly. Do you have your ID and a proof of residence with you?") |  |
| tmg006 | inhalte-themen.js | A2 | erklEn | rechtschreibung | mittel | Im deutschen Beispiel der Erklärung steht "gross -> größer"; die Grundform wird in Deutschland mit ß geschrieben, Lernende lernen eine falsche Schreibung | "groß -> größer" |  |
| tml023 | inhalte-themen.js | B1 | options | loesung_falsch | mittel | Neben "sich um eine Stelle bewerben" ist "sich für eine Stelle bewerben" im heutigen Standarddeutsch verbreitet und wird allgemein als korrekt akzeptiert; die Option "für" wird dennoch als falsch gewertet. | Distraktor "für" durch eine eindeutig falsche Präposition ersetzen, z. B. Optionen ["auf","um","an"]. |  |
| tml039 | inhalte-themen.js | A2 | options | loesung_falsch | mittel | "Die Schuhe sind super, sie ___ mir perfekt." lässt auch "stehen" zu ("sie stehen mir perfekt" = sie sehen gut an mir aus); der Satz enthält keinen Hinweis auf die Größe, den die Erklärung voraussetzt. | Größenbezug einbauen: "Die Schuhe sind super, Größe 39 ___ mir perfekt." oder Distraktor "stehen" durch "gehören" ersetzen. |  |
| tml065 | inhalte-themen.js | A2 | options | loesung_falsch | mittel | Neben "anmelden" ist auch "aufwärmen" grammatisch und inhaltlich möglich: "Möchtest du dich für den neuen Kurs aufwärmen?" (vgl. "sich für das Spiel aufwärmen"). | Ablenker ersetzen, z. B. ["anmelden","anrufen","trainieren"] |  |
| tmu010 | inhalte-themen.js | A2 | alt | grammatik | mittel | Akzeptierte Alternative "Um wie viel Uhr fliegt unser Flug morgen früh ab?" ist unidiomatisch (ein Flug "fliegt" nicht "ab") | Um wie viel Uhr startet unser Flug morgen früh? / Um wie viel Uhr fliegen wir morgen früh ab? |  |
| tmu082 | inhalte-themen.js | A2 | alt | loesung_falsch | mittel | Die Alternative "Habe ich diese Woche einen Termin frei?" bedeutet, dass der Sprecher selbst freie Zeit hat, nicht dass er von der Praxis einen Termin bekommen kann; sie passt nicht zu "Can I get an appointment this week?". | Alternative ersetzen durch "Haben Sie diese Woche einen Termin frei?" | bestätigt |
| tmu103 | inhalte-themen.js | B1 | alt | loesung_falsch | mittel | In der Alternative "Morgen gehen wir zum Tierarzt, um ihn impfen zu lassen." hat "ihn" kein Bezugswort außer "Tierarzt"; wörtlich heißt der Satz, dass der Tierarzt geimpft werden soll. | "Morgen gehen wir zum Tierarzt, um unseren Hund impfen zu lassen." oder die Alternative streichen. |  |
| tmu118 | inhalte-themen.js | A2 | alt | grammatik | mittel | Die akzeptierte Alternative "Lass uns um acht Uhr vor der Bar treffen." lässt das Reflexivpronomen von "sich treffen" weg; standardsprachlich korrekt ist nur "Lass uns uns ... treffen". | "Lass uns uns um acht Uhr vor der Bar treffen." (oder die Alternative streichen, da "Treffen wir uns ..." schon vorhanden ist) |  |
| tmv054 | inhalte-themen.js | B1 | ex | grammatik | mittel | "Die Suppe ist mir leider versalzen." – der Dativ "mir" bedeutet idiomatisch, dass der Sprecher selbst zu viel Salz hineingetan hat (wie "Mir ist der Kuchen verbrannt"). Er bedeutet nicht "zu salzig für meinen Geschmack", wie es in exEn steht. Im Kontext Restaurant/Reklamation passt das nicht, die Lernenden lernen eine falsche Bedeutung. | "Die Suppe ist leider versalzen." (exEn: "Unfortunately, the soup is over-salted.") | bestätigt |
| tmv099 | inhalte-themen.js | A2 | ex | grammatik | mittel | "Dieses Lieblingsbuch habe ich schon dreimal gelesen." – Demonstrativ plus "Lieblings-" ist unidiomatisch, ein Muttersprachler sagt hier "mein Lieblingsbuch". Auch exEn "this favorite book" wirkt unnatürlich. | "Mein Lieblingsbuch habe ich schon dreimal gelesen." (exEn: "I've already read my favorite book three times.") |  |
| tmv192 | inhalte-themen.js | A2 | ex | kopfwort_fehlt_im_satz | mittel | Kopfwort "der Verein" steht im Satz nur als Teil des Kompositums "Fußballverein" | Mein Bruder spielt in einem Verein Fußball. |  |
| tmv271 | inhalte-themen.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "die Meinung (äußern)" mischt Nomen mit Verb in Klammern; en "to express one's opinion" passt nur zur Wendung, nicht zu "die Meinung" | Kopfwort "seine Meinung äußern" (en: to express one's opinion) oder "die Meinung" (en: the opinion) |  |
| sv0005 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen als Pluralform ohne Artikel: "Abkürzungen" | "die Abkürzung, -en" (en: "the abbreviation") |  |
| sv0011 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "all" ist ein Stammfragment aus der Wortliste (all-); der Satz nutzt "alles" | "alle / alles (all-)" |  |
| sv0027 | inhalte-vokabeln.js | A2 | de | sonstiges | mittel | "die Anweisungssprache" ist eine Kapitelüberschrift der Goethe-Wortliste, kein Lernwort; der Satz "Die Anweisungssprache zur Prüfung muss man genau lesen" ist sachlich schief (man liest Anweisungen, keine Sprache) | Kopfwort "die Anweisung, -en" (the instruction), Satz: "Lesen Sie die Anweisungen genau." |  |
| sv0060 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Substantiviertes Adjektiv "Bekannte" ohne Artikel; en "acquaintances" (Plural) passt nicht zum Beispiel "eine Bekannte" (Singular) | "der/die Bekannte (ein Bekannter / eine Bekannte)", en "the acquaintance" |  |
| sv0067 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen als Pluralform ohne Artikel: "Berufe" | "der Beruf, -e" (en: "the profession, job") |  |
| sv0069 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "beschwert" ist ein Partizip statt der Grundform; das reflexive Verb fehlt, en "complain" passt nicht zur Form | "sich beschweren (über + Akk.)", en "to complain (about)" | bestätigt |
| sv0085 | inhalte-vokabeln.js | A2 | de | rechtschreibung | mittel | Abkürzung im Kopfwort ohne Punkt: "ca" (im Satz korrekt "ca.") | "ca. (circa)" |  |
| sv0089 | inhalte-vokabeln.js | A2 | ex | kopfwort_fehlt_im_satz | mittel | Kopfwort "der Club" kommt im Satz nur als Kompositumsteil "Tennisclub" vor | "Ich bin seit zwei Jahren Mitglied in einem Club." |  |
| sv0090 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Cousin" | "der Cousin, -s" |  |
| sv0091 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Cousine" | "die Cousine, -n" |  |
| sv0093 | inhalte-vokabeln.js | A2 | de | rechtschreibung | mittel | Abkürzung im Kopfwort falsch geschrieben: "d.h" (fehlender Schlusspunkt und Leerzeichen; im Satz korrekt "d. h.") | "d. h. (das heißt)" |  |
| sv0103 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Substantiviertes Adjektiv "Deutsche" ohne Artikel | "der/die Deutsche (ein Deutscher / eine Deutsche)" |  |
| sv0124 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "einig" ist das Stammfragment einig-; als eigenständiges Adjektiv bedeutet "einig" "in agreement", nicht "some, several" wie angegeben | "einige (einig-)" |  |
| sv0132 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Enkel" | "der Enkel, -" |  |
| sv0133 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Enkelin" | "die Enkelin, -nen" |  |
| sv0141 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Europäer" | "der Europäer, -" |  |
| sv0146 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "Familienmitglieder" ohne Artikel (Plural ohne Singularangabe) | das Familienmitglied, die Familienmitglieder |  |
| sv0147 | inhalte-vokabeln.js | A2 | ex | kopfwort_fehlt_im_satz | mittel | Beispielsatz enthält "Fan" nur im Kompositum "Fußballfan" | Er ist ein großer Fan von Bayern München. |  |
| sv0151 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "Feiertage" ohne Artikel (nur Pluralform) | der Feiertag, die Feiertage |  |
| sv0173 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "gang" (corridor) ohne Artikel | der Gang |  |
| sv0173 | inhalte-vokabeln.js | A2 | de | rechtschreibung | mittel | Nomen "gang" kleingeschrieben | der Gang |  |
| sv0179 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gehängt" ist eine Partizipform statt Grundform, ohne Kennzeichnung (anders als sv0191 "gewesen"); en "hung" unterscheidet nicht transitives hängen (hängte, gehängt) vom intransitiven (hing, gehangen) | hängen (hängte, hat gehängt) – en: "hang (sth.) up" |  |
| sv0184 | inhalte-vokabeln.js | A2 | ex | kopfwort_fehlt_im_satz | mittel | Beispielsatz enthält "Gerät" nur im Kompositum "Elektrogeräte" | Das Gerät ist kaputt, ich muss ein neues kaufen. |  |
| sv0185 | inhalte-vokabeln.js | A2 | ex | kopfwort_fehlt_im_satz | mittel | Beispielsatz enthält "Gericht" nur im Kompositum "Lieblingsgericht" | Dieses Gericht schmeckt sehr gut. |  |
| sv0218 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "ICE" ohne Artikel (im Satz "mit dem ICE") | der ICE |  |
| sv0228 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "Jahreszeiten" ohne Artikel (nur Pluralform) | die Jahreszeit, die Jahreszeiten |  |
| sv0236 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "Karneval" ohne Artikel | der Karneval |  |
| sv0244 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "Klub" ohne Artikel | der Klub |  |
| sv0261 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Länder und Nationalitäten" ist eine Themenüberschrift der Wortliste, keine Vokabel | Eintrag streichen oder ersetzen, z. B. "die Nationalität, die Nationalitäten" |  |
| sv0275 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "Luxemburger" (Einwohnerbezeichnung, kein Eigenname) ohne Artikel | der Luxemburger / die Luxemburgerin |  |
| sv0298 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "mochte" ist eine flektierte Präteritumform statt der Grundform | mögen (mochte, hat gemocht) – to like |  |
| sv0301 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Kopfwort "Monate" steht im Plural ohne Artikel und ohne Singular-Grundform | der Monat, die Monate – month |  |
| sv0325 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "Österreicher" ohne Artikel | der Österreicher |  |
| sv0340 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "PC" ohne Artikel | der PC |  |
| sv0398 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "schein" ist ein kleingeschriebenes Fragment aus "Führerscheinprüfung" (Satz), ohne Artikel | der Schein, die Scheine (en: certificate, licence; banknote; appearance), Satz kann bleiben oder z. B. „Ich habe nur einen 50-Euro-Schein.“ | bestätigt |
| sv0407 | inhalte-vokabeln.js | A2 | ex | kopfwort_fehlt_im_satz | mittel | Beispielsatz enthält nur das Kompositum "Bauchschmerzen", nicht "der Schmerz" | Ich habe seit gestern starke Schmerzen im Bauch. |  |
| sv0414 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Schule und Schulfächer" ist eine Themenüberschrift, kein Lernwort | das Schulfach, die Schulfächer – school subject | bestätigt |
| sv0417 | inhalte-vokabeln.js | A2 | ex | kopfwort_fehlt_im_satz | mittel | Beispielsatz enthält nur das Kompositum "Schweinefleisch", nicht "das Schwein" | Auf dem Bauernhof gibt es Kühe und Schweine. |  |
| sv0419 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "Schweizer" ohne Artikel | der Schweizer |  |
| sv0434 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "SMS" ohne Artikel | die SMS |  |
| sv0442 | inhalte-vokabeln.js | A2 | ex | kopfwort_fehlt_im_satz | mittel | Beispielsatz enthält nur das Kompositum "Kartenspiele", nicht "das Spiel" | Das Spiel beginnt um acht Uhr. |  |
| sv0454 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort steht im Plural "die Straßen" statt in der Grundform (Singular); Straße ist kein Pluraletantum | de: "die Straße", en: "the street" (Satz kann bleiben) |  |
| sv0468 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Kopfwort "Tageszeiten" ohne Artikel (offenbar Abschnittsüberschrift der Wortliste übernommen) | "die Tageszeit, die Tageszeiten" |  |
| sv0491 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist die konjugierte Form "trifft" statt des Infinitivs | de: "treffen", en: "to meet" | bestätigt |
| sv0502 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist die konjugierte Form "unterhält", die englische Angabe "to talk (converse)" meint aber den reflexiven Infinitiv | de: "sich unterhalten" | bestätigt |
| sv0530 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "Vorwort" ohne Artikel | "das Vorwort", en: "the foreword" |  |
| sv0533 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Währungen und Maße" ist eine Abschnittsüberschrift aus zwei Nomen ohne Artikel, kein lernbares Einzelwort; der Satz enthält nur "Währung" | de: "die Währung", en: "the currency" (Satz "Der Euro ist unsere Währung." passt dann) | bestätigt |
| sv0540 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "WC" ohne Artikel | "das WC", en: "the restroom" |  |
| sv0544 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "weg/weg" ist eine verdoppelte, zusammengeklebte Angabe | "weg" |  |
| sv0560 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Kopfwort "Wochentage" ohne Artikel (Abschnittsüberschrift der Wortliste) | "der Wochentag, die Wochentage" |  |
| sv0564 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Kopfwort "Wortgruppen" ohne Artikel; zudem offensichtlich eine Abschnittsüberschrift der Wortliste, kein A2-Lernwort | "die Wortgruppe, die Wortgruppen" oder Item streichen |  |
| sv0566 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "würdigkeit" ist ein Wortfragment (vermutlich aus "Sehenswürdigkeit" abgetrennt); "Würdigkeit" ist kein A2-Wort | Eintrag streichen (Sehenswürdigkeit wird schon mit sv0423 korrigiert) oder ersetzen durch „die Würde“ (en: dignity), ex: „Die Würde des Menschen ist unantastbar.“ | bestätigt |
| sv0566 | inhalte-vokabeln.js | A2 | de | rechtschreibung | mittel | Nomen kleingeschrieben und ohne Artikel: "würdigkeit" | Großschreibung mit Artikel, siehe Vorschlag Kopfwort |  |
| sv0567 | inhalte-vokabeln.js | A2 | de | rechtschreibung | mittel | Nomen kleingeschrieben: "wunsch" | "Wunsch" |  |
| sv0567 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "wunsch" ohne Artikel | "der Wunsch", en: "the wish" |  |
| sv0570 | inhalte-vokabeln.js | A2 | de | rechtschreibung | mittel | Nomen kleingeschrieben: "zahl" | "Zahl" |  |
| sv0570 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "zahl" ohne Artikel (englisch steht "the number") | "die Zahl" |  |
| sv0574 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Kopfwort "Zeitangaben" ohne Artikel (Abschnittsüberschrift der Wortliste) | "die Zeitangabe, die Zeitangaben" |  |
| sv0577 | inhalte-vokabeln.js | A2 | de | rechtschreibung | mittel | Nomen kleingeschrieben: "zentrum" | "Zentrum" |  |
| sv0577 | inhalte-vokabeln.js | A2 | de | artikel_fehlt | mittel | Nomen "zentrum" ohne Artikel | "das Zentrum", en: "the centre/center" |  |
| sv0578 | inhalte-vokabeln.js | A2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "zertifiziert durch" ist ein Partizip-Präpositions-Fragment (Etikettentext), keine Grundform | Item streichen oder de: "zertifizieren", en: "to certify" (dann B2) |  |
| sv0578 | inhalte-vokabeln.js | A2 | ex | niveau_zu_hoch | mittel | "Der Helm ist zertifiziert durch den TÜV." – Fachwortschatz (zertifiziert, TÜV) und Zustandspassiv mit ausgeklammerter durch-Angabe, klar über A2 und zudem unnatürliche Wortstellung | Item auf B2 heben mit Satz "Der Helm ist vom TÜV zertifiziert." oder streichen |  |
| sv0595 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II "abgeholt" statt Grundform | abholen (en: to pick up) |  |
| sv0612 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | "the campaign" passt nicht zur Bedeutung im Satz ("eine Aktion für Kaffee" im Supermarkt = Sonderangebot) | the special offer / promotion (also: campaign) |  |
| sv0615 | inhalte-vokabeln.js | B1 | ex | sonstiges | mittel | Beispielsatz "Um sechs Uhr klingelt jeden Morgen mein Alarm." suggeriert Alarm = Wecker (Anglizismus); "der Alarm" bedeutet im Deutschen v. a. Warnsignal (Feueralarm) | Als der Rauchmelder piepte, gab es im ganzen Haus Alarm. |  |
| sv0619 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "aller" ist eine flektierte Form (Gen./Dat.) statt Grundform | all-/alle (trotz aller Mühe) |  |
| sv0635 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II "angeboten" statt Grundform | anbieten (en: to offer) |  |
| sv0637 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II "angekommen" statt Grundform | ankommen (en: to arrive) |  |
| sv0639 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Komparativ "angenehmer" statt Grundform; zudem Dublette zu "angenehm" (sv0638) | streichen oder als angenehm (Komparativ: angenehmer) führen |  |
| sv0641 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II "angeschafft" statt Grundform; Grundform "anschaffen" steht bereits als sv0646 | streichen (Grundform anschaffen vorhanden) |  |
| sv0642 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II "angesprochen" statt Grundform; Grundform "ansprechen" steht bereits als sv0649 | streichen (Grundform ansprechen vorhanden) |  |
| sv0655 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist zu-Infinitiv "anzurufen" statt Grundform | anrufen (en: to call) |  |
| sv0656 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Apfelkuchen" ohne Artikel | der Apfelkuchen |  |
| sv0657 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Aprikose" ohne Artikel | die Aprikose |  |
| sv0672 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Aufenthaltsraum" ohne Artikel (en hat sogar "the") | der Aufenthaltsraum |  |
| sv0673 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II "aufgepasst" statt Grundform | aufpassen (auf + Akk.) |  |
| sv0673 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | "paid attention" passt nicht zum Satz "habe ich auf meine kleine Nichte aufgepasst" (= babysitten, sich kümmern) | to look after / to pay attention (aufpassen auf = look after) |  |
| sv0674 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II "aufgeschrieben" statt Grundform; Grundform "aufschreiben" steht bereits als sv0677 | streichen (Grundform aufschreiben vorhanden) |  |
| sv0676 | inhalte-vokabeln.js | B1 | de | sonstiges | mittel | "aufregen" in der Bedeutung "to get upset" ist reflexiv, das "sich" fehlt im Kopfwort | sich aufregen (über + Akk.) |  |
| sv0683 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist zu-Infinitiv "aufzustehen" statt Grundform | aufstehen (en: to get up) |  |
| sv0684 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform "Augen" ohne Artikel und ohne Singular als Kopfwort | das Auge, die Augen |  |
| sv0700 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Aussicht" ohne Artikel (en hat "the") | die Aussicht |  |
| sv0703 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform "Automaten" ohne Artikel und ohne Singular als Kopfwort | der Automat, die Automaten |  |
| sv0716 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform "Bauern" ohne Artikel und ohne Singular als Kopfwort | der Bauer, die Bauern |  |
| sv0721 | inhalte-vokabeln.js | B1 | de | sonstiges | mittel | "beeilen" ist nur reflexiv gebräuchlich, das "sich" fehlt im Kopfwort | sich beeilen |  |
| sv0723 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II "beeinflusst" statt Grundform; Grundform "beeinflussen" steht bereits als sv0722 | streichen (Grundform beeinflussen vorhanden) |  |
| sv0724 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Präteritumform "beeinflusste" statt Grundform; Grundform "beeinflussen" steht bereits als sv0722 | streichen (Grundform beeinflussen vorhanden) |  |
| sv0725 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II "befreit" statt Grundform bzw. fester Wendung | befreit sein von (en: to be exempt from) oder befreien |  |
| sv0741 | inhalte-vokabeln.js | B1 | de | sonstiges | mittel | "bemühen" in der Bedeutung "to make an effort" ist reflexiv, das "sich" fehlt im Kopfwort | sich bemühen |  |
| sv0754 | inhalte-vokabeln.js | B1 | de | sonstiges | mittel | "beschweren" bedeutet ohne "sich" "to weigh down"; für "to complain" fehlt das Reflexivpronomen im Kopfwort | sich beschweren (über + Akk.) |  |
| sv0763 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "bestanden" ist das Partizip II statt der Grundform | bestehen (en: to pass (an exam)) |  |
| sv0764 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "bestellt" ist das Partizip II statt der Grundform | bestellen (en: to order) |  |
| sv0767 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "bestraft" ist das Partizip II von "bestrafen" (das als sv0766 direkt davor steht) statt einer eigenen Grundform | Eintrag streichen oder als "bestraft werden" (en: to be punished) führen |  |
| sv0770 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Kopfwort "Beziehungen" steht im Plural ohne Artikel statt als Singular mit Artikel | die Beziehung, -en (en: the relationship) |  |
| sv0776 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "billiger" ist die Komparativform statt der Grundform | billig (en: cheap) |  |
| sv0777 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "bin" ist eine konjugierte Form (1. Person Sg.) statt des Infinitivs | sein (en: to be) |  |
| sv0778 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Biologie" ohne Artikel | die Biologie |  |
| sv0799 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Briefkasten" ohne Artikel | der Briefkasten |  |
| sv0800 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Briefträger" ohne Artikel | der Briefträger |  |
| sv0802 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Bub" ohne Artikel (zudem regional, süddt./österr.) | der Bub (süddt./österr.) |  |
| sv0828 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Chemie" ohne Artikel | die Chemie |  |
| sv0843 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "dachte" ist Präteritum von "denken" statt der Grundform | denken (dachte, hat gedacht) (en: to think) |  |
| sv0864 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Deutschkurs" ohne Artikel | der Deutschkurs |  |
| sv0893 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Eck" ohne Artikel (zudem regional süddt./österr.) | das Eck (süddt./österr.) |  |
| sv0925 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "eingerichtet" ist das Partizip II statt der Grundform | einrichten (en: to furnish/set up) |  |
| sv0946 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluraletantum "Eltern" ohne Artikel angegeben | die Eltern (Pl.) |  |
| sv0947 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist die Genitivform "Empfängers" (en "of the recipient") statt der Grundform | der Empfänger, - / en: recipient | bestätigt |
| sv0966 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip "entwickelt" statt der Grundform; der Satz nutzt zudem das reflexive "sich entwickeln" (Grundform "entwickeln" steht bereits als sv0965) | sich entwickeln / en: to develop (oneself) |  |
| sv0970 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Erfolg" ohne Artikel | der Erfolg |  |
| sv0971 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip "erhöht" statt der Infinitiv-Grundform | erhöhen / en: to increase, to raise |  |
| sv0977 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform "Erinnerungen" ohne Artikel als eigenes Kopfwort (Singular steht bereits als sv0976) | die Erinnerungen (Pl. von die Erinnerung) oder Eintrag mit sv0976 zusammenführen |  |
| sv0978 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | Adjektiv "erkältet" mit Verbphrase "has a cold" übersetzt (falsche Wortart) | having a cold / (to be) erkältet = to have a cold |  |
| sv0979 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip "erkannt" statt der Grundform; "erkennen" steht bereits als sv0980 | Eintrag streichen oder als "erkennen" mit sv0980 zusammenführen |  |
| sv0986 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip "eröffnet" statt der Infinitiv-Grundform | eröffnen / en: to open (an account, a shop) |  |
| sv0998 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Euro" ohne Artikel | der Euro |  |
| sv1003 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | "lane" entspricht "die Fahrspur", nicht "die Fahrbahn" (en "carriageway/lane") | roadway/carriageway |  |
| sv1004 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Fahrgeld" ohne Artikel | das Fahrgeld |  |
| sv1011 | inhalte-vokabeln.js | B1 | ex | kopfwort_fehlt_im_satz | mittel | Kopfwort "einen Fall abschließen", Satz verwendet aber "den Fall schnell beenden" | Der Anwalt möchte den Fall schnell abschließen. |  |
| sv1024 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluraletantum "Ferien" ohne Artikel angegeben | die Ferien (Pl.) |  |
| sv1025 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Ferienwohnung" ohne Artikel | die Ferienwohnung |  |
| sv1028 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip "festgenommen" statt der Grundform; "festnehmen" steht bereits als sv1031 | Eintrag streichen oder als "festnehmen" mit sv1031 zusammenführen |  |
| sv1053 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform "Folien" ohne Artikel als eigenes Kopfwort (Singular steht bereits als sv1052) | die Folien (Pl. von die Folie) oder Eintrag mit sv1052 zusammenführen |  |
| sv1070 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform "Früchte" ohne Artikel als eigenes Kopfwort (Singular steht bereits als sv1069) | die Früchte (Pl. von die Frucht) oder Eintrag mit sv1069 zusammenführen |  |
| sv1071 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Frühdienst" ohne Artikel | der Frühdienst |  |
| sv1082 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | "ganz bestimmt" als "quite certain" übersetzt; im Satz ("Ich rufe dich morgen ganz bestimmt an") ist es ein Adverb = definitely | definitely / for sure |  |
| sv1087 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gar" allein bedeutet nicht "at all" (allein eher "gar = cooked/done"); die Bedeutung entsteht erst in "gar nicht" | gar nicht / en: not at all |  |
| sv1091 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip "geändert" statt der Infinitiv-Grundform | ändern / en: to change |  |
| sv1092 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip "gebadet" statt der Infinitiv-Grundform | baden / en: to bathe |  |
| sv1093 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip "gebrannt" statt der Infinitiv-Grundform | brennen / en: to burn, to sting (eyes) |  |
| sv1103 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | "driven" passt nicht zum Beispielsatz "mit dem Fahrrad zur Arbeit gefahren" (Fahrrad = ridden/gone, nicht driven) | en: "driven/ridden, gone (by vehicle)" | bestätigt |
| sv1115 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | Kopfwort als Partizip "gehört" ("heard/belonged"), im Satz "Das rote Fahrrad gehört meinem Bruder" steht aber Präsens von gehören = "belongs" | Satz ins Perfekt: "Hast du schon die neue Nachricht gehört?" oder en: "heard / belongs (to)" |  |
| sv1146 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Geografie" ohne Artikel | die Geografie |  |
| sv1151 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "das Gerät einschaltet" ist eine flektierte Nebensatzform, kein Lemma | einschalten | bestätigt |
| sv1154 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Gesamtkoordination" ohne Artikel | die Gesamtkoordination |  |
| sv1155 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Gesamtschule/Berufsschule/Sonderschule" ohne Artikel | die Gesamtschule |  |
| sv1155 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Drei Kopfwörter in einer Karte "Gesamtschule/Berufsschule/Sonderschule"; Beispielsatz enthält nur Gesamtschule | auf "die Gesamtschule" (en: comprehensive school) reduzieren, Berufsschule/Förderschule ggf. eigene Karten |  |
| sv1164 | inhalte-vokabeln.js | B1 | ex | grammatik | mittel | "ein Gespräch mit dem Berater bestellt" ist unidiomatisch; ein Gespräch wird vereinbart, nicht bestellt | Für morgen habe ich ein Gespräch mit dem Berater vereinbart. |  |
| sv1176 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gewinnt" ist eine finite Verbform (3. Sg.) statt Grundform | gewinnen (en: to win) |  |
| sv1210 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "die Grundschule/Mittelschule/Realschule/" bündelt drei Nomen und endet mit einem überzähligen Schrägstrich (abgeschnittene Liste) | die Grundschule (en: primary/elementary school); Realschule/Mittelschule ggf. eigene Karten |  |
| sv1219 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Haare" ohne Artikel/Pluralkennzeichnung | die Haare (Pl.) bzw. das Haar, -e |  |
| sv1229 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | "durable" passt nicht zum Satz "Die Milch ist nur noch bis morgen haltbar"; bei Lebensmitteln = keeps / is good until | en: "durable; (food) keeps, can be kept" | bestätigt |
| sv1230 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "hast" ist eine finite Verbform (2. Sg. von haben) statt Grundform | haben (en: to have); oder Karte streichen (A1-Wortschatz) |  |
| sv1231 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Hauptbahnhof" ohne Artikel | der Hauptbahnhof |  |
| sv1232 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Hause" ist ein Fragment (alte Dativform aus "zu Hause"/"nach Hause"), kein eigenständiges Lemma | zu Hause (en: at home) | bestätigt |
| sv1245 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Held" ohne Artikel | der Held |  |
| sv1248 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Herausgeber" ohne Artikel | der Herausgeber |  |
| sv1258 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "hinterließ" ist eine finite Präteritumform statt Grundform (dupliziert zudem sv1257 "hinterlassen") | hinterlassen (Präteritum: hinterließ) – mit sv1257 zusammenführen |  |
| sv1263 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Hörerinnen" ohne Artikel | die Hörerinnen |  |
| sv1281 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Informationen" ohne Artikel | die Informationen (Sg. die Information) |  |
| sv1282 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Inhaltspunkte" ohne Artikel | die Inhaltspunkte (Sg. der Inhaltspunkt) |  |
| sv1303 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Japaner" als Kopfwort ohne Artikel | der Japaner |  |
| sv1304 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Jause" als Kopfwort ohne Artikel | die Jause (österr.) |  |
| sv1321 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "kann" ist eine konjugierte Form statt Infinitiv | können (en: can / to be able to) |  |
| sv1322 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "kannst" ist eine konjugierte Form statt Infinitiv | können |  |
| sv1335 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Kellner" als Kopfwort ohne Artikel | der Kellner (en: the waiter) |  |
| sv1336 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "kennengelernt" ist Partizip II statt Grundform | kennenlernen (en: to get to know) |  |
| sv1339 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Kilometer" als Kopfwort ohne Artikel (en im Plural) | der Kilometer, - (Pl. die Kilometer) |  |
| sv1340 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Kinder" ohne Artikel | die Kinder (Sg. das Kind) |  |
| sv1360 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Kommt" ist eine konjugierte Satzanfangsform statt Infinitiv | kommen (en: to come) |  |
| sv1360 | inhalte-vokabeln.js | B1 | de | rechtschreibung | mittel | Verb als Kopfwort großgeschrieben: "Kommt" | kommen |  |
| sv1372 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Kopfschmerzen" ohne Artikel | die Kopfschmerzen (Pl.) |  |
| sv1374 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Korridor" als Kopfwort ohne Artikel | der Korridor (en: the corridor) |  |
| sv1376 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Kostüme" ohne Artikel | die Kostüme |  |
| sv1388 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Kreis" als Kopfwort ohne Artikel | der Kreis (en: the circle) |  |
| sv1393 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Kunden" ohne Artikel | die Kunden (Sg. der Kunde) |  |
| sv1398 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Kurven" ohne Artikel | die Kurven |  |
| sv1399 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "zu sein" liest sich als zu-Infinitiv von "sein" (= to be), die Bedeutung "geschlossen sein" ist nicht erkennbar | zu sein (= geschlossen sein), ugs.; oder: geschlossen sein |  |
| sv1408 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "langweilte" ist eine Präteritumform statt Grundform | sich langweilen (en: to be bored) |  |
| sv1425 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Leute" ohne Artikel | die Leute (Pl.) |  |
| sv1428 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Lift" ohne Artikel | der Lift |  |
| sv1442 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "los/los" doppelt zusammengeklebt, en entsprechend "go / go" | los (en: off / let's go) |  |
| sv1444 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform "Männer" als Kopfwort ohne Artikel und ohne Singular | der Mann, die Männer |  |
| sv1448 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | en "times" passt nicht zum Satz: in "noch mal anrufen" bedeutet "mal" "once/again" (Partikel), nicht "times" | en: once / just (particle); (noch) mal = again | bestätigt |
| sv1460 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Mathematik" ohne Artikel | die Mathematik |  |
| sv1461 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform "Medikamente" als Kopfwort ohne Artikel und ohne Singular | das Medikament, die Medikamente |  |
| sv1462 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Medizin" ohne Artikel | die Medizin |  |
| sv1476 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | en "to report" passt nicht zum Satz "Ich melde mich morgen telefonisch bei dir" (reflexiv = sich melden, to get in touch) | Kopfwort "sich melden (bei)" mit en "to get in touch (with)" oder Satz mit "melden" = report, z. B. "Ich habe den Unfall der Polizei gemeldet." | bestätigt |
| sv1484 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "mietete" ist eine Präteritumform statt Grundform | mieten (en: to rent) | bestätigt |
| sv1502 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "mittler" ist ein Fragment; das Adjektiv existiert nur attributiv als "mittlere" | mittlere(r, s) |  |
| sv1503 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | en "meanwhile" (= gleichzeitig) trifft "mittlerweile" im Satz nicht; gemeint ist "inzwischen, by now" | en: by now / in the meantime | bestätigt |
| sv1511 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Möglichkeit" ohne Artikel | die Möglichkeit |  |
| sv1515 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Mühe" ohne Artikel | die Mühe |  |
| sv1520 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Musik" ohne Artikel | die Musik |  |
| sv1523 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Musikerin" ohne Artikel | die Musikerin |  |
| sv1524 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform "Musikkassetten" als Kopfwort ohne Artikel und ohne Singular | die Musikkassette, die Musikkassetten |  |
| sv1526 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform "Muskeln" als Kopfwort ohne Artikel | die Muskeln (Pl. von der Muskel) |  |
| sv1536 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Nachrichten" ohne Artikel | die Nachrichten (Pl.) |  |
| sv1540 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | en "namely" passt nicht zum Satz: "der Bus fährt nämlich gleich ab" ist begründend (you see / because) | en: you see / because (namely nur bei Aufzählung) | bestätigt |
| sv1542 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "national/national" doppelt zusammengeklebt | national |  |
| sv1543 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Nationalfeiertag" ohne Artikel | der Nationalfeiertag |  |
| sv1575 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Nichtraucherzimmer" ohne Artikel | das Nichtraucherzimmer |  |
| sv1581 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Nord-/nördlich" klebt Präfix-Fragment und Adjektiv zusammen | nördlich (ggf. separat: der Norden) |  |
| sv1583 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Not" ohne Artikel | die Not |  |
| sv1604 | inhalte-vokabeln.js | B1 | de | rechtschreibung | mittel | Interjektion als Kopfwort großgeschrieben: "Oh"; die Interjektion wird kleingeschrieben (nur am Satzanfang groß). | oh |  |
| sv1631 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist eine konjugierte Satzform statt Grundform: "passt". | passen (Kopfwort), en: "to fit" |  |
| sv1643 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Perserteppich". | der Perserteppich |  |
| sv1646 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform ohne Artikel als Kopfwort: "Personen"; Singular und Genus fehlen. | die Person (Pl. die Personen), en: "person / persons" |  |
| sv1647 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Personenstand". | der Personenstand |  |
| sv1648 | inhalte-vokabeln.js | B1 | de | sonstiges | mittel | Listen-Marker aus der Quelle im Kopfwort: "der Personenstand →D". | der Personenstand |  |
| sv1651 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Philosophie". | die Philosophie |  |
| sv1652 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Physik". | die Physik |  |
| sv1653 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Picknick". | das Picknick |  |
| sv1655 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Pilz". | der Pilz |  |
| sv1657 | inhalte-vokabeln.js | B1 | de | rechtschreibung | mittel | Nomen kleingeschrieben und als Pluralform angegeben: "plätze". | der Platz (Pl. die Plätze) |  |
| sv1657 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen ohne Artikel und ohne Singular: "plätze". | der Platz, die Plätze |  |
| sv1666 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen ohne Artikel: "Pommes frites". | die Pommes frites (Pl.) |  |
| sv1689 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform ohne Artikel als Kopfwort: "Qualifikationen". | die Qualifikationen (Pl. von die Qualifikation) |  |
| sv1692 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort doppelt dieselbe Form: "rauf/rauf" (Variante verloren). | rauf/herauf |  |
| sv1693 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort doppelt dieselbe Form: "raus/raus" (Variante verloren). | raus/heraus |  |
| sv1710 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist eine konjugierte Form statt Grundform: "regnet". | regnen (es regnet), en: "to rain" |  |
| sv1721 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | "Republik Österreich" braucht als Staatsbezeichnung mit "Republik" den Artikel (keine Ausnahme wie bei reinen Ländernamen). | die Republik Österreich |  |
| sv1721 | inhalte-vokabeln.js | B1 | ex | grammatik | mittel | Unidiomatisch: "Im Urlaub fahren wir oft in die Republik Österreich."; die amtliche Staatsbezeichnung benutzt man nicht für Urlaubsreisen. | Die Republik Österreich hat neun Bundesländer. |  |
| sv1745 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist die konjugierte Form "scheint" statt der Grundform | scheinen (en: to shine / to seem) |  |
| sv1748 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | en "to hit" passt nicht zum Beispielsatz "die Sahne steif schlagen" (dort = to whip/beat) | en: "to hit; to beat, to whip (cream)" oder Beispielsatz mit Bedeutung 'hit' wählen |  |
| sv1749 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Schlagobers" ohne Artikel | das Schlagobers (österr.) |  |
| sv1761 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist die konjugierte Form "schreibt" statt der Grundform | schreiben (en: to write) |  |
| sv1766 | inhalte-vokabeln.js | B1 | de | rechtschreibung | mittel | Nomen "schutzfaktor" kleingeschrieben | der Lichtschutzfaktor |  |
| sv1766 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "schutzfaktor" ohne Artikel | der Lichtschutzfaktor |  |
| sv1766 | inhalte-vokabeln.js | B1 | ex | kopfwort_fehlt_im_satz | mittel | Satz enthält nur das Kompositum "Lichtschutzfaktor", nicht das Kopfwort "Schutzfaktor" | Kopfwort auf "der Lichtschutzfaktor" (en: sun protection factor, SPF) ändern |  |
| sv1767 | inhalte-vokabeln.js | B1 | ex | niveau_zu_hoch | mittel | Juristischer Fachstil "weil dadurch fremde Schutzrechte berührt werden" deutlich über B1 | Wir dürfen das Bild nicht benutzen, weil andere die Rechte daran haben. (oder Item auf C1 verschieben) |  |
| sv1774 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Schwiegereltern" ohne Artikel/Pluralangabe | die Schwiegereltern (Pl.) |  |
| sv1775 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Schwiegertochter" ohne Artikel | die Schwiegertochter |  |
| sv1779 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Sechserpack" ohne Artikel | der Sechserpack |  |
| sv1780 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Kopfwort ist die Pluralform "Seiten" ohne Artikel statt Singular mit Artikel | die Seite, -n (en: page/side) |  |
| sv1788 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Seniorenheim" ohne Artikel | das Seniorenheim |  |
| sv1827 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralnomen "Sommerferien" ohne Artikel | die Sommerferien (Pl.) |  |
| sv1828 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Sonder" ist nur ein Wortbildungselement ohne Bindestrich, kein eigenständiges Wort | Sonder- (in Komposita) oder konkretes Wort: der Sonderzug |  |
| sv1837 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Speise-/-speise" ist ein Wortbildungsfragment, kein Lernwort | die Speise (en: dish, food) oder die Speisekarte (en: menu) |  |
| sv1839 | inhalte-vokabeln.js | B1 | de/ex | grammatik | mittel | "Spezial" als Nomen für ein Tagesangebot ("Heute gibt es ein Spezial") ist im Deutschen unüblich; Kopfwort zudem ohne Artikel/Wortart | das Tagesangebot: "Heute gibt es ein Tagesangebot: Pizza für fünf Euro." oder Spezial- als Präfix (das Spezialangebot) |  |
| sv1847 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist die konjugierte Form "spielt" statt der Grundform | spielen (en: to play) |  |
| sv1854 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Sprechstunde" ohne Artikel | die Sprechstunde |  |
| sv1859 | inhalte-vokabeln.js | B1 | ex | grammatik | mittel | Kollokation "Dank der ständigen Sprachbeherrschung" ist sinnwidrig/unidiomatisch | Dank meiner guten Sprachbeherrschung verstehe ich meine Kollegen gut. |  |
| sv1873 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist die Präteritumform "staubsaugte" statt der Grundform; Grundform steht bereits als sv1872 | Item streichen oder auf Grundform "staubsaugen" zusammenführen |  |
| sv1878 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist die konjugierte Form "steckt" statt der Grundform | stecken (intransitiv: to be (stuck/plugged) in) |  |
| sv1889 | inhalte-vokabeln.js | B1 | de | sonstiges | mittel | Quellen-Markierung "→D" im Kopfwort "der Stock →D" stehen geblieben | der Stock (Pl. die Stockwerke) |  |
| sv1897 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Strich" ohne Artikel | der Strich |  |
| sv1906 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Süd-/südlich" klebt Präfix und Adjektiv zusammen | südlich (en: southern) |  |
| sv1912 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Kopfwort "Symbole" ist eine Pluralform ohne Artikel statt Grundform mit Genus | das Symbol (Pl. die Symbole) |  |
| sv1916 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "täuscht" ist konjugierte Form statt Infinitiv | täuschen / sich täuschen (en: to deceive; to be mistaken) |  |
| sv1931 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Telefonanschluss" ohne Artikel | der Telefonanschluss |  |
| sv1935 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Tierversuchen" ist Dativ-Plural-Form ohne Artikel statt Grundform | der Tierversuch (Pl. die Tierversuche) |  |
| sv1968 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "übernachtet" ist Partizip II statt Infinitiv | übernachten (en: to stay overnight) |  |
| sv1982 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "überwiesen" ist Partizip II statt Infinitiv | überweisen (en: to transfer) |  |
| sv1989 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "umgezogen" ist Partizip II statt Infinitiv | umziehen (en: to move house) |  |
| sv1995 | inhalte-vokabeln.js | B1 | de | rechtschreibung | mittel | Präfix als Kopfwort "un" ohne Ergänzungsstrich; im Satz ebenfalls „un“ | un- (Kopfwort und Satz: Die Vorsilbe „un-“ ...) |  |
| sv2017 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | en "verdict" passt nicht zum Beispielsatz "mir noch kein Urteil über ihn bilden" (= judgement/opinion) | judgement; verdict | bestätigt |
| sv2018 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Kopfwort "Varianten" ist Pluralform ohne Artikel | die Variante (Pl. die Varianten) |  |
| sv2021 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verbrannt" ist Partizip II statt Infinitiv | (sich) verbrennen (en: to burn (oneself)) |  |
| sv2028 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verdient" ist Partizip II statt Infinitiv | verdienen (en: to earn; to deserve) |  |
| sv2034 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verhaftet" ist Partizip II statt Infinitiv | verhaften (en: to arrest) |  |
| sv2035 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen "Verkehrsmittel" ohne Artikel | das Verkehrsmittel |  |
| sv2038 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Substantiviertes Adjektiv "Verletzte" ohne Artikel, Genus nicht erkennbar | der/die Verletzte |  |
| sv2054 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verpasst" ist Partizip II statt Infinitiv | verpassen (en: to miss) |  |
| sv2064 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | en "representation" passt nicht zum Satz "haben wir heute eine Vertretung" (= Vertretungslehrkraft, substitute) | substitute; representation | bestätigt |
| sv2066 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verursachte" ist Präteritumform statt Infinitiv | verursachen (Eintrag streichen oder mit sv2065 zusammenführen) |  |
| sv2068 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verurteilt" ist Partizip II statt Infinitiv | verurteilen (Eintrag streichen oder mit sv2067 zusammenführen) |  |
| sv2071 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Kopfwort "Verwandten" ohne Artikel (flektierte Pluralform) | der/die Verwandte (Pl. die Verwandten) |  |
| sv2073 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verzichtet" ist Partizip II statt Infinitiv | verzichten (auf + Akk.) (en: to do without; to renounce) |  |
| sv2084 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Vier Kopfwörter in einem Eintrag: "die Volksschule/Hauptschule/Neue Mittelschule/Berufsschule" (österreichische Schultypen, "Neue Mittelschule" seit 2020 umbenannt); die Übersetzung "primary school/secondary school types" deckt "Berufsschule" (vocational school) nicht ab | Aufteilen: "die Volksschule (AT)" = primary school; "die Hauptschule" = secondary general school; "die Berufsschule" = vocational school |  |
| sv2098 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist eine konjugierte Form: "vorkommt" (en "occurs"); Grundform "vorkommen" steht bereits als sv2097 im Batch | Eintrag streichen oder als Wendung umbauen: "es kommt vor, dass …" = it happens that … | bestätigt |
| sv2104 | inhalte-vokabeln.js | B1 | ex | grammatik | mittel | Unidiomatisch: "eine große Wahl an frischem Brot" – idiomatisch ist "Auswahl an"; "Wahl" passt in diesem Sinn nur in "die Wahl haben" | "Bei der Wahl im September dürfen alle Bürger ab 18 abstimmen." oder "Du hast die Wahl: Tee oder Kaffee?" |  |
| sv2119 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Präfix-Fragment plus Adjektiv: "West-/westlich" | "westlich" (en "western; west of") |  |
| sv2127 | inhalte-vokabeln.js | B1 | ex | kopfwort_fehlt_im_satz | mittel | Satz verwendet Adverb + Verb "mal wieder zu sehen", nicht das Verb "wiedersehen" (zu-Infinitiv wäre "wiederzusehen") | "Es war wirklich schön, dich wiederzusehen." |  |
| sv2129 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | Übersetzung "repetition" passt nicht zum Beispielsatz (Fernsehen): dort bedeutet "Wiederholung" rerun/repeat | en: "repetition; revision; rerun (TV)" |  |
| sv2137 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform ohne Artikel und ohne Singular: "Wörter" | "das Wort, die Wörter" |  |
| sv2160 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort mit Wörterbuch-Notation "das Zeug/-zeug" (Suffix-Fragment) | "das Zeug" |  |
| sv2165 | inhalte-vokabeln.js | B1 | ex | kopfwort_fehlt_im_satz | mittel | Satz "Am Fenster zieht immer kalte Luft herein" verwendet "hereinziehen", nicht die unpersönliche Wendung "es zieht" | "Mach bitte das Fenster zu, es zieht." |  |
| sv2168 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Pluralform ohne Artikel: "Zigaretten" | "die Zigarette, die Zigaretten" |  |
| sv2173 | inhalte-vokabeln.js | B1 | ex | grammatik | mittel | Tempusmischung im Satzgefüge: "Als ich kam, ist der Laden schon zu gewesen." – nach "als" + Präteritum erwartet man Präteritum im Hauptsatz; als Lernvorbild ungeeignet | "Als ich kam, war der Laden schon zu." |  |
| sv2183 | inhalte-vokabeln.js | B1 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Zugrestaurant" | "das Zugrestaurant" |  |
| sv2187 | inhalte-vokabeln.js | B1 | en | uebersetzung_en | mittel | Übersetzung "future; upcoming" gibt nur die Adjektivbedeutung; im Beispielsatz steht "zukünftig" als Adverb (in future) | en: "future; in future" |  |
| sv2193 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist zu-Infinitiv statt Grundform: "zurückzubekommen" | "zurückbekommen" | bestätigt |
| sw0001 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Abbau" | "der Abbau" |  |
| sw0004 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Abenteuerlust" | "die Abenteuerlust" |  |
| sw0005 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II statt Grundform: "abgebrochen" (Grundform "abbrechen" ist bereits sw0003) | Eintrag streichen oder Grundform "abbrechen (ein Studium abbrechen)" | bestätigt |
| sw0006 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II statt Grundform: "abgegeben" | "abgeben" (en "to hand in; to submit") | bestätigt |
| sw0007 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II statt Grundform: "abgeschrieben" (Grundform "abschreiben" steht bereits als sw0015) | Eintrag streichen oder mit sw0015 "abschreiben" zusammenführen | bestätigt |
| sw0008 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "abgesehen" ist ein Fragment; die Bedeutung "apart from" hat nur die Wendung "abgesehen von" | "abgesehen von (+ Dat.)" |  |
| sw0009 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Abhängigkeit" | "die Abhängigkeit" |  |
| sw0013 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Absage" | "die Absage" |  |
| sw0014 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Abschiedsszene" | "die Abschiedsszene" |  |
| sw0017 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Absperrung" | "die Absperrung" |  |
| sw0018 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Absprache" | "die Absprache" |  |
| sw0019 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Abstammung" | "die Abstammung" |  |
| sw0020 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Abstand" | "der Abstand" |  |
| sw0022 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Abteil" | "das Abteil" |  |
| sw0029 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Akademie" | "die Akademie" |  |
| sw0033 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Alleinernährer/in" | "der Alleinernährer / die Alleinernährerin" |  |
| sw0034 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Allesfresser/in" | "der Allesfresser / die Allesfresserin" |  |
| sw0035 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Alltagsprodukt" | "das Alltagsprodukt" |  |
| sw0036 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Alltagssprache" | "die Alltagssprache" |  |
| sw0037 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Alltagsszene" | "die Alltagsszene" |  |
| sw0040 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Amateur-Boxer/in" | "der Amateurboxer / die Amateurboxerin" |  |
| sw0041 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Ampelprinzip" | "das Ampelprinzip" |  |
| sw0042 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen ohne Artikel: "Amtsinhaber/in" | "der Amtsinhaber / die Amtsinhaberin" |  |
| sw0043 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Amtssprache" ohne Artikel | die Amtssprache |  |
| sw0050 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Angebotserstellung" ohne Artikel | die Angebotserstellung |  |
| sw0052 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "angegangen" ist eine flektierte Form (Partizip II) statt der Grundform | angehen (angegangen = Partizip II; angehen ist bereits sw0053) |  |
| sw0054 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "angelegt" ist eine flektierte Form (Partizip II) statt der Grundform | anlegen (angelegt = Partizip II; anlegen ist bereits sw0067) |  |
| sw0057 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "angestanden" ist eine flektierte Form (Partizip II) statt der Grundform | anstehen (angestanden = Partizip II; anstehen ist bereits sw0075) |  |
| sw0059 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Angewohnheit" ohne Artikel | die Angewohnheit |  |
| sw0060 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Angriff" ohne Artikel | der Angriff |  |
| sw0061 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Angstreaktion" ohne Artikel | die Angstreaktion |  |
| sw0064 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ankunftsabend" ohne Artikel | der Ankunftsabend |  |
| sw0066 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Anlage" ohne Artikel | die Anlage |  |
| sw0070 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Anprobe" ohne Artikel | die Anprobe |  |
| sw0071 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Anrufer/in" ohne Artikel | der Anrufer / die Anruferin |  |
| sw0072 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Anschreiben" ohne Artikel | das Anschreiben |  |
| sw0073 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Anschrift" ohne Artikel | die Anschrift |  |
| sw0077 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitsatmosphäre" ohne Artikel | die Arbeitsatmosphäre |  |
| sw0078 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitsbedingungen" ohne Artikel | die Arbeitsbedingungen (Pl.) |  |
| sw0079 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitschance" ohne Artikel | die Arbeitschance |  |
| sw0080 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitserlaubnis" ohne Artikel | die Arbeitserlaubnis |  |
| sw0082 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitsgebiet" ohne Artikel | das Arbeitsgebiet |  |
| sw0083 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitsklima" ohne Artikel | das Arbeitsklima |  |
| sw0084 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitslohn" ohne Artikel | der Arbeitslohn |  |
| sw0085 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitslose" ohne Artikel | der/die Arbeitslose |  |
| sw0086 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitsmarkt" ohne Artikel | der Arbeitsmarkt |  |
| sw0087 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitssituation" ohne Artikel | die Arbeitssituation |  |
| sw0088 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitsumfeld" ohne Artikel | das Arbeitsumfeld |  |
| sw0089 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arbeitsweise" ohne Artikel | die Arbeitsweise |  |
| sw0091 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Artgenosse/Artgenossin" ohne Artikel | der Artgenosse / die Artgenossin |  |
| sw0092 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Arztpraxis" ohne Artikel | die Arztpraxis |  |
| sw0093 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Astronom/in" ohne Artikel | der Astronom / die Astronomin |  |
| sw0094 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Asylberechtigte" ohne Artikel | der/die Asylberechtigte |  |
| sw0095 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Atmosphäre" ohne Artikel | die Atmosphäre |  |
| sw0096 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Atmung" ohne Artikel | die Atmung |  |
| sw0097 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Atombombe" ohne Artikel | die Atombombe |  |
| sw0098 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Atomenergie" ohne Artikel | die Atomenergie |  |
| sw0099 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Atomkraftwerk" ohne Artikel | das Atomkraftwerk |  |
| sw0100 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Atommeiler" ohne Artikel | der Atommeiler |  |
| sw0103 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Audioguide" ohne Artikel | der Audioguide |  |
| sw0104 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Aufbau" ohne Artikel | der Aufbau |  |
| sw0106 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Auffassung" ohne Artikel | die Auffassung |  |
| sw0108 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Aufgabengebiet" ohne Artikel | das Aufgabengebiet |  |
| sw0109 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Aufgabenteilung" ohne Artikel | die Aufgabenteilung |  |
| sw0111 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "aufgegangen" ist eine flektierte Form (Partizip II) statt der Grundform | aufgehen |  |
| sw0112 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | "given up" passt nicht zum Satz: "das Paket ... aufgegeben" bedeutet "posted/sent" | posted; sent (a parcel); given up | bestätigt |
| sw0112 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "aufgegeben" ist eine flektierte Form (Partizip II) statt der Grundform | aufgeben (bereits sw0110) – besser neuer Eintrag "ein Paket aufgeben" |  |
| sw0114 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "aufgehoben" ist eine flektierte Form (Partizip II) statt der Grundform | aufheben |  |
| sw0115 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "aufgekommen" ist eine flektierte Form (Partizip II) statt der Grundform | aufkommen (bereits sw0122) bzw. Eintrag streichen |  |
| sw0116 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | "lay on" ist falsch: "aufgelegen" (von aufliegen) heißt im Satz "zur Einsicht ausgelegen" | been on display; been available for inspection | bestätigt |
| sw0116 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "aufgelegen" ist eine flektierte Form (Partizip II) statt der Grundform | aufliegen (hat aufgelegen) |  |
| sw0117 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "aufgerieben" ist eine flektierte Form (Partizip II) statt der Grundform | sich aufreiben |  |
| sw0118 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "aufgerissen" ist eine flektierte Form (Partizip II) statt der Grundform | aufreißen |  |
| sw0120 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | "swung up" passt nicht zum Satz "mich dazu aufgeschwungen, ... zu belegen" (= sich überwunden) | brought oneself to (do something) | bestätigt |
| sw0120 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "aufgeschwungen" ist eine flektierte Form (Partizip II) statt der Grundform | sich aufschwingen (bereits sw0119) bzw. Eintrag streichen |  |
| sw0124 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Aufregung" ohne Artikel | die Aufregung |  |
| sw0126 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Auftakt" ohne Artikel | der Auftakt |  |
| sw0128 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Aufteilung" ohne Artikel | die Aufteilung |  |
| sw0130 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Aufzählung" ohne Artikel | die Aufzählung |  |
| sw0131 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ausarbeitung" ohne Artikel | die Ausarbeitung |  |
| sw0132 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ausbau" ohne Artikel | der Ausbau |  |
| sw0134 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ausbildungsangebot" ohne Artikel | das Ausbildungsangebot |  |
| sw0135 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ausbildungsmöglichkeit" ohne Artikel | die Ausbildungsmöglichkeit |  |
| sw0139 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "ausgekommen" ist eine flektierte Form (Partizip II) statt der Grundform | auskommen (bereits sw0138) bzw. Eintrag streichen |  |
| sw0144 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "ausgewechselt" ist eine flektierte Form (Partizip II) statt der Grundform | auswechseln |  |
| sw0146 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ausgrenzung" ohne Artikel | die Ausgrenzung |  |
| sw0147 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Auslandsaufenthalt" ohne Artikel | der Auslandsaufenthalt |  |
| sw0148 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Auslandserfahrung" ohne Artikel | die Auslandserfahrung |  |
| sw0149 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Auslandssemester" ohne Artikel | das Auslandssemester |  |
| sw0153 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ausreise" ohne Artikel | die Ausreise |  |
| sw0154 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ausreisekontrolle" ohne Artikel | die Ausreisekontrolle |  |
| sw0159 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Austausch" ohne Artikel | der Austausch |  |
| sw0163 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ausweg" ohne Artikel | der Ausweg |  |
| sw0167 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Autofahrer/in" ohne Artikel | der Autofahrer / die Autofahrerin |  |
| sw0168 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Automobilhersteller" ohne Artikel | der Automobilhersteller |  |
| sw0169 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Autor/in" ohne Artikel | der Autor / die Autorin |  |
| sw0171 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bachelor" ohne Artikel | der Bachelor |  |
| sw0172 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bachelorarbeit" ohne Artikel | die Bachelorarbeit |  |
| sw0173 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Badesee" ohne Artikel | der Badesee |  |
| sw0174 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bakterie" ohne Artikel | die Bakterie |  |
| sw0175 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Balance" ohne Artikel | die Balance |  |
| sw0176 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bammel" ohne Artikel | der Bammel |  |
| sw0179 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Banktresor" ohne Artikel | der Banktresor |  |
| sw0181 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Basis" ohne Artikel | die Basis |  |
| sw0182 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bauarbeiter/in" ohne Artikel | der Bauarbeiter / die Bauarbeiterin |  |
| sw0183 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Baumwolle" ohne Artikel | die Baumwolle |  |
| sw0184 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bauwagen" ohne Artikel | der Bauwagen |  |
| sw0185 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bauwerk" ohne Artikel | das Bauwerk |  |
| sw0186 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bauzeichner/in" ohne Artikel | der Bauzeichner / die Bauzeichnerin |  |
| sw0187 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Beachtung" ohne Artikel | die Beachtung |  |
| sw0188 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Becher" ohne Artikel | der Becher |  |
| sw0189 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bedarf" ohne Artikel | der Bedarf |  |
| sw0193 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bedeutungsnuance" ohne Artikel | die Bedeutungsnuance |  |
| sw0194 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | "loss of meaning" irreführend: "Bedeutungsverlust ihres Fachwissens" meint Verlust an Wichtigkeit | loss of significance; loss of importance | bestätigt |
| sw0194 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Bedeutungsverlust" ohne Artikel | der Bedeutungsverlust |  |
| sw0196 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bedürfnis“ ohne Artikel. | das Bedürfnis |  |
| sw0198 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bedürftige“ ohne Artikel. | der/die Bedürftige |  |
| sw0201 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Befehl“ ohne Artikel. | der Befehl |  |
| sw0203 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Befinden“ ohne Artikel. | das Befinden |  |
| sw0204 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Befragte“ ohne Artikel. | der/die Befragte |  |
| sw0206 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Begabung“ ohne Artikel. | die Begabung |  |
| sw0208 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Begleiter/in“ ohne Artikel. | der Begleiter / die Begleiterin |  |
| sw0210 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Behandlungsmöglichkeit“ ohne Artikel. | die Behandlungsmöglichkeit |  |
| sw0216 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bekanntschaft“ ohne Artikel. | die Bekanntschaft |  |
| sw0217 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bekleidung“ ohne Artikel. | die Bekleidung |  |
| sw0219 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Belastung“ ohne Artikel. | die Belastung |  |
| sw0223 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Benehmen“ ohne Artikel. | das Benehmen |  |
| sw0224 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Benutzerkonto“ ohne Artikel. | das Benutzerkonto |  |
| sw0225 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Benzinmotor“ ohne Artikel. | der Benzinmotor |  |
| sw0226 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bequemlichkeit“ ohne Artikel. | die Bequemlichkeit |  |
| sw0227 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Berater/in“ ohne Artikel. | der Berater / die Beraterin |  |
| sw0228 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Beratungsagentur“ ohne Artikel. | die Beratungsagentur |  |
| sw0231 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Berufsanfänger/in“ ohne Artikel. | der Berufsanfänger / die Berufsanfängerin |  |
| sw0232 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Berufsausbildung“ ohne Artikel. | die Berufsausbildung |  |
| sw0233 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Berufsbereich“ ohne Artikel. | der Berufsbereich |  |
| sw0234 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Berufsentscheidung“ ohne Artikel. | die Berufsentscheidung |  |
| sw0235 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Berufserfahrung“ ohne Artikel. | die Berufserfahrung |  |
| sw0236 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Berufsschule“ ohne Artikel. | die Berufsschule |  |
| sw0237 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Berufswelt“ ohne Artikel. | die Berufswelt |  |
| sw0238 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Berufswunsch“ ohne Artikel. | der Berufswunsch |  |
| sw0244 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Beschwerdebrief“ ohne Artikel. | der Beschwerdebrief |  |
| sw0245 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | Kopfwort ist der Infinitiv „besehen“, die Übersetzung „looked at; inspected“ ist aber Partizip; der Beispielsatz nutzt die feste Wendung „bei Licht besehen“ (= on closer inspection), deren Bedeutung nirgends erklärt wird. | en: „to look at closely; bei Licht besehen = on closer inspection“ (oder Kopfwort „bei Licht besehen“) |  |
| sw0246 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Besitzer/in“ ohne Artikel. | der Besitzer / die Besitzerin |  |
| sw0248 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bestandteil“ ohne Artikel. | der Bestandteil |  |
| sw0250 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bestellung“ ohne Artikel. | die Bestellung |  |
| sw0251 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bestellvorgang“ ohne Artikel. | der Bestellvorgang |  |
| sw0254 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bestseller-Liste“ ohne Artikel. | die Bestseller-Liste |  |
| sw0255 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Besucherzelle“ ohne Artikel. | die Besucherzelle |  |
| sw0256 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Beteiligung“ ohne Artikel. | die Beteiligung |  |
| sw0258 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Betonung“ ohne Artikel. | die Betonung |  |
| sw0259 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Betracht“ ohne Artikel. | der Betracht (nur in: etwas in Betracht ziehen / in Betracht kommen) |  |
| sw0261 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Betreffzeile“ ohne Artikel. | die Betreffzeile |  |
| sw0265 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Betreuung“ ohne Artikel. | die Betreuung |  |
| sw0266 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Betriebswirtschaft“ ohne Artikel. | die Betriebswirtschaft |  |
| sw0268 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Betroffene“ ohne Artikel. | der/die Betroffene |  |
| sw0269 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bettzeug“ ohne Artikel. | das Bettzeug |  |
| sw0270 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bevölkerungswachstum“ ohne Artikel. | das Bevölkerungswachstum |  |
| sw0271 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bewachung“ ohne Artikel. | die Bewachung |  |
| sw0272 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bewegungsstörung“ ohne Artikel. | die Bewegungsstörung |  |
| sw0273 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bewerber/in“ ohne Artikel. | der Bewerber / die Bewerberin |  |
| sw0274 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bewerbungsbrief“ ohne Artikel. | der Bewerbungsbrief |  |
| sw0275 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bewerbungsschreiben“ ohne Artikel. | das Bewerbungsschreiben |  |
| sw0276 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bewerbungstrainer/in“ ohne Artikel. | der Bewerbungstrainer / die Bewerbungstrainerin |  |
| sw0278 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bewunderer/Bewunderin“ ohne Artikel. | der Bewunderer / die Bewunderin |  |
| sw0279 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bildungsabschluss“ ohne Artikel. | der Bildungsabschluss |  |
| sw0280 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bildungschance“ ohne Artikel. | die Bildungschance |  |
| sw0281 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bildungserfolg“ ohne Artikel. | der Bildungserfolg |  |
| sw0282 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bildungserwartung“ ohne Artikel. | die Bildungserwartung |  |
| sw0284 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Billiglohnland“ ohne Artikel. | das Billiglohnland |  |
| sw0285 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Biobaumwolltasche“ ohne Artikel. | die Biobaumwolltasche |  |
| sw0288 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Blaumann“ ohne Artikel. | der Blaumann |  |
| sw0289 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Blei“ ohne Artikel. | das Blei |  |
| sw0290 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Blogger/in“ ohne Artikel. | der Blogger / die Bloggerin |  |
| sw0291 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Blutdruck“ ohne Artikel. | der Blutdruck |  |
| sw0292 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bluthochdruck“ ohne Artikel. | der Bluthochdruck |  |
| sw0293 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Blutwert“ ohne Artikel. | der Blutwert |  |
| sw0294 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Blutzucker“ ohne Artikel. | der Blutzucker |  |
| sw0295 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Blutzuckerspiegel“ ohne Artikel. | der Blutzuckerspiegel |  |
| sw0296 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bombe“ ohne Artikel. | die Bombe |  |
| sw0297 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Branche“ ohne Artikel. | die Branche |  |
| sw0298 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Branchenverband“ ohne Artikel. | der Branchenverband |  |
| sw0300 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Brustkorb“ ohne Artikel. | der Brustkorb |  |
| sw0301 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Buchbesprechung“ ohne Artikel. | die Buchbesprechung |  |
| sw0302 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Buchdruck“ ohne Artikel. | der Buchdruck |  |
| sw0303 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Buchseite“ ohne Artikel. | die Buchseite |  |
| sw0304 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Budget“ ohne Artikel. | das Budget |  |
| sw0307 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bürokauffrau“ ohne Artikel. | die Bürokauffrau |  |
| sw0308 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bundesminister/in“ ohne Artikel. | der Bundesminister / die Bundesministerin |  |
| sw0309 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bundespolizei“ ohne Artikel. | die Bundespolizei |  |
| sw0310 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bundestagsfraktion“ ohne Artikel. | die Bundestagsfraktion |  |
| sw0311 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bundestagswahl“ ohne Artikel. | die Bundestagswahl |  |
| sw0312 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Bundesverband“ ohne Artikel. | der Bundesverband |  |
| sw0314 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | Englische Übersetzung „queen (chess/castle lady)“ ist falsch: „Burgdame“ ist keine Schachfigur (die Dame im Schach heißt nur „Dame“), sondern eine Frau des Burgadels im Mittelalter. | en: „lady of the castle (medieval)“ | bestätigt |
| sw0314 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Burgdame“ ohne Artikel. | die Burgdame |  |
| sw0315 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Business-Outfit“ ohne Artikel. | das Business-Outfit |  |
| sw0316 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Cartoon“ ohne Artikel. | der Cartoon (auch: das Cartoon) |  |
| sw0317 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Cello“ ohne Artikel. | das Cello |  |
| sw0318 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Chancengleichheit“ ohne Artikel. | die Chancengleichheit |  |
| sw0319 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Charakter“ ohne Artikel. | der Charakter |  |
| sw0320 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Checkliste“ ohne Artikel. | die Checkliste |  |
| sw0321 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Chronik“ ohne Artikel. | die Chronik |  |
| sw0323 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Comic“ ohne Artikel. | der Comic |  |
| sw0324 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Computerspielsucht“ ohne Artikel. | die Computerspielsucht |  |
| sw0328 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Datensicherheit“ ohne Artikel. | die Datensicherheit |  |
| sw0329 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Datumsangabe“ ohne Artikel. | die Datumsangabe |  |
| sw0330 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Dauer“ ohne Artikel. | die Dauer |  |
| sw0331 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Daumen“ ohne Artikel. | der Daumen |  |
| sw0333 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Defizit“ ohne Artikel. | das Defizit |  |
| sw0335 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Demenz“ ohne Artikel. | die Demenz |  |
| sw0337 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Denkpause“ ohne Artikel. | die Denkpause |  |
| sw0338 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Denksportaufgabe“ ohne Artikel. | die Denksportaufgabe |  |
| sw0342 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Design“ ohne Artikel. | das Design |  |
| sw0343 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Desinteresse“ ohne Artikel. | das Desinteresse |  |
| sw0345 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort „Detektiv/in“ ohne Artikel. | der Detektiv / die Detektivin |  |
| sw0347 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Diagnose" ohne Artikel, Genus für Lernende nicht erkennbar | die Diagnose |  |
| sw0349 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Diagramm" ohne Artikel, Genus für Lernende nicht erkennbar | das Diagramm |  |
| sw0350 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Diamant" ohne Artikel, Genus für Lernende nicht erkennbar | der Diamant |  |
| sw0351 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Dichter/in" ohne Artikel, Genus für Lernende nicht erkennbar | der Dichter / die Dichterin |  |
| sw0352 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Diebstahl" ohne Artikel, Genus für Lernende nicht erkennbar | der Diebstahl |  |
| sw0353 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Dienstleistung" ohne Artikel, Genus für Lernende nicht erkennbar | die Dienstleistung |  |
| sw0354 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Digitalisierung" ohne Artikel, Genus für Lernende nicht erkennbar | die Digitalisierung |  |
| sw0355 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Dilemma" ohne Artikel, Genus für Lernende nicht erkennbar | das Dilemma |  |
| sw0356 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Diskriminierung" ohne Artikel, Genus für Lernende nicht erkennbar | die Diskriminierung |  |
| sw0357 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Diskussionsbedarf" ohne Artikel, Genus für Lernende nicht erkennbar | der Diskussionsbedarf |  |
| sw0360 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Disziplin" ohne Artikel, Genus für Lernende nicht erkennbar | die Disziplin |  |
| sw0362 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Dokument" ohne Artikel, Genus für Lernende nicht erkennbar | das Dokument |  |
| sw0365 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Doppelklick" ohne Artikel, Genus für Lernende nicht erkennbar | der Doppelklick |  |
| sw0372 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Drehbuchautor/in" ohne Artikel, Genus für Lernende nicht erkennbar | der Drehbuchautor / die Drehbuchautorin |  |
| sw0373 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Dringlichkeit" ohne Artikel, Genus für Lernende nicht erkennbar | die Dringlichkeit |  |
| sw0374 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Dürreperiode" ohne Artikel, Genus für Lernende nicht erkennbar | die Dürreperiode |  |
| sw0377 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Durchbruch" ohne Artikel, Genus für Lernende nicht erkennbar | der Durchbruch |  |
| sw0379 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Durchführung" ohne Artikel, Genus für Lernende nicht erkennbar | die Durchführung |  |
| sw0382 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Durchschnitt" ohne Artikel, Genus für Lernende nicht erkennbar | der Durchschnitt |  |
| sw0385 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Durchwahl" ohne Artikel, Genus für Lernende nicht erkennbar | die Durchwahl |  |
| sw0386 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "E-Gitarre" ohne Artikel, Genus für Lernende nicht erkennbar | die E-Gitarre |  |
| sw0387 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "EDV" ohne Artikel, Genus für Lernende nicht erkennbar | die EDV |  |
| sw0388 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "EDV-Kenntnisse" ohne Artikel, Genus für Lernende nicht erkennbar; zudem Pluralform als Kopfwort ohne Pluralkennzeichnung | die EDV-Kenntnisse (Pl.) |  |
| sw0389 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Effekt" ohne Artikel, Genus für Lernende nicht erkennbar | der Effekt |  |
| sw0390 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Ehrentag" ohne Artikel, Genus für Lernende nicht erkennbar | der Ehrentag |  |
| sw0391 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Eidechse" ohne Artikel, Genus für Lernende nicht erkennbar | die Eidechse |  |
| sw0392 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Eifer" ohne Artikel, Genus für Lernende nicht erkennbar | der Eifer |  |
| sw0393 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Eifersucht" ohne Artikel, Genus für Lernende nicht erkennbar | die Eifersucht |  |
| sw0394 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Eigeninitiative" ohne Artikel, Genus für Lernende nicht erkennbar | die Eigeninitiative |  |
| sw0401 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Eindruck" ohne Artikel, Genus für Lernende nicht erkennbar | der Eindruck |  |
| sw0402 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Einfuhr" ohne Artikel, Genus für Lernende nicht erkennbar | die Einfuhr |  |
| sw0403 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Eingangstür" ohne Artikel, Genus für Lernende nicht erkennbar | die Eingangstür |  |
| sw0405 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "eingebracht" ist das Partizip II (Satzform) statt der Grundform "einbringen" | Eintrag streichen bzw. in "einbringen" (sw0399) aufgehen lassen; ggf. Partizip nur als Formangabe führen |  |
| sw0406 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "eingegangen" ist das Partizip II (Satzform) statt der Grundform "eingehen" | Eintrag streichen bzw. in "eingehen" (sw0407) aufgehen lassen; ggf. Partizip nur als Formangabe führen |  |
| sw0408 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "eingegeben" ist das Partizip II (Satzform) statt der Grundform "eingeben" | Eintrag streichen bzw. in "eingeben" (sw0404) aufgehen lassen; ggf. Partizip nur als Formangabe führen |  |
| sw0410 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "eingeworfen" ist das Partizip II (Satzform) statt der Grundform "einwerfen" | Eintrag streichen bzw. in "einwerfen" (sw0430) aufgehen lassen; ggf. Partizip nur als Formangabe führen |  |
| sw0415 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Einnahme" ohne Artikel, Genus für Lernende nicht erkennbar | die Einnahme |  |
| sw0419 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Einsatz" ohne Artikel, Genus für Lernende nicht erkennbar | der Einsatz |  |
| sw0420 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Einsatzmöglichkeit" ohne Artikel, Genus für Lernende nicht erkennbar | die Einsatzmöglichkeit |  |
| sw0421 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Einschränkung" ohne Artikel, Genus für Lernende nicht erkennbar | die Einschränkung |  |
| sw0427 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Eintragung" ohne Artikel, Genus für Lernende nicht erkennbar | die Eintragung |  |
| sw0429 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Einwanderer/Einwanderin" ohne Artikel, Genus für Lernende nicht erkennbar | der Einwanderer / die Einwanderin |  |
| sw0431 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Elektrizität" ohne Artikel, Genus für Lernende nicht erkennbar | die Elektrizität |  |
| sw0432 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Elite" ohne Artikel, Genus für Lernende nicht erkennbar | die Elite |  |
| sw0433 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Emotion" ohne Artikel, Genus für Lernende nicht erkennbar | die Emotion |  |
| sw0434 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Empathie" ohne Artikel, Genus für Lernende nicht erkennbar | die Empathie |  |
| sw0437 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Empörung" ohne Artikel, Genus für Lernende nicht erkennbar | die Empörung |  |
| sw0439 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Endorphin" ohne Artikel, Genus für Lernende nicht erkennbar | das Endorphin |  |
| sw0442 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Entdecker/in" ohne Artikel, Genus für Lernende nicht erkennbar | der Entdecker / die Entdeckerin |  |
| sw0444 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Entfernung" ohne Artikel, Genus für Lernende nicht erkennbar | die Entfernung |  |
| sw0453 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Entwicklungsperspektive" ohne Artikel, Genus für Lernende nicht erkennbar | die Entwicklungsperspektive |  |
| sw0454 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Epidemie" ohne Artikel, Genus für Lernende nicht erkennbar | die Epidemie |  |
| sw0457 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Erfinder/in" ohne Artikel, Genus für Lernende nicht erkennbar | der Erfinder / die Erfinderin |  |
| sw0458 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Erfindungsreichtum" ohne Artikel, Genus für Lernende nicht erkennbar | der Erfindungsreichtum |  |
| sw0465 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Erkenntnis" ohne Artikel, Genus für Lernende nicht erkennbar | die Erkenntnis |  |
| sw0466 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Erledigung" ohne Artikel, Genus für Lernende nicht erkennbar | die Erledigung |  |
| sw0466 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | Übersetzung "completion; task done" passt nicht zum Beispielsatz: "ein paar Erledigungen" bedeutet dort "errands" | en: "errand; completion (of a task)" | bestätigt |
| sw0468 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Ermunterung" ohne Artikel, Genus für Lernende nicht erkennbar | die Ermunterung |  |
| sw0471 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Ernte" ohne Artikel, Genus für Lernende nicht erkennbar | die Ernte |  |
| sw0474 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Erpressung" ohne Artikel, Genus für Lernende nicht erkennbar | die Erpressung |  |
| sw0486 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Erwartung" ohne Artikel, Genus für Lernende nicht erkennbar | die Erwartung |  |
| sw0490 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Erwerbsarbeit" ohne Artikel, Genus für Lernende nicht erkennbar | die Erwerbsarbeit |  |
| sw0491 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Erwerbstätigkeit" ohne Artikel, Genus für Lernende nicht erkennbar | die Erwerbstätigkeit |  |
| sw0494 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Erzeugung" ohne Artikel, Genus für Lernende nicht erkennbar | die Erzeugung |  |
| sw0495 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Erziehungsfragen" ohne Artikel, Genus für Lernende nicht erkennbar; zudem Pluralform als Kopfwort ohne Pluralkennzeichnung | die Erziehungsfrage (Pl. die Erziehungsfragen) |  |
| sw0498 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Event" ohne Artikel, Genus für Lernende nicht erkennbar | das Event |  |
| sw0499 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Evolution" ohne Artikel, Genus für Lernende nicht erkennbar | die Evolution |  |
| sw0500 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Examen" ohne Artikel, Genus für Lernende nicht erkennbar | das Examen |  |
| sw0502 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Expedition" ohne Artikel. | die Expedition |  |
| sw0506 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fachwelt" ohne Artikel. | die Fachwelt |  |
| sw0508 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fairness" ohne Artikel. | die Fairness |  |
| sw0509 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fakt" ohne Artikel. | der Fakt |  |
| sw0510 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Familienbesuch" ohne Artikel. | der Familienbesuch |  |
| sw0511 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Familiengründung" ohne Artikel. | die Familiengründung |  |
| sw0512 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fantasiewelt" ohne Artikel. | die Fantasiewelt |  |
| sw0515 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Faust" ohne Artikel. | die Faust |  |
| sw0516 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Faustregel" ohne Artikel. | die Faustregel |  |
| sw0517 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fazit" ohne Artikel. | das Fazit |  |
| sw0518 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Feedback" ohne Artikel. | das Feedback |  |
| sw0519 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fehlentscheidung" ohne Artikel. | die Fehlentscheidung |  |
| sw0522 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Feind/in" ohne Artikel. | der Feind / die Feindin |  |
| sw0523 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Feldtheorie" ohne Artikel. | die Feldtheorie |  |
| sw0524 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | "to be far-fetched" passt nicht zum Satz: "Es liegt mir fern, dich zu kritisieren" bedeutet "far be it from me / I have no intention of". | far be it from (sb.); to be far from sb.'s mind (also: to be far-fetched) | bestätigt |
| sw0525 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fertigstellung" ohne Artikel. | die Fertigstellung |  |
| sw0527 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Festspiel" ohne Artikel. | das Festspiel, meist Pl. die Festspiele |  |
| sw0528 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Feststellung" ohne Artikel. | die Feststellung |  |
| sw0529 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Feuerholz" ohne Artikel. | das Feuerholz |  |
| sw0530 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Feuerwerk" ohne Artikel. | das Feuerwerk |  |
| sw0531 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Feuilleton" ohne Artikel. | das Feuilleton |  |
| sw0532 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Feuilletonist/in" ohne Artikel. | der Feuilletonist / die Feuilletonistin |  |
| sw0533 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fieberthermometer" ohne Artikel. | das Fieberthermometer |  |
| sw0534 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Filmregisseur/in" ohne Artikel. | der Filmregisseur / die Filmregisseurin |  |
| sw0537 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Finanzkrise" ohne Artikel. | die Finanzkrise |  |
| sw0538 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fingerspitzengefühl" ohne Artikel. | das Fingerspitzengefühl |  |
| sw0539 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Firewall" ohne Artikel. | die Firewall |  |
| sw0540 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Firmenkultur" ohne Artikel. | die Firmenkultur |  |
| sw0541 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fischer/in" ohne Artikel. | der Fischer / die Fischerin |  |
| sw0543 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Flügel" ohne Artikel. | der Flügel |  |
| sw0544 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Flyer" ohne Artikel. | der Flyer |  |
| sw0545 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Fördermaßnahme" ohne Artikel. | die Fördermaßnahme |  |
| sw0547 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Forelle" ohne Artikel. | die Forelle |  |
| sw0548 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Forscher/in" ohne Artikel. | der Forscher / die Forscherin |  |
| sw0549 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Forschungseinrichtung" ohne Artikel. | die Forschungseinrichtung |  |
| sw0550 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Forschungsteam" ohne Artikel. | das Forschungsteam |  |
| sw0551 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Forumsbeitrag" ohne Artikel. | der Forumsbeitrag |  |
| sw0553 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Frauensache" ohne Artikel. | die Frauensache |  |
| sw0554 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Frauenzeitschrift" ohne Artikel. | die Frauenzeitschrift |  |
| sw0557 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Freundlichkeit" ohne Artikel. | die Freundlichkeit |  |
| sw0559 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Friedhof" ohne Artikel. | der Friedhof |  |
| sw0561 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Frühbucherrabatt" ohne Artikel. | der Frühbucherrabatt |  |
| sw0567 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gänsehaut" ohne Artikel. | die Gänsehaut |  |
| sw0568 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Galerist/in" ohne Artikel. | der Galerist / die Galeristin |  |
| sw0569 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gangsterkino" ohne Artikel. | das Gangsterkino |  |
| sw0570 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Garn" ohne Artikel. | das Garn |  |
| sw0571 | inhalte-vokabeln-b2.js | B2 | de | sonstiges | mittel | Kopfwort "Gealterte" ist kein lexikalisiertes Nomen (nicht im Duden); "In dem neuen Pflegeheim werden Gealterte liebevoll betreut" sagt kein Muttersprachler. | der/die Ältere bzw. der Senior / die Seniorin; Satz: "In dem neuen Pflegeheim werden ältere Menschen liebevoll betreut, ..." | bestätigt |
| sw0572 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gebärdensprache" ohne Artikel. | die Gebärdensprache |  |
| sw0573 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gebirge" ohne Artikel. | das Gebirge |  |
| sw0576 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gedacht" ist Partizip II statt Grundform; im Satz verbale Perfektform ("hätte nie gedacht"). | denken (dachte, hat gedacht) – en: to think |  |
| sw0577 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gedächtnisinhalt" ohne Artikel. | der Gedächtnisinhalt |  |
| sw0578 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gedankenschritt" ohne Artikel. | der Gedankenschritt |  |
| sw0583 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gehirn" ohne Artikel. | das Gehirn |  |
| sw0584 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gehirnaktivität" ohne Artikel. | die Gehirnaktivität |  |
| sw0585 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gehirnregion" ohne Artikel. | die Gehirnregion |  |
| sw0587 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Geist" ohne Artikel. | der Geist |  |
| sw0589 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gelände" ohne Artikel. | das Gelände |  |
| sw0591 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gelenkschmerzen" ohne Artikel. | die Gelenkschmerzen (Pl.) |  |
| sw0593 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gemälde" ohne Artikel. | das Gemälde |  |
| sw0594 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gemälderaub" ohne Artikel. | der Gemälderaub |  |
| sw0596 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gemüsebeet" ohne Artikel. | das Gemüsebeet |  |
| sw0597 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gemüsegeschäft" ohne Artikel. | das Gemüsegeschäft |  |
| sw0598 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Genauigkeit" ohne Artikel. | die Genauigkeit |  |
| sw0599 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Genehmigung" ohne Artikel. | die Genehmigung |  |
| sw0600 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Genie" ohne Artikel. | das Genie |  |
| sw0602 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Genuss" ohne Artikel. | der Genuss |  |
| sw0603 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gepäckermittler/in" ohne Artikel. | der Gepäckermittler / die Gepäckermittlerin |  |
| sw0605 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "geprägt" ist Partizip II; der Satz nutzt die Verbform "hat mich ... geprägt" von "prägen". | prägen (prägte, hat geprägt) – en: to shape, to mark |  |
| sw0607 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Geruch" ohne Artikel. | der Geruch |  |
| sw0608 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Geruchssinn" ohne Artikel. | der Geruchssinn |  |
| sw0610 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gesamtwiederholung" ohne Artikel. | die Gesamtwiederholung |  |
| sw0611 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Geschäftsbedingungen" ohne Artikel. | die Geschäftsbedingungen (Pl.) |  |
| sw0612 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Geschäftsbeziehung" ohne Artikel. | die Geschäftsbeziehung |  |
| sw0613 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Geschäftsführer/in" ohne Artikel. | der Geschäftsführer / die Geschäftsführerin |  |
| sw0614 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Geschäftsleitung" ohne Artikel. | die Geschäftsleitung |  |
| sw0615 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Geschäftsmodell" ohne Artikel. | das Geschäftsmodell |  |
| sw0616 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Geschäftsverhandlung" ohne Artikel. | die Geschäftsverhandlung |  |
| sw0617 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Geschick" ohne Artikel. | das Geschick |  |
| sw0619 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "geschmissen" ist Partizip II statt Grundform; die Übersetzung "thrown" passt zudem nicht zur Wendung "eine Party geschmissen" (= threw a party). | schmeißen (schmiss, hat geschmissen) – en: to throw (ugs.); eine Party schmeißen = to throw a party |  |
| sw0621 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gesellschaftskritik" ohne Artikel. | die Gesellschaftskritik |  |
| sw0622 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gesetzesreform" ohne Artikel. | die Gesetzesreform |  |
| sw0625 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gestanden" ist Partizip II statt Grundform (zudem mehrdeutig: auch Partizip von "gestehen", sw0627). | stehen (stand, hat gestanden; südd./österr. ist gestanden) – en: to stand |  |
| sw0630 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gesundheitsgerät" ohne Artikel. | das Gesundheitsgerät |  |
| sw0631 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gewaltübergriff" ohne Artikel. | der Gewaltübergriff |  |
| sw0632 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gewinner/in" ohne Artikel. | der Gewinner / die Gewinnerin |  |
| sw0636 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gießkanne" ohne Artikel. | die Gießkanne |  |
| sw0637 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gitter" ohne Artikel. | das Gitter |  |
| sw0640 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Glaseinsatz" ohne Artikel. | der Glaseinsatz |  |
| sw0641 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Glashaus" ohne Artikel. | das Glashaus |  |
| sw0648 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Goldbarren" ohne Artikel. | der Goldbarren |  |
| sw0650 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Grab" ohne Artikel. | das Grab |  |
| sw0651 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Graffiti" ohne Artikel. | das Graffiti (auch Pl. die Graffiti) |  |
| sw0652 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Grafiker/in" ohne Artikel. | der Grafiker / die Grafikerin |  |
| sw0654 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Gravitation" ohne Artikel. | die Gravitation |  |
| sw0655 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Grenzkontrolle" als Kopfwort ohne Artikel | die Grenzkontrolle |  |
| sw0656 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Grenzöffnung" als Kopfwort ohne Artikel | die Grenzöffnung |  |
| sw0657 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Grenzsoldat/in" als Kopfwort ohne Artikel | der/die Grenzsoldat/in |  |
| sw0658 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Griff" als Kopfwort ohne Artikel | der Griff |  |
| sw0659 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Groll" als Kopfwort ohne Artikel | der Groll |  |
| sw0661 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Großraumbüro" als Kopfwort ohne Artikel | das Großraumbüro |  |
| sw0664 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Gründer/in" als Kopfwort ohne Artikel | der/die Gründer/in |  |
| sw0666 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Gründung" als Kopfwort ohne Artikel | die Gründung |  |
| sw0667 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Grundlage" als Kopfwort ohne Artikel | die Grundlage |  |
| sw0669 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Grundvoraussetzung" als Kopfwort ohne Artikel | die Grundvoraussetzung |  |
| sw0670 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Grundwasser" als Kopfwort ohne Artikel | das Grundwasser |  |
| sw0672 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Gunst" als Kopfwort ohne Artikel | die Gunst |  |
| sw0673 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Gymnastik" als Kopfwort ohne Artikel | die Gymnastik |  |
| sw0674 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hai" als Kopfwort ohne Artikel | der Hai |  |
| sw0675 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Handbewegung" als Kopfwort ohne Artikel | die Handbewegung |  |
| sw0676 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Handelsbeziehung" als Kopfwort ohne Artikel | die Handelsbeziehung |  |
| sw0677 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Handelsschule" als Kopfwort ohne Artikel | die Handelsschule |  |
| sw0678 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Handelsunternehmen" als Kopfwort ohne Artikel | das Handelsunternehmen |  |
| sw0679 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Handfläche" als Kopfwort ohne Artikel | die Handfläche |  |
| sw0680 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Handwerk" als Kopfwort ohne Artikel | das Handwerk |  |
| sw0682 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Handyvertrag" als Kopfwort ohne Artikel | der Handyvertrag |  |
| sw0689 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hauptattraktion" als Kopfwort ohne Artikel | die Hauptattraktion |  |
| sw0691 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hauptfigur" als Kopfwort ohne Artikel | die Hauptfigur |  |
| sw0692 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Haupthandlung" als Kopfwort ohne Artikel | die Haupthandlung |  |
| sw0693 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hauptrolle" als Kopfwort ohne Artikel | die Hauptrolle |  |
| sw0695 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hauptthema" als Kopfwort ohne Artikel | das Hauptthema |  |
| sw0696 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hauptwerk" als Kopfwort ohne Artikel | das Hauptwerk |  |
| sw0697 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hausarzt" als Kopfwort ohne Artikel | der Hausarzt |  |
| sw0698 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hausrat" als Kopfwort ohne Artikel | der Hausrat |  |
| sw0699 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hausverbot" als Kopfwort ohne Artikel | das Hausverbot |  |
| sw0700 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hausverwaltung" als Kopfwort ohne Artikel | die Hausverwaltung |  |
| sw0701 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hautcreme" als Kopfwort ohne Artikel | die Hautcreme |  |
| sw0704 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Helfer/in" als Kopfwort ohne Artikel | der/die Helfer/in |  |
| sw0708 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Herzfrequenz" als Kopfwort ohne Artikel | die Herzfrequenz |  |
| sw0709 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Herzinfarkt" als Kopfwort ohne Artikel | der Herzinfarkt |  |
| sw0710 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Herzproblem" als Kopfwort ohne Artikel | das Herzproblem |  |
| sw0711 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hieroglyphe" als Kopfwort ohne Artikel | die Hieroglyphe |  |
| sw0713 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Highlight" als Kopfwort ohne Artikel | das Highlight |  |
| sw0715 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hilfsbereitschaft" als Kopfwort ohne Artikel | die Hilfsbereitschaft |  |
| sw0716 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hilfsorganisation" als Kopfwort ohne Artikel | die Hilfsorganisation |  |
| sw0717 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "hinausgetragen" ist Partizip II statt Grundform | hinaustragen (en: to carry out) |  |
| sw0724 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hirn" als Kopfwort ohne Artikel | das Hirn |  |
| sw0725 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hirnschaden" als Kopfwort ohne Artikel | der Hirnschaden |  |
| sw0727 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hochschulreife" als Kopfwort ohne Artikel | die Hochschulreife |  |
| sw0728 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hochtechnologie" als Kopfwort ohne Artikel | die Hochtechnologie |  |
| sw0729 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Höflichkeit" als Kopfwort ohne Artikel | die Höflichkeit |  |
| sw0730 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Höhepunkt" als Kopfwort ohne Artikel | der Höhepunkt |  |
| sw0732 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hofzeremoniell" als Kopfwort ohne Artikel | das Hofzeremoniell |  |
| sw0733 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Holzplatte" als Kopfwort ohne Artikel | die Holzplatte |  |
| sw0734 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Holztür" als Kopfwort ohne Artikel | die Holztür |  |
| sw0735 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hommage" als Kopfwort ohne Artikel | die Hommage |  |
| sw0736 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Honorarprofessur" als Kopfwort ohne Artikel | die Honorarprofessur |  |
| sw0737 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Horizont" als Kopfwort ohne Artikel | der Horizont |  |
| sw0738 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hosentasche" als Kopfwort ohne Artikel | die Hosentasche |  |
| sw0739 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Hundehütte" als Kopfwort ohne Artikel | die Hundehütte |  |
| sw0740 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ich-Botschaft" als Kopfwort ohne Artikel | die Ich-Botschaft |  |
| sw0741 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ich-Erzähler/in" als Kopfwort ohne Artikel | der/die Ich-Erzähler/in |  |
| sw0742 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Identität" als Kopfwort ohne Artikel | die Identität |  |
| sw0743 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Idiot/in" als Kopfwort ohne Artikel | der/die Idiot/in |  |
| sw0746 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Immobilie" als Kopfwort ohne Artikel | die Immobilie |  |
| sw0747 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Immunsystem" als Kopfwort ohne Artikel | das Immunsystem |  |
| sw0750 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Inbegriff" als Kopfwort ohne Artikel | der Inbegriff |  |
| sw0752 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Informant/in" als Kopfwort ohne Artikel | der/die Informant/in |  |
| sw0753 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Informatik" als Kopfwort ohne Artikel | die Informatik |  |
| sw0754 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Informatiker/in" als Kopfwort ohne Artikel | der/die Informatiker/in |  |
| sw0755 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Informationsbeschaffung" als Kopfwort ohne Artikel | die Informationsbeschaffung |  |
| sw0759 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ingenieurwissenschaft" als Kopfwort ohne Artikel | die Ingenieurwissenschaft |  |
| sw0762 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Inhaltspunkt" als Kopfwort ohne Artikel | der Inhaltspunkt |  |
| sw0763 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Initiative" als Kopfwort ohne Artikel | die Initiative |  |
| sw0766 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Innenarchitektur" als Kopfwort ohne Artikel | die Innenarchitektur |  |
| sw0767 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Innovation" als Kopfwort ohne Artikel | die Innovation |  |
| sw0769 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Inspiration" als Kopfwort ohne Artikel | die Inspiration |  |
| sw0773 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Intellektuelle" als Kopfwort ohne Artikel | der/die Intellektuelle |  |
| sw0775 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Interneteinkauf" als Kopfwort ohne Artikel | der Interneteinkauf |  |
| sw0776 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Internetmanagement" als Kopfwort ohne Artikel | das Internetmanagement |  |
| sw0777 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Internetportal" als Kopfwort ohne Artikel | das Internetportal |  |
| sw0778 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Internetredaktion" als Kopfwort ohne Artikel | die Internetredaktion |  |
| sw0781 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Investition" als Kopfwort ohne Artikel | die Investition |  |
| sw0784 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Isolation" als Kopfwort ohne Artikel | die Isolation |  |
| sw0785 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "ist ausgegangen" ist eine konjugierte Perfektform (Hilfsverb + Partizip) statt Grundform; en "went out (has)" unbrauchbar | ausgehen (en: to go out) | bestätigt |
| sw0786 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "ist zugekommen" ist eine konjugierte Perfektform statt Grundform; Satz nutzt die Wendung "auf jemanden zukommen" | auf jemanden zukommen | bestätigt |
| sw0787 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "ist zugrunde gelegen" ist eine konjugierte Perfektform statt Grundform; zudem Perfekt mit "sein" nur süddt./österr./schweiz., standardsprachlich "hat zugrunde gelegen" – im Satz unmarkiert als Norm vermittelt | zugrunde liegen (en: to underlie, to be at the root of); Satz: "... hat ein technischer Defekt an der Weiche zugrunde gelegen." | bestätigt |
| sw0788 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "IT-Bereich" als Kopfwort ohne Artikel | der IT-Bereich |  |
| sw0790 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Jobwechsel" als Kopfwort ohne Artikel | der Jobwechsel |  |
| sw0791 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Jugendbereich" als Kopfwort ohne Artikel | der Jugendbereich |  |
| sw0792 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Jugendzeit" als Kopfwort ohne Artikel | die Jugendzeit |  |
| sw0794 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Jurist/in" als Kopfwort ohne Artikel | der/die Jurist/in |  |
| sw0795 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Juweliergeschäft" als Kopfwort ohne Artikel | das Juweliergeschäft |  |
| sw0796 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kabarett" als Kopfwort ohne Artikel | das Kabarett |  |
| sw0797 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kabarettist/in" als Kopfwort ohne Artikel | der/die Kabarettist/in |  |
| sw0798 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kader" als Kopfwort ohne Artikel | der Kader |  |
| sw0799 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Käfig" als Kopfwort ohne Artikel | der Käfig |  |
| sw0800 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kämpfer/in" als Kopfwort ohne Artikel | der/die Kämpfer/in |  |
| sw0801 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kaffeehaus" als Kopfwort ohne Artikel | das Kaffeehaus |  |
| sw0803 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kaiser/in" als Kopfwort ohne Artikel | der/die Kaiser/in |  |
| sw0805 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kakerlake" als Kopfwort ohne Artikel | die Kakerlake |  |
| sw0806 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kalkulation" als Kopfwort ohne Artikel | die Kalkulation |  |
| sw0807 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kalorie" als Kopfwort ohne Artikel | die Kalorie |  |
| sw0808 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kamm" als Kopfwort ohne Artikel | der Kamm |  |
| sw0809 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kampfkunst" als Kopfwort ohne Artikel | die Kampfkunst |  |
| sw0810 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Kampfsport" als Kopfwort ohne Artikel | der Kampfsport |  |
| sw0811 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kandidat/in" ohne Artikel. | der Kandidat / die Kandidatin |  |
| sw0812 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kanzler/in" ohne Artikel. | der Kanzler / die Kanzlerin |  |
| sw0813 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kanzlerkandidat/in" ohne Artikel. | der Kanzlerkandidat / die Kanzlerkandidatin |  |
| sw0814 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kartoffelsuppe" ohne Artikel. | die Kartoffelsuppe |  |
| sw0817 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kaufvertrag" ohne Artikel. | der Kaufvertrag |  |
| sw0818 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Keilschrift" ohne Artikel. | die Keilschrift |  |
| sw0819 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Keks" ohne Artikel. | der Keks |  |
| sw0820 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kenntnis" ohne Artikel. | die Kenntnis |  |
| sw0822 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kfz-Betrieb" ohne Artikel. | der Kfz-Betrieb |  |
| sw0823 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kickboxen" ohne Artikel. | das Kickboxen |  |
| sw0824 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kids" ohne Artikel. | die Kids (Pl.) |  |
| sw0825 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kiefer" ohne Artikel. Hier besonders wichtig wegen Homonym "die Kiefer" (pine). | der Kiefer (nicht: die Kiefer = pine tree) |  |
| sw0826 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kiez" ohne Artikel. | der Kiez |  |
| sw0827 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kindererziehung" ohne Artikel. | die Kindererziehung |  |
| sw0829 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kindergartenalter" ohne Artikel. | das Kindergartenalter |  |
| sw0830 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kindergartenpflicht" ohne Artikel. | die Kindergartenpflicht |  |
| sw0833 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kinderwunsch" ohne Artikel. | der Kinderwunsch |  |
| sw0834 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kinderzahl" ohne Artikel. | die Kinderzahl |  |
| sw0835 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Kindesbein" ist ein Fragment: Das Wort existiert praktisch nur in der festen Wendung "von Kindesbeinen an" (so auch im Satz); als Einzelnomen unbrauchbar. | von Kindesbeinen an (en: from childhood on / from an early age) | bestätigt |
| sw0836 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kinokasse" ohne Artikel. | die Kinokasse |  |
| sw0837 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Klammer" ohne Artikel. | die Klammer |  |
| sw0839 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Klassenbeste" ohne Artikel. | der/die Klassenbeste |  |
| sw0842 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Klavierbauer/in" ohne Artikel. | der Klavierbauer / die Klavierbauerin |  |
| sw0843 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kleiderausgabe" ohne Artikel. | die Kleiderausgabe |  |
| sw0844 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kleiderklappe" ohne Artikel. | die Kleiderklappe |  |
| sw0845 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kleiderladen" ohne Artikel. | der Kleiderladen |  |
| sw0846 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kleiderschrank" ohne Artikel. | der Kleiderschrank |  |
| sw0847 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kleidungsstück" ohne Artikel. | das Kleidungsstück |  |
| sw0848 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kleinkind" ohne Artikel. | das Kleinkind |  |
| sw0849 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Klimazone" ohne Artikel. | die Klimazone |  |
| sw0850 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Klischee" ohne Artikel. | das Klischee |  |
| sw0852 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Knecht" ohne Artikel. | der Knecht |  |
| sw0853 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kneipenbesitzer/in" ohne Artikel. | der Kneipenbesitzer / die Kneipenbesitzerin |  |
| sw0857 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Koalition" ohne Artikel. | die Koalition |  |
| sw0858 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Körperdaten" ohne Artikel. | die Körperdaten (Pl.) |  |
| sw0859 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Körpergröße" ohne Artikel. | die Körpergröße |  |
| sw0860 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Körpersignal" ohne Artikel. | das Körpersignal |  |
| sw0861 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Körpersprache" ohne Artikel. | die Körpersprache |  |
| sw0862 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Körpertemperatur" ohne Artikel. | die Körpertemperatur |  |
| sw0864 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Komma" ohne Artikel. | das Komma |  |
| sw0866 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kommilitone/Kommilitonin" ohne Artikel. | der Kommilitone / die Kommilitonin |  |
| sw0867 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kommunikationsfähigkeit" ohne Artikel. | die Kommunikationsfähigkeit |  |
| sw0868 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kommunikationsmittel" ohne Artikel. | das Kommunikationsmittel |  |
| sw0869 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kommunikationsmöglichkeit" ohne Artikel. | die Kommunikationsmöglichkeit |  |
| sw0871 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kompetenz" ohne Artikel. | die Kompetenz |  |
| sw0873 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Komplize/Komplizin" ohne Artikel. | der Komplize / die Komplizin |  |
| sw0875 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Konfliktlösung" ohne Artikel. | die Konfliktlösung |  |
| sw0876 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Konfliktpotential" ohne Artikel. | das Konfliktpotential |  |
| sw0878 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kongress" ohne Artikel. | der Kongress |  |
| sw0879 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kongresskarte" ohne Artikel. | die Kongresskarte |  |
| sw0882 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Konsens" ohne Artikel. | der Konsens |  |
| sw0885 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Konsument/in" ohne Artikel. | der Konsument / die Konsumentin |  |
| sw0886 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kontext" ohne Artikel. | der Kontext |  |
| sw0888 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kontodaten" ohne Artikel. | die Kontodaten (Pl.) |  |
| sw0889 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kontrollsystem" ohne Artikel. | das Kontrollsystem |  |
| sw0890 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Konzentration" ohne Artikel. | die Konzentration |  |
| sw0891 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Konzentrationsleistung" ohne Artikel. | die Konzentrationsleistung |  |
| sw0893 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Konzept" ohne Artikel. | das Konzept |  |
| sw0894 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Konzertpianist" ohne Artikel. | der Konzertpianist / die Konzertpianistin |  |
| sw0897 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Koordination" ohne Artikel. | die Koordination |  |
| sw0898 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Korrektur" ohne Artikel. | die Korrektur |  |
| sw0899 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Korruption" ohne Artikel. | die Korruption |  |
| sw0901 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kraftstoff" ohne Artikel. | der Kraftstoff |  |
| sw0902 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Krankenakte" ohne Artikel. | die Krankenakte |  |
| sw0903 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Krankenhausaufenthalt" ohne Artikel. | der Krankenhausaufenthalt |  |
| sw0904 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kreditkarte" ohne Artikel. | die Kreditkarte |  |
| sw0905 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kreditkartenbetrug" ohne Artikel. | der Kreditkartenbetrug |  |
| sw0907 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Krieger/in" ohne Artikel. | der Krieger / die Kriegerin |  |
| sw0909 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kriterium" ohne Artikel. | das Kriterium |  |
| sw0910 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kritik" ohne Artikel. | die Kritik |  |
| sw0911 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kritikfähigkeit" ohne Artikel. | die Kritikfähigkeit |  |
| sw0912 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kritisierte" ohne Artikel. | der/die Kritisierte |  |
| sw0913 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kühlfahrzeug" ohne Artikel. | das Kühlfahrzeug |  |
| sw0914 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kühlraum" ohne Artikel. | der Kühlraum |  |
| sw0915 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kühlsystem" ohne Artikel. | das Kühlsystem |  |
| sw0916 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kulturdenkmal" ohne Artikel. | das Kulturdenkmal |  |
| sw0917 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kulturwandel" ohne Artikel. | der Kulturwandel |  |
| sw0918 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kundengespräch" ohne Artikel. | das Kundengespräch |  |
| sw0919 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kundenkontakt" ohne Artikel. | der Kundenkontakt |  |
| sw0920 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kundenkonto" ohne Artikel. | das Kundenkonto |  |
| sw0921 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kunstform" ohne Artikel. | die Kunstform |  |
| sw0922 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kunstikone" ohne Artikel. | die Kunstikone |  |
| sw0923 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kunstraub" ohne Artikel. | der Kunstraub |  |
| sw0924 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kunstturnen" ohne Artikel. | das Kunstturnen |  |
| sw0925 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kunstturner/in" ohne Artikel. | der Kunstturner / die Kunstturnerin |  |
| sw0926 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kunstwerk" ohne Artikel. | das Kunstwerk |  |
| sw0930 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Kurzvortrag" ohne Artikel. | der Kurzvortrag |  |
| sw0931 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Label" ohne Artikel. | das Label |  |
| sw0932 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Laborkittel" ohne Artikel. | der Laborkittel |  |
| sw0933 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lächeln" ohne Artikel. | das Lächeln |  |
| sw0934 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Längeneinheit" ohne Artikel. | die Längeneinheit |  |
| sw0937 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lage" ohne Artikel. | die Lage |  |
| sw0938 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lager" ohne Artikel. | das Lager |  |
| sw0939 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Landesgesetz" ohne Artikel. | das Landesgesetz |  |
| sw0940 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Landessprache" ohne Artikel. | die Landessprache |  |
| sw0941 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Langlauf" ohne Artikel. | der Langlauf |  |
| sw0943 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Langspielfilm" ohne Artikel. | der Langspielfilm |  |
| sw0945 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Langzeitarbeitslose" ohne Artikel. | der/die Langzeitarbeitslose |  |
| sw0946 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Last" ohne Artikel. | die Last |  |
| sw0947 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lauf" ohne Artikel. | der Lauf |  |
| sw0948 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Laufbahn" ohne Artikel. | die Laufbahn |  |
| sw0949 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Laute" vermengt zwei Wörter: im Satz Plural von "der Laut" (sound), zugleich "die Laute" (lute, Pl. Lauten); Grundform und Genus bleiben für Lernende unklar. | der Laut, die Laute (en: sound); "die Laute" (lute) ggf. als eigener Eintrag | bestätigt |
| sw0949 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | Übersetzung "sound/lute" legt nahe, ein Wort habe beide Bedeutungen; "sound" gehört zu "der Laut", "lute" zu "die Laute" (verschiedene Genera und Plurale). | sound (speech sound) – zum Kopfwort "der Laut" | bestätigt |
| sw0950 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lebensbedingung" ohne Artikel. | die Lebensbedingung |  |
| sw0951 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lebensentwurf" ohne Artikel. | der Lebensentwurf |  |
| sw0952 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lebenserwartung" ohne Artikel. | die Lebenserwartung |  |
| sw0953 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lebensglück" ohne Artikel. | das Lebensglück |  |
| sw0954 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lebensjahr" ohne Artikel. | das Lebensjahr |  |
| sw0955 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lebenskunst" ohne Artikel. | die Lebenskunst |  |
| sw0956 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lebenslage" ohne Artikel. | die Lebenslage |  |
| sw0957 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lebensraum" ohne Artikel. | der Lebensraum |  |
| sw0958 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lebensverlauf" ohne Artikel. | der Lebensverlauf |  |
| sw0959 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lebensweg" ohne Artikel. | der Lebensweg |  |
| sw0961 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lehrkraft" ohne Artikel | die Lehrkraft |  |
| sw0963 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Leinwand" ohne Artikel | die Leinwand |  |
| sw0964 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Leistungsbereitschaft" ohne Artikel | die Leistungsbereitschaft |  |
| sw0965 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Leistungsfähigkeit" ohne Artikel | die Leistungsfähigkeit |  |
| sw0967 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lerneffekt" ohne Artikel | der Lerneffekt |  |
| sw0968 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lernerfolg" ohne Artikel | der Lernerfolg |  |
| sw0969 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lerninhalt" ohne Artikel | der Lerninhalt |  |
| sw0970 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lernmaterial" ohne Artikel | das Lernmaterial |  |
| sw0971 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lernphase" ohne Artikel | die Lernphase |  |
| sw0972 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lernstoff" ohne Artikel | der Lernstoff |  |
| sw0974 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Leserbrief" ohne Artikel | der Leserbrief |  |
| sw0975 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lesetext" ohne Artikel | der Lesetext |  |
| sw0978 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lexikonartikel" ohne Artikel | der Lexikonartikel |  |
| sw0979 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Liberalität" ohne Artikel | die Liberalität |  |
| sw0980 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lichtsensor" ohne Artikel | der Lichtsensor |  |
| sw0982 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Liebling" ohne Artikel | der Liebling |  |
| sw0983 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lieferzeit" ohne Artikel | die Lieferzeit |  |
| sw0984 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lifestyle" ohne Artikel | der Lifestyle |  |
| sw0988 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lösegeld" ohne Artikel | das Lösegeld |  |
| sw0990 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lokführer/in" ohne Artikel | der Lokführer / die Lokführerin |  |
| sw0991 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lügengeschichte" ohne Artikel | die Lügengeschichte |  |
| sw0993 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lungenkrankheit" ohne Artikel | die Lungenkrankheit |  |
| sw0994 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Lyrik" ohne Artikel | die Lyrik |  |
| sw0996 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Machtwechsel" ohne Artikel | der Machtwechsel |  |
| sw0997 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Macke" ohne Artikel | die Macke |  |
| sw0998 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Magd" ohne Artikel | die Magd |  |
| sw0999 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Malerei" ohne Artikel | die Malerei |  |
| sw1000 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Management" ohne Artikel | das Management |  |
| sw1001 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mandant/in" ohne Artikel | der Mandant / die Mandantin |  |
| sw1005 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Manufaktur" ohne Artikel | die Manufaktur |  |
| sw1006 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Markenunternehmen" ohne Artikel | das Markenunternehmen |  |
| sw1007 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Maß" ohne Artikel | das Maß |  |
| sw1008 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Massenflucht" ohne Artikel | die Massenflucht |  |
| sw1009 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Massenprotest" ohne Artikel | der Massenprotest |  |
| sw1012 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Matratze" ohne Artikel | die Matratze |  |
| sw1014 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mauerfall" ohne Artikel | der Mauerfall |  |
| sw1015 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mauerritze" ohne Artikel | die Mauerritze |  |
| sw1018 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mediziner/in" ohne Artikel | der Mediziner / die Medizinerin |  |
| sw1019 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Meerestiefe" ohne Artikel | die Meerestiefe |  |
| sw1020 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Meerestier" ohne Artikel | das Meerestier |  |
| sw1022 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mehrsprachigkeit" ohne Artikel | die Mehrsprachigkeit |  |
| sw1024 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Meinungsfreiheit" ohne Artikel | die Meinungsfreiheit |  |
| sw1025 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Meisterschüler/in" ohne Artikel | der Meisterschüler / die Meisterschülerin |  |
| sw1026 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Melancholie" ohne Artikel | die Melancholie |  |
| sw1028 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Melodram" ohne Artikel | das Melodram |  |
| sw1029 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Menschenleben" ohne Artikel | das Menschenleben |  |
| sw1030 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Menschheit" ohne Artikel | die Menschheit |  |
| sw1031 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Merkformel" ohne Artikel | die Merkformel |  |
| sw1032 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Merkmal" ohne Artikel | das Merkmal |  |
| sw1033 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Messegelände" ohne Artikel | das Messegelände |  |
| sw1034 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Messehalle" ohne Artikel | die Messehalle |  |
| sw1035 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Messgerät" ohne Artikel | das Messgerät |  |
| sw1036 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Migrantenfamilie" ohne Artikel | die Migrantenfamilie |  |
| sw1037 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Migrantenkind" ohne Artikel | das Migrantenkind |  |
| sw1038 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Migrationsdrama" ohne Artikel | das Migrationsdrama |  |
| sw1039 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Migrationshintergrund" ohne Artikel | der Migrationshintergrund |  |
| sw1040 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Milchprodukt" ohne Artikel | das Milchprodukt |  |
| sw1041 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Milieu" ohne Artikel | das Milieu |  |
| sw1042 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Militarisierung" ohne Artikel | die Militarisierung |  |
| sw1043 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mimik" ohne Artikel | die Mimik |  |
| sw1044 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mindestbestellwert" ohne Artikel | der Mindestbestellwert |  |
| sw1045 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Ministerpräsident/in" ohne Artikel | der Ministerpräsident / die Ministerpräsidentin |  |
| sw1046 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Misserfolg" ohne Artikel | der Misserfolg |  |
| sw1049 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mitarbeit" ohne Artikel | die Mitarbeit |  |
| sw1051 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mitbewohner/in" ohne Artikel | der Mitbewohner / die Mitbewohnerin |  |
| sw1052 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mitinhaber/in" ohne Artikel | der Mitinhaber / die Mitinhaberin |  |
| sw1053 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mitleid" ohne Artikel | das Mitleid |  |
| sw1054 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mitschrift" ohne Artikel | die Mitschrift |  |
| sw1055 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mittagspause" ohne Artikel | die Mittagspause |  |
| sw1056 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mittagsschläfchen" ohne Artikel | das Mittagsschläfchen |  |
| sw1057 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mittagsschlaf" ohne Artikel | der Mittagsschlaf |  |
| sw1058 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mittelalter" ohne Artikel | das Mittelalter |  |
| sw1061 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mobilfunkanbieter" ohne Artikel | der Mobilfunkanbieter |  |
| sw1062 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Moderator/in" ohne Artikel | der Moderator / die Moderatorin |  |
| sw1064 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Motiv" ohne Artikel | das Motiv |  |
| sw1066 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Motto" ohne Artikel | das Motto |  |
| sw1067 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mücke" ohne Artikel | die Mücke |  |
| sw1069 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Murmeltier" ohne Artikel | das Murmeltier |  |
| sw1070 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Musikant/in" ohne Artikel | der Musikant / die Musikantin |  |
| sw1071 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Musikgenie" ohne Artikel | das Musikgenie |  |
| sw1072 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Musikkonzert" ohne Artikel | das Musikkonzert |  |
| sw1073 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Musikrichtung" ohne Artikel | die Musikrichtung |  |
| sw1074 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Musiktherapeut/in" ohne Artikel | der Musiktherapeut / die Musiktherapeutin |  |
| sw1075 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Musikveranstaltung" ohne Artikel | die Musikveranstaltung |  |
| sw1076 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Muslim/in" ohne Artikel | der Muslim / die Muslimin |  |
| sw1077 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Musterklausur" ohne Artikel | die Musterklausur |  |
| sw1078 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Muttersprachler/in" ohne Artikel | der Muttersprachler / die Muttersprachlerin |  |
| sw1080 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Mythos" ohne Artikel | der Mythos |  |
| sw1082 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nachfrage" ohne Artikel | die Nachfrage |  |
| sw1083 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "nachgegangen" ist Partizip II statt Grundform; die Grundform "nachgehen" steht direkt danach (sw1084) als eigenes Item | Item streichen oder zu "nachgehen" zusammenführen (Satz als zweites Beispiel übernehmen) |  |
| sw1085 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nachwuchs" ohne Artikel | der Nachwuchs |  |
| sw1085 | inhalte-vokabeln-b2.js | B2 | ex | grammatik | mittel | "dass es bei den Erdmännchen nachgewiesenen Nachwuchs gibt" ist unidiomatisch - ein Zoo meldet nicht "nachgewiesenen" Nachwuchs | Im Zoo wurde stolz verkündet, dass es bei den Erdmännchen Nachwuchs gibt. |  |
| sw1086 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nachhilfestunde" ohne Artikel | die Nachhilfestunde |  |
| sw1087 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nachmieter/in" ohne Artikel | der Nachmieter / die Nachmieterin |  |
| sw1088 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nachteule" ohne Artikel | die Nachteule |  |
| sw1090 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nachwuchskraft" ohne Artikel | die Nachwuchskraft |  |
| sw1091 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Näher/in" ohne Artikel | der Näher / die Näherin |  |
| sw1092 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nagel" ohne Artikel | der Nagel |  |
| sw1094 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Naht" ohne Artikel | die Naht |  |
| sw1095 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nation" ohne Artikel | die Nation |  |
| sw1096 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nationalität" ohne Artikel | die Nationalität |  |
| sw1097 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nationalmannschaft" ohne Artikel | die Nationalmannschaft |  |
| sw1098 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nationalsozialismus" ohne Artikel | der Nationalsozialismus |  |
| sw1099 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nationalsozialist/in" ohne Artikel | der Nationalsozialist / die Nationalsozialistin |  |
| sw1100 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Naturkatastrophe" ohne Artikel | die Naturkatastrophe |  |
| sw1101 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Naturwissenschaft" ohne Artikel | die Naturwissenschaft |  |
| sw1103 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nebenjob" ohne Artikel | der Nebenjob |  |
| sw1104 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nervenkitzel" ohne Artikel | der Nervenkitzel |  |
| sw1105 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nervenzelle" ohne Artikel | die Nervenzelle |  |
| sw1106 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nervosität" ohne Artikel | die Nervosität |  |
| sw1108 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Neuerung" ohne Artikel | die Neuerung |  |
| sw1109 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Neugier" ohne Artikel | die Neugier |  |
| sw1110 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Neukundengewinnung" ohne Artikel | die Neukundengewinnung |  |
| sw1111 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Neutralität" ohne Artikel | die Neutralität |  |
| sw1112 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nichtschwimmer/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Nichtschwimmer / die Nichtschwimmerin |  |
| sw1114 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nickerchen" ohne Artikel (Genus für Lernende nicht erkennbar) | das Nickerchen |  |
| sw1115 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Niederlage" ohne Artikel (Genus für Lernende nicht erkennbar) | die Niederlage |  |
| sw1117 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nobelpreis" ohne Artikel (Genus für Lernende nicht erkennbar) | der Nobelpreis |  |
| sw1118 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nobelpreisträger/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Nobelpreisträger / die Nobelpreisträgerin |  |
| sw1119 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Nonsens" ohne Artikel (Genus für Lernende nicht erkennbar) | der Nonsens |  |
| sw1121 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Notizblock" ohne Artikel (Genus für Lernende nicht erkennbar) | der Notizblock |  |
| sw1122 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Notlage" ohne Artikel (Genus für Lernende nicht erkennbar) | die Notlage |  |
| sw1123 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Notlüge" ohne Artikel (Genus für Lernende nicht erkennbar) | die Notlüge |  |
| sw1124 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Notruf" ohne Artikel (Genus für Lernende nicht erkennbar) | der Notruf |  |
| sw1125 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Notversorgung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Notversorgung |  |
| sw1126 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Notwendigkeit" ohne Artikel (Genus für Lernende nicht erkennbar) | die Notwendigkeit |  |
| sw1127 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Oberarm" ohne Artikel (Genus für Lernende nicht erkennbar) | der Oberarm |  |
| sw1128 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Oberbegriff" ohne Artikel (Genus für Lernende nicht erkennbar) | der Oberbegriff |  |
| sw1131 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Odyssee" ohne Artikel (Genus für Lernende nicht erkennbar) | die Odyssee |  |
| sw1132 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Öffnung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Öffnung |  |
| sw1133 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Offenheit" ohne Artikel (Genus für Lernende nicht erkennbar) | die Offenheit |  |
| sw1136 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Olivenöl" ohne Artikel (Genus für Lernende nicht erkennbar) | das Olivenöl |  |
| sw1137 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Onlinebanking" ohne Artikel (Genus für Lernende nicht erkennbar) | das Onlinebanking |  |
| sw1138 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Onlineeinkauf" ohne Artikel (Genus für Lernende nicht erkennbar) | der Onlineeinkauf |  |
| sw1139 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Onlinesucht" ohne Artikel (Genus für Lernende nicht erkennbar) | die Onlinesucht |  |
| sw1140 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Optiker/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Optiker / die Optikerin |  |
| sw1142 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Option" ohne Artikel (Genus für Lernende nicht erkennbar) | die Option |  |
| sw1143 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Orden" ohne Artikel (Genus für Lernende nicht erkennbar) | der Orden |  |
| sw1144 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Organ" ohne Artikel (Genus für Lernende nicht erkennbar) | das Organ |  |
| sw1146 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Orientierung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Orientierung |  |
| sw1147 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pädagoge/Pädagogin" ohne Artikel (Genus für Lernende nicht erkennbar) | der Pädagoge / die Pädagogin |  |
| sw1148 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Palmenhaus" ohne Artikel (Genus für Lernende nicht erkennbar) | das Palmenhaus |  |
| sw1149 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Panik" ohne Artikel (Genus für Lernende nicht erkennbar) | die Panik |  |
| sw1150 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Parallelwelt" ohne Artikel (Genus für Lernende nicht erkennbar) | die Parallelwelt |  |
| sw1151 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Parfümeur/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Parfümeur / die Parfümeurin |  |
| sw1153 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Parteivorsitz" ohne Artikel (Genus für Lernende nicht erkennbar) | der Parteivorsitz |  |
| sw1154 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Parteivorsitzende" ohne Artikel (Genus für Lernende nicht erkennbar) | der/die Parteivorsitzende |  |
| sw1155 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Partie" ohne Artikel (Genus für Lernende nicht erkennbar) | die Partie |  |
| sw1157 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pate/Patin" ohne Artikel (Genus für Lernende nicht erkennbar) | der Pate / die Patin |  |
| sw1158 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Patent" ohne Artikel (Genus für Lernende nicht erkennbar) | das Patent |  |
| sw1159 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pazifismus" ohne Artikel (Genus für Lernende nicht erkennbar) | der Pazifismus |  |
| sw1161 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Persönlichkeitstraining" ohne Artikel (Genus für Lernende nicht erkennbar) | das Persönlichkeitstraining |  |
| sw1162 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pessimismus" ohne Artikel (Genus für Lernende nicht erkennbar) | der Pessimismus |  |
| sw1164 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pest" ohne Artikel (Genus für Lernende nicht erkennbar) | die Pest |  |
| sw1165 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pfeife" ohne Artikel (Genus für Lernende nicht erkennbar) | die Pfeife |  |
| sw1166 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pfeil" ohne Artikel (Genus für Lernende nicht erkennbar) | der Pfeil |  |
| sw1167 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pflanzensammlung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Pflanzensammlung |  |
| sw1168 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pflege" ohne Artikel (Genus für Lernende nicht erkennbar) | die Pflege |  |
| sw1169 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pflichtveranstaltung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Pflichtveranstaltung |  |
| sw1170 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Phänomen" ohne Artikel (Genus für Lernende nicht erkennbar) | das Phänomen |  |
| sw1171 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Phase" ohne Artikel (Genus für Lernende nicht erkennbar) | die Phase |  |
| sw1172 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Philosoph/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Philosoph / die Philosophin |  |
| sw1175 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | "physikalisch" nur mit "physical" übersetzt; "physical" bedeutet für Lernende meist "körperlich", "physikalisch" heißt aber "die Physik betreffend" | relating to physics; physical (in physics) |  |
| sw1176 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Physiker/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Physiker / die Physikerin |  |
| sw1177 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Piktogramm" ohne Artikel (Genus für Lernende nicht erkennbar) | das Piktogramm |  |
| sw1178 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pipette" ohne Artikel (Genus für Lernende nicht erkennbar) | die Pipette |  |
| sw1180 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Planet" ohne Artikel (Genus für Lernende nicht erkennbar) | der Planet |  |
| sw1181 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Plastiktüte" ohne Artikel (Genus für Lernende nicht erkennbar) | die Plastiktüte |  |
| sw1183 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Platte" ohne Artikel (Genus für Lernende nicht erkennbar) | die Platte |  |
| sw1184 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Plattenfirma" ohne Artikel (Genus für Lernende nicht erkennbar) | die Plattenfirma |  |
| sw1185 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Platzproblem" ohne Artikel (Genus für Lernende nicht erkennbar) | das Platzproblem |  |
| sw1186 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Plutonium" ohne Artikel (Genus für Lernende nicht erkennbar) | das Plutonium |  |
| sw1188 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pokal" ohne Artikel (Genus für Lernende nicht erkennbar) | der Pokal |  |
| sw1189 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Politikwissenschaft" ohne Artikel (Genus für Lernende nicht erkennbar) | die Politikwissenschaft |  |
| sw1190 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Polizeimeister/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Polizeimeister / die Polizeimeisterin |  |
| sw1191 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Position" ohne Artikel (Genus für Lernende nicht erkennbar) | die Position |  |
| sw1193 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Präsentation" ohne Artikel (Genus für Lernende nicht erkennbar) | die Präsentation |  |
| sw1194 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Präsident/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Präsident / die Präsidentin |  |
| sw1195 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Praktikumsbörse" ohne Artikel (Genus für Lernende nicht erkennbar) | die Praktikumsbörse |  |
| sw1196 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Praktikumszeit" ohne Artikel (Genus für Lernende nicht erkennbar) | die Praktikumszeit |  |
| sw1197 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pressekonferenz" ohne Artikel (Genus für Lernende nicht erkennbar) | die Pressekonferenz |  |
| sw1198 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pressesprecher/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Pressesprecher / die Pressesprecherin |  |
| sw1199 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Prinzip" ohne Artikel (Genus für Lernende nicht erkennbar) | das Prinzip |  |
| sw1201 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Privatauto" ohne Artikel (Genus für Lernende nicht erkennbar) | das Privatauto |  |
| sw1202 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Privatleben" ohne Artikel (Genus für Lernende nicht erkennbar) | das Privatleben |  |
| sw1203 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Privatsphäre" ohne Artikel (Genus für Lernende nicht erkennbar) | die Privatsphäre |  |
| sw1204 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Privatwohnung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Privatwohnung |  |
| sw1205 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Proband/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Proband / die Probandin |  |
| sw1206 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Probe" ohne Artikel (Genus für Lernende nicht erkennbar) | die Probe |  |
| sw1207 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Probenraum" ohne Artikel (Genus für Lernende nicht erkennbar) | der Probenraum |  |
| sw1208 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Problemlösung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Problemlösung |  |
| sw1210 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Produktbeschreibung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Produktbeschreibung |  |
| sw1211 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Produzent/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Produzent / die Produzentin |  |
| sw1212 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Professur" ohne Artikel (Genus für Lernende nicht erkennbar) | die Professur |  |
| sw1213 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Profil" ohne Artikel (Genus für Lernende nicht erkennbar) | das Profil |  |
| sw1214 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Profimannschaft" ohne Artikel (Genus für Lernende nicht erkennbar) | die Profimannschaft |  |
| sw1215 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Prognose" ohne Artikel (Genus für Lernende nicht erkennbar) | die Prognose |  |
| sw1216 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Programmankündigung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Programmankündigung |  |
| sw1217 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Projektleitung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Projektleitung |  |
| sw1218 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Projektmanagement" ohne Artikel (Genus für Lernende nicht erkennbar) | das Projektmanagement |  |
| sw1221 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Protestaktion" ohne Artikel (Genus für Lernende nicht erkennbar) | die Protestaktion |  |
| sw1222 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Prüfer/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Prüfer / die Prüferin |  |
| sw1223 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Prüfungsangst" ohne Artikel (Genus für Lernende nicht erkennbar) | die Prüfungsangst |  |
| sw1224 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Psyche" ohne Artikel (Genus für Lernende nicht erkennbar) | die Psyche |  |
| sw1225 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Psychologe/Psychologin" ohne Artikel (Genus für Lernende nicht erkennbar) | der Psychologe / die Psychologin |  |
| sw1227 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Puffertag" ohne Artikel (Genus für Lernende nicht erkennbar) | der Puffertag |  |
| sw1228 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Puls" ohne Artikel (Genus für Lernende nicht erkennbar) | der Puls |  |
| sw1229 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pulsschlag" ohne Artikel (Genus für Lernende nicht erkennbar) | der Pulsschlag |  |
| sw1230 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Pumpe" ohne Artikel (Genus für Lernende nicht erkennbar) | die Pumpe |  |
| sw1231 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Putzgewohnheit" ohne Artikel (Genus für Lernende nicht erkennbar) | die Putzgewohnheit |  |
| sw1234 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Qualle" ohne Artikel (Genus für Lernende nicht erkennbar) | die Qualle |  |
| sw1235 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Querschnittslähmung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Querschnittslähmung |  |
| sw1237 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Quiz" ohne Artikel (Genus für Lernende nicht erkennbar) | das Quiz |  |
| sw1239 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Radiofeature" ohne Artikel (Genus für Lernende nicht erkennbar) | das Radiofeature |  |
| sw1240 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Rahmen" ohne Artikel (Genus für Lernende nicht erkennbar) | der Rahmen |  |
| sw1244 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Rat" ohne Artikel (Genus für Lernende nicht erkennbar) | der Rat |  |
| sw1246 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Ratte" ohne Artikel (Genus für Lernende nicht erkennbar) | die Ratte |  |
| sw1247 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Raumtemperatur" ohne Artikel (Genus für Lernende nicht erkennbar) | die Raumtemperatur |  |
| sw1248 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Rauschen" ohne Artikel (Genus für Lernende nicht erkennbar) | das Rauschen |  |
| sw1250 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Rechenschaft" ohne Artikel (Genus für Lernende nicht erkennbar) | die Rechenschaft |  |
| sw1251 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Rechtswissenschaft" ohne Artikel (Genus für Lernende nicht erkennbar) | die Rechtswissenschaft |  |
| sw1253 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Refrain" ohne Artikel (Genus für Lernende nicht erkennbar) | der Refrain |  |
| sw1255 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Regelung" ohne Artikel (Genus für Lernende nicht erkennbar) | die Regelung |  |
| sw1256 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Regierungssprecher/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Regierungssprecher / die Regierungssprecherin |  |
| sw1257 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Regisseur/in" ohne Artikel (Genus für Lernende nicht erkennbar) | der Regisseur / die Regisseurin |  |
| sw1260 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Reinheit" ohne Artikel (Genus für Lernende nicht erkennbar) | die Reinheit |  |
| sw1261 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Reiz" ohne Artikel (Genus für Lernende nicht erkennbar) | der Reiz |  |
| sw1262 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Reklamation" ohne Artikel angegeben | die Reklamation |  |
| sw1264 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Rennpferd" ohne Artikel angegeben | das Rennpferd |  |
| sw1265 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Reporter/in" ohne Artikel angegeben | der Reporter / die Reporterin |  |
| sw1267 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Republik" ohne Artikel angegeben | die Republik |  |
| sw1268 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Resignation" ohne Artikel angegeben | die Resignation |  |
| sw1269 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Respekt" ohne Artikel angegeben | der Respekt |  |
| sw1274 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Resümee" ohne Artikel angegeben | das Resümee |  |
| sw1275 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Resultat" ohne Artikel angegeben | das Resultat |  |
| sw1276 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Reue" ohne Artikel angegeben | die Reue |  |
| sw1277 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Revolution" ohne Artikel angegeben | die Revolution |  |
| sw1279 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Rezeptur" ohne Artikel angegeben | die Rezeptur |  |
| sw1282 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ritter" ohne Artikel angegeben | der Ritter |  |
| sw1283 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Roboter" ohne Artikel angegeben | der Roboter |  |
| sw1284 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Robotertyp" ohne Artikel angegeben | der Robotertyp |  |
| sw1285 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Rohwarenlager" ohne Artikel angegeben | das Rohwarenlager |  |
| sw1286 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Rollentausch" ohne Artikel angegeben | der Rollentausch |  |
| sw1287 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Rollstuhl" ohne Artikel angegeben | der Rollstuhl |  |
| sw1288 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Romantik" ohne Artikel angegeben | die Romantik |  |
| sw1289 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Romantiker/in" ohne Artikel angegeben | der Romantiker / die Romantikerin |  |
| sw1291 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Rubrik" ohne Artikel angegeben | die Rubrik |  |
| sw1294 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Rückversicherung" ohne Artikel angegeben | die Rückversicherung |  |
| sw1295 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Rückzug" ohne Artikel angegeben | der Rückzug |  |
| sw1296 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Rüstung" ohne Artikel angegeben | die Rüstung |  |
| sw1297 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ruf" ohne Artikel angegeben | der Ruf |  |
| sw1298 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ruheraum" ohne Artikel angegeben | der Ruheraum |  |
| sw1299 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Ruhezeit" ohne Artikel angegeben | die Ruhezeit |  |
| sw1300 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "S-Bahn-Linie" ohne Artikel angegeben | die S-Bahn-Linie |  |
| sw1301 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "S-Bahn-Netz" ohne Artikel angegeben | das S-Bahn-Netz |  |
| sw1302 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sachbeschädigung" ohne Artikel angegeben | die Sachbeschädigung |  |
| sw1303 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Säge" ohne Artikel angegeben | die Säge |  |
| sw1305 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Säuglingssterblichkeit" ohne Artikel angegeben | die Säuglingssterblichkeit |  |
| sw1308 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Satiriker/in" ohne Artikel angegeben | der Satiriker / die Satirikerin |  |
| sw1310 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sauerstoff" ohne Artikel angegeben | der Sauerstoff |  |
| sw1311 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sauerstoffanteil" ohne Artikel angegeben | der Sauerstoffanteil |  |
| sw1312 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sauerstoffverbrauch" ohne Artikel angegeben | der Sauerstoffverbrauch |  |
| sw1313 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schale" ohne Artikel angegeben | die Schale |  |
| sw1314 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schauplatz" ohne Artikel angegeben | der Schauplatz |  |
| sw1315 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schauspielschule" ohne Artikel angegeben | die Schauspielschule |  |
| sw1316 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Scheinehe" ohne Artikel angegeben | die Scheinehe |  |
| sw1319 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schicksal" ohne Artikel angegeben | das Schicksal |  |
| sw1320 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schicksalsschlag" ohne Artikel angegeben | der Schicksalsschlag |  |
| sw1322 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schläfchen" ohne Artikel angegeben | das Schläfchen |  |
| sw1323 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schlafexperte/Schlafexpertin" ohne Artikel angegeben | der Schlafexperte / die Schlafexpertin |  |
| sw1325 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schlafmangel" ohne Artikel angegeben | der Schlafmangel |  |
| sw1326 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schlafraum" ohne Artikel angegeben | der Schlafraum |  |
| sw1327 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schlafstörung" ohne Artikel angegeben | die Schlafstörung |  |
| sw1328 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schlag" ohne Artikel angegeben | der Schlag |  |
| sw1330 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schließzylinder" ohne Artikel angegeben | der Schließzylinder |  |
| sw1332 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schlossanlage" ohne Artikel angegeben | die Schlossanlage |  |
| sw1333 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schlossbesichtigung" ohne Artikel angegeben | die Schlossbesichtigung |  |
| sw1334 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schlossbesucher/in" ohne Artikel angegeben | der Schlossbesucher / die Schlossbesucherin |  |
| sw1337 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schlussformel" ohne Artikel angegeben | die Schlussformel |  |
| sw1341 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schmetterling" ohne Artikel angegeben | der Schmetterling |  |
| sw1342 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schnäppchen" ohne Artikel angegeben | das Schnäppchen |  |
| sw1344 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schneeball" ohne Artikel angegeben | der Schneeball |  |
| sw1345 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schneider/in" ohne Artikel angegeben | der Schneider / die Schneiderin |  |
| sw1346 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schnelligkeit" ohne Artikel angegeben | die Schnelligkeit |  |
| sw1347 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schnitt" ohne Artikel angegeben | der Schnitt |  |
| sw1348 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schranke" ohne Artikel angegeben | die Schranke |  |
| sw1349 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schriftsteller/in" ohne Artikel angegeben | der Schriftsteller / die Schriftstellerin |  |
| sw1350 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schriftzeichen" ohne Artikel angegeben | das Schriftzeichen |  |
| sw1353 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schuhabdruck" ohne Artikel angegeben | der Schuhabdruck |  |
| sw1354 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schulabschluss" ohne Artikel angegeben | der Schulabschluss |  |
| sw1355 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schulden" ohne Artikel angegeben | die Schulden (Pl.) |  |
| sw1356 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schulpflicht" ohne Artikel angegeben | die Schulpflicht |  |
| sw1357 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schuluniform" ohne Artikel angegeben | die Schuluniform |  |
| sw1358 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schulzeit" ohne Artikel angegeben | die Schulzeit |  |
| sw1360 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schutzmaßnahme" ohne Artikel angegeben | die Schutzmaßnahme |  |
| sw1361 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schwager/Schwägerin" ohne Artikel angegeben | der Schwager / die Schwägerin |  |
| sw1364 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schwiegermutter" ohne Artikel angegeben | die Schwiegermutter |  |
| sw1365 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Schwimmer/in" ohne Artikel angegeben | der Schwimmer / die Schwimmerin |  |
| sw1368 | inhalte-vokabeln-b2.js | B2 | de | sonstiges | mittel | Kopfwort "sehnen" ohne Reflexivpronomen; das Verb ist nur reflexiv gebräuchlich (Satz: "sehnen wir uns ... nach"), anders als "sich herumschlagen"/"sich ergeben" im selben Batch | sich sehnen (nach) |  |
| sw1371 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Selbstbewusstsein" ohne Artikel angegeben | das Selbstbewusstsein |  |
| sw1372 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Selbstdarstellung" ohne Artikel angegeben | die Selbstdarstellung |  |
| sw1374 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Senior/in" ohne Artikel angegeben | der Senior / die Seniorin |  |
| sw1376 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sensation" ohne Artikel angegeben | die Sensation |  |
| sw1378 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Service-Unternehmen" ohne Artikel angegeben | das Service-Unternehmen |  |
| sw1380 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Shampoo" ohne Artikel angegeben | das Shampoo |  |
| sw1384 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sicherheitsleiter/in" ohne Artikel angegeben | der Sicherheitsleiter / die Sicherheitsleiterin |  |
| sw1387 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sicht" ohne Artikel angegeben | die Sicht |  |
| sw1389 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Signal" ohne Artikel angegeben | das Signal |  |
| sw1390 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Silber" ohne Artikel angegeben | das Silber |  |
| sw1392 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sinn" ohne Artikel angegeben | der Sinn |  |
| sw1394 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sitzung" ohne Artikel angegeben | die Sitzung |  |
| sw1395 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Skepsis" ohne Artikel angegeben | die Skepsis |  |
| sw1398 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Snowboard" ohne Artikel angegeben | das Snowboard |  |
| sw1400 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sonnencreme" ohne Artikel angegeben | die Sonnencreme |  |
| sw1401 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sonnenfinsternis" ohne Artikel angegeben | die Sonnenfinsternis |  |
| sw1402 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sonnenlicht" ohne Artikel angegeben | das Sonnenlicht |  |
| sw1405 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sozialforschung" ohne Artikel angegeben | die Sozialforschung |  |
| sw1406 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sozialhilfeempfänger/in" ohne Artikel angegeben | der Sozialhilfeempfänger / die Sozialhilfeempfängerin |  |
| sw1407 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Sozialwissenschaft" ohne Artikel angegeben | die Sozialwissenschaft |  |
| sw1409 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Spalte" ohne Artikel angegeben | die Spalte |  |
| sw1410 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Spende" ohne Artikel angegeben | die Spende |  |
| sw1412 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Spendenbereitschaft" ohne Artikel; Genus wird nicht vermittelt | die Spendenbereitschaft |  |
| sw1414 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Spielfilm" ohne Artikel; Genus wird nicht vermittelt | der Spielfilm |  |
| sw1415 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Spielraum" ohne Artikel; Genus wird nicht vermittelt | der Spielraum |  |
| sw1416 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Spielregel" ohne Artikel; Genus wird nicht vermittelt | die Spielregel |  |
| sw1417 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sponsor/in" ohne Artikel; Genus wird nicht vermittelt | der Sponsor / die Sponsorin |  |
| sw1419 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sportereignis" ohne Artikel; Genus wird nicht vermittelt | das Sportereignis |  |
| sw1420 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sportpensum" ohne Artikel; Genus wird nicht vermittelt | das Sportpensum |  |
| sw1421 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sportveranstaltung" ohne Artikel; Genus wird nicht vermittelt | die Sportveranstaltung |  |
| sw1422 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Spott" ohne Artikel; Genus wird nicht vermittelt | der Spott |  |
| sw1423 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sprachentwicklung" ohne Artikel; Genus wird nicht vermittelt | die Sprachentwicklung |  |
| sw1424 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sprachenvielfalt" ohne Artikel; Genus wird nicht vermittelt | die Sprachenvielfalt |  |
| sw1425 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sprachforscher/in" ohne Artikel; Genus wird nicht vermittelt | der Sprachforscher / die Sprachforscherin |  |
| sw1426 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sprachgebiet" ohne Artikel; Genus wird nicht vermittelt | das Sprachgebiet |  |
| sw1427 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sprachkenntnisse" ohne Artikel; Genus wird nicht vermittelt | die Sprachkenntnisse (Pl.) |  |
| sw1428 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sprachregion" ohne Artikel; Genus wird nicht vermittelt | die Sprachregion |  |
| sw1429 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sprachschatz" ohne Artikel; Genus wird nicht vermittelt | der Sprachschatz |  |
| sw1430 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sprachstörung" ohne Artikel; Genus wird nicht vermittelt | die Sprachstörung |  |
| sw1431 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sprachwissenschaftler/in" ohne Artikel; Genus wird nicht vermittelt | der Sprachwissenschaftler / die Sprachwissenschaftlerin |  |
| sw1433 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Spruch" ohne Artikel; Genus wird nicht vermittelt | der Spruch |  |
| sw1436 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Staatsbesuch" ohne Artikel; Genus wird nicht vermittelt | der Staatsbesuch |  |
| sw1437 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Staatschef/in" ohne Artikel; Genus wird nicht vermittelt | der Staatschef / die Staatschefin |  |
| sw1438 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Staatsfeiertag" ohne Artikel; Genus wird nicht vermittelt | der Staatsfeiertag |  |
| sw1439 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Staatsführer/in" ohne Artikel; Genus wird nicht vermittelt | der Staatsführer / die Staatsführerin |  |
| sw1440 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Staatsgeschäfte" ohne Artikel; Genus wird nicht vermittelt | die Staatsgeschäfte (Pl.) |  |
| sw1442 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Stamm" ohne Artikel; Genus wird nicht vermittelt | der Stamm |  |
| sw1443 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Stand" ohne Artikel; Genus wird nicht vermittelt | der Stand |  |
| sw1444 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Startchance" ohne Artikel; Genus wird nicht vermittelt | die Startchance |  |
| sw1445 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Startseite" ohne Artikel; Genus wird nicht vermittelt | die Startseite |  |
| sw1446 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Staubschicht" ohne Artikel; Genus wird nicht vermittelt | die Staubschicht |  |
| sw1448 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Stein" ohne Artikel; Genus wird nicht vermittelt | der Stein |  |
| sw1449 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Stellenanzeige" ohne Artikel; Genus wird nicht vermittelt | die Stellenanzeige |  |
| sw1450 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Stellenausschreibung" ohne Artikel; Genus wird nicht vermittelt | die Stellenausschreibung |  |
| sw1451 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Stellenwechsel" ohne Artikel; Genus wird nicht vermittelt | der Stellenwechsel |  |
| sw1452 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Stellung" ohne Artikel; Genus wird nicht vermittelt | die Stellung |  |
| sw1453 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | "deputy, acting" gibt nur die attributive Bedeutung wieder; im Beispielsatz ("unterschreibt ... stellvertretend für ihn") heißt es "on behalf of" | on behalf of (someone), acting, deputy |  |
| sw1454 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Stellvertreter/in" ohne Artikel; Genus wird nicht vermittelt | der Stellvertreter / die Stellvertreterin |  |
| sw1458 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Stopp" ohne Artikel; Genus wird nicht vermittelt | der Stopp |  |
| sw1460 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Straftat" ohne Artikel; Genus wird nicht vermittelt | die Straftat |  |
| sw1461 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Strandurlaub" ohne Artikel; Genus wird nicht vermittelt | der Strandurlaub |  |
| sw1462 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Strategie" ohne Artikel; Genus wird nicht vermittelt | die Strategie |  |
| sw1463 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Strauß" ohne Artikel; Genus wird nicht vermittelt | der Strauß |  |
| sw1464 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Strecke" ohne Artikel; Genus wird nicht vermittelt | die Strecke |  |
| sw1466 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Strömung" ohne Artikel; Genus wird nicht vermittelt | die Strömung |  |
| sw1467 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Stromleitung" ohne Artikel; Genus wird nicht vermittelt | die Stromleitung |  |
| sw1469 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Strukturierung" ohne Artikel; Genus wird nicht vermittelt | die Strukturierung |  |
| sw1470 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Studentenwohnheim" ohne Artikel; Genus wird nicht vermittelt | das Studentenwohnheim |  |
| sw1472 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Suchmaschine" ohne Artikel; Genus wird nicht vermittelt | die Suchmaschine |  |
| sw1473 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Suchtkrankheit" ohne Artikel; Genus wird nicht vermittelt | die Suchtkrankheit |  |
| sw1476 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Sympathie" ohne Artikel; Genus wird nicht vermittelt | die Sympathie |  |
| sw1477 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Synonym" ohne Artikel; Genus wird nicht vermittelt | das Synonym |  |
| sw1479 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Taekwondo" ohne Artikel; Genus wird nicht vermittelt | das Taekwondo |  |
| sw1480 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Täuschung" ohne Artikel; Genus wird nicht vermittelt | die Täuschung |  |
| sw1481 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tagebuch" ohne Artikel; Genus wird nicht vermittelt | das Tagebuch |  |
| sw1482 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tagesausflug" ohne Artikel; Genus wird nicht vermittelt | der Tagesausflug |  |
| sw1484 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Takt" ohne Artikel; Genus wird nicht vermittelt | der Takt |  |
| sw1485 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Talent" ohne Artikel; Genus wird nicht vermittelt | das Talent |  |
| sw1490 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Teambesprechung" ohne Artikel; Genus wird nicht vermittelt | die Teambesprechung |  |
| sw1491 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Teambildung" ohne Artikel; Genus wird nicht vermittelt | die Teambildung |  |
| sw1493 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Teamfähigkeit" ohne Artikel; Genus wird nicht vermittelt | die Teamfähigkeit |  |
| sw1494 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Teamgeist" ohne Artikel; Genus wird nicht vermittelt | der Teamgeist |  |
| sw1495 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Techniker/in" ohne Artikel; Genus wird nicht vermittelt | der Techniker / die Technikerin |  |
| sw1496 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Technikkonzern" ohne Artikel; Genus wird nicht vermittelt | der Technikkonzern |  |
| sw1497 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Teilthema" ohne Artikel; Genus wird nicht vermittelt | das Teilthema |  |
| sw1498 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Teilung" ohne Artikel; Genus wird nicht vermittelt | die Teilung |  |
| sw1499 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Telefonist/in" ohne Artikel; Genus wird nicht vermittelt | der Telefonist / die Telefonistin |  |
| sw1500 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Telemedizin" ohne Artikel; Genus wird nicht vermittelt | die Telemedizin |  |
| sw1501 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tendenz" ohne Artikel; Genus wird nicht vermittelt | die Tendenz |  |
| sw1502 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tennisplatz" ohne Artikel; Genus wird nicht vermittelt | der Tennisplatz |  |
| sw1503 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tennisprofi" ohne Artikel; Genus wird nicht vermittelt | der Tennisprofi |  |
| sw1504 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Terminkalender" ohne Artikel; Genus wird nicht vermittelt | der Terminkalender |  |
| sw1505 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Terminvorschlag" ohne Artikel; Genus wird nicht vermittelt | der Terminvorschlag |  |
| sw1506 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Textilbereich" ohne Artikel; Genus wird nicht vermittelt | der Textilbereich |  |
| sw1507 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Textilhersteller" ohne Artikel; Genus wird nicht vermittelt | der Textilhersteller |  |
| sw1508 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Textilie" ohne Artikel; Genus wird nicht vermittelt | die Textilie |  |
| sw1509 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Textilunternehmer/in" ohne Artikel; Genus wird nicht vermittelt | der Textilunternehmer / die Textilunternehmerin |  |
| sw1510 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Textzusammenhang" ohne Artikel; Genus wird nicht vermittelt | der Textzusammenhang |  |
| sw1511 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Theaterstück" ohne Artikel; Genus wird nicht vermittelt | das Theaterstück |  |
| sw1513 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Themen-Tour" ohne Artikel; Genus wird nicht vermittelt | die Themen-Tour |  |
| sw1514 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Theologie" ohne Artikel; Genus wird nicht vermittelt | die Theologie |  |
| sw1515 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Theorie" ohne Artikel; Genus wird nicht vermittelt | die Theorie |  |
| sw1516 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Therapeut/in" ohne Artikel; Genus wird nicht vermittelt | der Therapeut / die Therapeutin |  |
| sw1517 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Thron" ohne Artikel; Genus wird nicht vermittelt | der Thron |  |
| sw1518 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tiergarten" ohne Artikel; Genus wird nicht vermittelt | der Tiergarten |  |
| sw1519 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tiergehege" ohne Artikel; Genus wird nicht vermittelt | das Tiergehege |  |
| sw1520 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tierspur" ohne Artikel; Genus wird nicht vermittelt | die Tierspur |  |
| sw1522 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Todesurteil" ohne Artikel; Genus wird nicht vermittelt | das Todesurteil |  |
| sw1523 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Toilettenspülung" ohne Artikel; Genus wird nicht vermittelt | die Toilettenspülung |  |
| sw1524 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Ton" ohne Artikel; Genus wird nicht vermittelt | der Ton |  |
| sw1526 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tränenflüssigkeit" ohne Artikel; Genus wird nicht vermittelt | die Tränenflüssigkeit |  |
| sw1527 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tränensack" ohne Artikel; Genus wird nicht vermittelt | der Tränensack |  |
| sw1528 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Transparenz" ohne Artikel; Genus wird nicht vermittelt | die Transparenz |  |
| sw1529 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Traubenzucker" ohne Artikel; Genus wird nicht vermittelt | der Traubenzucker |  |
| sw1530 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Trauer" ohne Artikel; Genus wird nicht vermittelt | die Trauer |  |
| sw1533 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Treue" ohne Artikel; Genus wird nicht vermittelt | die Treue |  |
| sw1535 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Trophäe" ohne Artikel; Genus wird nicht vermittelt | die Trophäe |  |
| sw1536 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Türflügel" ohne Artikel; Genus wird nicht vermittelt | der Türflügel |  |
| sw1537 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Tunnel" ohne Artikel; Genus wird nicht vermittelt | der Tunnel |  |
| sw1538 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Turnier" ohne Artikel; Genus wird nicht vermittelt | das Turnier |  |
| sw1539 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Turnschuh" ohne Artikel; Genus wird nicht vermittelt | der Turnschuh |  |
| sw1541 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Überblick" ohne Artikel; Genus wird nicht vermittelt | der Überblick |  |
| sw1547 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Überlegung" ohne Artikel; Genus wird nicht vermittelt | die Überlegung |  |
| sw1549 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Überrest" ohne Artikel; Genus wird nicht vermittelt | der Überrest |  |
| sw1555 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Übertragung" ohne Artikel; Genus wird nicht vermittelt | die Übertragung |  |
| sw1556 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Übertreibung" ohne Artikel; Genus wird nicht vermittelt | die Übertreibung |  |
| sw1561 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Überzeugungskraft" ohne Artikel; Genus wird nicht vermittelt | die Überzeugungskraft |  |
| sw1566 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Umfang“ als Kopfwort ohne Artikel. | der Umfang |  |
| sw1567 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Umfeld“ als Kopfwort ohne Artikel. | das Umfeld |  |
| sw1568 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Umgang“ als Kopfwort ohne Artikel. | der Umgang |  |
| sw1570 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Umgangston“ als Kopfwort ohne Artikel. | der Umgangston |  |
| sw1572 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip II „umgegangen“ statt der Grundform; das Verb „umgehen“ steht bereits als sw1573 im Batch (inhaltliche Doppelung). | Eintrag streichen oder als „umgehen (mit), ist umgegangen“ in sw1573 aufgehen lassen |  |
| sw1574 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Umkreis“ als Kopfwort ohne Artikel. | der Umkreis |  |
| sw1576 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Umschulung“ als Kopfwort ohne Artikel. | die Umschulung |  |
| sw1578 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Umsteigebahnhof“ als Kopfwort ohne Artikel. | der Umsteigebahnhof |  |
| sw1579 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Umsteigeweg“ als Kopfwort ohne Artikel. | der Umsteigeweg |  |
| sw1583 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | „unangemessen“ mit „inadequate“ übersetzt; im Satz (Kaution ohne Begründung einbehalten) und in der Hauptbedeutung heißt es „inappropriate, unreasonable“ – „inadequate“ entspricht eher „unzureichend“. | inappropriate, unreasonable |  |
| sw1587 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Unendlichkeit“ als Kopfwort ohne Artikel. | die Unendlichkeit |  |
| sw1592 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Unfreiheit“ als Kopfwort ohne Artikel. | die Unfreiheit |  |
| sw1605 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Unstimmigkeit“ als Kopfwort ohne Artikel. | die Unstimmigkeit |  |
| sw1606 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Unterdrückung“ als Kopfwort ohne Artikel. | die Unterdrückung |  |
| sw1608 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip II „untergegangen“ statt der Grundform; „untergehen“ steht bereits als sw1609 im Batch. Zudem passt „sunk, gone under“ nicht zur Satzbedeutung „übersehen, verloren gegangen“. | Eintrag streichen oder in sw1609 integrieren: „untergehen – to sink, to go under; (fig.) to get lost/overlooked“ |  |
| sw1610 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Unterhaltungswert“ als Kopfwort ohne Artikel. | der Unterhaltungswert |  |
| sw1611 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Unternehmer/in“ als Kopfwort ohne Artikel. | der Unternehmer / die Unternehmerin |  |
| sw1612 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Unterteilung“ als Kopfwort ohne Artikel. | die Unterteilung |  |
| sw1616 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Unverständnis“ als Kopfwort ohne Artikel. | das Unverständnis |  |
| sw1619 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Urteilsvermögen“ als Kopfwort ohne Artikel. | das Urteilsvermögen |  |
| sw1621 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verabschiedung“ als Kopfwort ohne Artikel. | die Verabschiedung |  |
| sw1622 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Veränderung“ als Kopfwort ohne Artikel. | die Veränderung |  |
| sw1624 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verärgerung“ als Kopfwort ohne Artikel. | die Verärgerung |  |
| sw1628 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Veranstalter/in“ als Kopfwort ohne Artikel. | der Veranstalter / die Veranstalterin |  |
| sw1629 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Veranstaltungsagentur“ als Kopfwort ohne Artikel. | die Veranstaltungsagentur |  |
| sw1630 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Veranstaltungskonzept“ als Kopfwort ohne Artikel. | das Veranstaltungskonzept |  |
| sw1633 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verarbeitung“ als Kopfwort ohne Artikel. | die Verarbeitung |  |
| sw1634 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verband“ als Kopfwort ohne Artikel. | der Verband |  |
| sw1635 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | „verbleiben“ nur mit „to remain“ übersetzt; im Beispielsatz „Wir verbleiben so, dass …“ bedeutet es „so vereinbaren/es dabei belassen“ – die Übersetzung passt nicht zur Satzbedeutung. | to remain; (verbleiben so, dass …) to agree / to leave it that … |  |
| sw1639 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verbreitung“ als Kopfwort ohne Artikel. | die Verbreitung |  |
| sw1645 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vereinbarkeit“ als Kopfwort ohne Artikel. | die Vereinbarkeit |  |
| sw1647 | inhalte-vokabeln-b2.js | B2 | ex | sonstiges | mittel | Sachlich widersprüchlich: „das Haus schon zu Lebzeiten an meine Mutter vererben“ – vererben geschieht erst mit dem Tod; zu Lebzeiten überträgt/verschenkt man. | Meine Großmutter möchte das Haus später an meine Mutter vererben und hat das schon im Testament festgehalten. |  |
| sw1648 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verfahren“ als Kopfwort ohne Artikel. | das Verfahren |  |
| sw1651 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verfügung“ als Kopfwort ohne Artikel. | die Verfügung |  |
| sw1656 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip II „vergossen“ statt der Grundform; „vergießen“ steht bereits als sw1654 im Batch (inhaltliche Doppelung). | Eintrag streichen oder den Satz als zweites Beispiel zu „vergießen“ (sw1654) übernehmen |  |
| sw1657 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verhältnis“ als Kopfwort ohne Artikel. | das Verhältnis |  |
| sw1658 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verhaltensregel“ als Kopfwort ohne Artikel. | die Verhaltensregel |  |
| sw1660 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verkaufsassistent/in“ als Kopfwort ohne Artikel. | der Verkaufsassistent / die Verkaufsassistentin |  |
| sw1661 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verkehrsschild“ als Kopfwort ohne Artikel. | das Verkehrsschild |  |
| sw1664 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verlauf“ als Kopfwort ohne Artikel. | der Verlauf |  |
| sw1669 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vermieter/in“ als Kopfwort ohne Artikel. | der Vermieter / die Vermieterin |  |
| sw1671 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vermögen“ als Kopfwort ohne Artikel. | das Vermögen |  |
| sw1673 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verpackung“ als Kopfwort ohne Artikel. | die Verpackung |  |
| sw1676 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Versandkosten“ als Kopfwort ohne Artikel. | die Versandkosten (Pl.) |  |
| sw1677 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Versandrisiko“ als Kopfwort ohne Artikel. | das Versandrisiko |  |
| sw1679 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verschlüsselung“ als Kopfwort ohne Artikel. | die Verschlüsselung |  |
| sw1681 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verschwendung“ als Kopfwort ohne Artikel. | die Verschwendung |  |
| sw1683 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Versorgung“ als Kopfwort ohne Artikel. | die Versorgung |  |
| sw1684 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verständlichkeit“ als Kopfwort ohne Artikel. | die Verständlichkeit |  |
| sw1688 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Versuchsgruppe“ als Kopfwort ohne Artikel. | die Versuchsgruppe |  |
| sw1689 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Versuchsperson“ als Kopfwort ohne Artikel. | die Versuchsperson |  |
| sw1690 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Versuchsreihe“ als Kopfwort ohne Artikel. | die Versuchsreihe |  |
| sw1691 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verteilung“ als Kopfwort ohne Artikel. | die Verteilung |  |
| sw1700 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verwaltungssprache“ als Kopfwort ohne Artikel. | die Verwaltungssprache |  |
| sw1702 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verwandtschaft“ als Kopfwort ohne Artikel. | die Verwandtschaft |  |
| sw1706 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Verzweiflung“ als Kopfwort ohne Artikel. | die Verzweiflung |  |
| sw1710 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vielfalt“ als Kopfwort ohne Artikel. | die Vielfalt |  |
| sw1713 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vielsprachigkeit“ als Kopfwort ohne Artikel. | die Vielsprachigkeit |  |
| sw1714 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vielzahl" ohne Artikel | die Vielzahl |  |
| sw1715 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Virenschutzprogramm" ohne Artikel | das Virenschutzprogramm |  |
| sw1717 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Virus" ohne Artikel | das Virus (ugs. auch der Virus) |  |
| sw1718 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Visabestimmungen" ohne Artikel | die Visabestimmungen (Pl.) |  |
| sw1719 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vision" ohne Artikel | die Vision |  |
| sw1722 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Volk" ohne Artikel | das Volk |  |
| sw1723 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Volkslied" ohne Artikel | das Volkslied |  |
| sw1727 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Volontariat" ohne Artikel | das Volontariat |  |
| sw1729 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | „to prioritize" trifft „voranstellen" nicht (= etwas vor etwas anderes setzen, einleiten); im Satz wird ein Lob der Kritik vorangestellt | to put before, to preface |  |
| sw1732 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vorbild" ohne Artikel | das Vorbild |  |
| sw1734 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vordergrund" ohne Artikel | der Vordergrund |  |
| sw1735 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vorgang" ohne Artikel | der Vorgang |  |
| sw1737 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vorgesetzte" ohne Artikel | der/die Vorgesetzte |  |
| sw1739 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort „vorgekommen" ist Partizip II statt Grundform | vorkommen (en: to occur, to happen) |  |
| sw1740 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort „vorgesprochen" ist Partizip II statt Grundform; Grundform „vorsprechen" steht zusätzlich als sw1747 im Batch | Eintrag streichen oder zu „vorsprechen" zusammenführen |  |
| sw1741 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort „vorgetragen" ist Partizip II statt Grundform; Grundform „vortragen" steht zusätzlich als sw1749 im Batch | Eintrag streichen oder zu „vortragen" zusammenführen |  |
| sw1744 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vorlesung" ohne Artikel | die Vorlesung |  |
| sw1745 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vorliebe" ohne Artikel | die Vorliebe |  |
| sw1746 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vormarsch" ohne Artikel | der Vormarsch |  |
| sw1748 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vortrag" ohne Artikel | der Vortrag |  |
| sw1750 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vortragsreihe" ohne Artikel | die Vortragsreihe |  |
| sw1752 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vorwarnung" ohne Artikel | die Vorwarnung |  |
| sw1753 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vorwurf" ohne Artikel | der Vorwurf |  |
| sw1754 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Vorzug" ohne Artikel | der Vorzug |  |
| sw1756 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wachturm" ohne Artikel | der Wachturm |  |
| sw1760 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Waffe" ohne Artikel | die Waffe |  |
| sw1761 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wahrnehmung" ohne Artikel | die Wahrnehmung |  |
| sw1762 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wahrnehmungsbereich" ohne Artikel | der Wahrnehmungsbereich |  |
| sw1763 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Waise" ohne Artikel | die Waise |  |
| sw1764 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Walzer" ohne Artikel | der Walzer |  |
| sw1765 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wandel" ohne Artikel | der Wandel |  |
| sw1766 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wanderarbeiter/in" ohne Artikel | der Wanderarbeiter / die Wanderarbeiterin |  |
| sw1767 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wange" ohne Artikel | die Wange |  |
| sw1768 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Warnsignal" ohne Artikel | das Warnsignal |  |
| sw1769 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wartezeit" ohne Artikel | die Wartezeit |  |
| sw1770 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wechsel" ohne Artikel | der Wechsel |  |
| sw1771 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort „weggeblieben" ist Partizip II statt Grundform | wegbleiben (en: to stay away) |  |
| sw1772 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | „to come away" passt nicht zur Satzbedeutung „günstiger wegkommen" (= besser abschneiden) | to get away; (gut/günstig) wegkommen = to come off well, to fare well |  |
| sw1773 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort „weggekommen" ist Partizip II statt Grundform; Grundform „wegkommen" steht zusätzlich als sw1772 im Batch | wegkommen (umgangssprachlich: abhandenkommen) |  |
| sw1773 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | „got away" ist im Satz falsch: „die Uhr ist mir weggekommen" heißt, sie ist verschwunden/gestohlen worden | went missing, was stolen | bestätigt |
| sw1774 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Weiche" ohne Artikel | die Weiche |  |
| sw1778 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Weltbild" ohne Artikel | das Weltbild |  |
| sw1779 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Welterbe" ohne Artikel | das Welterbe |  |
| sw1780 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Weltformel" ohne Artikel | die Weltformel |  |
| sw1781 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Weltgeschichte" ohne Artikel | die Weltgeschichte |  |
| sw1782 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Weltkulturerbe" ohne Artikel | das Weltkulturerbe |  |
| sw1783 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Weltmeistertitel" ohne Artikel | der Weltmeistertitel |  |
| sw1784 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wende" ohne Artikel | die Wende |  |
| sw1784 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | mittel | „turning point" erklärt den Satz nicht: „nach der Wende" meint die politische Wende 1989/90 in der DDR | turning point; die Wende = the fall of the Berlin Wall / German reunification (1989/90) |  |
| sw1785 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Werbeagentur" ohne Artikel | die Werbeagentur |  |
| sw1786 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Werbeanzeige" ohne Artikel | die Werbeanzeige |  |
| sw1787 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Werbegrafik" ohne Artikel | die Werbegrafik |  |
| sw1790 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wertschätzung" ohne Artikel | die Wertschätzung |  |
| sw1792 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Weste" ohne Artikel | die Weste |  |
| sw1796 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wiedervereinigung" ohne Artikel | die Wiedervereinigung |  |
| sw1797 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Windel" ohne Artikel | die Windel |  |
| sw1798 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Windeseile" ohne Artikel | die Windeseile (meist: in Windeseile) |  |
| sw1799 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wirkung" ohne Artikel | die Wirkung |  |
| sw1801 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wirtschaftsprozess" ohne Artikel | der Wirtschaftsprozess |  |
| sw1802 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wirtschaftssektor" ohne Artikel | der Wirtschaftssektor |  |
| sw1803 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wissensbeschaffung" ohne Artikel | die Wissensbeschaffung |  |
| sw1804 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wissenschaftler/in" ohne Artikel | der Wissenschaftler / die Wissenschaftlerin |  |
| sw1805 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wissenschaftssprache" ohne Artikel | die Wissenschaftssprache |  |
| sw1806 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wissenschaftszentrum" ohne Artikel | das Wissenschaftszentrum |  |
| sw1807 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wochenendbeziehung" ohne Artikel | die Wochenendbeziehung |  |
| sw1810 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wohnform" ohne Artikel | die Wohnform |  |
| sw1811 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wohnungssuche" ohne Artikel | die Wohnungssuche |  |
| sw1813 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wüste" ohne Artikel | die Wüste |  |
| sw1815 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Wut" ohne Artikel | die Wut |  |
| sw1816 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zahlungsmöglichkeit" ohne Artikel | die Zahlungsmöglichkeit |  |
| sw1817 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zahnpastatube" ohne Artikel | die Zahnpastatube |  |
| sw1818 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zaun" ohne Artikel | der Zaun |  |
| sw1819 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zeigefinger" ohne Artikel | der Zeigefinger |  |
| sw1820 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zeitalter" ohne Artikel | das Zeitalter |  |
| sw1821 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zeiterscheinung" ohne Artikel | die Zeiterscheinung |  |
| sw1823 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zeitplan" ohne Artikel | der Zeitplan |  |
| sw1824 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zeitraum" ohne Artikel | der Zeitraum |  |
| sw1825 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zeitreise" ohne Artikel | die Zeitreise |  |
| sw1826 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zeitstrahl" ohne Artikel | der Zeitstrahl |  |
| sw1827 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zeitvertreib" ohne Artikel | der Zeitvertreib |  |
| sw1828 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zeitzeuge/Zeitzeugin" ohne Artikel | der Zeitzeuge / die Zeitzeugin |  |
| sw1829 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zerfall" ohne Artikel | der Zerfall |  |
| sw1834 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zitat" ohne Artikel | das Zitat |  |
| sw1836 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zöpfchen" ohne Artikel | das Zöpfchen |  |
| sw1839 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zufriedenheit" ohne Artikel | die Zufriedenheit |  |
| sw1840 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zugabe" ohne Artikel | die Zugabe |  |
| sw1843 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zugewanderte" ohne Artikel | der/die Zugewanderte (Pl. die Zugewanderten) |  |
| sw1848 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zukunftsvision" ohne Artikel | die Zukunftsvision |  |
| sw1853 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zuneigung" ohne Artikel | die Zuneigung |  |
| sw1854 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zuordnung" ohne Artikel | die Zuordnung |  |
| sw1862 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zusammenfassung" ohne Artikel | die Zusammenfassung |  |
| sw1864 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen „Zusammenhang" ohne Artikel | der Zusammenhang |  |
| sw1866 | inhalte-vokabeln-b2.js | B2 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "zustande" ist nur ein Fragment der festen Verbindung; die Übersetzung "to come about" passt nur zu "zustande kommen" | zustande kommen |  |
| sw1868 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Zweig" ohne Artikel | der Zweig |  |
| sw1871 | inhalte-vokabeln-b2.js | B2 | de | artikel_fehlt | mittel | Nomen "Zwischenfall" ohne Artikel | der Zwischenfall |  |
| sx0079 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "to alarm" heißt im Englischen v. a. "beunruhigen"; im Satz ("alarmierte ... die Feuerwehr") bedeutet alarmieren "verständigen, zu Hilfe rufen" | to alert / call out (emergency services) | bestätigt |
| sx0082 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "most of all" entspricht "am allermeisten"; im Satz bedeutet "die allermeisten Anträge" "the vast majority" | the vast majority / almost all | bestätigt |
| sx0095 | inhalte-vokabeln-c1.js | C1 | de | artikel_fehlt | mittel | Nomen "Altersgenosse" ohne Artikel (Nachbar-Einträge der C1-Datei haben Artikel) | der Altersgenosse |  |
| sx0103 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Amok" ist ein Fragment; gebräuchlich nur in der festen Wendung, die auch der Satz verwendet ("Amok zu laufen") | Amok laufen (en: to run amok) |  |
| sx0108 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "Anbetracht" ist ein Fragment; existiert nur in "in Anbetracht" (+ Genitiv), worauf sich auch "in view of" bezieht | in Anbetracht (+ Gen.) |  |
| sx0144 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "at the mercy of" passt allenfalls zu "anheimfallen/anheimgegeben sein"; im Satz bedeutet "jemandem etwas anheimstellen" "jemandem etwas überlassen" | to leave (a decision) to someone | bestätigt |
| sx0157 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Im Satz ist "anpacken" intransitiv ('mit anfassen, mithelfen'); "to tackle" passt nur zur transitiven Bedeutung (ein Problem anpacken) | en: "to pitch in, lend a hand / to tackle (sth.)" |  |
| sx0224 | inhalte-vokabeln-c1.js | C1 | de | rechtschreibung | mittel | Englisches Kompositum getrennt geschrieben: "Assessment Center" (Kopfwort und Satz); nach amtlicher Regelung zusammen oder mit Bindestrich | "das Assessment-Center" (oder "das Assessmentcenter"), im Satz "Beim Assessment-Center …" |  |
| sx0228 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | mittel | Kopfwort "die Atemstärke" ist kein gebräuchliches deutsches Wort (Lehnbildung zu 'breath strength'); als C1-Vokabel ungeeignet | "das Lungenvolumen" (en: lung capacity) bzw. "die Ausdauer"; ex: "… hat sich mein Lungenvolumen spürbar vergrößert …" |  |
| sx0237 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "onto one another" passt nicht zum Satz "aufeinander abgestimmt" (= aufeinander bezogen, 'to/with one another') | en: "to/with one another; on top of one another" |  |
| sx0240 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Partizip II "aufgebaut" statt Grundform als Kopfwort | "aufbauen" (en: to build up) |  |
| sx0241 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Partizip II "aufgegossen" statt Grundform; Grundform "aufgießen" steht zusätzlich als sx0250 im Batch | Eintrag streichen oder zu "aufgießen" zusammenführen |  |
| sx0242 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Partizip II "aufgegriffen" statt Grundform als Kopfwort | "aufgreifen" (en: to take up (a topic)) |  |
| sx0243 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Im Satz (vor dem Vorstellungsgespräch, schlaflose Nacht) bedeutet "aufgeregt" 'nervös'; "excited" wird im Englischen positiv verstanden | en: "nervous / excited" |  |
| sx0244 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Partizip II "aufgerichtet" statt Grundform als Kopfwort (en "erected / upright" mischt Verb und Adjektiv) | "aufrichten" (en: to straighten up / erect); Bedeutung 'upright' ist bereits durch "aufrecht" (sx0260) abgedeckt |  |
| sx0245 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Partizip II "aufgestiegen" statt Grundform als Kopfwort | "aufsteigen" (en: to rise / be promoted) |  |
| sx0246 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Partizip II "aufgetan" statt Grundform als Kopfwort | "sich auftun" (en: to open up) |  |
| sx0247 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Partizip II "aufgetreten" statt Grundform als Kopfwort | "auftreten" (en: to occur) |  |
| sx0248 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Partizip II "aufgewachsen" statt Grundform als Kopfwort | "aufwachsen" (en: to grow up) |  |
| sx0249 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Partizip II "aufgeworfen" statt Grundform; Grundform "aufwerfen" steht zusätzlich als sx0276 im Batch | Eintrag streichen oder zu "aufwerfen" zusammenführen |  |
| sx0252 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "enlightenment / education" trifft die Satzbedeutung (ärztliche Aufklärung über Risiken) nicht | en: "informing, briefing (e.g. of a patient); enlightenment" |  |
| sx0273 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Partizip I "auftretend" statt Grundform als Kopfwort (dasselbe Verb auch als "aufgetreten", sx0247) | "auftreten" (en: to occur), mit sx0247 zusammenführen |  |
| sx0296 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "ausgeatmet" ist das Partizip II von "ausatmen" (keine lexikalisierte Adjektivform), also flektierte Satzform statt Grundform; en "exhaled" entsprechend. | Kopfwort "ausatmen", en "to exhale, breathe out" |  |
| sx0299 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "ausgegangen" ist das Partizip II von "ausgehen", keine Grundform. | Kopfwort "ausgehen", en "to go out; to end (up)" |  |
| sx0303 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "ausgelesen" ist das Partizip II von "auslesen" (im Batch zusätzlich als sx0314 "auslesen" vorhanden), keine Grundform. | Kopfwort "auslesen (ein Buch)", en "to finish reading (a book)" |  |
| sx0305 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "ausgerissen" ist das Partizip II von "ausreißen"; die Grundform steht im selben Batch bereits als sx0320 "ausreißen" (inhaltliche Dopplung). | Eintrag streichen oder Kopfwort "ausreißen (= weglaufen)", en "to run away" |  |
| sx0310 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "foothill, spur" gibt nur die Gebirgsbedeutung wieder; im Beispielsatz "Die Ausläufer des Sturmtiefs" ist die Bedeutung "Randbereich/Ausläufer eines Wettersystems" gemeint, die Glosse passt nicht zum Satz. | en "foothill, spur; outskirts, tail end (e.g. of a storm)" |  |
| sx0399 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "begangen" ist das Partizip II von "begehen"; die Grundform steht im selben Batch als sx0400 "begehen" (inhaltliche Dopplung). | Eintrag streichen oder auf Grundform "begehen" zusammenführen |  |
| sx0415 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "behoben" ist das Partizip II von "beheben"; die Grundform steht im selben Batch als sx0412 "beheben" (inhaltliche Dopplung). | Eintrag streichen oder auf Grundform "beheben" zusammenführen |  |
| sx0417 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "beigetreten" ist das Partizip II von "beitreten"; die Grundform steht im selben Batch als sx0422 "beitreten" (inhaltliche Dopplung). | Eintrag streichen oder auf Grundform "beitreten" zusammenführen |  |
| sx0476 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "beschenkt" ist nur das Partizip II von "beschenken" (sx0475 im selben Batch); der Satz nutzt es im Passiv ("wurde ... beschenkt"), nicht als eigenständiges Adjektiv | Eintrag streichen oder zu sx0475 "beschenken" zusammenführen |  |
| sx0479 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "beschriftet" ist Partizip II statt Grundform; der Satz verwendet es im Perfekt ("haben ... beschriftet") | beschriften (en: to label) |  |
| sx0536 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "bezog" ist eine konjugierte Präteritumform statt Grundform; doppelt zu sx0534 "beziehen" | Eintrag streichen oder als "beziehen (bezog, hat bezogen)" in sx0534 integrieren | bestätigt |
| sx0651 | inhalte-vokabeln-c1.js | C1 | de | rechtschreibung | mittel | Kopfwort "contra" ist laut Duden österreichisch bzw. sonst veraltet; die Standardschreibung in "pro und kontra" ist mit k | Kopfwort "kontra"; Satz: "... alle Argumente pro und kontra ein generelles Tempolimit ..." |  |
| sx0659 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip II "dagestanden" statt der Grundform; der Satz nutzt zudem die feste Wendung "dumm dastehen" (= to look foolish), die mit "stood there" nicht erfasst wird | Kopfwort "dumm dastehen" / en "to look foolish" oder Eintrag streichen (Grundform "dastehen" ist bereits sx0658) |  |
| sx0690 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "demented" bedeutet im heutigen Englisch überwiegend abwertend "verrückt"; für den medizinischen Sinn von "dement" irreführend | en: "having dementia, suffering from dementia" |  |
| sx0766 | inhalte-vokabeln-c1.js | C1 | de | rechtschreibung | mittel | Schrägstrich im Kopfwort "durcheinander/wirbeln"; das Verb wird zusammengeschrieben (Satz nutzt korrekt "durcheinandergewirbelt") | durcheinanderwirbeln |  |
| sx0768 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "durchgeführt" ist das Partizip aus dem Satz (Passiv), nicht die Grundform | durchführen (en: to carry out) |  |
| sx0772 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "average definition" bedeutet im Englischen "durchschnittliche/mittelmäßige Definition"; gemeint ist die Definition des Durchschnitts (Median vs. Mittelwert) | definition of the average | bestätigt |
| sx0797 | inhalte-vokabeln-c1.js | C1 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Einblick" ohne Artikel | der Einblick |  |
| sx0807 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "eingefroren" ist das Partizip; im Satz wird es als Perfekt des Verbs verwendet ("habe ... eingefroren"), nicht als Adjektiv | einfrieren (en: to freeze) |  |
| sx0811 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "eingetreten" ist die Partizipform aus dem Satz ("ist eingetreten") statt der Grundform | eintreten (en: to occur) |  |
| sx0812 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "eingetroffen" ist die Partizipform aus dem Satz ("ist eingetroffen") statt der Grundform | Item streichen oder zu eintreffen zusammenführen (Grundform existiert bereits als sx0847) |  |
| sx0893 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | mittel | Kopfwort "entpuppen" ohne Reflexivpronomen; das Verb ist nur reflexiv gebräuchlich (Satz: "entpuppte sich als") | sich entpuppen (als) |  |
| sx0893 | inhalte-vokabeln-c1.js | C1 | ex | grammatik | mittel | Kongruenzfehler: zwei singularische Teilsätze mit gemeinsamem Verb im Plural "weil das Personal herzlich und das Frühstück hervorragend waren" | ..., weil das Personal herzlich war und das Frühstück hervorragend. |  |
| sx0903 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "entsprach" ist die Präteritumform statt der Grundform; die Grundform "entsprechen" steht zudem schon als sx0904 im Batch | Eintrag streichen oder als "entsprechen (entsprach, hat entsprochen)" mit sx0904 zusammenführen; en "to correspond to" |  |
| sx0916 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "erbracht" ist das Partizip II, im Satz verbal gebraucht ("erbracht hat"); die Grundform "erbringen" steht schon als sx0917 im Batch | Eintrag streichen oder mit sx0917 "erbringen (erbrachte, hat erbracht)" zusammenführen |  |
| sx0923 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "experienced, to experience" passt nicht zum Satz: in "Erst aus der Zeitung haben wir erfahren, dass ..." bedeutet "erfahren" "to find out, to learn (news)" | en: "to find out, learn; to experience; experienced (adj.)" | bestätigt |
| sx0939 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "erhoben" ist das Partizip II, im Satz verbal im Passiv gebraucht ("wird ... erhoben"); die Grundform "erheben" steht schon als sx0937 im Batch | Eintrag streichen oder mit sx0937 "erheben (erhob, hat erhoben)" zusammenführen |  |
| sx0962 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "ernannt" ist das Partizip II, im Satz verbal im Passiv gebraucht ("wurde ... ernannt"), statt der Grundform | Kopfwort "ernennen (ernannte, hat ernannt)", en "to appoint" |  |
| sx0973 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "erschienen" ist das Partizip II, im Satz verbal gebraucht ("waren ... erschienen"); die Grundform "erscheinen" steht schon als sx0972 im Batch | Eintrag streichen oder mit sx0972 "erscheinen (erschien, ist erschienen)" zusammenführen |  |
| sx0974 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "erspart" ist das Partizip II aus der festen Wendung "erspart bleiben" im Satz, keine Grundform; en "saved" trifft die Wendung nicht | Kopfwort "jemandem erspart bleiben", en "to be spared (something)", oder "ersparen", en "to spare, save" |  |
| sx0978 | inhalte-vokabeln-c1.js | C1 | de | rechtschreibung | mittel | Kopfwort und Satz schreiben "erstmal" zusammen; standardsprachlich (Duden) wird "erst mal" bzw. "erst einmal" getrennt geschrieben, die Zusammenschreibung ist nur umgangssprachlich verbreitet | Kopfwort "erst mal (ugs.) / erst einmal"; Satz: "Nach dem Umzug haben wir erst mal nur das Nötigste ausgepackt, ..." |  |
| sx1012 | inhalte-vokabeln-c1.js | C1 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Ex" ohne Artikel (im Satz "mein Ex") | "der/die Ex" (en "ex, ex-partner") |  |
| sx1032 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "die Fachkräfte" ist die Pluralform statt der Grundform; "Fachkraft" ist kein Pluraletantum | "die Fachkraft, die Fachkräfte", en "skilled worker(s)" |  |
| sx1077 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "finished product" passt nicht zum Satz: Gemeint sind Fertiggerichte bzw. Fertiglebensmittel ("kocht alles frisch", "Zusatzstoffe"), nicht das Endprodukt einer Fertigung | en: "ready-made product, convenience food" |  |
| sx1080 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "fixed stock" (Lagerbestand) passt nicht zur Bedeutung im Satz "gehört zum festen Bestand des Vereinskalenders" (= fester, etablierter Bestandteil) | en: "(to be) an integral/established part"; Kopfwort besser "zum festen Bestand gehören" | bestätigt |
| sx1081 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist das Partizip "festgehalten" statt der Grundform | festhalten (en: to record, to note down) |  |
| sx1145 | inhalte-vokabeln-c1.js | C1 | de | rechtschreibung | mittel | Kopfwort "fort/führen" enthält einen Schrägstrich (einziger Fall dieser Schreibweise in den Vokabeldateien) | fortführen |  |
| sx1169 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "front report" ist kein gängiges Englisch und verschleiert die Bedeutung (Bericht von der Kriegsfront) | en: "report from the front, war report" |  |
| sx1212 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gebildeter" ist eine Komparativform (zudem mit flektiertem Positiv verwechselbar), keine Grundform | gebildet (Komparativ: gebildeter) – en: educated |  |
| sx1215 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gebracht" ist das Partizip II aus dem Satz statt der Grundform | bringen (brachte, hat gebracht) – en: to bring |  |
| sx1240 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "counter-move" passt nicht zur Satzbedeutung: "im Gegenzug" heißt "in return" | counter-move; im Gegenzug = in return |  |
| sx1242 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gegraben" ist das Partizip II aus dem Satz statt der Grundform | graben (grub, hat gegraben) – en: to dig |  |
| sx1243 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gehalten" ist das Partizip II aus dem Satz statt der Grundform; im Satz ("eine Rede gehalten") passt zudem "held" nicht, gemeint ist "given" | eine Rede halten – en: to give a speech (halten: to hold) |  |
| sx1256 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gekannt" ist das Partizip II aus dem Satz statt der Grundform | kennen (kannte, hat gekannt) – en: to know |  |
| sx1276 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "called, named" passt nicht zum Satz: "der oben genannte Betrag" = "the above-mentioned amount" | named, mentioned (oben genannt = above-mentioned) |  |
| sx1281 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "genommen" ist das Partizip II aus dem Satz statt der Grundform | sich (Urlaub) nehmen (nahm, hat genommen) – en: to take (time off) |  |
| sx1282 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "genossen" ist das Partizip II aus dem Satz statt der Grundform | genießen (genoss, hat genossen) – en: to enjoy |  |
| sx1323 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gesprungen" ist das Partizip II aus dem Satz statt der Grundform | springen (sprang, ist gesprungen) – en: to jump |  |
| sx1329 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gestoßen" ist das Partizip II aus dem Satz statt der Grundform | stoßen (stieß, ist/hat gestoßen) – en: to bump, to push |  |
| sx1352 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gewachsen" ist nur das Partizip II von wachsen, im Satz als Perfekt verwendet ("ist ... gewachsen"); die eigenständige Bedeutung deckt bereits sx1353 "gewachsen sein" ab | Kopfwort "wachsen" (en "to grow") oder Eintrag streichen |  |
| sx1367 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "gewütet" ist das Partizip II (Perfektform im Satz "hat ... gewütet") statt der Grundform; kein eigenständiges Adjektiv | Kopfwort "wüten", en "to rage" |  |
| sx1369 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "to result from, to emerge from" passt nicht zum Beispielsatz: "Aus dem Bescheid geht eindeutig hervor, dass ..." bedeutet "it is clear/evident from the notice that ..." | en "to be evident from; to emerge/result from" | bestätigt |
| sx1372 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "glassy" entspricht "glasig", nicht "gläsern"; im Satz ("zu gläsernen Kunden werden") ist die übertragene Bedeutung "transparent" gemeint, die fehlt | en "(made of) glass; transparent (fig.)" | bestätigt |
| sx1377 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "die gleiche Mutter" ist ein Satzfragment (Adjektiv + beliebiges Nomen), kein Vokabeleintrag; zudem wird für Identität normgerecht "dieselbe" empfohlen ("die gleiche Mutter haben") | Kopfwort "derselbe / dieselbe / dasselbe" (en "the same (one)"), Satz: "Obwohl die beiden dieselbe Mutter haben, könnten ihre Lebenswege kaum unterschiedlicher verlaufen." |  |
| sx1518 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist die Partizipform "hervorgerufen" statt der Grundform | de: "hervorrufen", en: "to cause, to prompt" |  |
| sx1519 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "to thrust out" passt nicht zum Satz "stieß ... Worte hervor" – dort bedeutet es Worte hervorpressen/ausstoßen | en: "to blurt out, to gasp out (words); to thrust out" |  |
| sx1534 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "for this purpose" passt nicht zum Satz "hierzu zählen etwa ..." (= dazu gehören / these include) | en: "to this, in addition; hierzu zählen = these include" |  |
| sx1544 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "to outgrow" passt nicht zum Satz "über sich hinausgewachsen" (= sich selbst übertreffen) | en: "to outgrow; über sich hinauswachsen = to surpass oneself" |  |
| sx1549 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "to live oneself into" ist kein Englisch; "sich hineinleben" = sich einleben/eingewöhnen | en: "to settle into, to get used to (sich in etw. hineinleben)" |  |
| sx1551 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "to look over there" ist irreführend; "hingucken" = hinsehen, hinschauen (im Satz: genau hingucken = look closely) | en: "to look (at), to take a look" |  |
| sx1688 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | mittel | Eigenname sachlich falsch: Ein "Institut für Arbeitsmarktforschung" gibt es so nicht; gemeint ist (laut en "Institute for Employment Research") das "Institut für Arbeitsmarkt- und Berufsforschung" (IAB) | de: "das Institut für Arbeitsmarkt- und Berufsforschung (IAB)", Satz: "Laut einer aktuellen Studie des Instituts für Arbeitsmarkt- und Berufsforschung fehlen ..." |  |
| sx1693 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "theater director" wird im Englischen meist als Regisseur verstanden; "Intendant" ist die künstlerische und organisatorische Leitung eines Theaters oder Senders | en: "artistic director, general manager (of a theater/broadcaster)" | bestätigt |
| sx1717 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Falscher Freund: "irritiert" bedeutet vor allem verwirrt/befremdet, nicht "irritated" (= verärgert); im Satz ("sichtlich irritiert" über doppelt verschickten Bescheid) ist Verwirrung gemeint | en: "puzzled, disconcerted (also: annoyed)" | bestätigt |
| sx1719 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Im Beispielsatz bedeutet "das Dach isolieren" dämmen (to insulate), die Übersetzung "to isolate" deckt diese Bedeutung nicht ab | en: "to isolate; to insulate" | bestätigt |
| sx1723 | inhalte-vokabeln-c1.js | C1 | de | artikel_fehlt | mittel | Nomen "IT-Experte" ohne Artikel als Kopfwort | der IT-Experte |  |
| sx1791 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | mittel | "das Kellerstück" ist kein gebräuchliches deutsches Wort (nicht im Duden); Lernende lernen eine Ad-hoc-Bildung | Kopfwort ersetzen durch "der Kellerfund" (en "find from the cellar"), Satz: "... entpuppte sich ein verstaubter Kellerfund als wertvolle Jugendstillampe ..." |  |
| sx1846 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "royal" passt nicht zum Satz: "uns königlich amüsiert" ist umgangssprachlich und bedeutet "sich prächtig amüsieren", nicht "königlich" im Sinne von "royal". | en: "royal; (colloq.) immensely – sich königlich amüsieren = to have a great time" oder einen Satz mit der Grundbedeutung royal verwenden |  |
| sx1862 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "commissioner" ist irreführend: Im Satz (Tatort) ist der Kommissar ein Kriminalbeamter, also "inspector" bzw. "detective"; "commissioner" wäre ein Polizeipräsident oder EU-Kommissar. | en: "(police) inspector, detective; commissioner" |  |
| sx1933 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "future" gibt nur das Adjektiv wieder; im Satz steht "künftig" als Adverb ("die Nebenkosten künftig quartalsweise abgerechnet"). | en: "future (adj.); in future, from now on (adv.)" |  |
| sx1959 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "trick" passt nicht zur Bedeutung im Beispielsatz ("Es war wirklich ein Kunststück, den kompletten Umzug ... zu stemmen"), dort heißt Kunststück "feat / achievement". | en: "trick; feat" |  |
| sx1991 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "lauter" ist die Komparativform von "laut" (en "louder") statt einer Grundform; als eigenständiges C1-Wort bedeutet "lauter" dagegen "nichts als / aufrichtig" – so ist der Eintrag irreführend. | Kopfwort "laut" (en "loud") verwenden oder das Wort "lauter" im Sinn von "nothing but; sincere" mit passendem Satz (z. B. "Vor lauter Aufregung vergaß sie ihren Schlüssel.") aufnehmen. |  |
| sx2100 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "seamless" ist irreführend; "lückenlose Dokumentation" bedeutet vollständig, ohne Lücken, nicht 'nahtlos/reibungslos' | complete, without gaps |  |
| sx2167 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "die Menschenaffen" steht im Plural statt in der Grundform; kein Pluraletantum, Lernende können "die" als feminines Genus missverstehen | der Menschenaffe, die Menschenaffen (en: great ape) |  |
| sx2184 | inhalte-vokabeln-c1.js | C1 | de | grammatik | mittel | "die Mindestkapitalmenge" ist kein gebräuchliches deutsches Wort (Kapital wird nicht als "Menge" bezeichnet); zudem inhaltlich Dublette zu sx2183 "das Mindestkapital" | Item streichen oder ersetzen durch "die Mindesteinlage" (en: minimum contribution) |  |
| sx2199 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "nonsense" passt nicht zum Beispielsatz "So ein Mist, jetzt habe ich den Anschlusszug ... verpasst!" (dort Ausruf des Ärgers, nicht 'Unsinn') | en: rubbish, crap (colloq.); "So ein Mist!" = Damn it! / What a pain! |  |
| sx2202 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "to give along" ist kein englischer Ausdruck | to give (someone something) to take along |  |
| sx2239 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "die motivierenden Worte" ist eine flektierte Satzphrase statt Grundform (en "the motivating words") | motivierend (en: motivating) oder als Wendung "motivierende Worte" |  |
| sx2246 | inhalte-vokabeln-c1.js | C1 | de | rechtschreibung | mittel | Kopfwort "die Multiple Choice-Aufgabe" nicht durchgekoppelt; der Beispielsatz schreibt korrekt "Multiple-Choice-Aufgaben" | die Multiple-Choice-Aufgabe |  |
| sx2270 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "downstream" passt nicht zur Bedeutung im Satz: "nachgelagerte Besteuerung" heißt deferred taxation | deferred (taxation); downstream | bestätigt |
| sx2282 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "foolish" passt nicht zum Satz: "die närrische Zeit" bezeichnet die Karnevalszeit | foolish; carnival-related (die närrische Zeit = carnival season) | bestätigt |
| sx2337 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "sober" passt nicht zum Satz: Vor der Blutabnahme bedeutet "nüchtern" mit leerem Magen | sober; on an empty stomach, fasting | bestätigt |
| sx2371 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Adjektiv/Adverb "ordnungspolitisch" mit der Nominalphrase "regulatory policy" übersetzt (falsche Wortart) | in terms of regulatory (economic) policy |  |
| sx2375 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | mittel | Kopfwort "orientieren" ohne Reflexivpronomen, obwohl en "to orient oneself" und der Satz ("mich ... orientieren") die reflexive Form verlangen | sich orientieren |  |
| sx2462 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | mittel | "das Präsente-Lager" ist keine gebräuchliche Wortbildung, sondern eine Ad-hoc-Bildung ohne Lernwert als C1-Kopfwort | Item ersetzen, z. B. "das Präsent" (gift) mit angepasstem Satz |  |
| sx2527 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | mittel | "der Radfahrablauf" ist kein gebräuchliches Wort; üblich ist "Bewegungsablauf (beim Radfahren)" | der Bewegungsablauf (motion sequence); Satz: "Der Trainer analysierte per Video meinen Bewegungsablauf beim Radfahren ..." |  |
| sx2529 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Satz verwendet reflexives "sich an jemandem rächen" (= to take revenge on sb), die Übersetzung "to avenge" passt nur zum transitiven "etw./jdn. rächen" | en: "to take revenge (sich rächen), to avenge"; Kopfwort ggf. "sich rächen" |  |
| sx2608 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "das Rollenbild" mit "role image" übersetzt; kein gebräuchlicher englischer Ausdruck, gemeint sind Vorstellungen von (Geschlechter-)Rollen | conception of roles, (gender) role stereotype |  |
| sx2612 | inhalte-vokabeln-c1.js | C1 | de | artikel_fehlt | mittel | Nomen "Rückgriff" ohne Artikel | der Rückgriff |  |
| sx2633 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "der Sauger" mit "sucker, pacifier" übersetzt; pacifier = der Schnuller; im Satz ist der Sauger der Babyflasche gemeint (teat/nipple) | teat, nipple (of a baby bottle) | bestätigt |
| sx2649 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "die Scheidungszahl" mit "divorce rate" übersetzt; Scheidungszahl = absolute Anzahl der Scheidungen, rate entspricht "Scheidungsrate/-quote" | number of divorces, divorce figures |  |
| sx2699 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "to startle" (transitiv: jemanden erschrecken) passt nicht zum Satz, in dem "schrecken" intransitiv gebraucht wird ("schreckte ich aus dem Schlaf" = to wake with a start) | en: "to startle; (intr.) to start (up), wake with a start" |  |
| sx2735 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "schwor" ist die Präteritumform statt der Grundform; entsprechend en "swore" statt Infinitiv | de: "schwören (schwor, hat geschworen)" bzw. hier "sich etwas schwören"; en: "to swear" | bestätigt |
| sx2742 | inhalte-vokabeln-c1.js | C1 | de | artikel_fehlt | mittel | Nomen "Sehnsucht" ohne Artikel | die Sehnsucht |  |
| sx2778 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "to move forward" trifft "sich fortbewegen" (= sich von der Stelle bewegen, vorankommen, get around) nicht; im Satz geht es um das Unterwegssein in der Stadt, nicht um Vorwärtsbewegung | en: "to move (about), get around" |  |
| sx2872 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist eine flektierte Präteritumform "sprach" statt der Grundform; en "spoke" ebenfalls Präteritum. | sprechen (sprach, hat gesprochen) – to speak |  |
| sx2940 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "background noise" trifft die Bedeutung nicht: Störgeräusch ist ein störendes Geräusch/Rauschen (im Satz "Störgeräusche in der Leitung" = interference, static); background noise wäre Hintergrundgeräusch. | interference, noise (on the line), static |  |
| sx2961 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "current, stream" deckt die im Beispielsatz verwendete Hauptbedeutung nicht ab: "zahlen wir für Strom" meint Elektrizität. | electricity, power; current, stream |  |
| sx3055 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort steht im Plural statt in der Grundform: "die Top-Neujahrsvorsätze" (kein Pluraletantum) | der Top-Neujahrsvorsatz (Pl. die Top-Neujahrsvorsätze), en: top New Year's resolution |  |
| sx3062 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Übersetzung "carrier, bearer" passt nicht zur Bedeutung im Beispielsatz ("von einem kirchlichen Träger betrieben" = Trägerorganisation/Betreiber) | en: carrier, bearer; sponsoring body, operator (of an institution) |  |
| sx3098 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist flektierte Satzform statt Grundform: "überdachte" (aus "die überdachte Terrasse") | überdacht |  |
| sx3116 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Partizip II statt Infinitiv: "übernommen" | übernehmen, en: to take over, to cover (costs) |  |
| sx3119 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Präteritumsform statt Infinitiv: "überrannte" | überrennen (Eintrag mit sx3121 zusammenführen) |  |
| sx3125 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Präteritumsform statt Infinitiv: "überschritt" | überschreiten (Eintrag mit sx3124 zusammenführen) |  |
| sx3127 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist Präteritumsform statt Infinitiv: "übersprang" | überspringen (Eintrag mit sx3128 zusammenführen) |  |
| sx3136 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort ist konjugierte Form statt Infinitiv: "überwindet" | überwinden, en: to overcome |  |
| sx3152 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "umgangen" ist das Partizip II statt der Grundform (umgehen, untrennbar) | Kopfwort "umgehen" (untrennbar), en "to bypass, circumvent" |  |
| sx3154 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "to reverse" passt nicht zum Beispielsatz: "auf halber Strecke umkehren" bedeutet "to turn back" (intransitiv) | en "to turn back; to reverse" | bestätigt |
| sx3157 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "umschrieb" ist eine Präteritumform statt Grundform; Lemma steht bereits als "umschreiben" (sx3156) im Batch | Item streichen oder Kopfwort "umschreiben (untrennbar)", en "to paraphrase, describe in roundabout terms" |  |
| sx3250 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "unterscheidet" ist eine konjugierte Form (3. Sg.) statt Grundform; "unterscheiden" steht bereits als sx3249 im Batch; der Satz nutzt die reflexive Variante | Kopfwort "sich unterscheiden (von + Dat.)" |  |
| sx3250 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | en "distinguishes" passt nicht zum Satz: "unterscheidet sich von" bedeutet "differs from" | en "to differ (from)" | bestätigt |
| sx3305 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Englisch "to fritter away, neglect" trifft die im Satz verwendete Bedeutung nicht: "den Termin verbummelt" heißt aus Nachlässigkeit vergessen/versäumt | en: "to fritter away (time); to forget, miss (through carelessness)" |  |
| sx3333 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verhalf" ist eine finite Präteritumform statt Grundform | de: "verhelfen (verhalf, verholfen)", en: "to help (sb. to sth.)" – oder Eintrag streichen, da sx3341 "verhelfen" bereits vorhanden |  |
| sx3353 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Englisch "to relocate, mislay" deckt die Satzbedeutung nicht ab: "Termin ... auf nächste Woche verlegt" = verschoben | en: "to postpone, reschedule; to relocate; to mislay" |  |
| sx3386 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verschlang" ist eine finite Präteritumform statt Grundform | de: "verschlingen (verschlang, verschlungen)" – oder Eintrag streichen, da sx3388 "verschlingen" bereits vorhanden |  |
| sx3389 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verschrieb" ist eine finite Präteritumform statt Grundform | de: "verschreiben (verschrieb, verschrieben)", en: "to prescribe" |  |
| sx3391 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "versetzt" ist das Partizip aus dem Passivsatz ("wurde ... versetzt"), nicht die Grundform | de: "versetzen", en: "to transfer (an employee); to move, shift" |  |
| sx3410 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Englisch "distributor" passt nicht zum Satz: "in den Verteiler aufnehmen" meint die E-Mail-/Verteilerliste | en: "distribution list, mailing list; distributor" | bestätigt |
| sx3421 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verursacht" ist das Partizip aus dem Perfektsatz ("hat ... verursacht"), nicht die Grundform | de: "verursachen", en: "to cause" |  |
| sx3426 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verwendet" ist das Partizip aus dem Perfektsatz ("habe ... verwendet"), nicht die Grundform | de: "verwenden", en: "to use" |  |
| sx3429 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "verwies" ist eine finite Präteritumform statt Grundform | de: "verweisen (auf) (verwies, verwiesen)", en: "to refer (to)" |  |
| sx3439 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | Infinitiv-Kopfwort "verziehen" mit Vergangenheitsform "moved away" übersetzt; zudem Hauptbedeutungen (verziehen = to distort, to spoil) fehlen | en: "to move away (verzogen; official)" bzw. Kopfwort "verziehen (ist verzogen)" |  |
| sx3444 | inhalte-vokabeln-c1.js | C1 | de | grammatik | mittel | "die Videospielebene" ist kein gebräuchliches Wort; Muttersprachler sagen "das Level" ("an diesem Level sitze ich") | de: "das Level" (eines Videospiels); ex: "An diesem kniffligen Level sitze ich seit Tagen, ..." |  |
| sx3463 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "to carry out" passt nicht zum Satz: reflexives "vollzieht sich ... ein Wandel" bedeutet "findet statt". | to carry out, execute; sich vollziehen = to take place |  |
| sx3467 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "from the front" passt nicht zum Beispielsatz: "das ganze Verfahren von vorne beginnen" bedeutet "von Anfang an / noch einmal". | from the beginning, (start) all over again | bestätigt |
| sx3469 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "onward, forward" passt nicht zur Verwendung im Satz: "allen voran meine Mutter" bedeutet "vor allem, allen voran". | en: "ahead, in front; allen voran = above all, first and foremost" |  |
| sx3484 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "backstory" passt nicht zum Beispielsatz: "gesundheitliche Vorgeschichte" ist die Krankengeschichte. | history, background (medical: medical history); backstory |  |
| sx3493 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "intent" (juristischer Vorsatz) passt nicht zum Beispielsatz: "den guten Vorsatz gefasst" = gute Vorsätze (Neujahr). | resolution, intention (legal: intent) | bestätigt |
| sx3507 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "to outgrow" passt nicht zum Satz: "über sich hinausgewachsen" bedeutet "sich selbst übertroffen". | to grow beyond; über sich hinauswachsen = to surpass oneself |  |
| sx3508 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | mittel | "der Wächter-Verarbeitungsmodus" ist kein etablierter Wortschatz, sondern eine Ad-hoc-Bildung aus einem Einzeltext; als Vokabel nicht lernrelevant. | Eintrag streichen oder durch "der Wachzustand / der leichte Schlaf" ersetzen |  |
| sx3532 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | mittel | "watercolor-colored" ist keine sinnvolle englische Wiedergabe; das Adjektiv "wasserfarben" ist zudem kaum gebräuchlich. | en: "(painted) in watercolour"; besser Kopfwort "die Wasserfarbe" bzw. Satz "mit zarten Blumenmotiven in Aquarelloptik" |  |
| sx3563 | inhalte-vokabeln-c1.js | C1 | de | artikel_fehlt | mittel | Nomen "Wellness" ohne Artikel. | die Wellness |  |
| sx3590 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "widerstand" ist die Präteritumform von widerstehen (en "resisted"), keine Grundform; überschneidet sich zudem mit dem Eintrag "widerstehen" (sx3592). | Eintrag streichen oder als "widerstehen (widerstand, hat widerstanden)" mit en "to resist" führen | bestätigt |
| sx3667 | inhalte-vokabeln-c1.js | C1 | de | rechtschreibung | mittel | Interjektion als Kopfwort großgeschrieben: "Zack"; laut Duden klein ("zack"), der Beispielsatz schreibt sie auch klein. | zack |  |
| sx3711 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "zersplitternd" ist ein nicht lexikalisiertes Partizip I statt Grundform; inhaltlich Dublette zum direkt vorausgehenden Eintrag "zersplittern" (sx3710). | Eintrag streichen oder durch ein eigenständiges Wort ersetzen; Grundform "zersplittern" ist bereits vorhanden. |  |
| sx3748 | inhalte-vokabeln-c1.js | C1 | de | artikel_fehlt | mittel | Nomen-Kopfwort "Zugriff" ohne Artikel | der Zugriff |  |
| sx3794 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | mittel | Kopfwort "zweit" ist ein Stamm-Fragment; die Grundform der Ordinalzahl lautet "zweite" ("zweit" allein nur in "zu zweit") | zweite (der/die/das zweite) |  |
| d01 | inhalte.js | A2 | zeilen[4].de | grammatik | niedrig | "Das macht ein Euro vierzig." – "machen" verlangt den Akkusativ; umgangssprachlich verbreitet, standardsprachlich und für Lernende korrekt ist "einen Euro vierzig". | Das macht einen Euro vierzig. |  |
| s08 | inhalte.js | B1 | loesung | rechtschreibung | niedrig | Angezeigte Lösung ohne Pflichtkomma vor Nebensatz: "Ich schlage vor dass wir uns um acht treffen". | Anzeige mit Komma: "Ich schlage vor, dass wir uns um acht treffen" (Wortkarte "vor," oder Komma nur in der Anzeige ergänzen) |  |
| s12 | inhalte.js | C1 | loesung | rechtschreibung | niedrig | Angezeigte Lösung ohne Pflichtkomma vor Nebensatz: "Mir ist durchaus bewusst dass es schwierig ist". | Anzeige mit Komma: "Mir ist durchaus bewusst, dass es schwierig ist" |  |
| t01 | inhalte.js | A2 | alt | grammatik | niedrig | Akzeptierte Alternative "Ich habe einen Termin morgen" ist nachgestellte Zeitangabe (Ausklammerung), standardsprachlich steht die Zeitangabe vor dem unbestimmten Objekt. | Alternative ersetzen durch "Morgen habe ich einen Termin" |  |
| t04 | inhalte.js | A2 | alt | grammatik | niedrig | Akzeptierte Alternative "Ich bin müde heute" ist nur umgangssprachliche Ausklammerung, nicht standardsprachliche Wortstellung; Lernende werden in einer falschen Satzstellung bestärkt. | Alternative ersetzen durch "Heute bin ich müde" |  |
| t13 | inhalte.js | B1 | de | rechtschreibung | niedrig | Komma vor dass-Satz fehlt in der angezeigten Musterlösung: "Ich schlage vor dass wir uns um acht treffen" (t03 behält Kommas, also kein systematisches Weglassen). | Ich schlage vor, dass wir uns um acht treffen |  |
| t17 | inhalte.js | C1 | de | rechtschreibung | niedrig | Komma vor dass-Satz fehlt in der angezeigten Musterlösung: "Mir ist durchaus bewusst dass es schwierig ist". | Mir ist durchaus bewusst, dass es schwierig ist |  |
| dx01 | inhalte-b2c1.js | B2 | zeilen[1].de | sonstiges | niedrig | Sachlich falsch: "In den meisten Städten gilt eine Kappungsgrenze" – die Kappungsgrenze (§ 558 Abs. 3 BGB, 20 % in drei Jahren) gilt bundesweit; nur die 15-%-Grenze gilt in ausgewiesenen Gebieten. | "Es gibt eine Kappungsgrenze, das heißt, die Miete darf innerhalb von drei Jahren um höchstens zwanzig Prozent steigen, in Gegenden mit knappem Wohnraum sogar nur um fünfzehn." (en analog: "There's a legal cap …"). |  |
| ky01 | inhalte-b2c1.js | C1 | prompt | sonstiges | niedrig | Sachlogik stimmt nicht: "Hätte die Behörde den Bescheid fristgerecht zugestellt, wäre der Widerspruch nicht verfristet gewesen" – die Widerspruchsfrist beginnt erst mit der Zustellung; eine späte Zustellung kann den Widerspruch nicht verfristen. | "Hätte der Kläger den Widerspruch fristgerecht eingelegt, ___ dieser nicht verfristet ___ (sein)." |  |
| lx03 | inhalte-b2c1.js | B2 | satz | sonstiges | niedrig | Sachlich schief: "Der Vermieter darf die Kaution erst zurückzahlen, nachdem …" – dem Vermieter ist eine frühere Rückzahlung nicht verboten; gemeint ist, dass er sie erst dann zurückzahlen muss. | "Der Vermieter muss die Kaution erst zurückzahlen, nachdem er sich vom ___ der Wohnung überzeugt hat." |  |
| sx05 | inhalte-b2c1.js | B2 | loesung | sonstiges | niedrig | Logisch unstimmige Konzession: "Trotz der hohen Lebenshaltungskosten weigert sich die Bank, uns einen Kredit zu gewähren" – hohe Lebenshaltungskosten sprechen eher für als gegen eine Ablehnung; "trotz" ergibt keinen Sinn. | "Trotz unseres sicheren Einkommens weigert sich die Bank, uns einen Kredit zu gewähren" (woerter und en entsprechend anpassen). |  |
| vx05 | inhalte-b2c1.js | B2 | de | duplikat_dateiuebergreifend | niedrig | "die Überweisung" (B2) doppelt zu v29 "die Überweisung" (B1, inhalte.js) | Eintrag streichen oder mit v29 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| vx11 | inhalte-b2c1.js | B2 | de | duplikat_dateiuebergreifend | niedrig | "der Termin" (B2) doppelt zu v02 "der Termin" (A2, inhalte.js) | Eintrag streichen oder mit v02 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| vx15 | inhalte-b2c1.js | B2 | de | duplikat_dateiuebergreifend | niedrig | "die Voraussetzung" (B2) doppelt zu v51 "die Voraussetzung" (B1, inhalte.js) | Eintrag streichen oder mit v51 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| vx23 | inhalte-b2c1.js | B2 | ex | sonstiges | niedrig | Sachlich unpräzise: ein Verwaltungsbescheid wird nach Ablauf der Widerspruchsfrist "bestandskräftig", nicht "rechtskräftig" (Rechtskraft betrifft Urteile). | "Die Frist für den Widerspruch beträgt einen Monat; danach ist der Bescheid bestandskräftig." |  |
| vx23 | inhalte-b2c1.js | B2 | de | duplikat_dateiuebergreifend | niedrig | "die Frist" (B2) doppelt zu v32 "die Frist" (B1, inhalte.js) | Eintrag streichen oder mit v32 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| vy01 | inhalte-b2c1.js | C1 | de | duplikat_dateiuebergreifend | niedrig | "der Ermessensspielraum" (C1) doppelt zu v63 "der Ermessensspielraum" (C1, inhalte.js) | Eintrag streichen oder mit v63 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| vy02 | inhalte-b2c1.js | C1 | de | duplikat_im_batch | niedrig | Kopfwort "etwas in Kauf nehmen" ist inhaltlich identisch mit vx24 "in Kauf nehmen" (B2), gleiche englische Übersetzung. | vy02 durch eine andere C1-Wendung ersetzen (z. B. "etwas billigend in Kauf nehmen" mit eigener Bedeutung) oder streichen. |  |
| vy07 | inhalte-b2c1.js | C1 | de | duplikat_in_datei | niedrig | "die Nebenkostenabrechnung" (C1) doppelt zu vx03 "die Nebenkostenabrechnung" (B2, inhalte-b2c1.js) | Eintrag streichen oder mit vx03 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmd018 | inhalte-themen.js | B1 | zeilen[3].de | grammatik | niedrig | "Mit Verfolgung sind es zwölf Euro fünfzig." ist unidiomatisch: "Verfolgung" allein heißt Verfolgung im Sinne von pursuit/persecution. Gemeint ist die Sendungsverfolgung; die angefragte Versicherung fehlt außerdem. | "Mit Versicherung und Sendungsverfolgung sind es zwölf Euro fünfzig." (en: "With insurance and tracking, it's twelve euros fifty.") |  |
| tmp001 | inhalte-themen.js | A2 | pairs | rechtschreibung | niedrig | "die (Ehe)Frau" und "der (Ehe)Mann" haben eine Binnengroßschreibung nach der Klammer. Richtig ist "(Ehe)frau" oder mit Ergänzungsstrich "(Ehe-)Frau". | "die (Ehe-)Frau", "der (Ehe-)Mann" |  |
| tmp020 | inhalte-themen.js | A2 | pairs | duplikat_im_batch | niedrig | Das Paar ["die Apotheke","the pharmacy"] steht auch in tmp004. | In tmp020 ersetzen, z. B. ["das Rezept","the prescription"] |  |
| tmv028 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "der Termin" (A2) doppelt zu v02 "der Termin" (A2, inhalte.js) | Eintrag streichen oder mit v02 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv035 | inhalte-themen.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "die Überweisung" (B1) doppelt zu v29 "die Überweisung" (B1, inhalte.js) | Eintrag streichen oder mit v29 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv047 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "bestellen" (A2) doppelt zu v10 "bestellen" (A2, inhalte.js) | Eintrag streichen oder mit v10 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv049 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "die Rechnung" (A2) doppelt zu v03 "die Rechnung" (A2, inhalte.js) | Eintrag streichen oder mit v03 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv051 | inhalte-themen.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "das Trinkgeld" (B1) doppelt zu v13 "das Trinkgeld" (A2, inhalte.js) | Eintrag streichen oder mit v13 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv055 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "die Wohnung" (A2) doppelt zu v14 "die Wohnung" (A2, inhalte.js) | Eintrag streichen oder mit v14 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv056 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "die Miete" (A2) doppelt zu v15 "die Miete" (A2, inhalte.js) | Eintrag streichen oder mit v15 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv061 | inhalte-themen.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "die Nebenkosten (Pl.)" (B1) doppelt zu v38 "die Nebenkosten" (B1, inhalte.js) | Eintrag streichen oder mit v38 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv062 | inhalte-themen.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "der Mietvertrag" (B1) doppelt zu vx13 "der Mietvertrag" (B2, inhalte-b2c1.js) | Eintrag streichen oder mit vx13 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv073 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "die Anmeldung" (A2) doppelt zu v01 "die Anmeldung" (A2, inhalte.js) | Eintrag streichen oder mit v01 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv074 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "der Antrag" (A2) doppelt zu vx17 "der Antrag" (B2, inhalte-b2c1.js) | Eintrag streichen oder mit vx17 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv076 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "der Termin" (A2) doppelt zu v02 "der Termin" (A2, inhalte.js) | Eintrag streichen oder mit v02 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv077 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "die Unterlagen (Pl.)" (A2) doppelt zu v35 "die Unterlagen" (B1, inhalte.js) | Eintrag streichen oder mit v35 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv079 | inhalte-themen.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "die Bescheinigung" (B1) doppelt zu v33 "die Bescheinigung" (B1, inhalte.js) | Eintrag streichen oder mit v33 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv107 | inhalte-themen.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "der Termin" (B1) doppelt zu v02 "der Termin" (A2, inhalte.js) | Eintrag streichen oder mit v02 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv111 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "die Größe" (A2) doppelt zu v05 "die Größe" (A2, inhalte.js) | Eintrag streichen oder mit v05 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv118 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "der Termin" (A2) doppelt zu v02 "der Termin" (A2, inhalte.js) | Eintrag streichen oder mit v02 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv120 | inhalte-themen.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "verschieben" (B1) doppelt zu v34 "verschieben" (B1, inhalte.js) | Eintrag streichen oder mit v34 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv121 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "absagen" (A2) doppelt zu v23 "absagen" (A2, inhalte.js) | Eintrag streichen oder mit v23 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv127 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "müde" (A2) doppelt zu v18 "müde" (A2, inhalte.js) | Eintrag streichen oder mit v18 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv136 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "die Verspätung" (A2) doppelt zu v09 "die Verspätung" (A2, inhalte.js) | Eintrag streichen oder mit v09 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv137 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "umsteigen" (A2) doppelt zu v08 "umsteigen" (A2, inhalte.js) | Eintrag streichen oder mit v08 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv141 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "die Haltestelle" (A2) doppelt zu v07 "die Haltestelle" (A2, inhalte.js) | Eintrag streichen oder mit v07 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv152 | inhalte-themen.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "die Überweisung" (B1) doppelt zu v29 "die Überweisung" (B1, inhalte.js) | Eintrag streichen oder mit v29 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv172 | inhalte-themen.js | A2 | de | duplikat_in_datei | niedrig | "das Rezept" (A2) doppelt zu tmv030 "das Rezept" (A2, inhalte-themen.js) | Eintrag streichen oder mit tmv030 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv182 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "der Termin" (A2) doppelt zu v02 "der Termin" (A2, inhalte.js) | Eintrag streichen oder mit v02 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv200 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "der Termin" (A2) doppelt zu v02 "der Termin" (A2, inhalte.js) | Eintrag streichen oder mit v02 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv207 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "das Trinkgeld" (A2) doppelt zu v13 "das Trinkgeld" (A2, inhalte.js) | Eintrag streichen oder mit v13 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv211 | inhalte-themen.js | B1 | de | duplikat_in_datei | niedrig | "die Kaution" (B1) doppelt zu tmv060 "die Kaution" (B1, inhalte-themen.js) | Eintrag streichen oder mit tmv060 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv218 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "der Termin" (A2) doppelt zu v02 "der Termin" (A2, inhalte.js) | Eintrag streichen oder mit v02 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv223 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "die Rechnung" (A2) doppelt zu v03 "die Rechnung" (A2, inhalte.js) | Eintrag streichen oder mit v03 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv246 | inhalte-themen.js | A2 | de | duplikat_in_datei | niedrig | "einladen" (A2) doppelt zu tmv243 "einladen" (B1, inhalte-themen.js) | Eintrag streichen oder mit tmv243 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv262 | inhalte-themen.js | A2 | de | duplikat_in_datei | niedrig | "die Karte (Karten)" (A2) doppelt zu tmv147 "die Karte" (A2, inhalte-themen.js) | Eintrag streichen oder mit tmv147 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv266 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "bestellen" (A2) doppelt zu v10 "bestellen" (A2, inhalte.js) | Eintrag streichen oder mit v10 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv268 | inhalte-themen.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "die Stimmung" (B1) doppelt zu v42 "die Stimmung" (B1, inhalte.js) | Eintrag streichen oder mit v42 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| tmv269 | inhalte-themen.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "empfehlen" (A2) doppelt zu v11 "empfehlen" (A2, inhalte.js) | Eintrag streichen oder mit v11 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv0286 | inhalte-vokabeln.js | A2 | de | duplikat_dateiuebergreifend | niedrig | "die Meinung" (A2) doppelt zu tmv271 "die Meinung (äußern)" (B1, inhalte-themen.js) | Eintrag streichen oder mit tmv271 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv0721 | inhalte-vokabeln.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "beeilen" (B1) doppelt zu tmv105 "sich beeilen" (B1, inhalte-themen.js) | Eintrag streichen oder mit tmv105 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv0754 | inhalte-vokabeln.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "beschweren" (B1) doppelt zu v50 "sich beschweren" (B1, inhalte.js) | Eintrag streichen oder mit v50 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv0840 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | "d. h." doppelt sich inhaltlich mit sv0863 "das heißt"; beide Beispielsätze beginnen gleich mit "Ich habe morgen frei, ..." | Einträge zusammenführen ("das heißt (d. h.)") oder einen Beispielsatz austauschen |  |
| sv0902 | inhalte-vokabeln.js | B1 | ex | duplikat_im_batch | niedrig | Beispielsatz "Ich bin heute ein bisschen müde." ist fast wortgleich mit sv0777 "Ich bin heute leider ein bisschen müde." | Anderer Satz, z. B. "Kannst du mir ein bisschen helfen?" |  |
| sv1151 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | sv1150 "das Gerät ein" und sv1151 "das Gerät einschaltet" sind dasselbe Lemma einschalten; nach Korrektur doppelt | eine der beiden Karten streichen oder zusammenführen |  |
| sv1263 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | "Hörerinnen" ist nur die Pluralform von "die Hörerin" (sv1262) und damit doppelt | Streichen oder als Pluralangabe in sv1262 aufnehmen: die Hörerin, -nen |  |
| sv1322 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | "kannst" und "kann" (sv1321) sind dasselbe Lemma "können" | Zu einem Eintrag "können" zusammenführen |  |
| sv1376 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | "Kostüme" ist nur der Plural von "das Kostüm" (sv1375) | Streichen oder als Pluralangabe in sv1375: das Kostüm, -e |  |
| sv1398 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | "Kurven" ist nur der Plural von "die Kurve" (sv1397) | Streichen oder als Pluralangabe in sv1397: die Kurve, -n |  |
| sv1415 | inhalte-vokabeln.js | B1 | de | duplikat_in_datei | niedrig | "leidtun" (B1) doppelt zu sv0267 "leidtun" (A2, inhalte-vokabeln.js) | Eintrag streichen oder mit sv0267 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv1470 | inhalte-vokabeln.js | B1 | de | duplikat_in_datei | niedrig | "der Computer" (B1) doppelt zu sv0903 "der Computer" (B1, inhalte-vokabeln.js) | Eintrag streichen oder mit sv0903 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv1490 | inhalte-vokabeln.js | B1 | de | duplikat_in_datei | niedrig | "leidtun" (B1) doppelt zu sv0267 "leidtun" (A2, inhalte-vokabeln.js) | Eintrag streichen oder mit sv0267 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv1526 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | "Muskeln" doppelt zu "der Muskel" (sv1525) im selben Batch | mit sv1525 zusammenführen: der Muskel, die Muskeln |  |
| sv1648 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | Kopfwort "Personenstand" doppelt im Batch (sv1647 und sv1648). | Einen der beiden Einträge streichen (sv1648 mit Artikel behalten, Marker bereinigen) |  |
| sv1668 | inhalte-vokabeln.js | B1 | de | kopfwort_zusammengeklebt | niedrig | Abgeschnittene Variante im Kopfwort: "das Portemonnaie/Port"; "Port" ist kein Wort für Geldbörse (gemeint: Portmonee). | das Portemonnaie/Portmonee | bestätigt |
| sv1689 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | Gleiches Lemma wie sv1688 "die Qualifikation", nur im Plural. | Eintrag streichen oder mit sv1688 zusammenführen (die Qualifikation, -en) |  |
| sv1692 | inhalte-vokabeln.js | B1 | ex | rechtschreibung | niedrig | Trennbares Verb im Infinitiv getrennt geschrieben: "die Treppe rauf tragen". | Wir müssen den Schrank die Treppe rauftragen. |  |
| sv1774 | inhalte-vokabeln.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "Schwiegereltern" (B1) doppelt zu tmv008 "die Schwiegereltern (Pl.)" (B1, inhalte-themen.js) | Eintrag streichen oder mit tmv008 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv1797 | inhalte-vokabeln.js | B1 | de | duplikat_in_datei | niedrig | "sich an" (B1) doppelt zu sv0016 "an" (A2, inhalte-vokabeln.js) | Eintrag streichen oder mit sv0016 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv1800 | inhalte-vokabeln.js | B1 | de | duplikat_in_datei | niedrig | "sich bemühen" (B1) doppelt zu sv0741 "bemühen" (B1, inhalte-vokabeln.js) | Eintrag streichen oder mit sv0741 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv1811 | inhalte-vokabeln.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "sich verlieben" (B1) doppelt zu tmv254 "sich verlieben (in + Akk.)" (A2, inhalte-themen.js) | Eintrag streichen oder mit tmv254 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv1830 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | "Sonderangebote" ist nur der Plural von "das Sonderangebot" (sv1829), zudem ohne Artikel | Item streichen oder in sv1829 als Pluralangabe "das Sonderangebot, -e" aufnehmen |  |
| sv1882 | inhalte-vokabeln.js | B1 | de | duplikat_dateiuebergreifend | niedrig | "sich bewerben" (B1) doppelt zu tmv071 "sich bewerben (um etwas)" (B1, inhalte-themen.js) | Eintrag streichen oder mit tmv071 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv1899 | inhalte-vokabeln.js | B1 | de | duplikat_in_datei | niedrig | "fernsehen" (B1) doppelt zu sv1406 "fernsehen" (B1, inhalte-vokabeln.js) | Eintrag streichen oder mit sv1406 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv1912 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | "Symbole" doppelt zum Eintrag sv1911 "das Symbol" | Eintrag mit sv1911 zusammenführen (Pluralangabe dort ergänzen) |  |
| sv2066 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | "verursachte" doppelt zum Eintrag sv2065 "verursachen" | mit sv2065 zusammenführen |  |
| sv2068 | inhalte-vokabeln.js | B1 | de | duplikat_im_batch | niedrig | "verurteilt" doppelt zum Eintrag sv2067 "verurteilen" | mit sv2067 zusammenführen |  |
| sv2079 | inhalte-vokabeln.js | B1 | de | duplikat_in_datei | niedrig | "eine Frage stellen" (B1) doppelt zu sv1057 "eine Frage stellen" (B1, inhalte-vokabeln.js) | Eintrag streichen oder mit sv1057 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv2142 | inhalte-vokabeln.js | B1 | de | duplikat_in_datei | niedrig | "frei sein" (B1) doppelt zu sv1658 "frei sein" (B1, inhalte-vokabeln.js) | Eintrag streichen oder mit sv1658 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sv2149 | inhalte-vokabeln.js | B1 | de | sonstiges | niedrig | Kopfwort "York" ist ein englischer Ortsname ohne Lernwert für Deutsch (vermutlich Rest aus "New York") | Eintrag streichen |  |
| sv2173 | inhalte-vokabeln.js | B1 | de | duplikat_in_datei | niedrig | "zu sein" (B1) doppelt zu sv1399 "zu sein" (B1, inhalte-vokabeln.js) | Eintrag streichen oder mit sv1399 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sw0078 | inhalte-vokabeln-b2.js | B2 | de | duplikat_dateiuebergreifend | niedrig | "Arbeitsbedingungen" (B2) doppelt zu sv1216 "die Arbeitsbedingungen (Pl.)" (B1, inhalte-vokabeln.js) | Eintrag streichen oder mit sv1216 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sw0081 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | niedrig | Adjektiv "arbeitsfrei" als Nomen "day off" übersetzt (falsche Wortart) | work-free; off (work) – e.g. "Monday is a day off" | bestätigt |
| sw0129 | inhalte-vokabeln-b2.js | B2 | de | duplikat_dateiuebergreifend | niedrig | "aufwärmen" (B2) doppelt zu tmv197 "sich aufwärmen" (B1, inhalte-themen.js) | Eintrag streichen oder mit tmv197 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sw0203 | inhalte-vokabeln-b2.js | B2 | de | duplikat_dateiuebergreifend | niedrig | "Befinden" (B2) doppelt zu sv1799 "sich befinden" (B1, inhalte-vokabeln.js) | Eintrag streichen oder mit sv1799 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sw0405 | inhalte-vokabeln-b2.js | B2 | de | duplikat_im_batch | niedrig | "eingebracht" ist dasselbe Lemma wie "einbringen" (sw0399) im selben Batch | Eintrag sw0405 entfernen, Beispielsatz ggf. als zweiten Satz bei sw0399 übernehmen |  |
| sw0406 | inhalte-vokabeln-b2.js | B2 | de | duplikat_im_batch | niedrig | "eingegangen" ist dasselbe Lemma wie "eingehen" (sw0407) im selben Batch | Eintrag sw0406 entfernen, Beispielsatz ggf. als zweiten Satz bei sw0407 übernehmen |  |
| sw0408 | inhalte-vokabeln-b2.js | B2 | de | duplikat_im_batch | niedrig | "eingegeben" ist dasselbe Lemma wie "eingeben" (sw0404) im selben Batch | Eintrag sw0408 entfernen, Beispielsatz ggf. als zweiten Satz bei sw0404 übernehmen |  |
| sw0410 | inhalte-vokabeln-b2.js | B2 | de | duplikat_im_batch | niedrig | "eingeworfen" ist dasselbe Lemma wie "einwerfen" (sw0430) im selben Batch | Eintrag sw0410 entfernen, Beispielsatz ggf. als zweiten Satz bei sw0430 übernehmen |  |
| sw0686 | inhalte-vokabeln-b2.js | B2 | de | duplikat_in_datei | niedrig | "sich benehmen" (B2) doppelt zu sw0223 "Benehmen" (B2, inhalte-vokabeln-b2.js) | Eintrag streichen oder mit sw0223 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sw0816 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | niedrig | Englisch "catholic" klein geschrieben bedeutet "allumfassend/vielseitig"; für die Konfession ist "Catholic" groß zu schreiben. | Catholic |  |
| sw0929 | inhalte-vokabeln-b2.js | B2 | en | uebersetzung_en | niedrig | "short-term" passt nicht zur Bedeutung im Beispielsatz ("kurzfristig abgesagt" = cancelled at short notice). | short-term / at short notice |  |
| sw1045 | inhalte-vokabeln-b2.js | B2 | ex | sonstiges | niedrig | "Die Ministerpräsidentin von Baden-Württemberg hat angekündigt ..." schreibt einem realen Amt eine Frau und eine konkrete Ankündigung zu; Baden-Württemberg hat (Stand 2026) einen männlichen Ministerpräsidenten | Die Ministerpräsidentin hat angekündigt, den sozialen Wohnungsbau stärker zu fördern. |  |
| sw1336 | inhalte-vokabeln-b2.js | B2 | de | duplikat_in_datei | niedrig | "sich herumschlagen" (B2) doppelt zu sw0707 "herumschlagen" (B2, inhalte-vokabeln-b2.js) | Eintrag streichen oder mit sw0707 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sw1383 | inhalte-vokabeln-b2.js | B2 | de | duplikat_in_datei | niedrig | "sich ergeben" (B2) doppelt zu sw0462 "ergeben" (B2, inhalte-vokabeln-b2.js) | Eintrag streichen oder mit sw0462 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sw1531 | inhalte-vokabeln-b2.js | B2 | de | duplikat_dateiuebergreifend | niedrig | "treffen" (B2) doppelt zu tmv093 "sich treffen" (A2, inhalte-themen.js) | Eintrag streichen oder mit tmv093 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sw1655 | inhalte-vokabeln-b2.js | B2 | ex | sonstiges | niedrig | Logikfehler: „Der Juwelier hat den alten Ring … neu vergolden lassen“ – der Juwelier vergoldet selbst; „vergolden lassen“ passt nur zum Kunden. | Ich habe den alten Ring meiner Großmutter beim Juwelier neu vergolden lassen, damit er wieder glänzt. |  |
| sw1665 | inhalte-vokabeln-b2.js | B2 | de | duplikat_dateiuebergreifend | niedrig | "verlaufen" (B2) doppelt zu sv1810 "sich verlaufen" (B1, inhalte-vokabeln.js) | Eintrag streichen oder mit sv1810 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sw1840 | inhalte-vokabeln-b2.js | B2 | de | duplikat_dateiuebergreifend | niedrig | "Zugabe" (B2) doppelt zu tmv267 "die Zugabe (Zugaben)" (B1, inhalte-themen.js) | Eintrag streichen oder mit tmv267 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx0022 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | niedrig | "retrieval process" ist die IT-Bedeutung; im Satz geht es um den Abruf bewilligter Fördermittel (Auszahlung) | drawdown process (of funds) / retrieval process | bestätigt |
| sx0108 | inhalte-vokabeln-c1.js | C1 | ex | duplikat_im_batch | niedrig | Beispielsatz nahezu identisch mit sx0131 (angesichts): "... der stetig/stark gestiegenen Mieten überlegen viele Familien ..., aus der Innenstadt ins (günstigere) Umland zu ziehen"; beide Präpositionen mit gleicher Übersetzung "in view of" | Für sx0108 anderen Satz wählen, z. B. "In Anbetracht der späten Stunde brechen wir die Sitzung hier ab." |  |
| sx0154 | inhalte-vokabeln-c1.js | C1 | de | duplikat_dateiuebergreifend | niedrig | "anmelden" (C1) doppelt zu tmv193 "sich anmelden" (A2, inhalte-themen.js) | Eintrag streichen oder mit tmv193 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx0241 | inhalte-vokabeln-c1.js | C1 | de | duplikat_im_batch | niedrig | Gleiches Lexem wie sx0250 "aufgießen" (beide Sätze zu bitterem Tee/Kaffee durch zu heißes Wasser) | Einen der beiden Einträge streichen |  |
| sx0249 | inhalte-vokabeln-c1.js | C1 | ex | duplikat_im_batch | niedrig | Gleiches Lexem wie sx0276 "aufwerfen", beide Sätze mit "die Frage aufgeworfen, ob/wer …" | Einen der beiden Einträge streichen |  |
| sx0590 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | niedrig | Kopfwort "breitmachen" ohne Reflexivpronomen; in der Bedeutung "to spread out, take up space" nur reflexiv gebräuchlich (Satz: "machte sich ... breit") | sich breitmachen |  |
| sx0618 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | niedrig | "der Büroschlaf" ist kein lexikalisiertes Wort (nicht im Duden); Lernende lernen eine Ad-hoc-Bildung als Vokabel | Kopfwort "das Nickerchen" (en "nap") oder "der Powernap"; Satz: "... rettete ihn nur ein kurzes Nickerchen in der Mittagspause." |  |
| sx0656 | inhalte-vokabeln-c1.js | C1 | de | duplikat_in_datei | niedrig | "sich ausdenken" (C1) doppelt zu sx0288 "ausdenken" (C1, inhalte-vokabeln-c1.js) | Eintrag streichen oder mit sx0288 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx0659 | inhalte-vokabeln-c1.js | C1 | de | duplikat_im_batch | niedrig | "dagestanden" ist dasselbe Lemma wie "dastehen" (sx0658) im selben Batch | Eintrag sx0659 streichen oder als Wendung "dumm dastehen" umwidmen |  |
| sx0660 | inhalte-vokabeln-c1.js | C1 | de | rechtschreibung | niedrig | Kopfwort "dahinter/stecken" mit Schrägstrich; korrekt zusammengeschrieben, zudem uneinheitlich zu "dastehen", "danebenstellen", "davonlaufen" im selben Batch | "dahinterstecken" |  |
| sx0674 | inhalte-vokabeln-c1.js | C1 | ex | grammatik | niedrig | "besteht ... auf dasselbe Zimmer" – "bestehen auf" steht standardsprachlich mit Dativ; Akkusativ nur seltene Variante | "... und besteht jeden Sommer auf demselben Zimmer mit Seeblick." |  |
| sx0679 | inhalte-vokabeln-c1.js | C1 | de | rechtschreibung | niedrig | Kopfwort "dazu/gehören" mit Schrägstrich; korrekt zusammengeschrieben, uneinheitlich zur übrigen Notation trennbarer Verben | "dazugehören" |  |
| sx0764 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | niedrig | Kopfwort "durchbeißen" ohne Reflexivpronomen; die angegebene Bedeutung "to persevere" gibt es nur reflexiv (Satz: "hat sich durchgebissen"), ohne "sich" heißt es "durch etwas beißen" | sich durchbeißen |  |
| sx0764 | inhalte-vokabeln-c1.js | C1 | de | duplikat_in_datei | niedrig | "durchbeißen" (C1) doppelt zu sx0421 "sich durchbeißen" (C1, inhalte-vokabeln-c1.js) | Eintrag streichen oder mit sx0421 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx0812 | inhalte-vokabeln-c1.js | C1 | de | duplikat_im_batch | niedrig | "eingetroffen" ist dasselbe Lexem wie sx0847 "eintreffen", beide Beispielsätze behandeln dasselbe Szenario (Paket laut Sendungsverfolgung) | sx0812 streichen oder durch anderes Wort ersetzen |  |
| sx0830 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | niedrig | Kopfwort "einmischen" ohne Reflexivpronomen; die Bedeutung "to interfere, meddle" ist reflexiv (Satz: "sich ... einmischen") | sich einmischen (in) |  |
| sx0880 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | niedrig | Kopfwort "engagieren" ohne Reflexivpronomen; die angegebene Bedeutung "to get involved, commit" gilt nur reflexiv (Satz: "engagiert sich"), ohne "sich" heißt es "anstellen, verpflichten" | sich engagieren (für) |  |
| sx0882 | inhalte-vokabeln-c1.js | C1 | de | duplikat_dateiuebergreifend | niedrig | "das Enkelkind" (C1) doppelt zu tmv009 "das Enkelkind (der Enkel)" (B1, inhalte-themen.js) | Eintrag streichen oder mit tmv009 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx0900 | inhalte-vokabeln-c1.js | C1 | de | duplikat_dateiuebergreifend | niedrig | "entspannen" (C1) doppelt zu tmv098 "sich entspannen" (B1, inhalte-themen.js) | Eintrag streichen oder mit tmv098 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx1916 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | niedrig | Kopfwort "die Kräuter" steht im Plural, ohne dass das markiert ist; Lernende können "die" für das feminine Genus im Singular halten (Singular: das Kraut). | "das Kraut, die Kräuter" oder "die Kräuter (Pl.)" |  |
| sx2192 | inhalte-vokabeln-c1.js | C1 | de | kopfwort_zusammengeklebt | niedrig | Kopfwort "miss/brauchen" enthält einen Schrägstrich (Trennhilfe/Artefakt) statt der Grundform | missbrauchen | bestätigt |
| sx2280 | inhalte-vokabeln-c1.js | C1 | en | uebersetzung_en | niedrig | en nur wörtlich "eye of a needle", der Satz verwendet "Nadelöhr" im übertragenen Sinn (Engpass im Verkehr) | eye of a needle; bottleneck | bestätigt |
| sx2590 | inhalte-vokabeln-c1.js | C1 | de | duplikat_im_batch | niedrig | "die Ressourcen" ist nur die Pluralform von "die Ressource" (sx2589) im selben Batch | Eintrag streichen oder mit sx2589 zusammenführen (die Ressource, pl. die Ressourcen) |  |
| sx2732 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | niedrig | Kopfwort "schwertun" ohne das obligatorische Reflexivpronomen, obwohl die Datei sonst "sich ..." angibt und der Satz "Ich tue mich ... schwer" nutzt | sich schwer/tun (mit etwas) |  |
| sx2775 | inhalte-vokabeln-c1.js | C1 | de | duplikat_dateiuebergreifend | niedrig | "sich distanzieren" (C1) doppelt zu sw0359 "distanzieren" (B2, inhalte-vokabeln-b2.js) | Eintrag streichen oder mit sw0359 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx2776 | inhalte-vokabeln-c1.js | C1 | de | duplikat_in_datei | niedrig | "sich engagieren" (C1) doppelt zu sx0880 "engagieren" (C1, inhalte-vokabeln-c1.js) | Eintrag streichen oder mit sx0880 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx2782 | inhalte-vokabeln-c1.js | C1 | de | duplikat_in_datei | niedrig | "sich orientieren" (C1) doppelt zu sx2375 "orientieren" (C1, inhalte-vokabeln-c1.js) | Eintrag streichen oder mit sx2375 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx3057 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | niedrig | Reflexives Verb ohne "sich" angegeben: "totlachen" (nur reflexiv gebräuchlich, Satz nutzt "mich … totgelacht") | sich totlachen |  |
| sx3089 | inhalte-vokabeln-c1.js | C1 | de | sonstiges | niedrig | Reflexives Verb ohne "sich" angegeben: "tummeln" (Satz nutzt "tummeln sich") | sich tummeln |  |
| sx3089 | inhalte-vokabeln-c1.js | C1 | de | duplikat_in_datei | niedrig | "tummeln" (C1) doppelt zu sx2786 "sich tummeln" (C1, inhalte-vokabeln-c1.js) | Eintrag streichen oder mit sx2786 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx3119 | inhalte-vokabeln-c1.js | C1 | de | duplikat_im_batch | niedrig | "überrannte" ist dasselbe Lemma wie "überrennen" (sx3121) | sx3119 streichen |  |
| sx3125 | inhalte-vokabeln-c1.js | C1 | de | duplikat_im_batch | niedrig | "überschritt" ist dasselbe Lemma wie "überschreiten" (sx3124) | sx3125 streichen |  |
| sx3127 | inhalte-vokabeln-c1.js | C1 | de | duplikat_im_batch | niedrig | "übersprang" ist dasselbe Lemma wie "überspringen" (sx3128) | sx3127 streichen |  |
| sx3333 | inhalte-vokabeln-c1.js | C1 | de | duplikat_im_batch | niedrig | "verhalf" ist dasselbe Lemma wie sx3341 "verhelfen" | Einen der beiden Einträge streichen oder zusammenführen |  |
| sx3385 | inhalte-vokabeln-c1.js | C1 | de | duplikat_in_datei | niedrig | "versammeln" (C1) doppelt zu sx2787 "sich versammeln" (C1, inhalte-vokabeln-c1.js) | Eintrag streichen oder mit sx2787 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx3386 | inhalte-vokabeln-c1.js | C1 | de | duplikat_im_batch | niedrig | "verschlang" ist dasselbe Lemma wie sx3388 "verschlingen" | Einen der beiden Einträge streichen oder zusammenführen |  |
| sx3507 | inhalte-vokabeln-c1.js | C1 | de | duplikat_in_datei | niedrig | "hinauswachsen (über)" (C1) doppelt zu sx1544 "hinauswachsen" (C1, inhalte-vokabeln-c1.js) | Eintrag streichen oder mit sx1544 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx3768 | inhalte-vokabeln-c1.js | C1 | de | duplikat_in_datei | niedrig | "zurückziehen" (C1) doppelt zu sx3731 "sich zurückziehen" (C1, inhalte-vokabeln-c1.js) | Eintrag streichen oder mit sx3731 zusammenführen (höheres Niveau behalten nur bei anderer Bedeutung) |  |
| sx3793 | inhalte-vokabeln-c1.js | C1 | ex | sonstiges | niedrig | Sachlich irreführend: "gehört der verschmutzte Joghurtbecher in den Restmüll" – Verpackungen wie Joghurtbecher gehören auch mit Resten (löffelrein, ungespült) in die gelbe Tonne | Im Zweifelsfall fragt man beim örtlichen Entsorger nach, in welche Tonne ein Gegenstand gehört. |  |

## Methode

58 Batches à 150 Items (8.606 Items: alle Vokabeln aus sechs Dateien plus Übersetzen, Lücken, Satzbau, Dialoge, Hörverstehen, Paare, Konjugation, Grammatik; ohne Komplimente) je ein Opus-Agent mit adversarialer Selbstprüfung. Dateiübergreifende Duplikate und doppelte IDs per Skript (Kopfwort normiert ohne Artikel/Klammern; Homonyme mit anderem Genus ausgenommen). Integrator: Opus-Agent prüft die Befunde der Schwere „hoch“ gegen und wählt die 20 schwersten. Keine Änderung an den Datendateien.
