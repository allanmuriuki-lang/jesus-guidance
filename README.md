# JG — Jesus Guidance

A free, mobile-first Progressive Web App that helps people find a Bible
passage for how they feel, what they need, or the character they want to
grow in. Built with plain HTML, CSS, and JavaScript — no server, no
database, no paid APIs.

Scripture text: **World English Bible (WEB)** — public domain.

## Files

| File | Purpose |
|---|---|
| `index.html` | App shell — loads fonts, styles, data, and app.js |
| `styles.css` | All visual design (colors, type, layout, buttons) |
| `app.js` | App logic: hash router, screens, Read Aloud, favorites, search, share |
| `data/scripture-data.js` | All categories and Scripture text, as structured JS data |
| `manifest.json` | PWA metadata (name, icons, colors) so it's installable |
| `service-worker.js` | Caches the app so it works offline after first load |
| `icons/` |App icons (PNG in 192px and 512px sizes)

## Run it locally

You can't just double-click `index.html` in some browsers because the
`fetch`-based service worker registration needs a real server context.
The simplest fix is a tiny local server:

```bash
cd jesus-guidance
python3 -m http.server 8000
```

Then open **http://localhost:8000** in your phone or desktop browser.
(On desktop Chrome, open DevTools → toggle device toolbar to preview
the mobile layout.)

## Test Read Aloud

1. Open any category (e.g. tap **Peace**) and select a passage.
2. Tap **🔊 Read Aloud** — a player with Play / Pause-Resume / Stop appears.
3. If your browser doesn't support the Web Speech API, the app tells you
   and everything else keeps working.

## Test category deep links

Try these directly in the address bar (replace the domain/path with
wherever you're hosting it):

```
https://yoursite.com/#afraid
https://yoursite.com/#worried
https://yoursite.com/#peace
https://yoursite.com/#guidance
https://yoursite.com/#lonely
```

Each one jumps straight to that category — this is what makes WhatsApp
sharing work: a link to `#peace` opens the app already on the Peace screen.

## Publish free on GitHub Pages

1. Create a new GitHub repository (public).
2. Upload the contents of this folder (not the folder itself — the files
   need to sit at the repo root, or in `/docs` if you prefer).
3. In the repo: **Settings → Pages → Source**, choose the branch (e.g.
   `main`) and folder (`/root` or `/docs`), then **Save**.
4. GitHub gives you a URL like `https://allanmuriuki-lang.github.io/jesus-guidance/
   The app works fine from a sub-path — all links are relative.
5. Share `https://allanmuriuki-lang.github.io/jesus-guidance/` (etc.) on
   WhatsApp to test the deep-link flow end to end.

## Expanding the Scripture index

Everything lives in `data/scripture-data.js`. To add a passage:

1. Add an entry to `PASSAGES` with a unique key, a reference, book name,
   and a `verses` array of `{ v: <number>, t: "<text>" }`.
2. Add that key to one or more arrays inside `CATEGORIES`.
3. New category? Add it to `CATEGORY_META` (id, group, label, emoji,
   blurb) and, if you want it searchable, to `SEARCH_SYNONYMS`.

No other code changes are needed — the home screen, category pages,
search, and sharing all read from this file automatically.

## Notes on scope (v1)

- A handful of long chapters (Hebrews 11, John 17, Luke 11) are included
  as clearly-labeled representative excerpts rather than full text, to
  keep the first version light. The data format supports pasting in the
  rest of any chapter at any time.
- This app offers Scripture and spiritual encouragement. It is not a
  substitute for medical, mental-health, legal, or emergency
  professional care — see the note on the home screen.
