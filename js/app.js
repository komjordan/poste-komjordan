(function () {
  const I = {
    win: '<img src="assets/windows-logo.svg" alt="" width="22" height="22">',
    pc: '<img class="ico" src="assets/icons/thispc.svg" alt="">',
    cmd: '<img class="ico" src="assets/icons/cmd.svg" alt="">',
    folder: '<img class="ico" src="assets/icons/folder.svg" alt="">',
    pdf: '<img class="ico" src="assets/icons/acrobat.svg" alt="">',
    mail: '<img class="ico" src="assets/icons/outlook.svg" alt="">',
    cert: '<svg viewBox="0 0 48 48"><rect x="8" y="8" width="32" height="24" rx="2" fill="#deecf9" stroke="#0078d4"/><circle cx="24" cy="34" r="7" fill="#ffb900"/><path d="M20 38l-2 8 6-3 6 3-2-8" fill="#d83b01"/></svg>',
    server: '<svg viewBox="0 0 48 48"><rect x="10" y="6" width="28" height="10" rx="2" fill="#1b2836"/><rect x="10" y="19" width="28" height="10" rx="2" fill="#243447"/><rect x="10" y="32" width="28" height="10" rx="2" fill="#1b2836"/><circle cx="16" cy="11" r="2" fill="#7fba00"/><circle cx="16" cy="24" r="2" fill="#ffb900"/><circle cx="16" cy="37" r="2" fill="#00a4ef"/></svg>',
    bin: '<img class="ico" src="assets/icons/bin.svg" alt="">',
    gear: '<img class="ico" src="assets/icons/settings.svg" alt="">',
    edge: '<img class="ico" src="assets/icons/chrome.svg" alt="">',
    chrome: '<img class="ico" src="assets/icons/chrome.svg" alt="">',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" stroke-width="1.7"><circle cx="11" cy="11" r="6"/><path d="M16 16l5 5"/></svg>',
    tasks: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="11" height="9" rx="1.2" fill="#fff" stroke="#1a1a1a" stroke-width="1.3"/><rect x="8" y="9" width="13" height="11" rx="1.2" fill="#e8f3fc" stroke="#1a1a1a" stroke-width="1.3"/></svg>',
    net: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 16.6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/><path fill="currentColor" d="M7.8 14.2a5.8 5.8 0 0 1 8.4 0l-1.2 1.2a4.1 4.1 0 0 0-6 0l-1.2-1.2z"/><path fill="currentColor" d="M4.6 11a9.6 9.6 0 0 1 14.8 0l-1.2 1.2a7.9 7.9 0 0 0-12.4 0L4.6 11z"/><path fill="currentColor" d="M1.6 8a13.2 13.2 0 0 1 20.8 0l-1.2 1.2a11.5 11.5 0 0 0-18.4 0L1.6 8z"/><g><rect x="14.4" y="13.6" width="8.2" height="6.6" rx="0.6" fill="#0078D4" stroke="#fff" stroke-width="0.7"/><path fill="#fff" d="M15.6 15.1h1.2v1h-1.2zm2.1 0h1.2v1h-1.2zm2.1 0h1.2v1H19.8zM17.4 17.2h2.2v3H17.4z"/></g></svg>',
    vol: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 10h4l5-4v12l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6"/></svg>',
    bat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7" width="16" height="10" rx="2"/><path d="M19 10h2v4h-2"/><rect x="5" y="9" width="10" height="6" fill="#107c10" stroke="none"/></svg>',
    access: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></svg>',
    power: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3v8"/><path d="M7 6a7 7 0 1 0 10 0"/></svg>',
    file: '<img class="ico" src="assets/icons/document.svg" alt="">'
  };

  const pins = [
    ["explorer", "Explorateur de fichiers", "folder"],
    ["outlook", "Outlook", "mail"],
    ["acrobat", "Acrobat Reader", "pdf"],
    ["settings", "Paramètres", "gear"],
    ["browser", "Google Chrome", "chrome"],
    ["homelab", "Gestionnaire de serveurs", "server"],
    ["projets", "Projets", "folder"],
    ["certs", "Certifications", "cert"],
    ["cv", "Mon CV", "pdf"],
    ["contact", "Contact", "mail"]
  ];
  const searchIndex = pins.concat([
    ["experience", "Expériences", "file"],
    ["skills", "Compétences", "file"],
    ["pc", "Ce PC", "pc"],
    ["recycle", "Corbeille", "bin"],
    ["homelab", "Homelab", "server"],
    ["komi", "KomiRemote", "file"],
    ["ad", "Active Directory", "file"]
  ]);

  const folders = {
    root: {
      name: "Projets",
      items: [
        ["folder", "Administration systèmes", "sys"],
        ["folder", "Réseaux", "netf"],
        ["folder", "Cybersécurité", "sec"],
        ["folder", "Virtualisation", "virt"],
        ["folder", "Supervision", "sup"],
        ["folder", "Automatisation", "auto"],
        ["folder", "Cloud et Microsoft 365", "cloud"]
      ]
    },
    sys: { name: "Administration systèmes", back: "root", items: [["file", "Active Directory et GPO.html", "ad"], ["file", "GLPI.html", "glpi"]] },
    netf: { name: "Réseaux", back: "root", items: [["file", "Cisco et FortiGate.html", "sig"], ["file", "OPNsense.html", "opn"]] },
    sec: { name: "Cybersécurité", back: "root", items: [["file", "Splunk.html", "splunk"], ["file", "Audit CEH.html", "audit"], ["file", "Wazuh.html", "wazuh"]] },
    virt: { name: "Virtualisation", back: "root", items: [["file", "Homelab Proxmox.html", "homelab"], ["file", "Veeam.html", "veeam"]] },
    sup: { name: "Supervision", back: "root", items: [["file", "Prometheus et Grafana.html", "prom"], ["file", "Centreon.html", "centreon"]] },
    auto: { name: "Automatisation", back: "root", items: [["file", "n8n.html", "n8n"], ["file", "KomiRemote.html", "komi"]] },
    cloud: { name: "Cloud et Microsoft 365", back: "root", items: [["file", "Entra ID et Azure.html", "entra"], ["file", "Microsoft 365.html", "m365"]] }
  };

  const docs = {
    sig: "<h2>Cisco et FortiGate</h2><p>Chez SIGERIS SARL (janvier–août 2022, CV) : switchs Cisco (VLAN, STP), routeurs, ACL, FortiGate avec VPN IPsec, Zabbix. Le site public indique le titre « Assistant administrateur réseaux ».</p>",
    opn: "<h2>OPNsense</h2><p>Compétence déclarée, avec WireGuard. Fiche de projet détaillée : à compléter. Cette fenêtre ne se connecte à aucun pare-feu.</p>",
    wazuh: "<h2>Wazuh</h2><p>Présent dans le homelab publié. Règles personnalisées, testées sur une VM de test avant d’être gardées. Aucune alerte réelle n’est affichée.</p><p><button type='button' data-open='homelab'>Ouvrir l’étude Homelab</button></p>",
    prom: "<h2>Prometheus et Grafana</h2><p>Dans l’épisode 2 du homelab : Prometheus collecte les métriques, Grafana les affiche. Ce n’est pas un tableau de bord live.</p>",
    centreon: "<h2>Centreon</h2><p>Chez Stones and Gold, supervision Centreon et SNMP. Le CV indique une disponibilité des services améliorée de 15 %. Ce n’est pas un projet séparé publié.</p>",
    n8n: "<h2>n8n</h2><p>Automatisation présente dans le homelab publié. Le détail des workflows n’est pas rédigé — à compléter.</p>",
    entra: "<h2>Entra ID et Azure</h2><p>Chez LIKABO (novembre 2025 — juin 2026) : administration Entra ID, déploiement Azure (VM, VNet, NSG), participation à une architecture hybride AD DS / Entra ID. Ce n’est pas un projet de laboratoire séparé.</p>",
    m365: "<h2>Microsoft 365</h2><p>Exchange Online, Teams, SharePoint Online et licences, chez LIKABO. Accès conditionnel vu chez SIGERIS. Fiche de projet dédiée : à compléter.</p>"
  };

  const chromeState = { tabs: [], active: 0 };
  function pageHtml(id) {
    if (id === "ad") return '<iframe class="sitepage" title="Active Directory et GPO" src="assets/ad/index.html"></iframe>';
    if (id === "homelab") return KJ.study;
    if (KJ.projectPages && KJ.projectPages[id]) return KJ.projectPages[id];
    if (docs[id]) return "<div class='doc'>" + docs[id] + "</div>";
    if (KJ.pages[id]) return "<div class='doc'>" + KJ.pages[id] + "</div>";
    return "<div class='doc'><p>À compléter.</p></div>";
  }
  function openInChrome(id, title) {
    const i = chromeState.tabs.findIndex(function (t) { return t.id === id; });
    if (i >= 0) chromeState.active = i;
    else { chromeState.tabs.push({ id: id, title: title }); chromeState.active = chromeState.tabs.length - 1; }
    openApp("chrome");
  }
  const tb = document.getElementById("tb-apps");
  const open = {};
  let z = 10;
  let volume = 40;
  const bin = [{ name: "brouillon-demo.txt", text: "Élément de démonstration. Rien n’a été supprimé sur le disque." }];

  function paris(opts) {
    return new Intl.DateTimeFormat("fr-FR", Object.assign({ timeZone: "Europe/Paris" }, opts)).format(new Date());
  }
  function tick() {
    const hm = paris({ hour: "2-digit", minute: "2-digit", second: "2-digit" });
    const hmShort = paris({ hour: "2-digit", minute: "2-digit" });
    const day = paris({ weekday: "long", day: "numeric", month: "long" });
    const short = paris({ day: "2-digit", month: "2-digit", year: "numeric" });
    const st = document.getElementById("lock-time");
    if (st) { st.textContent = hmShort; document.getElementById("lock-date").textContent = day; }
    const tbTime = document.getElementById("tb-time");
    if (tbTime) { tbTime.textContent = hmShort; document.getElementById("tb-date").textContent = short; }
  }
  tick();
  setInterval(tick, 1000);

  function closePanels() {
    ["start", "searchp", "quick", "cal", "taskview"].forEach(function (id) {
      const n = document.getElementById(id);
      if (n) n.classList.remove("on");
    });
  }

  function focusWin(win) { z += 1; win.style.zIndex = String(z); }

  function taskBtn(id, kind, title) {
    let b = tb.querySelector('[data-app="' + id + '"]');
    if (!b) {
      b = document.createElement("button");
      b.dataset.app = id;
      b.title = title;
      b.innerHTML = I[kind] || I.file;
      b.addEventListener("click", function () {
        const w = open[id];
        if (!w) { openApp(id); return; }
        if (!w.classList.contains("open")) {
          w.classList.add("open");
          w.classList.remove("min");
          focusWin(w); markFront(w);
        } else if (w.classList.contains("front")) {
          w.classList.remove("open");
          w.classList.add("min");
        } else { focusWin(w); markFront(w); }
        paintTasks();
      });
      tb.appendChild(b);
    }
    return b;
  }
  function paintTasks() {
    tb.querySelectorAll("button").forEach(function (b) {
      const w = open[b.dataset.app];
      const on = w && w.classList.contains("open") && !w.classList.contains("min");
      b.classList.toggle("on", !!on);
      b.classList.toggle("open", !!w);
    });
  }
  function markFront(win) {
    document.querySelectorAll(".win").forEach(function (w) { w.classList.toggle("front", w === win); });
  }

  function makeWin(id, title, kind, theme) {
    const win = document.createElement("section");
    win.className = "win";
    win.dataset.app = id;
    win.innerHTML = '<header class="titlebar ' + (theme || "") + '">' + (I[kind] || "") + '<span>' + title + '</span><div class="caps"><button data-act="min" aria-label="Réduire">—</button><button data-act="max" aria-label="Agrandir">□</button><button data-act="close" aria-label="Fermer">✕</button></div></header><div class="win-body"></div>';
    const n = Object.keys(open).length;
    win.style.width = "min(700px, calc(100% - 24px))";
    win.style.left = (20 + (n % 2) * 690) + "px";
    win.style.top = (16 + Math.floor(n / 2) * 28) + "px";
    wins.appendChild(win);
    win.addEventListener("pointerdown", function () { focusWin(win); markFront(win); });
    const bar = win.querySelector(".titlebar");
    let drag = null;
    bar.addEventListener("pointerdown", function (e) {
      if (e.target.closest("button")) return;
      const r = win.getBoundingClientRect();
      drag = { x: e.clientX - r.left, y: e.clientY - r.top };
      bar.setPointerCapture(e.pointerId);
      focusWin(win); markFront(win);
    });
    bar.addEventListener("pointermove", function (e) {
      if (!drag || win.classList.contains("max")) return;
      win.style.left = Math.max(0, e.clientX - drag.x) + "px";
      win.style.top = Math.max(0, e.clientY - drag.y) + "px";
    });
    bar.addEventListener("pointerup", function () { drag = null; });
    win.querySelectorAll("[data-act]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (b.dataset.act === "close") {
          win.remove();
          delete open[id];
          const t = tb.querySelector('[data-app="' + id + '"]');
          if (t && !t.dataset.pin) t.remove();
        }
        else if (b.dataset.act === "max") win.classList.toggle("max");
        else { win.classList.remove("open"); win.classList.add("min"); }
        paintTasks();
      });
    });
    return win;
  }

  function openApp(id, extra) {
    closePanels();
    if (id === "contact") id = "outlook";
    if (id === "cv") id = "acrobat";
    if (id === "browser") id = "chrome";
    let win = open[id];
    const meta = {
      explorer: ["Explorateur de fichiers", "folder", "theme-explorer"],
      projets: ["Projets", "folder", "theme-explorer"],
      pc: ["Ce PC", "pc", "theme-explorer"],
      outlook: ["Outlook", "mail", "theme-outlook"],
      acrobat: ["Acrobat Reader — CV", "pdf", "theme-acrobat"],
      cv: ["Acrobat Reader — CV", "pdf", "theme-acrobat"],
      settings: ["Paramètres", "gear", "theme-settings"],
      homelab: ["Gestionnaire de serveurs", "server", ""],
      certs: ["Certifications", "cert", ""],
      recycle: ["Corbeille", "bin", ""],
      browser: ["Google Chrome", "chrome", "theme-chrome"],
      chrome: ["Google Chrome", "chrome", "theme-chrome"],
      cmd: ["Invite de commandes", "cmd", "theme-cmd"],
      experience: ["Expériences", "file", ""],
      skills: ["Compétences", "file", ""],
      contact: ["Outlook", "mail", "outlook"]
    };
    if (id === "contact") id = "outlook";
    if (id === "cv") id = "acrobat";
    if (!meta[id] && !KJ.projectPages[id] && id !== "homelab") {
      if (docs[id]) { openDoc(id, extra || id, docs[id]); return; }
    }
    if (!win) {
      const m = meta[id] || ["Document", "file", ""];
      win = makeWin(id, m[0], m[1], m[2]);
      open[id] = win;
      taskBtn(id, m[1], m[0]);
    }
    win.classList.add("open");
    win.classList.remove("min");
    focusWin(win); markFront(win);
    fill(win, id, extra);
    paintTasks();
  }

  function openDoc(id, title, html) {
    closePanels();
    const key = "doc-" + id;
    let win = open[key];
    if (!win) {
      win = makeWin(key, title, "file", "");
      open[key] = win;
      taskBtn(key, "file", title);
    }
    win.classList.add("open");
    win.classList.remove("min");
    win.querySelector(".win-body").innerHTML = '<div class="doc">' + html + "</div>";
    win.querySelectorAll("[data-open]").forEach(function (b) {
      b.addEventListener("click", function () { openApp(b.dataset.open); });
    });
    focusWin(win); markFront(win); paintTasks();
  }

  function fill(win, id) {
    const body = win.querySelector(".win-body");
    if (id === "explorer" || id === "projets") renderExplorer(body, "root");
    else if (id === "pc") renderPC(body);
    else if (id === "cmd") renderCmd(body);
    else if (id === "outlook") renderOutlook(body);
    else if (id === "acrobat") renderAcrobat(body);
    else if (id === "settings") renderSettings(body);
    else if (id === "certs") body.innerHTML = '<div class="doc">' + KJ.pages.certs + "</div>";
    else if (id === "homelab") body.innerHTML = '<div class="doc">' + KJ.study + "</div>";
    else if (id === "experience") body.innerHTML = '<div class="doc">' + KJ.pages.experience + "</div>";
    else if (id === "skills") body.innerHTML = '<div class="doc">' + KJ.pages.skills + "</div>";
    else if (id === "recycle") renderBin(body);
    else if (id === "browser" || id === "chrome") renderChrome(body);
    else if (KJ.projectPages[id]) body.innerHTML = '<div class="doc">' + KJ.projectPages[id] + "</div>";
    else if (id === "homelab") body.innerHTML = '<div class="doc">' + KJ.study + "</div>";
    body.querySelectorAll("[data-open]").forEach(function (b) {
      b.addEventListener("click", function () { openApp(b.dataset.open); });
    });
  }

  function openFile(it) {
    if (it[0] === "folder") return;
    openInChrome(it[2], it[1]);
  }
  function ntpHtml() {
    const tiles = [];
    Object.keys(folders).forEach(function (k) {
      (folders[k].items || []).forEach(function (it) {
        if (it[0] === "file") tiles.push(it);
      });
    });
    return '<div class="ntp"><img class="ntp-logo" src="assets/icons/chrome.svg" alt=""><div class="ntp-box">Rechercher un projet</div><div class="ntp-grid">' + tiles.map(function (it) {
      return '<button type="button" class="ntile" data-open="' + it[2] + '" data-title="' + it[1] + '"><img src="assets/icons/chrome.svg" alt=""><span>' + it[1].replace(".html", "") + '</span></button>';
    }).join("") + "</div></div>";
  }
  function renderChrome(body) {
    if (!chromeState.tabs.length) chromeState.tabs.push({ id: "new", title: "Nouvel onglet" });
    const tab = chromeState.tabs[chromeState.active] || chromeState.tabs[0];
    const tabs = chromeState.tabs.map(function (t, i) {
      return '<button type="button" class="tab' + (i === chromeState.active ? " on" : "") + '" data-tab="' + i + '"><img src="assets/icons/chrome.svg" alt="" width="16" height="16">' + t.title + '<span data-x="' + i + '">×</span></button>';
    }).join("");
    const page = tab.id === "new" ? ntpHtml() : pageHtml(tab.id);
    body.innerHTML = '<div class="chrome"><div class="ctabs">' + tabs + '<button type="button" id="newtab">+</button></div><div class="ctool"><button type="button" id="cback" aria-label="Précédent">‹</button><button type="button" id="cfwd" aria-label="Suivant">›</button><button type="button" id="crel" aria-label="Actualiser">↻</button><div class="omnibox"><img src="assets/icons/chrome.svg" alt="" width="16" height="16"><span>' + (tab.id === "new" ? "Nouvel onglet" : "komjordan.local/projets/" + tab.id) + '</span></div><div class="cplugins"><button type="button" id="cext" aria-label="Extensions" title="Extensions">▦</button><button type="button" id="cmenu" aria-label="Menu">⋮</button><img class="cprofile" src="assets/avatar.jpg" alt=""></div></div><div class="cside" id="cside" hidden></div><div class="cpage">' + page + "</div></div>";
    body.querySelectorAll("[data-tab]").forEach(function (b) {
      b.addEventListener("click", function (e) {
        if (e.target.dataset.x) {
          const i = Number(e.target.dataset.x);
          chromeState.tabs.splice(i, 1);
          chromeState.active = Math.max(0, chromeState.active - 1);
        } else chromeState.active = Number(b.dataset.tab);
        renderChrome(body);
      });
    });
    body.querySelector("#newtab").addEventListener("click", function () {
      chromeState.tabs.push({ id: "new", title: "Nouvel onglet" });
      chromeState.active = chromeState.tabs.length - 1;
      renderChrome(body);
    });
    body.querySelector("#crel").addEventListener("click", function () { renderChrome(body); });
    body.querySelector("#cback").addEventListener("click", function () {
      if (chromeState.active > 0) { chromeState.active -= 1; renderChrome(body); }
    });
    body.querySelector("#cfwd").addEventListener("click", function () {
      if (chromeState.active < chromeState.tabs.length - 1) { chromeState.active += 1; renderChrome(body); }
    });
    body.querySelectorAll(".ntile").forEach(function (b) {
      b.addEventListener("click", function () {
        chromeState.tabs[chromeState.active] = { id: b.dataset.open, title: b.dataset.title };
        renderChrome(body);
      });
    });
    body.querySelector("#cext").addEventListener("click", function () {
      const side = body.querySelector("#cside");
      side.hidden = !side.hidden;
      side.innerHTML = "<b>Extensions</b><p>Aucune extension installée. Simulation Chrome, aucun module réel.</p>";
    });
    body.querySelector("#cmenu").addEventListener("click", function () {
      const side = body.querySelector("#cside");
      side.hidden = false;
      side.innerHTML = "<b>Menu Chrome</b><button type='button' id='mnew'>Nouvel onglet</button><p class='note'>Menu local. Pas le menu Google.</p>";
      body.querySelector("#mnew").addEventListener("click", function () {
        chromeState.tabs.push({ id: "new", title: "Nouvel onglet" });
        chromeState.active = chromeState.tabs.length - 1;
        renderChrome(body);
      });
    });
  }

  function renderExplorer(body, key) {
    const node = folders[key];
    body.innerHTML = '<div class="explorer"><aside class="navpane"><p class="navh">Accueil</p><button type="button" data-go="root"><img class="navico" src="assets/icons/folder.svg" alt=""><span>Accès rapide</span></button><button type="button" data-go="desk"><img class="navico" src="assets/icons/desktop.svg" alt=""><span>Bureau</span></button><button type="button" data-go="docs"><img class="navico" src="assets/icons/folder.svg" alt=""><span>Documents</span></button><button type="button" data-go="dl"><img class="navico" src="assets/icons/folder.svg" alt=""><span>Téléchargements</span></button><button type="button" data-pc="1"><img class="navico" src="assets/icons/thispc.svg" alt=""><span>Ce PC</span></button><button type="button" data-go="root"><img class="navico" src="assets/icons/folder.svg" alt=""><span>Projets</span></button></aside><div class="exmain"><div class="extabs"><span class="tabico">' + I.folder + '</span><button type="button" class="on">' + (folders[key] ? folders[key].name : "Projets") + '</button></div><div class="cmdbar"><button type="button" data-cmd="new">Nouveau</button><button type="button" data-cmd="cut">Couper</button><button type="button" data-cmd="copy">Copier</button><button type="button" data-cmd="paste">Coller</button><button type="button" data-cmd="ren">Renommer</button><button type="button" data-cmd="share">Partager</button><button type="button" data-cmd="del">Supprimer</button><span class="cmdsp"></span><button type="button" id="ex-sort">Trier</button><button type="button" id="ex-view">Afficher</button></div><div class="exbar"><button type="button" id="ex-back" aria-label="Précédent"><img src="assets/icons/back.svg" alt="" width="16" height="16"></button><button type="button" id="ex-fwd" aria-label="Suivant"><img src="assets/icons/forward.svg" alt="" width="16" height="16"></button><button type="button" id="ex-up" aria-label="Haut">↑</button><button type="button" id="ex-re" aria-label="Actualiser"><img src="assets/icons/refresh.svg" alt="" width="16" height="16"></button><input class="addr" readonly value="' + (key === "root" ? "Ce PC\\Projets" : "Ce PC\\Projets\\" + folders[key].name) + '""><input class="exsearch" placeholder="Rechercher dans ' + (folders[key] ? folders[key].name : "Projets") + '" id="ex-q"></div><p class="exstat" id="exstat"></p><div class="gridfiles" id="grid"></div><div class="exstatus" id="exstatus"></div><div class="ctx" id="ctx" hidden></div></div></div>';
    const grid = body.querySelector("#grid");
    let items = node.items.slice();
    let view = "icons";
    function fileMeta(it) {
      const folder = it[0] === "folder";
      return {
        type: folder ? "Dossier de fichiers" : "Document HTML",
        size: folder ? "" : "12 Ko",
        bytes: folder ? 0 : 12000,
        date: paris({ day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" })
      };
    }
    function paint() {
      const status = body.querySelector("#exstatus");
      const bytes = items.reduce(function (n, it) { return n + fileMeta(it).bytes; }, 0);
      status.textContent = items.length + " élément" + (items.length > 1 ? "s" : "") + (bytes ? "    " + Math.round(bytes / 1024) + " Ko illustratifs" : "") + "    Aucun fichier du disque";
      grid.className = "gridfiles view-" + view;
      grid.innerHTML = "";
      if (view === "details") {
        const head = document.createElement("div");
        head.className = "detailhead";
        head.innerHTML = "<span>Nom</span><span>Date de modification</span><span>Type</span><span>Taille</span>";
        grid.appendChild(head);
      }
      items.forEach(function (it) {
        const meta = fileMeta(it);
        const b = document.createElement("button");
        b.className = "file";
        const icon = it[0] === "folder" ? I.folder : I.chrome;
        if (view === "details") {
          b.innerHTML = icon + "<span class='nm'>" + it[1] + "</span><span>" + meta.date + "</span><span>" + meta.type + "</span><span>" + (meta.size || "") + "</span>";
        } else {
          b.innerHTML = icon + "<span>" + it[1] + "</span>";
        }
        function go() {
          if (it[0] === "folder") renderExplorer(body, it[2]);
          else openInChrome(it[2], it[1]);
        }
        b.addEventListener("click", go);
        b.addEventListener("dblclick", go);
        b.addEventListener("contextmenu", function (e) {
          e.preventDefault();
          e.stopPropagation();
          const ctx = body.querySelector("#ctx");
          ctx.hidden = false;
          ctx.style.left = Math.min(e.offsetX + 8, 280) + "px";
          ctx.style.top = "120px";
          ctx.innerHTML = '<button type="button" data-a="open">Ouvrir</button><button type="button" data-a="prop">Propriétés</button>';
          ctx.querySelector("[data-a=open]").addEventListener("click", function () { ctx.hidden = true; go(); });
          ctx.querySelector("[data-a=prop]").addEventListener("click", function () {
            ctx.hidden = true;
            body.querySelector("#exstat").textContent = it[1] + " — élément du portfolio, pas un fichier du disque.";
          });
        });
        grid.appendChild(b);
      });
    }
    paint();
    body.querySelector("#ex-back").addEventListener("click", function () { if (node.back) renderExplorer(body, node.back); });
    body.querySelector("#ex-up").addEventListener("click", function () { if (node.back) renderExplorer(body, node.back); else renderExplorer(body, "root"); });
    body.querySelector("#ex-re").addEventListener("click", function () { renderExplorer(body, key); });
    body.querySelector("#ex-fwd").addEventListener("click", function () { renderExplorer(body, key); });
    body.querySelector("#ex-sort").addEventListener("click", function () {
      items.sort(function (a, b) { return a[1].localeCompare(b[1], "fr"); });
      paint();
    });
    body.querySelector("#ex-view").addEventListener("click", function () {
      view = view === "icons" ? "list" : view === "list" ? "details" : "icons";
      this.textContent = view === "icons" ? "Afficher" : view === "list" ? "Liste" : "Détails";
      paint();
    });
    body.querySelector("#ex-q").addEventListener("input", function (e) {
      const q = e.target.value.toLowerCase();
      items = node.items.filter(function (it) { return it[1].toLowerCase().indexOf(q) !== -1; });
      paint();
    });
    body.querySelectorAll("[data-go]").forEach(function (b) {
      b.addEventListener("click", function () { renderExplorer(body, "root"); });
    });
    body.querySelector("[data-pc]").addEventListener("click", function () { openApp("pc"); });
    body.querySelectorAll("[data-cmd]").forEach(function (b) {
      b.addEventListener("click", function () {
        body.querySelector("#exstat").textContent = "Démonstration : « " + b.textContent + " » ne modifie aucun fichier réel.";
      });
    });
  }

  function renderPC(body) {
    const disks = [
      ["Disque local (C:)", "118 Go libres sur 237 Go", 50],
      ["Données (D:)", "420 Go libres sur 931 Go", 55],
      ["Sauvegarde (E:)", "64 Go libres sur 128 Go", 50]
    ];
    body.innerHTML = '<div class="explorer pcview"><aside class="navpane"><p class="navh">Ce PC</p><button type="button" class="on"><img class="navico" src="assets/icons/thispc.svg" alt=""><span>Ce PC</span></button><button type="button" id="pc-net"><img class="navico" src="assets/icons/netpc.svg" alt=""><span>Réseau</span></button></aside><div class="exmain"><div class="extabs"><button type="button" class="on">Ce PC</button></div><div class="pcbody" id="pcbody"></div><div class="exstatus">3 éléments · illustration, aucun disque réel n’est lu</div></div></div>';
    function drives() {
      body.querySelector("#pcbody").innerHTML = '<h3 class="pcsec">Périphériques et lecteurs</h3><div class="drives">' + disks.map(function (d, i) {
        return '<button type="button" class="drive" data-disk="' + i + '"><img src="assets/icons/drive.svg" alt="" width="48" height="48"><span><b>' + d[0] + '</b><small>' + d[1] + '</small><i style="width:' + d[2] + '%"></i></span></button>';
      }).join("") + '</div><h3 class="pcsec">Emplacements réseau</h3><div class="drives"><button type="button" class="drive" id="netloc"><img src="assets/icons/netpc.svg" alt="" width="48" height="48"><span><b>KOMJORDAN</b><small>Domaine · simulation</small></span></button></div>';
      body.querySelectorAll("[data-disk]").forEach(function (b) {
        b.addEventListener("click", function () { openApp("projets"); });
      });
      body.querySelector("#netloc").addEventListener("click", network);
    }
    function network() {
      body.querySelector("#pcbody").innerHTML = '<h3 class="pcsec">Réseau</h3><p class="note">Simulation. Aucun partage ni adresse réelle n’est affiché.</p><div class="drives"><button type="button" class="drive" id="backpc"><img src="assets/icons/thispc.svg" alt="" width="48" height="48"><span><b>KOMJORDAN.LOCAL</b><small>Contrôleur illustratif</small></span></button></div>';
      body.querySelector("#backpc").addEventListener("click", drives);
      body.querySelector(".exstatus").textContent = "1 élément · réseau illustratif";
    }
    drives();
    body.querySelector("#pc-net").addEventListener("click", network);
  }

  function renderCmd(body) {
    body.innerHTML = '<div class="cmdwin"><pre>Microsoft Windows [Version 10.0.22631.1]<br>(c) Microsoft Corporation. Tous droits réservés.<br><br>C:\\Users\\Axel&gt; <span class="cur">_</span></pre><p class="note">Invite locale. Aucune commande n’est exécutée.</p></div>';
  }

  function renderOutlook(body) {
    body.innerHTML = '<div class="outlook"><div class="folders"><img src="assets/icons/outlook.svg" alt="" width="28" height="28"><button type="button" data-box="in">Boîte de réception</button><button type="button" data-box="sent">Éléments envoyés</button><button type="button" data-box="spam">Courrier indésirable</button><button type="button" id="newm" class="on">Nouveau message</button><p class="note">Exemples locaux. Aucun courrier réel.</p></div><div class="olist" id="olist"></div><div class="oread" id="oread"></div></div>';
    const inbox = [
      { from: "DSI KOMJORDAN", mail: "dsi@komjordan.local", time: "09:14", sub: "Ticket 1842 — accès VPN", body: "Exemple. La DSI demande de valider une demande d’accès VPN pour un poste du domaine. Ce n’est pas un ticket ouvert." },
      { from: "Helpdesk", mail: "helpdesk@komjordan.local", time: "08:41", sub: "GLPI — poste Axel", body: "Exemple. Un ticket de démonstration sur un poste. Aucun incident réel." },
      { from: "Direction", mail: "direction@komjordan.local", time: "Hier", sub: "Compte rendu de changement", body: "Exemple de message interne. Aucune décision réelle n’est consignée ici." }
    ];
    const sent = [
      { from: "Axel KAMGAING", mail: "axel@komjordan.fr", time: "Hier", sub: "Retour sur la GPO laboratoire", body: "Exemple d’envoi. Rien n’a été transmis." }
    ];
    const spam = [
      { from: "Promo Cloud", mail: "news@promo.example", time: "07:02", sub: "−70 % sur une formation", body: "Publicité d’exemple. Ne cliquez sur aucun lien : il n’y en a pas." },
      { from: "Offre logiciel", mail: "offres@pub.example", time: "06:18", sub: "Votre PC mérite mieux", body: "Autre publicité d’exemple, classée en indésirable. Aucun lien." }
    ];
    function compose() {
      body.querySelector("#oread").innerHTML = '<form id="mailf" class="olcompose"><div class="olribbon"><button class="send" type="submit">Envoyer</button><button type="button" id="discard">Ignorer</button></div><div class="olrow"><label>À</label><input id="to" value="axel@komjordan.fr" readonly></div><div class="olrow"><label>De</label><input id="from" type="email" placeholder="votre e-mail" required></div><div class="olrow"><label>Objet</label><input id="sub" placeholder="Contact portfolio"></div><textarea id="msg" required placeholder="Message"></textarea><p class="okmsg" id="sentmsg"></p></form>';
      body.querySelector("#mailf").addEventListener("submit", function (e) {
        e.preventDefault();
        const from = body.querySelector("#from").value.trim();
        const sub = body.querySelector("#sub").value.trim() || "(sans objet)";
        const msg = body.querySelector("#msg").value.trim();
        if (!from || from.indexOf("@") < 1) { body.querySelector("#sentmsg").textContent = "Indiquez votre e-mail. Rien n’est envoyé."; return; }
        if (!msg) { body.querySelector("#sentmsg").textContent = "Écrivez un message. Rien n’est envoyé."; return; }
        sent.unshift({ from: from, sub: sub, body: msg });
        const href = "mailto:axel@komjordan.fr?subject=" + encodeURIComponent(sub) + "&body=" + encodeURIComponent("De : " + from + "\n\n" + msg);
        body.querySelector("#sentmsg").innerHTML = "Simulation : aucun e-mail n’a quitté cette page. <a href=\"" + href + "\">Ouvrir votre messagerie</a> pour l’envoyer vraiment à axel@komjordan.fr.";
      });
    }
    function openMail(m) {
      body.querySelector("#oread").innerHTML = '<article class="mread"><h2>' + m.sub + '</h2><div class="mwho"><span class="mav">' + m.from.charAt(0) + '</span><div><b>' + m.from + '</b><small>' + m.mail + '</small></div><time>' + m.time + '</time></div><div class="mbody"><p>' + m.body + '</p><p class="note">Exemple local. Ce n’est pas un e-mail reçu.</p></div><div class="macts"><button type="button">Répondre</button><button type="button">Transférer</button></div></article>';
    }
    function list(box) {
      const items = box === "sent" ? sent : box === "spam" ? spam : inbox;
      body.querySelector("#olist").innerHTML = items.map(function (m, i) {
        return '<button type="button" class="mrow" data-i="' + i + '"><span class="mfrom">' + m.from + '</span><time>' + m.time + '</time><span class="msub">' + m.sub + '</span><span class="mprev">' + m.body + '</span></button>';
      }).join("") || "<p class='note'>Vide.</p>";
      if (items[0]) openMail(items[0]);
      else body.querySelector("#oread").innerHTML = "<p class='note'>Aucun exemple dans ce dossier.</p>";
      body.querySelectorAll("#olist .mrow").forEach(function (b) {
        b.addEventListener("click", function () {
          body.querySelectorAll(".mrow").forEach(function (x) { x.classList.remove("on"); });
          b.classList.add("on");
          openMail(items[Number(b.dataset.i)]);
        });
      });
      const first = body.querySelector(".mrow");
      if (first) first.classList.add("on");
    }
    function show(box) {
      body.querySelectorAll(".folders button").forEach(function (x) { x.classList.remove("on"); });
      const btn = body.querySelector('[data-box="' + box + '"]') || body.querySelector("#newm");
      if (btn) btn.classList.add("on");
      if (box === "new") compose();
      else list(box);
    }
    body.querySelectorAll(".folders button[data-box]").forEach(function (b) {
      b.addEventListener("click", function () { show(b.dataset.box); });
    });
    body.querySelector("#newm").addEventListener("click", function () { show("new"); });
    show("new");
  }

  function renderAcrobat(body) {
    body.innerHTML = '<div class="acrobat"><div class="atool"><img src="assets/icons/acrobat.svg" alt="" width="22" height="22"><b>Acrobat Reader — CV Axel KAMGAING</b><button type="button" id="pp">Page préc.</button><span id="pn">1 / 1</span><button type="button" id="np">Page suiv.</button><button type="button" id="zout">−</button><span id="zl">100 %</span><button type="button" id="zin">+</button></div><aside class="aside-pdf"><button type="button" class="on">1</button></aside><div class="apage" id="apage"><iframe title="CV" src="assets/cv.pdf#page=1"></iframe></div></div>';
    let zoom = 100;
    function apply() {
      body.querySelector("#zl").textContent = zoom + " %";
      body.querySelector("iframe").style.width = Math.round(720 * zoom / 100) + "px";
    }
    body.querySelector("#zin").addEventListener("click", function () { zoom = Math.min(160, zoom + 10); apply(); });
    body.querySelector("#zout").addEventListener("click", function () { zoom = Math.max(60, zoom - 10); apply(); });
    body.querySelector("#np").addEventListener("click", function () {
      body.querySelector("#pn").textContent = "1 / 1 — dernière page";
    });
    body.querySelector("#pp").addEventListener("click", function () {
      body.querySelector("#pn").textContent = "1 / 1";
    });
  }

  function renderSettings(body) {
    const pages = {
      systeme: "<h2>Système</h2><p>Session de démonstration. L’alimentation ne coupe pas l’ordinateur.</p><label>Taille du texte <input id='fs' type='range' min='14' max='20' value='15'></label>",
      perso: "<h2>Personnalisation</h2><p>Fond d’écran local, dans l’esprit des fonds Windows 11. Ce n’est pas un produit Microsoft.</p>",
      apropos: "<h2>À propos</h2><p>KOMJORDAN\\Axel · portfolio local · Axel KAMGAING · non affilié à Microsoft.</p>"
    };
    body.innerHTML = '<div class="settings"><nav class="setnav"><button type="button" class="on" data-s="systeme">Système</button><button type="button" data-s="perso">Personnalisation</button><button type="button" data-s="apropos">À propos</button></nav><div class="setmain" id="setmain"></div></div>';
    function show(k) {
      body.querySelectorAll(".setnav button").forEach(function (b) { b.classList.toggle("on", b.dataset.s === k); });
      body.querySelector("#setmain").innerHTML = pages[k];
      const fs = body.querySelector("#fs");
      if (fs) fs.addEventListener("input", function () { document.documentElement.style.fontSize = fs.value + "px"; });
    }
    body.querySelectorAll(".setnav button").forEach(function (b) { b.addEventListener("click", function () { show(b.dataset.s); }); });
    show("systeme");
  }

  function renderBin(body) {
    const win = body.closest(".win");
    if (win) { win.style.width = "min(980px, calc(100% - 24px))"; win.style.left = "24px"; }
    body.innerHTML = '<div class="explorer binview"><aside class="navpane"><p class="navh">Corbeille</p><button type="button" class="on"><img class="navico" src="assets/icons/bin.svg" alt=""><span>Corbeille</span></button></aside><div class="exmain"><div class="cmdbar"><button type="button" id="empty">Vider la Corbeille</button><button type="button" id="restore">Restaurer</button></div><div class="binmain" id="binmain"></div><div class="exstatus" id="binstat"></div></div></div>';
    function paint() {
      const main = body.querySelector("#binmain");
      body.querySelector("#binstat").textContent = bin.length + " élément" + (bin.length > 1 ? "s" : "") + "    Démonstration. Rien n’est effacé sur le disque.";
      if (!bin.length) {
        main.innerHTML = '<div class="binempty"><img src="assets/icons/bin.svg" alt="" width="72" height="72"><p>Cette corbeille est vide.</p></div>';
        return;
      }
      main.innerHTML = '<div class="detailhead binh"><span></span><span>Nom</span><span>Emplacement d’origine</span><span>Date de suppression</span><span>Type</span></div>' + bin.map(function (item, i) {
        return '<button type="button" class="file binrow" data-i="' + i + '"><img class="ico" src="assets/icons/document.svg" alt=""><span class="nm">' + item.name + '</span><span>Bureau</span><span>' + paris({ day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" }) + '</span><span>Document</span></button>';
      }).join("");
    }
    paint();
    body.querySelector("#empty").addEventListener("click", function () { bin.length = 0; paint(); });
    body.querySelector("#restore").addEventListener("click", function () {
      if (bin.length) bin.pop();
      paint();
    });
  }

  function renderBrowser(body) {
    body.innerHTML = '<div class="doc"><p class="kicker">Hors ligne</p><h2>Navigateur</h2><p>Aucune page Internet n’est chargée. Raccourcis locaux :</p><p><button type="button" data-open="experience">Expériences</button> <button type="button" data-open="skills">Compétences</button> <button type="button" data-open="homelab">Homelab</button></p></div>';
    body.querySelectorAll("[data-open]").forEach(function (b) { b.addEventListener("click", function () { openApp(b.dataset.open); }); });
  }

  function desk() {
    const host = document.getElementById("desk-icons");
    [["pc", "Ce PC", "pc"], ["projets", "Projets", "folder"], ["acrobat", "Mon CV", "pdf"], ["outlook", "Contact", "mail"], ["certs", "Certifications", "cert"], ["homelab", "Mon Homelab", "server"], ["recycle", "Corbeille", "bin"]].forEach(function (a) {
      const b = document.createElement("button");
      b.className = "dicon";
      b.innerHTML = I[a[2]] + "<span>" + a[1] + "</span>";
      b.addEventListener("click", function () {
        host.querySelectorAll(".dicon").forEach(function (x) { x.classList.remove("sel"); });
        b.classList.add("sel");
        openApp(a[0]);
      });
      host.appendChild(b);
    });
  }

  function buildStart() {
    const start = document.getElementById("start");
    start.innerHTML = '<input id="qstart" placeholder="Rechercher des applications, des paramètres et des documents" autocomplete="off"><div class="sec-h"><span>Épinglé</span><button type="button" id="all-btn">Toutes les applications</button></div><div class="pins" id="pins"></div><div class="allapps" id="allapps"></div><div class="sec-h"><span>Recommandé</span></div><div class="reco" id="reco"></div><div class="start-foot"><button class="userchip" type="button" id="user-open"><img src="assets/avatar.jpg" alt=""><span>Axel KAMGAING KOM</span></button><button type="button" id="power-btn-start" aria-label="Alimentation">' + I.power + '</button></div>';
    const pinsEl = start.querySelector("#pins");
    pins.forEach(function (p) {
      const b = document.createElement("button");
      b.className = "pin";
      b.innerHTML = I[p[2]] + "<span>" + p[1] + "</span>";
      b.addEventListener("click", function () { openApp(p[0]); });
      pinsEl.appendChild(b);
    });
    const all = start.querySelector("#allapps");
    searchIndex.forEach(function (p) {
      const b = document.createElement("button");
      b.textContent = p[1];
      b.addEventListener("click", function () { openApp(p[0]); });
      all.appendChild(b);
    });
    start.querySelector("#all-btn").addEventListener("click", function () { all.classList.toggle("on"); });
    start.querySelector("#reco").innerHTML = '<button type="button" id="rec1">' + I.pdf + '<span>CV Axel KAMGAING<small>Document</small></span></button><button type="button" id="rec2">' + I.server + '<span>Homelab Proxmox<small>Étude de cas</small></span></button>';
    start.querySelector("#rec1").addEventListener("click", function () { openApp("acrobat"); });
    start.querySelector("#rec2").addEventListener("click", function () { openApp("homelab"); });
    start.querySelector("#user-open").addEventListener("click", function () { openDoc("about", "À propos", KJ.pages.apropos); });
    start.querySelector("#qstart").addEventListener("input", function (e) { openSearch(e.target.value); });
    start.querySelector("#power-btn-start").addEventListener("click", function (e) {
      e.stopPropagation();
      showFly(document.getElementById("quick"), powerHtml(), true);
    });
  }

  function openSearch(q) {
    const box = document.getElementById("searchp");
    const query = (q || "").trim().toLowerCase();
    const hits = searchIndex.filter(function (p) { return !query || p[1].toLowerCase().indexOf(query) !== -1 || p[0].indexOf(query) !== -1; });
    box.classList.add("on");
    document.getElementById("start").classList.remove("on");
    box.innerHTML = '<input id="q2" value="' + (q || "").replace(/"/g, "") + '" placeholder="Rechercher"><div class="hits"></div>';
    const h = box.querySelector(".hits");
    if (!hits.length) h.innerHTML = "<p class='note'>Aucun résultat.</p>";
    hits.forEach(function (p) {
      const b = document.createElement("button");
      b.textContent = p[1];
      b.addEventListener("click", function () { openApp(p[0]); });
      h.appendChild(b);
    });
    const input = box.querySelector("#q2");
    input.focus();
    input.addEventListener("input", function () { openSearch(input.value); });
  }

  function powerHtml() {
    return "<b>Alimentation</b><button type='button' id='pw-off'>Arrêter</button><button type='button' id='pw-re'>Redémarrer</button><p class='note'>Démonstration. L’ordinateur reste allumé.</p>";
  }
  function showFly(node, html, on) {
    node.innerHTML = html;
    node.classList.add("on");
    const off = node.querySelector("#pw-off");
    const re = node.querySelector("#pw-re");
    if (off) off.addEventListener("click", function () { shutdown(); });
    if (re) re.addEventListener("click", function () { location.reload(); });
  }

  function shutdown() {
    closePanels();
    document.getElementById("desktop").classList.remove("on");
    const w = document.getElementById("welcome");
    w.classList.add("on");
    document.getElementById("welcome-line").textContent = "Arrêt de la session de démonstration";
    setTimeout(function () {
      w.classList.remove("on");
      if (document.body.dataset.mode === "desktop") document.getElementById("desktop").classList.add("on");
      else { showLock(); }
    }, 900);
  }

  function tools(host, fly) {
    host.innerHTML = '<button type="button" data-t="net" aria-label="Réseau">' + I.net + '</button><button type="button" data-t="acc" aria-label="Accessibilité">' + I.access + '</button><button type="button" data-t="pow" aria-label="Alimentation">' + I.power + '</button>';
    host.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.stopPropagation();
        if (b.dataset.t === "net") fly.innerHTML = "<b>Wi-Fi entreprise</b><p>KOMJORDAN-ENT</p><p>Connecté · domaine KOMJORDAN</p><p class='note'>Simulation. Aucun réseau réel.</p>";
        else if (b.dataset.t === "acc") fly.innerHTML = "<b>Accessibilité</b><p>La taille du texte se règle dans Paramètres, une fois la session ouverte.</p>";
        else fly.innerHTML = powerHtml();
        fly.classList.toggle("on");
        const off = fly.querySelector("#pw-off");
        if (off) off.addEventListener("click", shutdown);
      });
    });
  }

  function enterDesktop() {
    document.getElementById("signin").classList.add("hidden");
    document.getElementById("lock").classList.add("hidden");
    const w = document.getElementById("welcome");
    w.classList.add("on");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lines = ["Bienvenue", "Bienvenue Axel KAMGAING KOM", "Chargement du profil"];
    let i = 0;
    const line = document.getElementById("welcome-line");
    (function step() {
      line.textContent = lines[i++];
      if (i < lines.length) setTimeout(step, reduce ? 0 : 550);
      else setTimeout(function () {
        w.classList.remove("on");
        document.getElementById("desktop").classList.add("on");
      }, reduce ? 0 : 400);
    })();
  }

  document.getElementById("taskview-btn").innerHTML = I.tasks;
  document.getElementById("tray").innerHTML = '<button type="button" id="tray-net" aria-label="Réseau">' + I.net + '</button><button type="button" id="tray-vol" aria-label="Volume">' + I.vol + '</button><button type="button" id="tray-bat" aria-label="Batterie">' + I.bat + '</button><button class="clockbtn" id="tray-clock" type="button"><span id="tb-time">--:--</span><small id="tb-date"></small></button>';
  tick();
  desk();
  buildStart();
  tools(document.getElementById("sign-tools"), document.getElementById("sign-fly"));
  [["cmd", "cmd", "Invite de commandes"], ["chrome", "chrome", "Google Chrome"], ["acrobat", "pdf", "Acrobat Reader"], ["outlook", "mail", "Outlook"]].forEach(function (p) {
    const b = taskBtn(p[0], p[1], p[2]);
    b.dataset.pin = "1";
  });

  let signTimer = null;
  function toSignin() {
    const lock = document.getElementById("lock");
    if (!lock || lock.classList.contains("up") || lock.classList.contains("hidden")) return;
    clearTimeout(signTimer);
    lock.classList.add("up");
    document.getElementById("signin").classList.remove("hidden");
    setTimeout(function () { lock.classList.add("hidden"); }, 520);
    const pass = document.getElementById("pass");
    if (pass) pass.focus();
  }
  function showLock() {
    const lock = document.getElementById("lock");
    lock.classList.remove("hidden", "up");
    document.getElementById("signin").classList.add("hidden");
    clearTimeout(signTimer);
    signTimer = setTimeout(toSignin, 2000);
  }
  document.getElementById("lock").addEventListener("click", function (e) {
    if (e.target.closest(".sysbar, .fly")) return;
    toSignin();
  });
  document.getElementById("sign-form").addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("pass").value = "";
    enterDesktop();
  });
  document.getElementById("opts").addEventListener("click", function () {
    const fly = document.getElementById("sign-fly");
    fly.innerHTML = "<b>Options de connexion</b><p>Le mot de passe est facultatif. La flèche ou Entrée ouvre la session. Rien n’est enregistré.</p>";
    fly.classList.add("on");
  });
  document.getElementById("acct-other").addEventListener("click", function () {
    document.getElementById("acct-axel").classList.remove("on");
    document.getElementById("acct-other").classList.add("on");
    document.querySelector(".who").textContent = "Autre utilisateur";
    document.querySelector(".domain").textContent = "KOMJORDAN\\Autre";
    document.querySelector(".avatar").src = "assets/icons/user.svg";
  });
  document.getElementById("acct-axel").addEventListener("click", function () {
    document.getElementById("acct-other").classList.remove("on");
    document.getElementById("acct-axel").classList.add("on");
    document.querySelector(".who").textContent = "Axel KAMGAING KOM";
    document.querySelector(".domain").textContent = "KOMJORDAN\\Axel";
    document.querySelector(".avatar").src = "assets/avatar.jpg";
  });
  document.getElementById("start-btn").addEventListener("click", function (e) {
    e.stopPropagation();
    const s = document.getElementById("start");
    const on = s.classList.contains("on");
    closePanels();
    if (!on) s.classList.add("on");
  });
  document.getElementById("search-box").addEventListener("click", function (e) {
    e.stopPropagation();
    closePanels();
    openSearch("");
  });
  document.getElementById("taskview-btn").addEventListener("click", function (e) {
    e.stopPropagation();
    closePanels();
    const tv = document.getElementById("taskview");
    const thumbs = Object.keys(open).map(function (id) {
      return '<button type="button" data-app="' + id + '">' + (open[id].querySelector(".titlebar span").textContent) + "</button>";
    }).join("");
    tv.innerHTML = "<b>Vue des tâches</b><div class='thumbs'>" + (thumbs || "<p>Aucune fenêtre.</p>") + "</div>";
    tv.classList.add("on");
    tv.querySelectorAll("[data-app]").forEach(function (b) {
      b.addEventListener("click", function () { openApp(b.dataset.app); });
    });
  });
  document.getElementById("tray-net").addEventListener("click", function (e) {
    e.stopPropagation();
    closePanels();
    document.getElementById("quick").innerHTML = "<b>Wi-Fi entreprise</b><p>KOMJORDAN-ENT</p><p>Connecté · domaine KOMJORDAN</p><p class='note'>Simulation. Aucun réseau réel.</p>";
    document.getElementById("quick").classList.add("on");
  });
  document.getElementById("tray-vol").addEventListener("click", function (e) {
    e.stopPropagation();
    closePanels();
    document.getElementById("quick").innerHTML = "<b>Volume</b><label><span>Maquette</span><span id='vp'>" + volume + "</span></label><input id='vr' type='range' min='0' max='100' value='" + volume + "'><p class='note'>Ne change pas le volume de l’ordinateur.</p>";
    document.getElementById("quick").classList.add("on");
    document.getElementById("vr").addEventListener("input", function (ev) {
      volume = Number(ev.target.value);
      document.getElementById("vp").textContent = volume;
    });
  });
  document.getElementById("tray-bat").addEventListener("click", function (e) {
    e.stopPropagation();
    closePanels();
    document.getElementById("quick").innerHTML = "<b>Batterie</b><p>Secteur · simulation. Aucune batterie n’est lue.</p>";
    document.getElementById("quick").classList.add("on");
  });
  document.getElementById("tray-clock").addEventListener("click", function (e) {
    e.stopPropagation();
    closePanels();
    const now = new Date();
    const y = now.getFullYear();
    const m = now.getMonth();
    const first = new Date(y, m, 1).getDay();
    const days = new Date(y, m + 1, 0).getDate();
    let cells = "<tr><th>L</th><th>M</th><th>M</th><th>J</th><th>V</th><th>S</th><th>D</th></tr><tr>";
    const pad = (first + 6) % 7;
    for (let i = 0; i < pad; i++) cells += "<td></td>";
    for (let d = 1; d <= days; d++) {
      if ((pad + d - 1) % 7 === 0 && d !== 1) cells += "</tr><tr>";
      const today = d === now.getDate();
      cells += "<td" + (today ? " class='today'" : "") + ">" + d + "</td>";
    }
    cells += "</tr>";
    document.getElementById("cal").innerHTML = "<b>" + paris({ month: "long", year: "numeric" }) + "</b><table>" + cells + "</table><p class='note'>Aucun agenda connecté.</p>";
    document.getElementById("cal").classList.add("on");
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closePanels();
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest(".start, .searchp, .quick, .cal, .taskview, .taskbar, .sysbar, .fly")) return;
    closePanels();
  });

  if (document.body.dataset.mode === "desktop") {
    document.getElementById("lock").classList.add("hidden");
    document.getElementById("signin").classList.add("hidden");
    document.getElementById("desktop").classList.add("on");
  } else showLock();
})();
