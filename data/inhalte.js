/* =====================================================================
   Cœur·Lingo — Lehrplan (Deutsch A2→C1, Erklärsprache Französisch)
   Schwerpunkt: aktive Produktion. Jedes Item: id (stabil, für SRS) + lvl.
   Erweiterbar: einfach Items mit neuer id + passendem lvl ergänzen.
   ===================================================================== */
window.INHALTE = {
  niveaus:["A2","B1","B2","C1"],

  /* ---------- Wortschatz (flashcards FR→DE, +TTS) ---------- */
  vokabeln: [
    {id:"v01",lvl:"A2",de:"die Anmeldung",fr:"l'inscription / l'enregistrement",ex:"Ich muss die Anmeldung beim Amt machen.",exFr:"Je dois faire l'inscription à l'administration."},
    {id:"v02",lvl:"A2",de:"der Termin",fr:"le rendez-vous",ex:"Ich habe morgen einen Termin beim Arzt.",exFr:"J'ai un rendez-vous chez le médecin demain."},
    {id:"v03",lvl:"A2",de:"die Rechnung",fr:"la facture / l'addition",ex:"Können wir bitte die Rechnung haben?",exFr:"Pouvons-nous avoir l'addition ?"},
    {id:"v04",lvl:"A2",de:"die Quittung",fr:"le reçu / le ticket",ex:"Brauchen Sie eine Quittung?",exFr:"Avez-vous besoin d'un reçu ?"},
    {id:"v05",lvl:"A2",de:"die Größe",fr:"la taille",ex:"Haben Sie das eine Größe größer?",exFr:"L'avez-vous une taille au-dessus ?"},
    {id:"v06",lvl:"A2",de:"umtauschen",fr:"échanger (un achat)",ex:"Kann ich die Hose umtauschen?",exFr:"Puis-je échanger le pantalon ?"},
    {id:"v07",lvl:"A2",de:"die Haltestelle",fr:"l'arrêt (bus/tram)",ex:"Die Haltestelle ist gleich da vorne.",exFr:"L'arrêt est juste là devant."},
    {id:"v08",lvl:"A2",de:"umsteigen",fr:"changer (de train/bus)",ex:"Du musst in Mannheim umsteigen.",exFr:"Tu dois changer à Mannheim."},
    {id:"v09",lvl:"A2",de:"die Verspätung",fr:"le retard",ex:"Der Zug hat zehn Minuten Verspätung.",exFr:"Le train a dix minutes de retard."},
    {id:"v10",lvl:"A2",de:"bestellen",fr:"commander",ex:"Ich möchte gern bestellen.",exFr:"Je voudrais commander."},
    {id:"v11",lvl:"A2",de:"empfehlen",fr:"recommander",ex:"Was können Sie mir empfehlen?",exFr:"Que pouvez-vous me recommander ?"},
    {id:"v12",lvl:"A2",de:"satt",fr:"rassasié(e)",ex:"Danke, ich bin satt.",exFr:"Merci, je suis rassasiée."},
    {id:"v13",lvl:"A2",de:"das Trinkgeld",fr:"le pourboire",ex:"Lass uns ein Trinkgeld geben.",exFr:"Laissons un pourboire."},
    {id:"v14",lvl:"A2",de:"die Wohnung",fr:"l'appartement",ex:"Wir suchen eine größere Wohnung.",exFr:"Nous cherchons un appartement plus grand."},
    {id:"v15",lvl:"A2",de:"die Miete",fr:"le loyer",ex:"Die Miete ist am Monatsanfang fällig.",exFr:"Le loyer est dû en début de mois."},
    {id:"v16",lvl:"A2",de:"der Nachbar",fr:"le voisin",ex:"Unser Nachbar ist sehr nett.",exFr:"Notre voisin est très gentil."},
    {id:"v17",lvl:"A2",de:"die Heizung",fr:"le chauffage",ex:"Die Heizung funktioniert nicht.",exFr:"Le chauffage ne fonctionne pas."},
    {id:"v18",lvl:"A2",de:"müde",fr:"fatigué(e)",ex:"Ich bin heute total müde.",exFr:"Je suis totalement fatiguée aujourd'hui."},
    {id:"v19",lvl:"A2",de:"die Erkältung",fr:"le rhume",ex:"Ich habe eine Erkältung.",exFr:"J'ai un rhume."},
    {id:"v20",lvl:"A2",de:"sich ausruhen",fr:"se reposer",ex:"Du solltest dich ausruhen.",exFr:"Tu devrais te reposer."},
    {id:"v21",lvl:"A2",de:"sich freuen auf",fr:"avoir hâte de",ex:"Ich freue mich auf das Wochenende.",exFr:"J'ai hâte du week-end."},
    {id:"v22",lvl:"A2",de:"Lust haben auf",fr:"avoir envie de",ex:"Hast du Lust auf einen Kaffee?",exFr:"As-tu envie d'un café ?"},
    {id:"v23",lvl:"A2",de:"absagen",fr:"annuler / décliner",ex:"Tut mir leid, ich muss absagen.",exFr:"Désolée, je dois annuler."},
    {id:"v24",lvl:"A2",de:"stolz",fr:"fier / fière",ex:"Ich bin stolz auf dich.",exFr:"Je suis fière de toi."},
    {id:"v25",lvl:"A2",de:"üben",fr:"s'entraîner / pratiquer",ex:"Ich übe jeden Tag Deutsch.",exFr:"Je pratique l'allemand tous les jours."},
    {id:"v26",lvl:"A2",de:"wiederholen",fr:"répéter",ex:"Können Sie das bitte wiederholen?",exFr:"Pouvez-vous répéter, s'il vous plaît ?"},
    {id:"v27",lvl:"A2",de:"bedeuten",fr:"signifier / vouloir dire",ex:"Was bedeutet das?",exFr:"Qu'est-ce que ça veut dire ?"},
    {id:"v28",lvl:"A2",de:"besorgen",fr:"se procurer / aller chercher",ex:"Ich besorge noch Brot für morgen.",exFr:"Je vais chercher du pain pour demain."},

    {id:"v29",lvl:"B1",de:"die Überweisung",fr:"le virement",ex:"Ich mache die Überweisung heute Abend.",exFr:"Je fais le virement ce soir."},
    {id:"v30",lvl:"B1",de:"kündigen",fr:"résilier / démissionner",ex:"Ich möchte den Vertrag kündigen.",exFr:"Je voudrais résilier le contrat."},
    {id:"v31",lvl:"B1",de:"beantragen",fr:"faire une demande de",ex:"Wir müssen das Kindergeld beantragen.",exFr:"Nous devons demander les allocations."},
    {id:"v32",lvl:"B1",de:"die Frist",fr:"le délai",ex:"Die Frist läuft nächste Woche ab.",exFr:"Le délai expire la semaine prochaine."},
    {id:"v33",lvl:"B1",de:"die Bescheinigung",fr:"l'attestation",ex:"Ich brauche eine Bescheinigung vom Arzt.",exFr:"J'ai besoin d'une attestation du médecin."},
    {id:"v34",lvl:"B1",de:"verschieben",fr:"reporter / décaler",ex:"Können wir den Termin verschieben?",exFr:"Pouvons-nous reporter le rendez-vous ?"},
    {id:"v35",lvl:"B1",de:"die Unterlagen",fr:"les documents / pièces",ex:"Bringen Sie bitte alle Unterlagen mit.",exFr:"Apportez tous les documents."},
    {id:"v36",lvl:"B1",de:"erledigen",fr:"régler / accomplir",ex:"Ich muss noch etwas erledigen.",exFr:"Je dois encore régler quelque chose."},
    {id:"v37",lvl:"B1",de:"sich kümmern um",fr:"s'occuper de",ex:"Ich kümmere mich darum.",exFr:"Je m'en occupe."},
    {id:"v38",lvl:"B1",de:"die Nebenkosten",fr:"les charges",ex:"Sind die Nebenkosten inklusive?",exFr:"Les charges sont-elles comprises ?"},
    {id:"v39",lvl:"B1",de:"die Beschwerde",fr:"la réclamation",ex:"Ich möchte eine Beschwerde machen.",exFr:"Je voudrais faire une réclamation."},
    {id:"v40",lvl:"B1",de:"vorschlagen",fr:"proposer / suggérer",ex:"Ich schlage vor, wir treffen uns um acht.",exFr:"Je propose qu'on se retrouve à huit heures."},
    {id:"v41",lvl:"B1",de:"klappen",fr:"marcher / fonctionner (fam.)",ex:"Hoffentlich klappt es morgen.",exFr:"J'espère que ça marchera demain."},
    {id:"v42",lvl:"B1",de:"die Stimmung",fr:"l'ambiance / l'humeur",ex:"Die Stimmung war super.",exFr:"L'ambiance était super."},
    {id:"v43",lvl:"B1",de:"anstrengend",fr:"fatigant / éprouvant",ex:"Der Tag war sehr anstrengend.",exFr:"La journée a été très éprouvante."},
    {id:"v44",lvl:"B1",de:"sich gewöhnen an",fr:"s'habituer à",ex:"Ich gewöhne mich langsam an Deutschland.",exFr:"Je m'habitue peu à peu à l'Allemagne."},
    {id:"v45",lvl:"B1",de:"die Gewohnheit",fr:"l'habitude",ex:"Das ist eine gute Gewohnheit.",exFr:"C'est une bonne habitude."},
    {id:"v46",lvl:"B1",de:"der Fortschritt",fr:"le progrès",ex:"Du machst große Fortschritte!",exFr:"Tu fais de grands progrès !"},
    {id:"v47",lvl:"B1",de:"trotzdem",fr:"quand même / malgré tout",ex:"Es ist schwer, aber ich mache trotzdem weiter.",exFr:"C'est dur, mais je continue quand même."},
    {id:"v48",lvl:"B1",de:"sich trauen",fr:"oser",ex:"Ich traue mich, Deutsch zu sprechen.",exFr:"J'ose parler allemand."},
    {id:"v49",lvl:"B1",de:"verlangen",fr:"exiger / réclamer",ex:"Der Vermieter verlangt eine Kaution.",exFr:"Le propriétaire exige une caution."},
    {id:"v50",lvl:"B1",de:"sich beschweren",fr:"se plaindre",ex:"Ich möchte mich über den Lärm beschweren.",exFr:"Je voudrais me plaindre du bruit."},
    {id:"v51",lvl:"B1",de:"die Voraussetzung",fr:"la condition (préalable)",ex:"Gute Deutschkenntnisse sind eine Voraussetzung.",exFr:"De bonnes connaissances en allemand sont une condition."},
    {id:"v52",lvl:"B1",de:"zuständig",fr:"compétent / responsable (pour)",ex:"Wer ist dafür zuständig?",exFr:"Qui est responsable de cela ?"},

    {id:"v53",lvl:"B2",de:"die Auseinandersetzung",fr:"la confrontation / le débat",ex:"Es kam zu einer heftigen Auseinandersetzung.",exFr:"Il y a eu une vive confrontation."},
    {id:"v54",lvl:"B2",de:"in Erwägung ziehen",fr:"envisager / prendre en considération",ex:"Wir ziehen einen Umzug in Erwägung.",exFr:"Nous envisageons un déménagement."},
    {id:"v55",lvl:"B2",de:"die Voraussicht",fr:"la prévoyance / l'anticipation",ex:"Aller Voraussicht nach klappt es.",exFr:"Selon toute prévision, ça marchera."},
    {id:"v56",lvl:"B2",de:"sich auswirken auf",fr:"avoir un impact sur",ex:"Das wirkt sich stark auf die Kosten aus.",exFr:"Cela a un fort impact sur les coûts."},
    {id:"v57",lvl:"B2",de:"die Rücksicht",fr:"l'égard / la considération",ex:"Bitte nimm Rücksicht auf die Nachbarn.",exFr:"Aie des égards pour les voisins."},
    {id:"v58",lvl:"B2",de:"voraussetzen",fr:"présupposer / requérir",ex:"Die Stelle setzt Erfahrung voraus.",exFr:"Le poste requiert de l'expérience."},
    {id:"v59",lvl:"B2",de:"nachvollziehen",fr:"comprendre / suivre (un raisonnement)",ex:"Ich kann deine Entscheidung nachvollziehen.",exFr:"Je peux comprendre ta décision."},
    {id:"v60",lvl:"B2",de:"die Herausforderung",fr:"le défi",ex:"Das war eine echte Herausforderung.",exFr:"C'était un vrai défi."},
    {id:"v61",lvl:"B2",de:"beanspruchen",fr:"revendiquer / solliciter",ex:"Das beansprucht viel Zeit.",exFr:"Cela demande beaucoup de temps."},
    {id:"v62",lvl:"B2",de:"die Zuverlässigkeit",fr:"la fiabilité",ex:"Ihre Zuverlässigkeit ist beeindruckend.",exFr:"Sa fiabilité est impressionnante."},

    {id:"v63",lvl:"C1",de:"der Ermessensspielraum",fr:"la marge d'appréciation",ex:"Die Behörde hat einen großen Ermessensspielraum.",exFr:"L'administration a une grande marge d'appréciation."},
    {id:"v64",lvl:"C1",de:"die Beiläufigkeit",fr:"la nonchalance / le caractère incident",ex:"Er erwähnte es nur in aller Beiläufigkeit.",exFr:"Il ne l'a mentionné qu'incidemment."},
    {id:"v65",lvl:"C1",de:"sich anbahnen",fr:"se profiler / s'amorcer",ex:"Eine Veränderung bahnt sich an.",exFr:"Un changement se profile."},
    {id:"v66",lvl:"C1",de:"die Tragweite",fr:"la portée / l'ampleur",ex:"Die Tragweite der Entscheidung war enorm.",exFr:"La portée de la décision était énorme."},
    {id:"v67",lvl:"C1",de:"unabdingbar",fr:"indispensable / impératif",ex:"Vertrauen ist unabdingbar.",exFr:"La confiance est indispensable."},
    {id:"v68",lvl:"C1",de:"die Gepflogenheit",fr:"l'usage / la coutume",ex:"Das entspricht den hiesigen Gepflogenheiten.",exFr:"Cela correspond aux usages locaux."}
  ],

  /* ---------- Lückentexte (MC) ---------- */
  luecken: [
    {id:"l01",lvl:"A2",satz:"Ich ___ morgen einen Termin beim Arzt.",options:["habe","bin","mache"],answer:0,fr:"« avoir » un rendez-vous → ich habe einen Termin."},
    {id:"l02",lvl:"A2",satz:"Können wir bitte die ___ haben?",options:["Rechnung","Termin","Frist"],answer:0,fr:"Au restaurant : « die Rechnung » (l'addition)."},
    {id:"l03",lvl:"A2",satz:"Du musst in Mannheim ___.",options:["aussteigen","umsteigen","einsteigen"],answer:1,fr:"Changer de train = umsteigen."},
    {id:"l04",lvl:"A2",satz:"Ich ___ mich auf das Wochenende.",options:["freue","freut","frei"],answer:0,fr:"sich freuen auf : ich freue mich."},
    {id:"l05",lvl:"A2",satz:"Hast du ___ auf einen Kaffee?",options:["Lust","Glück","Zeit"],answer:0,fr:"Lust haben auf = avoir envie de."},
    {id:"l06",lvl:"A2",satz:"Die Heizung ___ nicht.",options:["funktioniert","funktionierst","funktion"],answer:0,fr:"3e pers. sing. : sie funktioniert."},
    {id:"l07",lvl:"A2",satz:"Ich bin heute total ___.",options:["müde","mude","müder"],answer:0,fr:"fatiguée = müde."},
    {id:"l08",lvl:"B1",satz:"Tut mir leid, ich muss den Termin ___.",options:["absagen","ansagen","aussagen"],answer:0,fr:"Annuler un rdv = absagen."},
    {id:"l09",lvl:"B1",satz:"Ich gewöhne mich langsam ___ Deutschland.",options:["an","auf","über"],answer:0,fr:"sich gewöhnen AN etwas."},
    {id:"l10",lvl:"B1",satz:"Wer ist dafür ___?",options:["zuständig","zuständigt","zustand"],answer:0,fr:"zuständig sein für = être responsable de."},
    {id:"l11",lvl:"B1",satz:"Ich möchte mich über den Lärm ___.",options:["beschweren","beschwert","schwer"],answer:0,fr:"sich beschweren über = se plaindre de."},
    {id:"l12",lvl:"B1",satz:"Gute Deutschkenntnisse sind eine ___.",options:["Voraussetzung","Vorsicht","Vorstellung"],answer:0,fr:"die Voraussetzung = la condition préalable."},
    {id:"l13",lvl:"B2",satz:"Das wirkt sich stark ___ die Kosten aus.",options:["auf","an","über"],answer:0,fr:"sich auswirken AUF (+Akk) = avoir un impact sur."},
    {id:"l14",lvl:"B2",satz:"Ich kann deine Entscheidung gut ___.",options:["nachvollziehen","nachsehen","nachgehen"],answer:0,fr:"nachvollziehen = comprendre/suivre."},
    {id:"l15",lvl:"B2",satz:"Wir ziehen einen Umzug in ___.",options:["Erwägung","Bewegung","Ordnung"],answer:0,fr:"in Erwägung ziehen = envisager."},
    {id:"l16",lvl:"C1",satz:"Die ___ der Entscheidung war enorm.",options:["Tragweite","Trageweise","Tragezeit"],answer:0,fr:"die Tragweite = la portée."},
    {id:"l17",lvl:"C1",satz:"Vertrauen ist für uns ___.",options:["unabdingbar","unabhängig","unendlich"],answer:0,fr:"unabdingbar = indispensable."}
  ],

  /* ---------- Satzbau (ordnen) ---------- */
  satzbau: [
    {id:"s01",lvl:"A2",woerter:["Ich","habe","morgen","einen","Termin"],loesung:"Ich habe morgen einen Termin",fr:"J'ai un rendez-vous demain."},
    {id:"s02",lvl:"A2",woerter:["Können","wir","bitte","die","Rechnung","haben"],loesung:"Können wir bitte die Rechnung haben",fr:"Pouvons-nous avoir l'addition ?"},
    {id:"s03",lvl:"A2",woerter:["Ich","freue","mich","auf","das","Wochenende"],loesung:"Ich freue mich auf das Wochenende",fr:"J'ai hâte du week-end."},
    {id:"s04",lvl:"A2",woerter:["Sprechen","Sie","bitte","langsam"],loesung:"Sprechen Sie bitte langsam",fr:"Parlez lentement, s'il vous plaît."},
    {id:"s05",lvl:"A2",woerter:["Hast","du","Lust","auf","einen","Kaffee"],loesung:"Hast du Lust auf einen Kaffee",fr:"As-tu envie d'un café ?"},
    {id:"s06",lvl:"B1",woerter:["Ich","muss","den","Termin","leider","absagen"],loesung:"Ich muss den Termin leider absagen",fr:"Je dois malheureusement annuler le rendez-vous."},
    {id:"s07",lvl:"B1",woerter:["Können","wir","den","Termin","verschieben"],loesung:"Können wir den Termin verschieben",fr:"Pouvons-nous reporter le rendez-vous ?"},
    {id:"s08",lvl:"B1",woerter:["Ich","schlage","vor","dass","wir","uns","um","acht","treffen"],loesung:"Ich schlage vor dass wir uns um acht treffen",fr:"Je propose qu'on se retrouve à huit heures."},
    {id:"s09",lvl:"B1",woerter:["Ich","kümmere","mich","gleich","darum"],loesung:"Ich kümmere mich gleich darum",fr:"Je m'en occupe tout de suite."},
    {id:"s10",lvl:"B2",woerter:["Das","wirkt","sich","stark","auf","die","Kosten","aus"],loesung:"Das wirkt sich stark auf die Kosten aus",fr:"Cela a un fort impact sur les coûts."},
    {id:"s11",lvl:"B2",woerter:["Wir","ziehen","einen","Umzug","ernsthaft","in","Erwägung"],loesung:"Wir ziehen einen Umzug ernsthaft in Erwägung",fr:"Nous envisageons sérieusement un déménagement."},
    {id:"s12",lvl:"C1",woerter:["Mir","ist","durchaus","bewusst","dass","es","schwierig","ist"],loesung:"Mir ist durchaus bewusst dass es schwierig ist",fr:"Je suis tout à fait conscient que c'est difficile."}
  ],

  /* ---------- Dialoge (hören → nachsprechen) ---------- */
  dialoge: [
    {id:"d01",lvl:"A2",titel:"Beim Bäcker",szene:"À la boulangerie",zeilen:[
      {de:"Guten Tag, was darf es sein?",fr:"Bonjour, ce sera quoi ?"},
      {de:"Ich hätte gern zwei Brötchen, bitte.",fr:"Je voudrais deux petits pains."},
      {de:"Sonst noch etwas?",fr:"Et avec ceci ?"},
      {de:"Nein danke, das ist alles.",fr:"Non merci, c'est tout."},
      {de:"Das macht ein Euro vierzig.",fr:"Ça fait un euro quarante."}
    ]},
    {id:"d02",lvl:"A2",titel:"Smalltalk mit der Nachbarin",szene:"Bavardage avec la voisine",zeilen:[
      {de:"Hallo! Wie geht es Ihnen?",fr:"Bonjour ! Comment allez-vous ?"},
      {de:"Danke, gut. Und Ihnen?",fr:"Merci, bien. Et vous ?"},
      {de:"Auch gut. Schönes Wetter heute, oder?",fr:"Bien aussi. Beau temps aujourd'hui, non ?"},
      {de:"Ja, wirklich schön. Endlich Frühling!",fr:"Oui, vraiment beau. Enfin le printemps !"},
      {de:"Einen schönen Tag noch!",fr:"Bonne journée !"}
    ]},
    {id:"d03",lvl:"A2",titel:"Im Restaurant",szene:"Au restaurant",zeilen:[
      {de:"Haben Sie schon gewählt?",fr:"Avez-vous choisi ?"},
      {de:"Ja, ich nehme die Suppe und den Fisch.",fr:"Oui, je prends la soupe et le poisson."},
      {de:"Und zu trinken?",fr:"Et comme boisson ?"},
      {de:"Ein Glas Wasser, bitte.",fr:"Un verre d'eau, s'il vous plaît."},
      {de:"Gern. Kommt sofort.",fr:"Avec plaisir. Ça arrive."}
    ]},
    {id:"d04",lvl:"B1",titel:"Einen Termin vereinbaren",szene:"Prendre un rendez-vous",zeilen:[
      {de:"Praxis Dr. Weber, guten Tag.",fr:"Cabinet du Dr Weber, bonjour."},
      {de:"Guten Tag, ich möchte einen Termin vereinbaren.",fr:"Bonjour, je voudrais prendre rendez-vous."},
      {de:"Worum geht es denn?",fr:"De quoi s'agit-il ?"},
      {de:"Ich habe seit Tagen Halsschmerzen.",fr:"J'ai mal à la gorge depuis des jours."},
      {de:"Passt Ihnen Donnerstag um zehn Uhr?",fr:"Jeudi à dix heures vous convient ?"},
      {de:"Ja, das passt mir gut. Vielen Dank.",fr:"Oui, ça me convient. Merci beaucoup."}
    ]},
    {id:"d05",lvl:"B1",titel:"Beim Amt (Anmeldung)",szene:"À l'administration",zeilen:[
      {de:"Guten Tag, ich möchte mich anmelden.",fr:"Bonjour, je voudrais déclarer mon domicile."},
      {de:"Haben Sie alle Unterlagen dabei?",fr:"Avez-vous tous les documents ?"},
      {de:"Ja, hier ist mein Ausweis und der Vertrag.",fr:"Oui, voici ma pièce d'identité et le contrat."},
      {de:"Bitte füllen Sie noch dieses Formular aus.",fr:"Veuillez encore remplir ce formulaire."},
      {de:"Natürlich. Wo muss ich unterschreiben?",fr:"Bien sûr. Où dois-je signer ?"}
    ]},
    {id:"d06",lvl:"B1",titel:"Verabredung machen",szene:"Convenir d'un rendez-vous",zeilen:[
      {de:"Hast du am Samstag schon was vor?",fr:"As-tu déjà quelque chose de prévu samedi ?"},
      {de:"Nein, noch nichts. Warum?",fr:"Non, rien encore. Pourquoi ?"},
      {de:"Hast du Lust, ins Kino zu gehen?",fr:"As-tu envie d'aller au cinéma ?"},
      {de:"Gerne! Um wie viel Uhr?",fr:"Volontiers ! À quelle heure ?"},
      {de:"Sagen wir um acht? Ich freue mich!",fr:"Disons huit heures ? J'ai hâte !"}
    ]},
    {id:"d07",lvl:"B2",titel:"Beim Vorstellungsgespräch",szene:"En entretien d'embauche",zeilen:[
      {de:"Erzählen Sie uns etwas über sich.",fr:"Parlez-nous un peu de vous."},
      {de:"Gerne. Ich arbeite seit drei Jahren im Kundenservice.",fr:"Volontiers. Je travaille depuis trois ans au service client."},
      {de:"Warum möchten Sie zu uns wechseln?",fr:"Pourquoi souhaitez-vous nous rejoindre ?"},
      {de:"Ich suche eine neue Herausforderung.",fr:"Je cherche un nouveau défi."},
      {de:"Was sind Ihre Stärken?",fr:"Quelles sont vos forces ?"},
      {de:"Ich bin zuverlässig und arbeite gern im Team.",fr:"Je suis fiable et j'aime le travail d'équipe."}
    ]}
  ],

  /* ---------- Grammatik (Quiz, auf FR erklärt) ---------- */
  grammatik: [
    {id:"g01",lvl:"A2",titel:"Verbes à particule séparable",erkl:"Beaucoup de verbes se coupent : la particule part à la fin. einkaufen → « Ich kaufe ein. »",items:[
      {q:"Ich ___ heute ___. (einkaufen)",options:["kaufe … ein","einkaufe","kaufe ein …"],answer:0,explainFr:"La particule « ein » va à la fin : Ich kaufe heute ein."},
      {q:"Wann ___ der Zug ___? (ankommen)",options:["ankommt","kommt … an","kommt an …"],answer:1,explainFr:"Wann kommt der Zug an ?"},
      {q:"Bitte ___ Sie das Formular ___. (ausfüllen)",options:["füllen … aus","ausfüllen","füllen aus …"],answer:0,explainFr:"Füllen Sie … aus."}
    ]},
    {id:"g02",lvl:"A2",titel:"Le datif après mit, bei, nach, zu…",erkl:"Après mit, bei, nach, zu, von, aus → toujours le datif. « mit dem Bus », « bei der Arbeit ».",items:[
      {q:"Ich fahre mit ___ Bus.",options:["dem","den","der"],answer:0,explainFr:"der Bus → datif masc. = dem Bus."},
      {q:"Sie ist bei ___ Arbeit.",options:["der","die","dem"],answer:0,explainFr:"die Arbeit → datif fém. = der Arbeit."},
      {q:"Wir kommen aus ___ Schweiz.",options:["der","die","dem"],answer:0,explainFr:"aus der Schweiz."}
    ]},
    {id:"g03",lvl:"B1",titel:"Le parfait (passé composé)",erkl:"À l'oral on utilise le Perfekt : haben/sein + participe. Mouvement/changement → sein.",items:[
      {q:"Ich ___ einen Termin gemacht.",options:["habe","bin","war"],answer:0,explainFr:"machen → haben : Ich habe … gemacht."},
      {q:"Wir ___ nach Hause gegangen.",options:["sind","haben","waren"],answer:0,explainFr:"gehen (mouvement) → sein."},
      {q:"Sie ___ pünktlich angekommen.",options:["ist","hat","war"],answer:0,explainFr:"ankommen → sein : Sie ist angekommen."}
    ]},
    {id:"g04",lvl:"B1",titel:"Verbes de modalité",erkl:"Le verbe modal est conjugué, le verbe principal va à l'infinitif à la fin. « Ich muss arbeiten ».",items:[
      {q:"Ich ___ einen Kaffee bestellen.",options:["möchte","möchten","mag"],answer:0,explainFr:"ich möchte ; bestellen à la fin."},
      {q:"___ du mir helfen?",options:["Kannst","Kann","Können"],answer:0,explainFr:"Kannst du … ?"},
      {q:"Wir ___ heute lange arbeiten.",options:["müssen","muss","musst"],answer:0,explainFr:"wir → müssen."}
    ]},
    {id:"g05",lvl:"B1",titel:"Les subordonnées avec « weil » / « dass »",erkl:"Après weil, dass, wenn… le verbe conjugué va à la FIN. « Ich bleibe zu Hause, weil ich müde bin. »",items:[
      {q:"Ich lerne Deutsch, weil ich hier ___.",options:["lebe","ich lebe","bin lebe"],answer:0,explainFr:"… weil ich hier lebe (verbe à la fin)."},
      {q:"Ich hoffe, dass es morgen ___.",options:["klappt","klappt es","es klappt"],answer:0,explainFr:"… dass es morgen klappt."},
      {q:"Wenn ich Zeit ___, rufe ich dich an.",options:["habe","ich habe","bin"],answer:0,explainFr:"Wenn ich Zeit habe, …"}
    ]},
    {id:"g06",lvl:"B2",titel:"Le Konjunktiv II (politesse / hypothèse)",erkl:"würde + infinitif, ou hätte/wäre/könnte. Pour la politesse et l'irréel : « Ich würde gern… », « Könnten Sie…? »",items:[
      {q:"___ Sie mir bitte helfen?",options:["Könnten","Können","Konnten"],answer:0,explainFr:"Könnten = forme polie (Konjunktiv II)."},
      {q:"An deiner Stelle ___ ich das anders machen.",options:["würde","werde","wurde"],answer:0,explainFr:"würde + infinitif = conditionnel."},
      {q:"Ich ___ gern einen Tisch reservieren.",options:["hätte","habe","hatte"],answer:0,explainFr:"Ich hätte gern… = je voudrais (poli)."}
    ]},
    {id:"g07",lvl:"B2",titel:"Le génitif",erkl:"Le génitif marque l'appartenance : « wegen des Wetters », « die Farbe des Autos ». Articles : des/der.",items:[
      {q:"Wegen ___ Wetters bleiben wir zu Hause.",options:["des","dem","das"],answer:0,explainFr:"wegen + génitif : des Wetters."},
      {q:"Die Farbe ___ Autos gefällt mir.",options:["des","dem","der"],answer:0,explainFr:"das Auto → génitif des Autos."},
      {q:"Trotz ___ Regens gehen wir spazieren.",options:["des","dem","der"],answer:0,explainFr:"trotz + génitif : des Regens."}
    ]},
    {id:"g08",lvl:"C1",titel:"La voix passive (Passiv)",erkl:"werden + participe II. « Das Formular wird ausgefüllt. » Au passé : wurde + participe.",items:[
      {q:"Das Problem ___ schnell gelöst.",options:["wurde","wurden","hat"],answer:0,explainFr:"Passiv au passé : wurde gelöst."},
      {q:"Die Rechnungen ___ jeden Monat geprüft.",options:["werden","wird","sind"],answer:0,explainFr:"pluriel : werden geprüft."},
      {q:"Hier ___ nicht geraucht.",options:["wird","werden","ist"],answer:0,explainFr:"man-Passiv : Hier wird nicht geraucht."}
    ]}
  ],

  /* ---------- Übersetzen (FR→DE, tippen) ; alt = autres réponses acceptées ---------- */
  uebersetzen: [
    {id:"t01",lvl:"A2",fr:"J'ai un rendez-vous demain.",de:"Ich habe morgen einen Termin",alt:["Ich habe einen Termin morgen"]},
    {id:"t02",lvl:"A2",fr:"Je voudrais commander.",de:"Ich möchte bestellen",alt:["Ich würde gern bestellen","Ich möchte gerne bestellen"]},
    {id:"t03",lvl:"A2",fr:"L'addition, s'il vous plaît.",de:"Die Rechnung, bitte",alt:["Die Rechnung bitte","Zahlen bitte"]},
    {id:"t04",lvl:"A2",fr:"Je suis fatiguée aujourd'hui.",de:"Ich bin heute müde",alt:["Ich bin müde heute"]},
    {id:"t05",lvl:"A2",fr:"As-tu envie d'un café ?",de:"Hast du Lust auf einen Kaffee",alt:[]},
    {id:"t06",lvl:"A2",fr:"Je m'appelle Camille.",de:"Ich heiße Camille",alt:["Ich heisse Camille"]},
    {id:"t07",lvl:"A2",fr:"Où est l'arrêt de bus ?",de:"Wo ist die Bushaltestelle",alt:["Wo ist die Haltestelle"]},
    {id:"t08",lvl:"B1",fr:"Je dois annuler le rendez-vous.",de:"Ich muss den Termin absagen",alt:[]},
    {id:"t09",lvl:"B1",fr:"Pouvons-nous reporter le rendez-vous ?",de:"Können wir den Termin verschieben",alt:[]},
    {id:"t10",lvl:"B1",fr:"Je m'habitue peu à peu à l'Allemagne.",de:"Ich gewöhne mich langsam an Deutschland",alt:[]},
    {id:"t11",lvl:"B1",fr:"Je voudrais me plaindre du bruit.",de:"Ich möchte mich über den Lärm beschweren",alt:[]},
    {id:"t12",lvl:"B1",fr:"Je m'en occupe tout de suite.",de:"Ich kümmere mich gleich darum",alt:["Ich kümmere mich sofort darum"]},
    {id:"t13",lvl:"B1",fr:"Je propose qu'on se retrouve à huit heures.",de:"Ich schlage vor dass wir uns um acht treffen",alt:[]},
    {id:"t14",lvl:"B2",fr:"Cela a un fort impact sur les coûts.",de:"Das wirkt sich stark auf die Kosten aus",alt:[]},
    {id:"t15",lvl:"B2",fr:"Je cherche un nouveau défi.",de:"Ich suche eine neue Herausforderung",alt:[]},
    {id:"t16",lvl:"B2",fr:"Pourriez-vous m'aider, s'il vous plaît ?",de:"Könnten Sie mir bitte helfen",alt:[]},
    {id:"t17",lvl:"C1",fr:"Je suis tout à fait conscient que c'est difficile.",de:"Mir ist durchaus bewusst dass es schwierig ist",alt:[]},
    {id:"t18",lvl:"C1",fr:"La confiance est indispensable.",de:"Vertrauen ist unabdingbar",alt:["Das Vertrauen ist unabdingbar"]}
  ],

  /* ---------- Hörverstehen (DE-Audio → Bedeutung wählen, options en FR) ---------- */
  hoerverstehen: [
    {id:"h01",lvl:"A2",audio:"Der Zug nach Frankfurt hat zehn Minuten Verspätung.",q:"Qu'est-ce qui est annoncé ?",options:["Le train a 10 min de retard","Le train part dans 10 min","Le train est annulé"],answer:0},
    {id:"h02",lvl:"A2",audio:"Möchten Sie noch einen Kaffee?",q:"Que demande la personne ?",options:["Si tu veux encore un café","Si le café est bon","Où est le café"],answer:0},
    {id:"h03",lvl:"A2",audio:"Das Geschäft ist heute bis acht Uhr geöffnet.",q:"Que dit l'annonce ?",options:["Le magasin est ouvert jusqu'à 20h","Le magasin est fermé","Le magasin ouvre à 8h"],answer:0},
    {id:"h04",lvl:"B1",audio:"Könnten Sie bitte etwas langsamer sprechen?",q:"Que demande la personne ?",options:["De parler plus lentement","De parler plus fort","De répéter le mot"],answer:0},
    {id:"h05",lvl:"B1",audio:"Leider kann ich morgen nicht kommen, mir ist etwas dazwischengekommen.",q:"Que dit la personne ?",options:["Elle ne peut pas venir demain","Elle viendra plus tôt","Elle a oublié le rendez-vous"],answer:0},
    {id:"h06",lvl:"B1",audio:"Die Nebenkosten sind in der Miete nicht enthalten.",q:"Qu'apprend-on ?",options:["Les charges ne sont pas comprises dans le loyer","Le loyer baisse","Les charges sont gratuites"],answer:0},
    {id:"h07",lvl:"B2",audio:"Wir bitten um Verständnis, dass sich der Termin kurzfristig verschoben hat.",q:"Quel est le message ?",options:["Le rendez-vous a été décalé à la dernière minute","Le rendez-vous est confirmé","Le rendez-vous est annulé définitivement"],answer:0},
    {id:"h08",lvl:"B2",audio:"Die Entscheidung wirkt sich erheblich auf unsere Planung aus.",q:"Que signifie la phrase ?",options:["La décision impacte fortement la planification","La décision est sans effet","La planification est terminée"],answer:0}
  ],

  /* ---------- Konjugation / Verbformen (tippen) ---------- */
  konjugation: [
    {id:"k01",lvl:"A2",prompt:"ich ___ (sein) müde",answer:"bin",hintFr:"être, 1ʳᵉ pers. : ich bin."},
    {id:"k02",lvl:"A2",prompt:"du ___ (haben) Zeit?",answer:"hast",hintFr:"avoir, 2ᵉ pers. : du hast."},
    {id:"k03",lvl:"A2",prompt:"wir ___ (gehen) nach Hause",answer:"gehen",hintFr:"aller, nous : wir gehen."},
    {id:"k04",lvl:"A2",prompt:"er ___ (fahren) nach Berlin",answer:"fährt",hintFr:"fahren change : er fährt (a→ä)."},
    {id:"k05",lvl:"A2",prompt:"ihr ___ (sprechen) Deutsch",answer:"sprecht",hintFr:"vous (groupe) : ihr sprecht."},
    {id:"k06",lvl:"B1",prompt:"Perfekt: Ich habe einen Termin ___ (machen)",answer:"gemacht",hintFr:"participe de machen : gemacht."},
    {id:"k07",lvl:"B1",prompt:"Perfekt: Wir sind nach Hause ___ (gehen)",answer:"gegangen",hintFr:"participe de gehen : gegangen."},
    {id:"k08",lvl:"B1",prompt:"Präteritum: Gestern ___ (sein) ich krank",answer:"war",hintFr:"prétérit de sein : war."},
    {id:"k09",lvl:"B1",prompt:"er ___ (nehmen) den Bus",answer:"nimmt",hintFr:"nehmen : er nimmt (e→i)."},
    {id:"k10",lvl:"B2",prompt:"Konjunktiv II: ___ (können) Sie mir helfen?",answer:"könnten",hintFr:"forme polie : könnten Sie."},
    {id:"k11",lvl:"B2",prompt:"Passiv: Das Formular ___ (werden) ausgefüllt",answer:"wird",hintFr:"passif présent : wird ausgefüllt."},
    {id:"k12",lvl:"C1",prompt:"Konjunktiv II: An deiner Stelle ___ (werden) ich gehen",answer:"würde",hintFr:"würde + infinitif."}
  ],

  /* ---------- Paare zuordnen (Matching DE↔FR) ---------- */
  paare: [
    {id:"p01",lvl:"A2",pairs:[["der Termin","le rendez-vous"],["die Rechnung","l'addition"],["müde","fatigué"],["die Wohnung","l'appartement"],["bestellen","commander"]]},
    {id:"p02",lvl:"A2",pairs:[["die Haltestelle","l'arrêt"],["umsteigen","changer de train"],["die Verspätung","le retard"],["der Nachbar","le voisin"],["satt","rassasié"]]},
    {id:"p03",lvl:"B1",pairs:[["kündigen","résilier"],["die Frist","le délai"],["beantragen","faire une demande"],["sich beschweren","se plaindre"],["zuständig","responsable"]]},
    {id:"p04",lvl:"B1",pairs:[["die Unterlagen","les documents"],["verschieben","reporter"],["der Fortschritt","le progrès"],["anstrengend","éprouvant"],["die Gewohnheit","l'habitude"]]},
    {id:"p05",lvl:"B2",pairs:[["die Herausforderung","le défi"],["nachvollziehen","comprendre"],["in Erwägung ziehen","envisager"],["zuverlässig","fiable"],["die Rücksicht","l'égard"]]},
    {id:"p06",lvl:"C1",pairs:[["die Tragweite","la portée"],["unabdingbar","indispensable"],["sich anbahnen","se profiler"],["die Gepflogenheit","l'usage"],["beiläufig","incident"]]}
  ],

  /* ---------- Komplimente (FR), rotierend ---------- */
  komplimente: [
    "Bravo mon amour, ta constance est impressionnante 💛",
    "Chaque jour tu progresses — il en est fier de toi 🌟",
    "Ta prononciation devient de plus en plus naturelle 🎙️",
    "Petit à petit, l'allemand devient le tien. Continue ! 🌱",
    "Tu oses parler, et c'est exactement ça le secret 🔥",
    "Cinq minutes aujourd'hui = un grand pas demain 🚀",
    "Ton effort se voit, et il compte énormément ❤️",
    "Tu es plus forte que tu ne le crois. Weiter so! 💪",
    "Les fautes ? Juste des marches vers le sommet 🧗‍♀️",
    "Aujourd'hui encore, tu as choisi de grandir. Respect 👑",
    "Il reçoit la preuve de ton sérieux — et il sourit 😊",
    "Régularité > perfection. Et toi, tu es régulière ✨"
  ]
};
