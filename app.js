/* ============================================================
   JG — Jesus Guidance— app.js
   Vanilla JS, hash-based router, no build step, no framework.
   Depends on data/scripture-data.js being loaded first.
============================================================ */

(function () {
  "use strict";

  const APP = document.getElementById("app");
  const TRANSLATION_LABEL = "World English Bible (WEB)";
  const FAVORITES_KEY = "awfy_favorites_v1";

  /* ---------------- Utilities ---------------- */

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach((k) => {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k.startsWith("on") && typeof attrs[k] === "function") {
          node.addEventListener(k.slice(2), attrs[k]);
        } else {
          node.setAttribute(k, attrs[k]);
        }
      });
    }
    (children || []).forEach((c) => {
      if (c == null) return;
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function getFavorites() {
    try {
      return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
    } catch (e) {
      return [];
    }
  }
  function isFavorite(key) {
    return getFavorites().indexOf(key) !== -1;
  }
  function toggleFavorite(key) {
    const favs = getFavorites();
    const idx = favs.indexOf(key);
    if (idx === -1) favs.push(key);
    else favs.splice(idx, 1);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
    return idx === -1;
  }

  function dayOfYear() {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now - start;
    return Math.floor(diff / 86400000);
  }

  function passageFirstLine(key) {
    const p = PASSAGES[key];
    if (!p) return "";
    const t = p.verses[0].t.replace(/["“”]/g, "");
    return t.length > 90 ? t.slice(0, 87) + "…" : t;
  }

  function fullPassageText(key) {
    const p = PASSAGES[key];
    if (!p) return "";
    return p.verses.map((v) => v.t.replace(/["“”]/g, "")).join(" ");
  }

  function showToast(msg) {
    let t = document.getElementById("toast");
    if (!t) {
      t = el("div", { id: "toast", class: "toast" }, []);
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => t.classList.remove("show"), 2200);
  }

  function currentUrlForShare(hash) {
   const base =
  location.hostname === "127.0.0.1" || location.hostname === "localhost"
    ? "https://allanmuriuki-lang.github.io/jesus-guidance/"
    : location.href.split("#")[0];
    return base + "#" + hash;
  }

  /* ---------------- Speech (Read Aloud) ---------------- */

  const Speech = {
    supported: "speechSynthesis" in window,
    utter: null,
    state: "idle", // idle | playing | paused

    speak(text, onEnd) {
      if (!this.supported) return;
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.rate = 0.95;
      utter.pitch = 1;
      const voices = window.speechSynthesis.getVoices();
      const enVoice = voices.find((v) => /en(-|_)/i.test(v.lang)) || voices[0];
      if (enVoice) utter.voice = enVoice;
      utter.onend = () => {
        this.state = "idle";
        if (onEnd) onEnd();
      };
      utter.onerror = () => {
        this.state = "idle";
        if (onEnd) onEnd();
      };
      this.utter = utter;
      this.state = "playing";
      window.speechSynthesis.speak(utter);
    },
    pause() {
      if (!this.supported) return;
      window.speechSynthesis.pause();
      this.state = "paused";
    },
    resume() {
      if (!this.supported) return;
      window.speechSynthesis.resume();
      this.state = "playing";
    },
    stop() {
      if (!this.supported) return;
      window.speechSynthesis.cancel();
      this.state = "idle";
    }
  };

  /* Some browsers load voices asynchronously */
  if (Speech.supported) {
    window.speechSynthesis.onvoiceschanged = () => {};
  }

  /* ---------------- Router ---------------- */

  function parseHash() {
    let hash = location.hash.replace(/^#/, "");
    if (!hash) return { view: "home" };
    const parts = hash.split("/").filter(Boolean);

    // Deep-link shorthand: #peace, #afraid, etc. map straight to category
    if (parts.length === 1 && CATEGORY_META[parts[0]]) {
      return { view: "category", id: parts[0] };
    }
    if (parts[0] === "feel") return { view: "browse", group: "feel" };
    if (parts[0] === "need") return { view: "browse", group: "need" };
    if (parts[0] === "become") return { view: "browse", group: "become" };
    if (parts[0] === "category" && parts[1]) return { view: "category", id: parts[1] };
    if (parts[0] === "passage" && parts[1]) return { view: "passage", key: parts[1], from: parts[2] };
    if (parts[0] === "search") return { view: "search", q: decodeURIComponent(parts[1] || "") };
    if (parts[0] === "favorites") return { view: "favorites" };
    return { view: "home" };
  }

  function navigate(hash) {
    location.hash = hash;
  }

  function render() {
    const route = parseHash();
    APP.innerHTML = "";
    window.scrollTo(0, 0);

    if (route.view === "home") renderHome();
    else if (route.view === "browse") renderBrowse(route.group);
    else if (route.view === "category") renderCategory(route.id);
    else if (route.view === "passage") renderPassage(route.key, route.from);
    else if (route.view === "search") renderSearch(route.q);
    else if (route.view === "favorites") renderFavorites();
    else renderHome();

    renderBottomNav(route.view);
  }

  window.addEventListener("hashchange", render);

  /* ---------------- Shared chrome (top bar) ---------------- */

  function topbar({ title, back, action } = {}) {
    const bar = el("div", { class: "topbar" }, [
      back
        ? el("button", { class: "back-btn", "aria-label": "Back", onclick: () => history.back() }, ["←"])
        : el("span", { style: "width:52px" }, []),
      el("div", { class: "brand" }, [title || "JG — Jesus Guidance"]),
      action || el("span", { style: "width:44px" }, [])
    ]);
    return bar;
  }

  function favIconBtn() {
    return el("button", {
      class: "icon-btn",
      "aria-label": "Favorites",
      onclick: () => navigate("favorites")
    }, ["♡"]);
  }

  /* ---------------- Home ---------------- */
  function shareJGInvitation() {
  const base =
  location.hostname === "127.0.0.1" || location.hostname === "localhost"
    ? "https://allanmuriuki-lang.github.io/jesus-guidance/"
    : location.href.split("#")[0];

  const text = [
    "How are you feeling today?",
    "",
    "Choose what fits you best:",
    "😟 Afraid — " + base + "#afraid",
    "😰 Anxious — " + base + "#anxious",
    "😔 Discouraged — " + base + "#discouraged",
    "🕊️ Need Peace — " + base + "#peace",
    "🧭 Need Guidance — " + base + "#guidance",
    "💪 Need Strength — " + base + "#strength",
    "🙏 Prayer — " + base + "#prayer",
    "",
    "More choices in JG — Jesus Guidance"
  ].join("\n");

  openShareSheet("JG — Jesus Guidance", text, "");
}
  function renderHome() {
    APP.appendChild(topbar({ action: favIconBtn() }));

    const main = el("main", {}, []);

    // Hero
    const hero = el("div", { class: "hero" }, [
      el("h1", {}, ["How are you feeling today?"]),
      el("p", { class: "sub" }, ["Find a word of Scripture for what you're facing."]),
      svgSwash()
    ]);
    main.appendChild(hero);

    // Search
    main.appendChild(searchField());
main.appendChild(
  el("div", { class: "action-row full" }, [
    el("button", {
      class: "btn btn-secondary",
      onclick: shareJGInvitation
    }, ["📤 Share JG"])
  ])
);
    // Quick categories grid
    main.appendChild(el("div", { class: "section-head" }, [
      el("h2", {}, ["Choose how you feel"]),
    ]));
    const grid = el("div", { class: "grid" }, []);
    HOME_QUICK_CATEGORIES.forEach((id) => grid.appendChild(categoryCard(id)));
    main.appendChild(grid);

    // Section tiles
    main.appendChild(el("div", { class: "section-head" }, [el("h2", {}, ["Explore"])]));
    const tiles = el("div", { class: "tile-row" }, [
      navTile("😔", "How I Feel", () => navigate("feel")),
      navTile("🤲", "What I Need", () => navigate("need")),
      navTile("🌱", "What I Want to Become", () => navigate("become")),
      navTile("🔎", "Search", () => navigate("search/")),
      navTile("♡", "Favorites", () => navigate("favorites")),
      navTile("🙏", "Wanting to Pray", () => navigate("prayer"))
    ]);
    main.appendChild(tiles);

    // Today's Scripture
    main.appendChild(todaysScriptureCard());

    main.appendChild(safetyNote());

    APP.appendChild(main);
  }

  function svgSwash() {
    const wrap = document.createElement("div");
    wrap.className = "swash";
    wrap.innerHTML =
      '<svg viewBox="0 0 120 10" width="100%" height="10" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M2 6C20 -2 40 12 60 5C80 -2 100 12 118 5" stroke="#C6963A" stroke-width="2" stroke-linecap="round"/>' +
      "</svg>";
    return wrap;
  }

  function searchField() {
    const wrap = el("div", { class: "search-wrap" }, []);
    const field = el("div", { class: "search-field" }, [
      el("span", { class: "search-icon" }, ["🔎"])
    ]);
    const input = el("input", {
      type: "search",
      placeholder: "Search: fear, peace, forgiveness…",
      "aria-label": "Search Scripture by feeling or need"
    }, []);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && input.value.trim()) {
        navigate("search/" + encodeURIComponent(input.value.trim()));
      }
    });
    field.appendChild(input);
    const clearBtn = el("button", { class: "clear", "aria-label": "Clear search" }, ["✕"]);
    clearBtn.addEventListener("click", () => { input.value = ""; clearBtn.classList.remove("show"); input.focus(); });
    input.addEventListener("input", () => clearBtn.classList.toggle("show", !!input.value));
    field.appendChild(clearBtn);
    wrap.appendChild(field);
    return wrap;
  }

  function navTile(emoji, label, onClick) {
    return el("button", { class: "nav-tile", onclick: onClick }, [
      el("span", { class: "emoji" }, [emoji]),
      el("span", {}, [label])
    ]);
  }

  function categoryCard(id) {
    const meta = CATEGORY_META[id];
    if (!meta) return el("span", {}, []);
    return el("button", { class: "cat-card group-" + meta.group, onclick: () => navigate(meta.id) }, [
      el("span", { class: "emoji" }, [meta.emoji]),
      el("span", { class: "label" }, [meta.label]),
      el("span", { class: "blurb" }, [meta.blurb])
    ]);
  }

  function todaysScriptureCard() {
    const key = DAILY_SCRIPTURE_KEYS[dayOfYear() % DAILY_SCRIPTURE_KEYS.length];
    const p = PASSAGES[key];
    const card = el("div", { class: "today-card" }, [
      el("div", { class: "eyebrow" }, ["Today's Scripture"]),
      el("div", { class: "ref" }, [p.ref]),
      el("div", { class: "snippet" }, [passageFirstLine(key)]),
      el("button", { class: "go-btn", onclick: () => navigate("passage/" + key) }, ["Read it ", "→"])
    ]);
    return card;
  }

  function safetyNote() {
    return el("p", { class: "safety-note" }, [
      "This app offers Scripture and spiritual encouragement — it isn't a substitute for medical, mental-health, legal, or emergency care. If you're in crisis or in danger, please reach out to a doctor, counselor, or local emergency services."
    ]);
  }

  /* ---------------- Browse (Feel / Need / Become) ---------------- */

  const GROUP_TITLES = {
    feel: { title: "How I Feel", sub: "Choose what best describes how you feel right now." },
    need: { title: "What I Need", sub: "Choose what you're needing today." },
    become: { title: "What I Want to Become", sub: "Choose the character you want to grow in." }
  };

  function renderBrowse(group) {
    const info = GROUP_TITLES[group];
    APP.appendChild(topbar({ title: info.title, back: true, action: favIconBtn() }));
    const main = el("main", {}, []);
    main.appendChild(el("div", { class: "category-hero" }, [
      el("h1", {}, [info.title]),
      el("p", {}, [info.sub])
    ]));
    const grid = el("div", { class: "grid" }, []);
    Object.keys(CATEGORY_META)
      .filter((id) => CATEGORY_META[id].group === group)
      .forEach((id) => grid.appendChild(categoryCard(id)));
    main.appendChild(grid);
    APP.appendChild(main);
  }

  /* ---------------- Category (list of passages) ---------------- */

  function renderCategory(id) {
    const meta = CATEGORY_META[id];
    if (!meta) { renderHome(); return; }
    APP.appendChild(topbar({ title: meta.label, back: true, action: favIconBtn() }));
    const main = el("main", {}, []);

    main.appendChild(el("div", { class: "category-hero" }, [
      el("div", { class: "emoji-badge" }, [meta.emoji]),
      el("h1", {}, [meta.label]),
      el("p", {}, [meta.blurb])
    ]));

    const keys = CATEGORIES[id] || [];
    const list = el("div", { class: "passage-list" }, []);
    keys.forEach((key) => {
      const p = PASSAGES[key];
      if (!p) return;
      list.appendChild(
        el("button", { class: "passage-row", onclick: () => navigate("passage/" + key + "/" + id) }, [
          el("span", {}, [
            el("div", { class: "ref-title" }, [p.ref]),
            el("div", { class: "ref-preview" }, [passageFirstLine(key)])
          ]),
          el("span", { class: "chevron" }, ["›"])
        ])
      );
    });
    if (!keys.length) {
      list.appendChild(el("div", { class: "empty-state" }, [
        el("span", { class: "emoji" }, ["📖"]),
        "More passages for this topic are coming soon."
      ]));
    }
    main.appendChild(list);
    APP.appendChild(main);
  }

  /* ---------------- Passage (reading view) ---------------- */

  function renderPassage(key, fromCategoryId) {
    const p = PASSAGES[key];
    if (!p) { renderHome(); return; }

    APP.appendChild(topbar({ title: p.book, back: true }));
    const main = el("main", {}, []);

    const header = el("div", { class: "passage-header" }, [
      el("span", { class: "book-tag" }, [p.book]),
      el("h1", {}, [p.ref]),
      el("div", { class: "translation" }, ["Translation: " + TRANSLATION_LABEL])
    ]);
    main.appendChild(header);

    const textBox = el("div", { class: "passage-text" }, []);
    p.verses.forEach((v) => {
      textBox.appendChild(
        el("p", { class: "verse" }, [
          el("span", { class: "vnum" }, [String(v.v)]),
          v.t
        ])
      );
    });
    if (p.note) textBox.appendChild(el("div", { class: "note" }, [p.note]));
    main.appendChild(textBox);

    // Favorite + Read aloud row
    const favBtn = el("button", {
      class: "fav-btn",
      "aria-label": "Save to favorites",
      onclick: () => {
        const nowFav = toggleFavorite(key);
        favBtn.textContent = nowFav ? "♥" : "♡";
        showToast(nowFav ? "Saved to favorites" : "Removed from favorites");
      }
    }, [isFavorite(key) ? "♥" : "♡"]);

    const actionRow = el("div", { class: "action-row" }, [
      el("button", {
        class: "btn btn-primary",
        onclick: () => togglePlayer()
      }, ["🔊 Read Aloud"]),
      el("button", {
        class: "btn btn-secondary",
        onclick: () => openShareSheet(p.ref, fullPassageText(key), "passage/" + key)
      }, ["Share"])
    ]);

    main.appendChild(actionRow);
    main.appendChild(el("div", { class: "action-row full" }, [favBtn]));

    // Player
    const player = el("div", { class: "player" }, [
      el("div", { class: "status" }, ["Ready to read aloud"]),
      el("div", { class: "controls" }, [
        el("button", { class: "play", "aria-label": "Play", onclick: () => playerPlay() }, ["▶"]),
        el("button", { class: "pause", "aria-label": "Pause / Resume", onclick: () => playerPauseResume() }, ["⏸"]),
        el("button", { class: "stop", "aria-label": "Stop", onclick: () => playerStop() }, ["■"])
      ])
    ]);
    main.appendChild(player);

    if (!Speech.supported) {
      player.querySelector(".status").textContent =
        "Read Aloud isn't available in this browser, but you can still read and share this passage.";
    }

    function togglePlayer() {
      player.classList.add("active");
      playerPlay();
    }
    function playerPlay() {
      if (!Speech.supported) return;
      const status = player.querySelector(".status");
      status.textContent = "Reading " + p.ref + "…";
      Speech.speak(fullPassageText(key), () => {
        status.textContent = "Finished reading " + p.ref + ".";
      });
    }
    function playerPauseResume() {
      if (!Speech.supported) return;
      const status = player.querySelector(".status");
      if (Speech.state === "playing") {
        Speech.pause();
        status.textContent = "Paused.";
      } else if (Speech.state === "paused") {
        Speech.resume();
        status.textContent = "Reading " + p.ref + "…";
      }
    }
    function playerStop() {
      if (!Speech.supported) return;
      Speech.stop();
      player.querySelector(".status").textContent = "Stopped.";
    }

    if (fromCategoryId && CATEGORY_META[fromCategoryId]) {
      main.appendChild(el("div", { style: "margin-top:18px;text-align:center" }, [
        el("button", { class: "btn btn-ghost", onclick: () => navigate("category/" + fromCategoryId) }, [
          "← More for " + CATEGORY_META[fromCategoryId].label
        ])
      ]));
    }

    APP.appendChild(main);

    // Stop any speech when leaving this view
    const stopOnLeave = () => { Speech.stop(); window.removeEventListener("hashchange", stopOnLeave); };
    window.addEventListener("hashchange", stopOnLeave);
  }

  /* ---------------- Search ---------------- */

  function renderSearch(initialQ) {
    APP.appendChild(topbar({ title: "Search", back: true, action: favIconBtn() }));
    const main = el("main", {}, []);
    const wrap = searchField();
    const input = wrap.querySelector("input");
    input.value = initialQ || "";
    main.appendChild(wrap);

    const results = el("div", { id: "search-results" }, []);
    main.appendChild(results);
    APP.appendChild(main);

    function runSearch(qRaw) {
      const q = qRaw.trim().toLowerCase();
      results.innerHTML = "";
      if (!q) {
        results.appendChild(el("div", { class: "empty-state" }, [
          el("span", { class: "emoji" }, ["🔎"]),
          "Try searching a feeling or need, like fear, peace, or forgiveness."
        ]));
        return;
      }

      // 1. category matches via synonyms + labels
      const catMatches = Object.keys(CATEGORY_META).filter((id) => {
        const meta = CATEGORY_META[id];
        if (meta.label.toLowerCase().includes(q)) return true;
        const syns = SEARCH_SYNONYMS[id] || [];
        return syns.some((s) => s.includes(q) || q.includes(s));
      });

      // 2. passage text / reference matches
      const passageMatches = Object.keys(PASSAGES).filter((key) => {
        const p = PASSAGES[key];
        if (p.ref.toLowerCase().includes(q)) return true;
        return p.verses.some((v) => v.t.toLowerCase().includes(q));
      });

      if (!catMatches.length && !passageMatches.length) {
        results.appendChild(el("div", { class: "empty-state" }, [
          el("span", { class: "emoji" }, ["🕊️"]),
          "No matches yet for \u201c" + qRaw + "\u201d. Try a simpler word, like ", el("br", {}, []),
          "\"fear\", \"peace\", or \"hope\"."
        ]));
        return;
      }

      if (catMatches.length) {
        results.appendChild(el("div", { class: "result-group" }, [
          el("h3", {}, ["Topics"]),
          (() => {
            const grid = el("div", { class: "grid" }, []);
            catMatches.forEach((id) => grid.appendChild(categoryCard(id)));
            return grid;
          })()
        ]));
      }
      if (passageMatches.length) {
        const list = el("div", { class: "passage-list" }, []);
        passageMatches.forEach((key) => {
          const p = PASSAGES[key];
          list.appendChild(
            el("button", { class: "passage-row", onclick: () => navigate("passage/" + key) }, [
              el("span", {}, [
                el("div", { class: "ref-title" }, [p.ref]),
                el("div", { class: "ref-preview" }, [passageFirstLine(key)])
              ]),
              el("span", { class: "chevron" }, ["›"])
            ])
          );
        });
        results.appendChild(el("div", { class: "result-group" }, [
          el("h3", {}, ["Scripture"]),
          list
        ]));
      }
    }

    input.addEventListener("input", () => runSearch(input.value));
    runSearch(initialQ || "");
    setTimeout(() => input.focus({ preventScroll: true }), 50);
  }

  /* ---------------- Favorites ---------------- */

  function renderFavorites() {
    APP.appendChild(topbar({ title: "Favorites", back: true }));
    const main = el("main", {}, []);
    const favs = getFavorites();

    if (!favs.length) {
      main.appendChild(el("div", { class: "empty-state" }, [
        el("span", { class: "emoji" }, ["♡"]),
        "You haven't saved any Scripture yet. Tap the heart on any passage to keep it here."
      ]));
    } else {
      const list = el("div", { class: "passage-list" }, []);
      favs.forEach((key) => {
        const p = PASSAGES[key];
        if (!p) return;
        list.appendChild(
          el("button", { class: "passage-row", onclick: () => navigate("passage/" + key) }, [
            el("span", {}, [
              el("div", { class: "ref-title" }, [p.ref]),
              el("div", { class: "ref-preview" }, [passageFirstLine(key)])
            ]),
            el("span", { class: "chevron" }, ["›"])
          ])
        );
      });
      main.appendChild(list);
    }
    APP.appendChild(main);
  }

  /* ---------------- Bottom nav ---------------- */

  function renderBottomNav(view) {
    const old = document.getElementById("bottom-nav");
    if (old) old.remove();
    const nav = el("nav", { id: "bottom-nav", class: "bottom-nav" }, [
      navBtn("🏠", "Home", view === "home", () => navigate("")),
      navBtn("😔", "Feel", view === "browse", () => navigate("feel")),
      navBtn("🔎", "Search", view === "search", () => navigate("search/")),
      navBtn("♡", "Saved", view === "favorites", () => navigate("favorites"))
    ]);
    document.body.appendChild(nav);
  }
  function navBtn(emoji, label, active, onClick) {
    return el("button", { class: active ? "active" : "", onclick: onClick }, [
      el("span", { class: "emoji" }, [emoji]),
      el("span", {}, [label])
    ]);
  }

  /* ---------------- Share sheet ---------------- */

  let shareSheetEl, scrimEl;

  function ensureShareSheet() {
    if (shareSheetEl) return;
    scrimEl = el("div", { class: "scrim", onclick: closeShareSheet }, []);
    shareSheetEl = el("div", { class: "share-sheet" }, []);
    document.body.appendChild(scrimEl);
    document.body.appendChild(shareSheetEl);
  }

  function openShareSheet(title, text, hashPath) {
    ensureShareSheet();
    const url = currentUrlForShare(hashPath);
    const message = title + "\n\n" + text + "\n\n" + url;

    if (navigator.share) {
      navigator.share({ title: title, text: text, url: url }).catch(() => {});
      return;
    }

    shareSheetEl.innerHTML = "";
    shareSheetEl.appendChild(el("h3", {}, ["Share " + title]));
    shareSheetEl.appendChild(
      el("button", { class: "option btn-whatsapp", onclick: () => {
        window.open("https://wa.me/?text=" + encodeURIComponent(message), "_blank");
        closeShareSheet();
      }}, ["🟢 Share on WhatsApp"])
    );
    shareSheetEl.appendChild(
      el("button", { class: "option", onclick: () => {
        copyToClipboard(message);
        closeShareSheet();
      }}, ["🔗 Copy link & text"])
    );
    shareSheetEl.appendChild(
      el("button", { class: "option", onclick: closeShareSheet }, ["Cancel"])
    );
    scrimEl.classList.add("open");
    shareSheetEl.classList.add("open");
  }
  function closeShareSheet() {
    if (!shareSheetEl) return;
    scrimEl.classList.remove("open");
    shareSheetEl.classList.remove("open");
  }
  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast("Copied to clipboard"));
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); showToast("Copied to clipboard"); } catch (e) { showToast("Copy failed"); }
      ta.remove();
    }
  }

  /* ---------------- Boot ---------------- */

  document.addEventListener("DOMContentLoaded", () => {
    render();
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("service-worker.js").catch(() => {});
    }
  });
})();
