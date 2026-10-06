/* ===== EDIT YOUR CONTENT HERE ===== */
const CFG = {
  name: "Ayush Gupta",
  email: "guptaayush2005@gmail.com",
  phone: "+91 9999066149",
  github: "https://github.com/AyushSGithub24",
  linkedin: "https://www.linkedin.com/in/ayush-gupta-23b3611a6/",
  leetcode: "https://leetcode.com/guptaayush2005",
  about: [
    "I'm a full-stack developer and Software Engineering Intern at GlobalLogic, building end-to-end application workflows.",
    "I work with Java, Spring Boot, React.js, REST APIs, and microservice architecture, including Eureka service discovery and API Gateway routing.",
    "I also build Generative AI pipelines and contribute to secure authentication in open source. Interested in cloud-native applications and AI-enabled scientific workflows.",
  ],
  skills: {
    Languages: [
      ["Java", 90],
      ["Python", 72],
      ["JavaScript", 84],
      ["SQL", 78],
    ],
    "Backend & architecture": [
      ["Spring Boot", 88],
      ["Spring Security", 78],
      ["REST APIs", 88],
      ["Microservices", 84],
      ["Eureka / Gateway", 78],
    ],
    Frontend: [
      ["React.js", 84],
      ["Angular", 70],
      ["HTML & CSS", 82],
    ],
    "Data, cloud & tools": [
      ["PostgreSQL", 82],
      ["MongoDB", 76],
      ["AWS / Docker", 68],
      ["Git / CI/CD", 80],
      ["Redis", 62],
    ],
  },
  /* name = what visitors type after "show". Leave live or src empty ("") if not ready. show opens live first, otherwise source. */
  projects: [
    {
      name: "OmniPrint",
      t: "OmniPrint",
      d: "End-to-end web-to-print platform for product configuration, vendor quotes, order placement, and order tracking.",
      s: ["React", "Spring Boot", "Eureka", "API Gateway", "PostgreSQL"],
      live: "",
      src: "https://github.com/AyushSGithub24/OmniPrint",
      p: "Customers and vendors need a connected workflow for print products and order fulfillment.",
      o: "Four independent Auth, Product, Vendor, and Order services with isolated PostgreSQL databases, JWT authentication, vendor quoting, and order-status workflows.",
    },
    {
      name: "WebComicNarrate",
      t: "WebComicNarrate",
      d: "Generative AI pipeline that transforms web content into narrated video.",
      s: ["Gemini API", "Puppeteer", "FFMPEG", "Generative AI"],
      live: "",
      src: "https://github.com/AyushSGithub24/WebComic-Narration",
      p: "Turning web content into engaging narrated video requires extraction, scripting, and media assembly.",
      o: "A multi-stage workflow extracts content and metadata, generates summaries and scripts with Gemini, then synchronizes audio, visuals, and text overlays with FFMPEG.",
    },
    {
      name: "Vault-Web",
      t: "Vault-Web · PR #141 (Merged)",
      d: "Open source contribution to secure stateless authentication.",
      s: ["Java", "Spring Boot", "Spring Security", "Angular"],
      live: "",
      src: "https://github.com/Vault-Web/vault-web/pull/141",
      p: "Secure token refresh must prevent replay and keep authentication seamless for users.",
      o: "Added JWT refresh token rotation, JTI replay protection, secure HttpOnly cookies, database token hashing, and an Angular interceptor to refresh and retry 401 requests.",
    },
  ],
  experience: [
    "Software Engineering Intern at GlobalLogic (June 2026 - Present)",
    "Completed enterprise training in Java, Spring Boot, and microservice architecture.",
    "Built a Spring Boot and React.js capstone with Eureka discovery and API Gateway routing.",
    "Applied coding standards, Git, and code review under engineering mentorship.",
  ],
  education: [
    "B.Tech in Computer Science · GLA University, Mathura · Jun 2026 · CGPA 7.9",
    "Class XII · Ramagya School, Noida · May 2022 · 87.8%",
  ],
  honors: [
    "Honorable Mention · ICPC Regional 2024, Amritapuri Multisite Regional Contest (Coding Pirates)",
    "Grand Finalist · Smart India Hackathon 2024; 1st place in internal college hackathon",
  ],
};
const $ = (s) => document.querySelector(s),
  scr = $("#screen"),
  inp = $("#cmd");
const still = matchMedia("(prefers-reduced-motion:reduce)").matches,
  esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const run_ = (c) =>
  `<span class="cmd" role="button" tabindex="0" data-run="${c}">${c}</span>`;
$("#name").textContent = CFG.name;
$("#seolist").innerHTML = CFG.projects
  .map((p) => `<li>${esc(p.t)}: ${esc(p.d)} (${esc(p.s.join(", "))})</li>`)
  .join("");

/* output queue with a typed-line feel */
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let Q = Promise.resolve();
function add(h) {
  const d = document.createElement("div");
  d.innerHTML = h;
  scr.append(d);
  scr.scrollTop = scr.scrollHeight;
}
function say(lines) {
  Q = Q.then(async () => {
    for (const l of [].concat(lines)) {
      add(l);
      if (!still) await sleep(30);
    }
  });
  return Q;
}
const bar = (v) => {
  const n = Math.round(v / 10);
  return "█".repeat(n) + "░".repeat(10 - n);
};
const ready = (p) => p.live || p.src;
function find(a) {
  a = a.trim().toLowerCase();
  if (!a) return null;

  const i = parseInt(a);
  if (i > 0) return CFG.projects[i - 1] || null;

  return (
    CFG.projects.find((p) => p.name.toLowerCase() === a) ||
    CFG.projects.find(
      (p) => p.name.toLowerCase().includes(a) || p.t.toLowerCase().includes(a),
    ) ||
    null
  );
}

const C = {
  help: () => [
    "<span class='h'>Available commands</span>",
    ...[
      ["about", "who I am"],
      ["experience", "work history"],
      ["skills", "what I work with"],
      ["projects", "selected work"],
      ["education", "education"],
      ["honors", "achievements"],
      ["show &lt;name&gt;", "open a project (live demo or source)"],
      ["contact", "how to reach me"],
      ["theme", "change the look"],
      ["clear", "clean the screen"],
    ].map(
      ([c, d]) =>
        `  ${c.startsWith("show") ? "<span class='k'>" + c + "</span>" : run_(c)}`.padEnd(
          14,
        ) + `<span class='m'>  ${d}</span>`,
    ),
  ],
  about: () => [
    "<span class='h'>" +
      esc(CFG.name) +
      "</span> <span class='m'>full-stack developer · GlobalLogic intern</span>",
    "",
    ...CFG.about.map(esc),
    "",
    "<span class='m'>next: </span>" +
      run_("experience") +
      " <span class='m'>or</span> " +
      run_("projects"),
  ],
  experience: () => [
    "<span class='h'>Experience</span>",
    "",
    ...CFG.experience.map(esc),
  ],
  education: () => [
    "<span class='h'>Education</span>",
    "",
    ...CFG.education.map(esc),
  ],
  honors: () => [
    "<span class='h'>Honors & achievements</span>",
    "",
    ...CFG.honors.map(esc),
  ],
  skills: () => {
    const o = [];
    for (const g in CFG.skills) {
      o.push("<span class='h'>" + g + "</span>");
      CFG.skills[g].forEach(([n, v]) =>
        o.push(
          "<span class='skill-row'><span class='skill-name'>" +
            esc(n) +
            "</span><span class='k skill-bar'>" +
            bar(v) +
            "</span><span class='m skill-value'>" +
            v +
            "%</span></span>",
        ),
      );
      o.push("");
    }
    return o;
  },
  projects: () => [
    "<span class='h'>Projects</span> <span class='m'>(" +
      CFG.projects.length +
      ")</span>",
    "",
    ...CFG.projects.flatMap((p, i) => [
      `<span class='k'>${i + 1}.</span> <b>${esc(p.t)}</b>  <span class='m'>[${esc(p.s.join(", "))}]</span>`,
      `   ${esc(p.d)}`,
      `   <span class='m'>open it:</span> ` +
        run_("show " + p.name) +
        (ready(p) ? "" : " <span class='m'>(no link added yet)</span>"),
      "",
    ]),
  ],
  show: (a) => {
    const p = find(a);
    if (!p)
      return a.trim()
        ? [
            "<span class='k'>No project called \"" +
              esc(a) +
              '".</span> Try ' +
              run_("projects"),
          ]
        : [
            "usage: <span class='k'>show &lt;project-name&gt;</span>  e.g. " +
              run_("show " + CFG.projects[0].name),
          ];
    const u = p.live || p.src,
      kind = p.live ? "live demo" : "source code";
    const o = [
      "<span class='h'>" +
        esc(p.t) +
        "</span> <span class='m'>[" +
        esc(p.s.join(", ")) +
        "]</span>",
      "",
      "  <span class='k'>problem</span>  " + esc(p.p),
      "  <span class='k'>result</span>   " + esc(p.o),
      "",
    ];
    if (!u)
      return [
        ...o,
        "<span class='m'>This one isn't published yet. Check back soon, or try </span>" +
          run_("projects"),
      ];
    return {
      lines: [
        ...o,
        `<span class='g'>opening ${kind}...</span> <a href="${esc(u)}" target="_blank" rel="noopener">${esc(u)}</a>`,
      ],
      open: u,
    };
  },
  contact: () => [
    "<span class='h'>Let's connect</span>",
    "",
    `  <span class='k'>email</span>     <a href="mailto:${esc(CFG.email)}?subject=Hello%20from%20your%20portfolio">${esc(CFG.email)}</a>`,
    `  <span class='k'>phone</span>     <a href="tel:${esc(CFG.phone)}">${esc(CFG.phone)}</a>`,
    `  <span class='k'>github</span>    <a href="${esc(CFG.github)}" target="_blank" rel="noopener">${esc(CFG.github.replace("https://", ""))}</a>`,
    `  <span class='k'>linkedin</span>  <a href="${esc(CFG.linkedin)}" target="_blank" rel="noopener">${esc(CFG.linkedin.replace("https://", ""))}</a>`,
    `  <span class='k'>leetcode</span>  <a href="${esc(CFG.leetcode)}" target="_blank" rel="noopener">${esc(CFG.leetcode.replace("https://", ""))}</a>`,
    "",
    "<span class='m'>Open to conversations about full-stack, cloud-native, and AI-enabled software.</span>",
  ],
  theme: (a) => {
    a = a.trim().toLowerCase();
    if (!a)
      return [
        "<span class='h'>Themes</span>",
        ...THEMES.map(
          (t) =>
            "  " +
            run_("theme " + t) +
            (t === cur() ? " <span class='g'>(active)</span>" : ""),
        ),
      ];
    if (!THEMES.includes(a))
      return "<span class='k'>Unknown theme.</span> Try: " + THEMES.join(", ");
    setTheme(a);
    return "theme set to <span class='g'>" + a + "</span>";
  },
  whoami: () => esc(CFG.name) + " - full-stack developer",
  sudo: () =>
    "<span class='g'>permission granted: you're hired.</span> <span class='m'>(just kidding, but let's talk: </span>" +
    run_("contact") +
    "<span class='m'>)</span>",
};
C.ls = C.projects;
C.project = C.projects;
C.skill = C.skills;
C.hello = C.about;
C["?"] = C.help;
const names = Object.keys(C)
  .filter((k) => !["ls", "project", "skill", "hello", "?"].includes(k))
  .concat("show");
let hist = [],
  hi = 0;
function run(v) {
  v = v.trim();
  if (!v) return;
  add("<span class='p'>$</span> " + esc(v));
  if (window.warp) window.warp();
  let [a, ...r] = v.split(/\s+/);
  a = a.toLowerCase();
  if (a === "clear" || a === "cls") {
    scr.innerHTML = "";
    return;
  }
  if (a === "contact") r = [];
  const f = C[a];
  if (!f) {
    say(
      "<span class='k'>command not found:</span> " +
        esc(a) +
        ". Try " +
        run_("help"),
    );
    return;
  }
  let res = f(r.join(" "));
  if (res && res.open) {
    const w = window.open(res.open, "_blank", "noopener");
    if (!w)
      res.lines.push(
        "<span class='m'>Popup blocked? Use the link above.</span>",
      );
    res = res.lines;
  }
  say(res);
}
inp.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const v = inp.value;
    if (v.trim()) {
      hist.push(v);
      hi = hist.length;
    }
    inp.value = "";
    run(v);
  } else if (e.key === "ArrowUp") {
    hi = Math.max(0, hi - 1);
    inp.value = hist[hi] || "";
    e.preventDefault();
  } else if (e.key === "ArrowDown") {
    hi = Math.min(hist.length, hi + 1);
    inp.value = hist[hi] || "";
  } else if (e.key === "Tab") {
    e.preventDefault();
    const v = inp.value,
      m = v.match(/^show\s+(.*)$/i);
    if (m) {
      const h = CFG.projects.find((p) => p.name.startsWith(m[1].toLowerCase()));
      if (h) inp.value = "show " + h.name;
    } else {
      const h = names.find((n) => n.startsWith(v.toLowerCase()) && v);
      if (h) inp.value = h + (h === "show" ? " " : "");
    }
  } else if (e.key === "l" && e.ctrlKey) {
    e.preventDefault();
    scr.innerHTML = "";
  }
});
function delegate(e) {
  const t = e.target.closest("[data-run]");
  if (t && (e.type === "click" || e.key === "Enter")) {
    run(t.dataset.run);
    if (matchMedia("(pointer:fine)").matches) inp.focus();
  }
}
scr.addEventListener("click", delegate);
scr.addEventListener("keydown", delegate);
$("#win").addEventListener("click", (e) => {
  if (!getSelection().toString() && !e.target.closest("a,.cmd")) inp.focus();
});
$("#chips").innerHTML = [
  "help",
  "about",
  "experience",
  "skills",
  "projects",
  "education",
  "honors",
  "contact",
]
  .map((c) => `<button data-c="${c}">${c}</button>`)
  .join("");
$("#chips").onclick = (e) => {
  if (e.target.dataset.c) run(e.target.dataset.c);
};

/* theme */
let sc = {};
const THEMES = ["midnight", "forest", "ivory"],
  cur = () => document.documentElement.dataset.theme || "midnight";
function applyTheme() {
  const cs = getComputedStyle(document.documentElement),
    v = (n) => cs.getPropertyValue(n).trim();
  document.querySelector("meta[name=theme-color]").content = v("--bg");
  if (!sc.fog) return;
  sc.fog.color.set(v("--bg"));
  sc.pm.color.set(v("--c1"));
  sc.k.material.color.set(v("--c2"));
  const c = [v("--c1"), v("--c2"), v("--c3")];
  sc.sh.forEach((m, i) => m.material.color.set(c[i % 3]));
}
function setTheme(n) {
  document.documentElement.dataset.theme = n;
  try {
    localStorage.setItem("th2", n);
  } catch (e) {}
  applyTheme();
}
function toggleTheme() {
  setTheme(THEMES[(THEMES.indexOf(cur()) + 1) % THEMES.length]);
}
try {
  const t = localStorage.getItem("th2");
  if (THEMES.includes(t)) document.documentElement.dataset.theme = t;
} catch (e) {}
$("#tg").onclick = toggleTheme;

/* boot, then welcome */
const boot = $("#boot"),
  L = [
    "[ ok ] mounting portfolio.fs",
    "[ ok ] loading react, typescript, spring-boot",
    "[ ok ] rendering 3d world",
    "[ ok ] " + CFG.projects.length + " projects indexed",
    "",
    "Welcome. Click to skip.",
  ];
let bi = 0,
  done = 0;
function welcome() {
  if (done) return;
  done = 1;
  boot.classList.add("off");
  say([
    "<span class='h'>Welcome to my portfolio.</span>",
    "<span class='m'>This is a terminal. Type a command, or tap one:</span>",
    "  " +
      ["about", "skills", "projects", "contact", "help"].map(run_).join("  "),
    "",
  ]);
  if (matchMedia("(pointer:fine)").matches) inp.focus();
}
(function bt() {
  if (bi < L.length && !done) {
    boot.textContent += L[bi++] + "\n";
    setTimeout(bt, 230);
  } else setTimeout(welcome, 400);
})();
boot.onclick = welcome;

/* three.js world: every command warps you forward */
(function () {
  if (typeof THREE === "undefined") return;
  const R = new THREE.WebGLRenderer({
    canvas: $("#world"),
    antialias: true,
    alpha: true,
  });
  R.setPixelRatio(Math.min(devicePixelRatio, 2));
  const S = new THREE.Scene(),
    fog = new THREE.FogExp2(0x0c1118, 0.045);
  S.fog = fog;
  const cam = new THREE.PerspectiveCamera(60, 1, 0.1, 200),
    N = 70,
    pos = new Float32Array(N * N * 3),
    geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const pm = new THREE.PointsMaterial({
      color: 0x6ee7ff,
      size: 0.07,
      transparent: true,
      opacity: 0.75,
    }),
    pts = new THREE.Points(geo, pm);
  pts.position.y = -4;
  S.add(pts);
  const k = new THREE.Mesh(
    new THREE.TorusKnotGeometry(1.3, 0.35, 120, 16),
    new THREE.MeshBasicMaterial({
      color: 0xff5ecb,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    }),
  );
  S.add(k);
  const sh = [],
    cols = [0x6ee7ff, 0xff5ecb, 0xffc66b];
  for (let i = 0; i < 12; i++) {
    const g = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.BoxGeometry(1.4, 1.4, 1.4),
      new THREE.OctahedronGeometry(1.1),
    ][i % 3];
    const m = new THREE.LineSegments(
      new THREE.EdgesGeometry(g),
      new THREE.LineBasicMaterial({
        color: cols[i % 3],
        transparent: true,
        opacity: 0.5,
      }),
    );
    m.position.set(
      (Math.random() - 0.5) * 26,
      Math.random() * 9 - 1,
      -i * 7 - 8,
    );
    m.userData.s = 0.2 + Math.random() * 0.5;
    S.add(m);
    sh.push(m);
  }
  sc = { fog, pm, k, sh };
  applyTheme();
  let mx = 0,
    my = 0,
    t = 0,
    cz = 0,
    boost = 0;
  window.warp = () => {
    boost += 0.2;
  };
  addEventListener("mousemove", (e) => {
    mx = e.clientX / innerWidth - 0.5;
    my = e.clientY / innerHeight - 0.5;
  });
  function size() {
    R.setSize(innerWidth, innerHeight, false);
    cam.aspect = innerWidth / innerHeight;
    cam.updateProjectionMatrix();
  }
  addEventListener("resize", size);
  size();
  (function frame() {
    t += still ? 0 : 0.008;
    if (!still) {
      cz += 0.003 + boost * 0.01;
      boost *= 0.97;
    }
    let q = 0;
    for (let i = 0; i < N; i++)
      for (let j = 0; j < N; j++) {
        const x = (i - N / 2) * 0.7,
          z = (j - N / 2) * 0.7;
        pos[q++] = x;
        pos[q++] =
          Math.sin(x * 0.5 + t) * 0.6 +
          Math.cos((z - cz) * 0.45 + t * 0.8) * 0.6;
        pos[q++] = z;
      }
    geo.attributes.position.needsUpdate = true;
    const wide = innerWidth > 800;
    k.position.set(wide ? 5 : 0, wide ? 1.6 : 3.4, -cz - 4);
    k.rotation.x += 0.0005 + my * 0.002 + boost * 0.001;
    k.rotation.y += 0.0007 + mx * 0.003 + boost * 0.001;
    sh.forEach((s) => {
      s.rotation.x += 0.0005 * s.userData.s;
      s.rotation.y += 0.0007 * s.userData.s;
      if (s.position.z > -cz + 6) {
        s.position.z -= 84;
        s.position.x = (Math.random() - 0.5) * 26;
      }
    });
    cam.position.set(mx * 3, 2 - my * 1.5, 6 - cz);
    cam.lookAt(mx * 1.5, 1, -cz - 12);
    pts.position.z = -cz;
    R.render(S, cam);
    requestAnimationFrame(frame);
  })();
})();
