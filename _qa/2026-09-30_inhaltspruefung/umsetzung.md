# Umsetzung der Inhaltsprüfung – 30.09.2026 (v15)

Grundlage: `befunde.xlsx` (1.841 Befunde). Die Einzeländerungen stehen in `umsetzung.xlsx` (alter/neuer Wert je Feld).

## Ergebnis

| Kennzahl | Wert |
|---|---:|
| Änderungen gesamt | 1.965 |
| davon Feld ersetzt | 1.747 (de 1.373 · en 239 · ex 64 · lvl 18 · Übungsfelder 53) |
| davon Item gelöscht | 218 |
| Vokabeln vorher → nachher | 8.085 → 7.867 |
| Audio neu vertont | 1.446 Clips (64 kbps mono) |
| Audio entfallen | 436 Clips (ins lokale Backup verschoben) |

## Vorgehen

1. 24 Pakete à rund 75 Items: Ein Opus-Agent leitet aus den Befunden feldgenaue Änderungen ab, ein zweiter Opus-Agent prüft jede Änderung adversarial gegen (22 Korrekturen, 6 Ablehnungen).
2. Das Einspiel-Skript ändert nur, wenn der alte Wert zeichengenau stimmt, und kontrolliert danach jede Änderung durch Neuladen der Daten (0 Fehler).
3. Nachbearbeitung der Löschungen mit zwei Regeln:
   - **Niveau:** Bei Dubletten bleibt das Item mit dem niedrigeren Niveau, weil die App kumulativ auswählt. War die niedrige Fassung ein Fragment, rückt die saubere Fassung auf das niedrigere Niveau und übernimmt ggf. den einfacheren Beispielsatz (18 Fälle).
   - **Thema:** 15 Themen-Items bleiben trotz Dublette, weil der behaltene Eintrag zu einem anderen Thema gehört (z. B. „der Termin“ in Arzt und Amt). Sonst fehlte das Wort in der Themen-Sitzung.
4. Global geprüft: keine doppelten IDs, kein Wort auf ein höheres Mindestniveau gerutscht, Headless-Test ohne Fehler.

## Bewusst nicht geändert

- `dict-de-en.js` (Wörterbuch für das Wort-Antippen) wurde nicht neu gebaut. Der Neubau hätte 7 Einträge verschlechtert, etwa „the stop (bus“ oder „Überweisung = the referral“.
- Französische Felder: Sie sind nicht mehr in der Oberfläche und wurden nicht nachgezogen.
- Lernfortschritt: Für die 218 gelöschten IDs entfällt der gespeicherte SRS-Stand.
