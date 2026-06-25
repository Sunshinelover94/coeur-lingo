# 💞 Cœur·Lingo — Apprends l'allemand (FR → DE)

Eine fesselnde, spielerische **PWA** zum Deutschlernen mit französischer Oberfläche — gebaut für jemanden, der **viel versteht, aber wenig spricht** (Schwerpunkt: aktive Produktion, A2 → C1).

Vanilla HTML/CSS/JS, kein Build, kein Backend. Läuft offline, installierbar „Zum Home-Bildschirm".

---

## Was die App kann

- **Tägliche 5-Min-Challenge** mit 6 abwechslungsreichen Blöcken + Sieg-Animation (Konfetti).
- **9 Aufgabentypen:** Vokabelkarten (+Audio), Lückentext, Satzbau, Dialog (hören→nachsprechen), Grammatik-Quiz (auf FR erklärt), Übersetzen (tippen), Hörverstehen, Konjugations-Drill, Paare zuordnen.
- **Gestufter Lehrplan A2→C1** mit adaptiver Schwierigkeit + **Spaced Repetition** (fällige Wörter kommen klug wieder).
- **Streak, XP, Level-Aufstieg, Abzeichen.**
- **NPC-Liga** (5 Bots mit Rubber-Banding → immer fordernd, aber einholbar; Wochen-Reset).
- **Belohnungs-Coupons** an Tag 10/25/60/100/150/205/300 (Massage → … → Wellness-Wochenende), einlösbar mit dem Partner.
- **Tracking** Woche (Balken) + Monat (Heatmap).
- **E-Mail an den Partner** bei Meilensteinen + wöchentlicher Effort-Report + „Zeig's deinem Schatz"-Button (via Web3Forms).
- **iOS-App-Blocker „Smart-Gate"** (Kurzbefehle) — siehe unten.

---

## 1) Einrichten (einmalig)

### Web3Forms-Key (für die E-Mails an den Partner)
1. Auf <https://web3forms.com> mit der **E-Mail-Adresse des Partners** eine kostenlose **Access Key** erstellen.
2. In der App: ⚙️ **Réglages** → E-Mail des Partners + Access Key eintragen → **📧 E-Mail de test** drücken.
3. Der Key liegt clientseitig — unkritisch, er kann nur Formulare an die feste Adresse senden.

> Ohne Key funktioniert die App komplett, nur die E-Mails werden still übersprungen.

### iOS-App-Blocker (Smart-Gate, ohne native App)
In der App unter 🛡️ **Blocage des apps** ist die bebilderte Anleitung eingebaut. Kurz:

1. **Kurzbefehl `CoeurLingoFait`** — schreibt das heutige Datum in `coeurlingo.txt` (iCloud Drive). Wird vom **🔓 Débloquer**-Button der App aufgerufen.
2. **Kurzbefehl `Portier`** — liest `coeurlingo.txt`; wenn ≠ heutiges Datum → öffnet Cœur·Lingo (Redirect).
3. **Automation je App** (Instagram, WhatsApp, YouTube, Snapchat …): „Wenn App geöffnet → Portier ausführen", *„Vor Ausführung fragen" = AUS*.

→ Vor der Challenge bouncen die Apps zur Lern-App; nach der Session entsperrt der Button für den Tag; am nächsten Tag automatisch wieder gesperrt.

**Harter Backstop (optional):** Screen Time → App-Limit 1 Min auf die Apps + ein **Screen-Time-Code, den der Partner setzt**. Dann ist es wirklich gesperrt (Entsperren dann manuell).

> ⚠️ Die Kurzbefehl-Methode ist **weich/umgehbar** (sie könnte die Automation abschalten). Manipulationssicheres Auto-Blocken geht nur mit nativer App → **Phase 2**.

---

## 2) Lokal testen

Einfach `index.html` in einem Browser öffnen (oder ein kleiner Server für den Service Worker):

```bash
# im Ordner deutsch-lernapp/
python -m http.server 8080
# dann http://localhost:8080 öffnen
```

Debug-Helfer in ⚙️ Réglages: **„Simuler un jour"** (Streak/Liga testen), **„E-Mail de test"**, **„Réinitialiser"**.

---

## 3) Veröffentlichen (GitHub Pages)

1. Neues **öffentliches** Repo anlegen (z. B. `coeur-lingo`).
2. Alle Dateien hochladen (`index.html`, `sw.js`, `manifest.webmanifest`, `data/`, `icon-192.png`, `icon-512.png`).
3. **Settings → Pages → Source: `main` / root** → speichern.
4. Nach ~2 Min live unter `https://<user>.github.io/coeur-lingo/`.
5. Auf dem iPhone in **Safari** öffnen → Teilen → **Zum Home-Bildschirm**.

> Bei Updates die Cache-Version in `sw.js` erhöhen (`coeurlingo-v1` → `v2`), damit das iPhone neu lädt.

---

## 4) Inhalte erweitern

`data/inhalte.js` ist nach Aufgabentyp gegliedert. Neue Items einfach mit **eindeutiger `id`** und **`lvl`** (`A2`/`B1`/`B2`/`C1`) ergänzen — die Engine zieht sie automatisch nach Niveau + Spaced Repetition. A2→B1 ist dicht befüllt, B2/C1 angeschnitten (zum Ausbauen).

---

## 5) Phase 2 (späteres Upgrade) — echtes Auto-Blocken

Native Hülle (Expo/React Native) um diesen Lernkern (WebView) + **Apple Screen-Time-API** (`react-native-device-activity`) → echtes, manipulationssicheres Sperren bis zur erledigten Challenge, Pause 15/60 Min. Braucht Apple-Dev-Account (99 $/Jahr) + Family-Controls-Berechtigung + TestFlight/Internal-Build (Cloud-Build via EAS, kein Mac nötig). Aufwand ~3–5 Wochen — erst sinnvoll, wenn die PWA zeigt, dass sie dranbleibt.

---

*App-Name & Theme („Cœur·Lingo", Coral/Plum/Gold) sind eine Zeile zum Ändern. Icon: Mannheimer Wasserturm im Mix aus French Riviera, Marokko & Deutschland.*
