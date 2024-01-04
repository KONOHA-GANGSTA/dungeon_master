(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) s(n);
  new MutationObserver((n) => {
    for (const i of n)
      if (i.type === "childList")
        for (const a of i.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && s(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(n) {
    const i = {};
    return (
      n.integrity && (i.integrity = n.integrity),
      n.referrerPolicy && (i.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : n.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function s(n) {
    if (n.ep) return;
    n.ep = !0;
    const i = o(n);
    fetch(n.href, i);
  }
})();
const r = {
    empty: "-",
    wall: "W",
    HP: "HP",
    sword: "S",
    hero: "H",
    enemy: "E",
  },
  S = "_root_1fsd3_1",
  O = "_wall_1fsd3_25",
  H = "_empty_1fsd3_33",
  M = { root: S, wall: O, empty: H },
  I = (e) => {
    const t = document.createElement("div");
    return (
      t.classList.add(M.root),
      t.classList.add(e === r.empty ? M.empty : M.wall),
      t
    );
  },
  T = "_root_1dqu6_1",
  B = { root: T },
  C = (e) => {
    const t = document.querySelector(".field");
    (t.innerHTML = ""), t.classList.add(B.root);
    for (let o of e) for (let s of o) t.appendChild(I(s));
  },
  q = () => {
    const e = Math.floor(Math.random() * 16),
      t = Math.floor(Math.random() * 32),
      o = 3 + Math.floor(Math.random() * 5),
      s = 3 + Math.floor(Math.random() * 5);
    return [e, t, o, s];
  },
  R = (e, t, o, s, n) => {
    for (let i = 0; i < n; ++i)
      if (e[t + i].slice(o, o + s + 2).includes(r.empty)) return !1;
    return !0;
  },
  N = (e) => {
    const t = 4 + Math.round(Math.random()),
      o = 3 + Math.round(Math.random());
    let s = e.length / o;
    for (let i = 0; i < e.length; i += s) {
      let a = Math.floor(Math.random() * s);
      for (let l = 0; l < e[0].length; ++l) e[i + a][l] = r.empty;
    }
    let n = e[0].length / t;
    for (let i = 0; i < e[0].length; i += n) {
      let a = Math.floor(Math.random() * n);
      for (let l = 0; l < e.length; ++l) e[l][i + a] = r.empty;
    }
  },
  $ = (e) => {
    const t = 5 + Math.round(Math.random() * 5);
    let o, s, n, i;
    for (let a = 0; a < t; ++a) {
      for (; ([o, s, n, i] = q()), !R(e, o, s, n, i); );
      for (let l = 0; l < i; ++l)
        for (let h = 0; h < n; ++h) e[o + l][s + h] = r.empty;
      for (let l = 0; l < 2; ++l)
        o - l - 1 >= 0 && (e[o - l - 1][s + Math.floor(n / 2)] = r.empty),
          o + i + l < e.length &&
            (e[o + i + l][s + Math.floor(n / 2)] = r.empty),
          s - l - 1 >= 0 && (e[o + Math.floor(i / 2)][s - l - 1] = r.empty),
          s + n + l < e[0].length &&
            (e[o + Math.floor(i / 2)][s + n + l] = r.empty);
    }
  },
  j = () => {
    const e = [];
    for (let t = 0; t < 24; ++t) {
      let o = [];
      for (let s = 0; s < 40; ++s) o.push(r.wall);
      e.push(o);
    }
    return $(e), N(e), e;
  },
  P = j(),
  D = (e) => {
    let t = 0,
      o = 0;
    const s = e.map((n) => [...n]);
    for (; t != 10; ) {
      let n = Math.floor(Math.random() * e[0].length),
        i = Math.floor(Math.random() * e.length);
      s[i][n] === r.empty && ((s[i][n] = r.HP), t++);
    }
    for (; o != 2; ) {
      let n = Math.floor(Math.random() * e[0].length),
        i = Math.floor(Math.random() * e.length);
      s[i][n] === r.empty && ((s[i][n] = r.sword), o++);
    }
    return s;
  },
  y = D(P);
const U = "./dungeon_master/assets/tile-HP-2a7da82c.png",
  Y = "./dungeon_master/assets/tile-SW-a6a7a0db.png",
  G = (e) => {
    const t = Array.from(document.querySelector(".field").childNodes);
    let o = 0;
    for (let s = 0; s < e.length; ++s) {
      let n = t.slice(o, o + e[0].length);
      o += e[0].length;
      for (let i = 0; i < e[0].length; ++i)
        if (e[s][i] === r.HP || e[s][i] === r.sword) {
          let a = document.createElement("img");
          switch (e[s][i]) {
            case r.HP: {
              a.src = U;
              break;
            }
            case r.sword: {
              a.src = Y;
              break;
            }
          }
          n[i].appendChild(a);
        }
    }
  },
  V = "./dungeon_master/assets/tile-P-4e624d90.png",
  W = "./dungeon_master/assets/tile-E-44b718b0.png",
  X = "_character_19aqx_1",
  z = "_health_19aqx_31",
  F = "_enemy_19aqx_45",
  K = "_hero_19aqx_53",
  J = "_healthBar_19aqx_61",
  Q = "_healthBar_enemy_19aqx_71",
  Z = "_healthBar_hero_19aqx_79",
  u = {
    character: X,
    health: z,
    enemy: F,
    hero: K,
    healthBar: J,
    healthBar_enemy: Q,
    healthBar_hero: Z,
  },
  ee = (e) => {
    const t = document.createElement("DIV");
    t.classList.add(u.character);
    const o = document.createElement("img"),
      s = document.createElement("div");
    s.classList.add(u.health);
    const n = document.createElement("div");
    switch ((n.classList.add("HEALTHBAR"), n.classList.add(u.healthBar), e)) {
      case r.enemy: {
        t.classList.add("ENEMY"),
          s.classList.add(u.enemy),
          n.classList.add(u.healthBar_enemy),
          (o.src = W);
        break;
      }
      case r.hero: {
        (o.src = V),
          s.classList.add(u.hero),
          n.classList.add(u.healthBar_hero),
          (t.id = "HERO");
        break;
      }
    }
    return s.appendChild(n), t.appendChild(s), t.appendChild(o), t;
  },
  te = (e) => {
    const t = document.querySelector(".field");
    for (let o = 0; o < e.length; ++o)
      for (let s = 0; s < e[0].length; ++s)
        if (e[o][s] === r.enemy || e[o][s] === r.hero) {
          let n = ee(e[o][s]);
          (n.style.top = `${o * 25}px`),
            (n.style.left = `${s * 25}px`),
            t.appendChild(n);
        }
  },
  oe = (e) => {
    let t = 0;
    const o = e.map((s) => [...s]);
    for (; t != 10; ) {
      let s = Math.floor(Math.random() * e[0].length),
        n = Math.floor(Math.random() * e.length);
      o[n][s] === r.empty && ((o[n][s] = r.enemy), t++);
    }
    for (;;) {
      let s = Math.floor(Math.random() * e[0].length),
        n = Math.floor(Math.random() * e.length);
      if (o[n][s] === r.empty) {
        o[n][s] = r.hero;
        break;
      }
    }
    return o;
  },
  k = oe(y),
  se = "./dungeon_master/assets/sweep-52edf637.svg",
  ne = "_sweep_lkju3_1",
  ie = "_rot_lkju3_29",
  re = "_box_lkju3_37",
  le = "_heal_lkju3_59",
  ae = "_fly_lkju3_67",
  p = { sweep: ne, rot: ie, box: re, heal: le, fly: ae },
  ce = (e) => {
    const t = document.createElement("div");
    t.classList.add(p.sweep);
    const o = document.createElement("img");
    (o.src = se),
      t.appendChild(o),
      (t.style.top = e.currentPosition.y * 25 + "px"),
      (t.style.left = (e.currentPosition.x - 1) * 25 + "px"),
      document.querySelector(".field").appendChild(t),
      setTimeout(() => {
        t.classList.add(p.rot);
      }, 0),
      t.addEventListener("transitionend", (s) => s.target.remove());
  },
  x = (e, t) => {
    const o = document.createElement("div");
    o.classList.add(p.box);
    const s = document.createElement("span");
    e > 0
      ? (s.innerText = `-${e}`)
      : ((s.innerText = `+${-e}`), s.classList.add(p.heal)),
      o.appendChild(s),
      (o.style.top = (t.currentPosition.y - 1) * 25 + "px"),
      (o.style.left = t.currentPosition.x * 25 + "px"),
      document.querySelector(".field").appendChild(o),
      setTimeout(() => {
        o.classList.add(p.fly);
      }, 0),
      o.addEventListener("transitionend", (n) => n.target.remove());
  },
  c = { up: "UP", left: "LEFT", right: "RIGHT", down: "DOWN" },
  w = { horizontal: "X", vertical: "Y" },
  L = (e, t) => {
    let o = {};
    switch (e) {
      case c.up: {
        o = { y: t.y - 1, x: t.x };
        break;
      }
      case c.down: {
        o = { y: t.y + 1, x: t.x };
        break;
      }
      case c.left: {
        o = { y: t.y, x: t.x - 1 };
        break;
      }
      case c.right: {
        o = { y: t.y, x: t.x + 1 };
        break;
      }
    }
    return o;
  },
  d = (e, t) => {
    const o = L(e, t.currentPosition);
    return (
      o.x >= 0 &&
      o.y >= 0 &&
      o.x < t.map[0].length &&
      o.y < t.map.length &&
      t.map[o.y][o.x] !== r.wall &&
      t.map[o.y][o.x] !== r.enemy &&
      t.map[o.y][o.x] !== r.hero
    );
  },
  he = ({ x: e, y: t }) => {
    const o = y[t][e];
    switch (o) {
      case r.HP:
      case r.sword: {
        const s =
          document.querySelector(".field").childNodes[t * y[0].length + e];
        return (s.innerHTML = ""), (y[t][e] = r.empty), o;
      }
    }
    return null;
  },
  de = (e) => {
    const t = [];
    for (let o = e.currentPosition.y - 1; o <= e.currentPosition.y + 1; ++o)
      for (let s = e.currentPosition.x - 1; s <= e.currentPosition.x + 1; ++s)
        o >= 0 &&
          s >= 0 &&
          o < e.map.length &&
          s < e.map[0].length &&
          e.map[o][s] === r.enemy &&
          t.push({ x: s, y: o });
    return t.length ? t : null;
  },
  f = (e, t) => {
    const o = L(e, t.currentPosition);
    switch (
      ((t.map[o.y][o.x] = t.map[t.currentPosition.y][t.currentPosition.x]),
      (t.map[t.currentPosition.y][t.currentPosition.x] = r.empty),
      (t.currentPosition = o),
      e)
    ) {
      case c.up: {
        t.body.style.top = `${+t.body.style.top.slice(0, -2) - 25}px`;
        break;
      }
      case c.down: {
        t.body.style.top = `${+t.body.style.top.slice(0, -2) + 25}px`;
        break;
      }
      case c.left: {
        (t.body.style.left = `${+t.body.style.left.slice(0, -2) - 25}px`),
          (t.body.querySelector("img").style.transform = "scaleX(-1)");
        break;
      }
      case c.right: {
        (t.body.style.left = `${+t.body.style.left.slice(0, -2) + 25}px`),
          (t.body.querySelector("img").style.transform = "scaleX(1)");
        break;
      }
    }
  },
  fe = "_win_na8hg_1",
  ue = "_lose_na8hg_11",
  b = { win: fe, lose: ue },
  _ = { win: "WIN", lose: "LOSE" },
  v = { win: "VICTORY", lose: "GAME OVER" },
  E = (e, t) => {
    const o = document.getElementById("MODAL"),
      s = o.querySelector("SPAN");
    (s.innerText = e),
      t === _.win ? s.classList.add(b.win) : s.classList.add(b.lose),
      (o.style.top = "0");
  },
  me = () => {
    const e = document.querySelector("#HERO"),
      t = e.querySelector(".HEALTHBAR"),
      o = k;
    let s = {};
    for (let i = 0; i < o.length; ++i)
      for (let a = 0; a < o[0].length; ++a)
        o[i][a] === r.hero && (s = { x: a, y: i });
    const n = {
      health: 5,
      damage: 1,
      map: o,
      healthBar: t,
      body: e,
      currentPosition: s,
      heal: function () {
        this.health != 5 &&
          ((this.health += 1),
          x(-1, this),
          (this.healthBar.style.width = `${(this.health / 5) * 100}%`));
      },
      boost: function () {
        this.damage += 1;
      },
      checkIfPickUp: function () {
        const i = he(this.currentPosition);
        if (i)
          switch (i) {
            case r.HP: {
              this.heal();
              break;
            }
            case r.sword: {
              this.boost();
              break;
            }
          }
      },
      up: function () {
        if (d(c.up, this)) f(c.up, this);
        else return;
        this.checkIfPickUp();
      },
      down: function () {
        if (d(c.down, this)) f(c.down, this);
        else return;
        this.checkIfPickUp();
      },
      left: function () {
        if (d(c.left, this)) f(c.left, this);
        else return;
        this.checkIfPickUp();
      },
      right: function () {
        if (d(c.right, this)) f(c.right, this);
        else return;
        this.checkIfPickUp();
      },
      attack: function () {
        ce(this);
        const i = de(this);
        if (!i) return;
        const a = i.map(({ x: l, y: h }) =>
          g.find(({ currentPosition: m }) => m.x == l && m.y == h)
        );
        if (
          (a.forEach((l) => l.getDamage(this.damage)),
          a.some(({ health: l }) => l <= 0))
        ) {
          const l = g.reduce((h, m, A) => (m.health <= 0 && h.push(A), h), []);
          l.sort((h, m) => m - h);
          for (let h of l) g.splice(h, 1);
        }
        g.length == 0 && E(v.win, _.win);
      },
      getDamage: function () {
        (this.health -= 1),
          (this.healthBar.style.width = `${(this.health / 5) * 100}%`),
          x(1, this),
          this.health == 0 &&
            (this.body.remove(),
            (this.map[this.currentPosition.y][this.currentPosition.x] =
              r.empty),
            E(v.lose, _.lose));
      },
    };
    return (
      window.addEventListener("keydown", (i) => {
        switch (i.key.toLowerCase()) {
          case "w":
          case "ц": {
            n.up();
            break;
          }
          case "s":
          case "ы": {
            n.down();
            break;
          }
          case "a":
          case "ф": {
            n.left();
            break;
          }
          case "d":
          case "в": {
            n.right();
            break;
          }
          case " ": {
            n.attack();
            break;
          }
        }
      }),
      n
    );
  },
  ye = (e) => (d(c.up, e) || d(c.down, e) ? w.vertical : w.horizontal),
  pe = (e) => {
    for (let t = e.currentPosition.y - 1; t <= e.currentPosition.y + 1; ++t)
      for (let o = e.currentPosition.x - 1; o <= e.currentPosition.x + 1; ++o)
        if (
          t >= 0 &&
          o >= 0 &&
          t < e.map.length &&
          o < e.map[0].length &&
          e.map[t][o] === r.hero
        )
          return !0;
    return !1;
  },
  ge = () => {
    const e = k,
      t = [],
      o = document.querySelectorAll(".ENEMY");
    for (let n = 0; n < e.length; ++n)
      for (let i = 0; i < e[0].length; ++i)
        e[n][i] === r.enemy && t.push({ x: i, y: n });
    const s = t.map((n, i) => {
      const a = o[i],
        l = a.querySelector(".HEALTHBAR");
      return {
        health: 5,
        damage: 1,
        map: e,
        currentPosition: { ...n },
        body: a,
        healthBar: l,
        initialAxisOfMovement: null,
        direction: !0,
        getDamage: function (h) {
          (this.health -= h),
            x(h, this),
            (this.healthBar.style.width = `${(this.health / 5) * 100}%`),
            this.health <= 0 &&
              (a.remove(),
              (this.map[this.currentPosition.y][this.currentPosition.x] =
                r.empty),
              clearInterval(this.interval),
              clearInterval(this.moveInterval));
        },
        attack: function () {
          pe(this) && we.getDamage();
        },
        startInterval: function () {
          this.interval = setInterval(() => {
            this.attack();
          }, 500);
        },
        up: function () {
          d(c.up, this) ? f(c.up, this) : (this.direction = !this.direction);
        },
        down: function () {
          d(c.down, this)
            ? f(c.down, this)
            : (this.direction = !this.direction);
        },
        left: function () {
          d(c.left, this)
            ? f(c.left, this)
            : (this.direction = !this.direction);
        },
        right: function () {
          d(c.right, this)
            ? f(c.right, this)
            : (this.direction = !this.direction);
        },
        setInitialAxisOfMovement: function () {
          this.initialAxisOfMovement = ye(this);
        },
        moveCallback: function () {
          switch (this.initialAxisOfMovement) {
            case w.horizontal: {
              this.direction ? this.right() : this.left();
              break;
            }
            case w.vertical: {
              this.direction ? this.up() : this.down();
              break;
            }
          }
        },
        startMoveInterval: function () {
          this.moveInterval = setInterval(() => {
            this.moveCallback();
          }, 600 + Math.floor(Math.random() * 400));
        },
      };
    });
    return (
      s.forEach((n) => {
        n.setInitialAxisOfMovement(), n.startInterval(), n.startMoveInterval();
      }),
      s
    );
  };
document.querySelector("#app").innerHTML = `
<h1>DUNGEON MASTER</h1>
<div class="field-box">
  <div class="field"></div>
  <div id="MODAL">
  <span></span>
  <form>
  <button id="RESTART">RESTART</button>
  </form>
  </div>
</div>
`;
C(P);
G(y);
te(k);
const we = me(),
  g = ge();
window.addEventListener("keydown", (e) => {
  (e.key.toLowerCase() === "r" || e.key.toLowerCase() === "к") &&
    document.getElementById("RESTART").click();
});
