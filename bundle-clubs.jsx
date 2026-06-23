/* === icons.jsx === */
/* Shared inline icons (simple line glyphs) + small helpers */
const Icon = ({ d, size = 20, sw = 1.8, fill = "none" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
    stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const Icons = {
  search: (p) => <Icon {...p} d={["M11 11m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0", "M21 21l-4.3-4.3"]} />,
  pin: (p) => <Icon {...p} d={["M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z", "M12 10m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"]} />,
  flag: (p) => <Icon {...p} d={["M5 21V4", "M5 4c3-1.5 6 1.5 9 0s3-1.5 5-1v9c-2-.5-3 .5-5 1s-6-1.5-9 0"]} />,
  cart: (p) => <Icon {...p} d={["M3 4h2l2.2 11.3a1 1 0 0 0 1 .8h8.5a1 1 0 0 0 1-.8L20 7H6", "M9 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0", "M18 21m-1 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"]} />,
  star: (p) => <Icon {...p} fill="currentColor" sw={0} d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L4.5 9.7l5.9-.9z" />,
  arrow: (p) => <Icon {...p} d={["M5 12h14", "M13 6l6 6-6 6"]} />,
  chevron: (p) => <Icon {...p} d="M9 6l6 6-6 6" />,
  chevDown: (p) => <Icon {...p} d="M6 9l6 6 6-6" />,
  menu: (p) => <Icon {...p} d={["M4 7h16", "M4 12h16", "M4 17h16"]} />,
  close: (p) => <Icon {...p} d={["M6 6l12 12", "M18 6l6 6", "M18 6L6 18"]} />,
  bolt: (p) => <Icon {...p} fill="currentColor" sw={0} d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" />,
  refresh: (p) => <Icon {...p} d={["M21 12a9 9 0 1 1-2.6-6.3", "M21 4v5h-5"]} />,
  filter: (p) => <Icon {...p} d={["M4 5h16", "M7 12h10", "M10 19h4"]} />,
  check: (p) => <Icon {...p} d="M5 12l4.5 4.5L19 7" />,
  tag: (p) => <Icon {...p} d={["M3 12l8.5-8.5a2 2 0 0 1 1.4-.6H20a1 1 0 0 1 1 1v7.1a2 2 0 0 1-.6 1.4L12 21z", "M16.5 7.5h.01"]} />,
  truck: (p) => <Icon {...p} d={["M3 6h11v9H3z", "M14 9h4l3 3v3h-7", "M7 18m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0", "M17 18m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0"]} />,
  layers: (p) => <Icon {...p} d={["M12 3l9 5-9 5-9-5z", "M3 13l9 5 9-5"]} />,
  loc: (p) => <Icon {...p} d={["M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0", "M12 2v3", "M12 19v3", "M2 12h3", "M19 12h3"]} />,
  trophy: (p) => <Icon {...p} d={["M7 4h10v5a5 5 0 0 1-10 0z", "M7 5H4v2a3 3 0 0 0 3 3", "M17 5h3v2a3 3 0 0 1-3 3", "M9 19h6", "M12 14v5"]} />,
  calendar: (p) => <Icon {...p} d={["M4 6h16v15H4z", "M4 10h16", "M8 3v4", "M16 3v4"]} />,
  globe: (p) => <Icon {...p} d={["M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M3 12h18", "M12 3c2.7 2.7 2.7 15.3 0 18", "M12 3c-2.7 2.7-2.7 15.3 0 18"]} />,
  chart: (p) => <Icon {...p} d={["M4 20V4", "M4 20h16", "M8 16v-4", "M13 16V8", "M18 16v-7"]} />,
  medal: (p) => <Icon {...p} d={["M8 4l2 6", "M16 4l-2 6", "M12 17m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0", "M6 4h12"]} />,
  info: (p) => <Icon {...p} d={["M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", "M12 11v5", "M12 8h.01"]} />,
  spark: (p) => <Icon {...p} fill="currentColor" sw={0} d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />,
};
window.Icon = Icon;
window.Icons = Icons;

/* Star rating row */
function Stars({ value, size = 13 }) {
  return (
    <span className="row" style={{ gap: 2, color: "var(--gold)" }}>
      {[0,1,2,3,4].map(i => (
        <span key={i} style={{ opacity: i < Math.round(value) ? 1 : .22, display: "inline-flex" }}>
          <Icons.star size={size} />
        </span>
      ))}
      <span style={{ color: "var(--ink-soft)", fontWeight: 700, fontSize: size, marginLeft: 4, fontFamily: "var(--ff-display)" }}>{value.toFixed(1)}</span>
    </span>
  );
}
window.Stars = Stars;

/* 日本列島のシルエット（緑基調・地図用）— viewBox 152×100 を地図領域に引き伸ばして使用 */
function JapanSVG() {
  return (
    <svg className="japan-svg" viewBox="0 0 152 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="jp-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#73c279" />
          <stop offset="1" stopColor="#479c54" />
        </linearGradient>
      </defs>
      <g fill="url(#jp-grad)" stroke="#3a8a49" strokeWidth="1" strokeLinejoin="round" vectorEffect="non-scaling-stroke">
        {/* 本州 */}
        <path d="M110,26 C115,29 115,37 112,44 C110,49 112,53 109,57 C103,61 95,60 88,61 C78,62 70,65 61,66 C55,67 49,67 45,65 C48,62 55,61 61,60 C70,59 78,57 87,56 C95,55 101,54 104,50 C107,45 106,37 107,32 C108,29 108,27 110,26 Z" />
        {/* 北海道 */}
        <path d="M120,7 C126,5 131,8 131,14 C131,19 127,23 122,22 C117,21 114,18 115,13 C116,9 117,8 120,7 Z" />
        {/* 四国 */}
        <path d="M52,70 C58,69 63,71 62,74 C61,77 55,78 51,76 C48,74 49,71 52,70 Z" />
        {/* 九州 */}
        <path d="M31,70 C37,69 40,74 39,79 C38,84 33,86 30,83 C27,80 26,76 27,73 C28,71 29,70 31,70 Z" />
        {/* 沖縄 */}
        <ellipse cx="18" cy="92" rx="2.6" ry="2" />
        <ellipse cx="24" cy="88" rx="1.8" ry="1.4" />
      </g>
    </svg>
  );
}
window.JapanSVG = JapanSVG;

/* === loading.jsx === */
/* ============================================================
   SearchLoader — かわいい「探しています」ローディング
   ・ぴょんぴょん跳ねるゴルフボール（顔つき）+ アニメ文字
   ・variant="overlay" … 親要素（position:relative）を覆う
   ・variant="screen"  … 画面中央のモーダル風オーバーレイ
   フック:
   ・useSearchPause(ms) → [loading, run(cb)]  ボタン押下などで起動
   ・useFilterLoading(deps, ms) → loading       フィルタ変更で自動起動
   ============================================================ */

function SearchBall() {
  return (
    <div className="gp-loader-scene" aria-hidden="true">
      <div className="gp-ball">
        <span className="gp-face">
          <i className="gp-eye"></i>
          <i className="gp-eye"></i>
        </span>
      </div>
      <div className="gp-ball-shadow"></div>
      <div className="gp-grass"></div>
    </div>
  );
}

function SearchLoader({ variant = "overlay", label = "探しています" }) {
  if (variant === "plain") {
    return (
      <div className="gp-loader" role="status" aria-live="polite">
        <SearchBall />
        <p className="gp-loader-text">{label}<span>.</span><span>.</span><span>.</span></p>
      </div>
    );
  }
  return (
    <div className={"gp-loader-" + (variant === "screen" ? "screen" : "overlay")} role="status" aria-live="polite">
      <div className="gp-loader">
        <SearchBall />
        <p className="gp-loader-text">{label}<span>.</span><span>.</span><span>.</span></p>
      </div>
    </div>
  );
}

/* ボタン押下などで明示的に起動するローディング */
function useSearchPause(ms = 1500) {
  const [loading, setLoading] = React.useState(false);
  const timer = React.useRef(null);
  const run = React.useCallback((cb) => {
    setLoading(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setLoading(false);
      if (cb) cb();
    }, ms);
  }, [ms]);
  React.useEffect(() => () => clearTimeout(timer.current), []);
  return [loading, run];
}

/* 依存（フィルタなど）が変わるたびに ms ミリ秒だけローディング表示 */
function useFilterLoading(deps, ms = 1300) {
  const [loading, setLoading] = React.useState(false);
  const first = React.useRef(true);
  React.useEffect(() => {
    if (first.current) { first.current = false; return; }
    setLoading(true);
    const t = setTimeout(() => setLoading(false), ms);
    return () => clearTimeout(t);
  }, deps);
  return loading;
}

Object.assign(window, { SearchLoader, useSearchPause, useFilterLoading });

/* === header.jsx === */
/* ============================================================
   Golf Picks — 共通ヘッダー（上部ナビゲーション）
   全ページで読み込まれる。onNav が渡されればそれを使い、
   無ければ GP_PAGES のリンクへ直接遷移する。
   既存 components.css の .gp-header / .gp-nav / .gp-nav-link.on に準拠。
   ============================================================ */
function Header({ onNav, active }) {
  const P = window.GP_PAGES || {};
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { id: "clubs", label: "中古クラブ", href: P.clubs, icon: Icons.cart },
    { id: "tour", label: "ゴルフ大会", href: P.tour, icon: Icons.trophy },
    { id: "practice", label: "練習場", href: P.practice, icon: Icons.pin },
    { id: "course", label: "ゴルフ場", href: P.course, icon: Icons.flag },
  ];

  const go = (e, item) => {
    // 準備中ページ（href なし）はクリックしても遷移しない
    if (!item.href) {
      e.preventDefault();
      return;
    }
    if (onNav) {
      e.preventDefault();
      onNav(item.id);
      setOpen(false);
    }
  };

  return (
    <header className={"gp-header" + (scrolled ? " scrolled" : "")}>
      <div className="wrap gp-header-in">
        <a className="gp-logo" href={P.top || "index.html"}>
          <span className="gp-logo-mark"><Icons.flag size={20} /></span>
          <span className="gp-logo-text">Golf<span>Picks</span></span>
        </a>

        <nav className={"gp-nav" + (open ? " open" : "")}>
          {nav.map(item => (
            <a
              key={item.id}
              className={"gp-nav-link" + (active === item.id ? " on" : "") + (item.href ? "" : " soon")}
              href={item.href || "#"}
              onClick={(e) => go(e, item)}
              aria-disabled={!item.href}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
              {!item.href && <small className="gp-nav-soon">準備中</small>}
            </a>
          ))}
        </nav>

        <button
          className="gp-nav-toggle"
          aria-label="メニュー"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <Icons.close size={22} /> : <Icons.menu size={22} />}
        </button>
      </div>
    </header>
  );
}
window.Header = Header;

/* === footer.jsx === */
/* Footer */
function Footer() {
  const P = window.GP_PAGES || {};
  const cols = [
    { h: "探す", links: [["全国練習場マップ", P.practice], ["全国ゴルフ場マップ", P.course], ["中古クラブ比較", P.clubs], ["ゴルフ大会・日程", P.tour], ["ランキング", null]] },
    { h: "中古クラブ", links: [["ドライバー", P.clubs], ["アイアンセット", P.clubs], ["ウェッジ", P.clubs], ["パター", P.clubs], ["初心者セット", P.clubs], ["高く売る", null]] },
    { h: "Golf Picks", links: [["サービスについて", P.about], ["掲載ポリシー", null], ["掲載をご希望の店舗様", null], ["広告掲載", null], ["運営管理", "admin.html"], ["お問い合わせ", null]] },
  ];
  return (
    <footer className="gp-footer">
      <div className="wrap">
        <div className="gp-footer-top">
          <div className="gp-footer-brand">
            <a className="gp-logo on-dark" href={(window.GP_PAGES || {}).top || "index.html"}>
              <span className="gp-logo-text">Golf<span>Picks</span></span>
            </a>
            <p>全国のゴルフ練習場・ゴルフ場・中古クラブ情報をひとつに集約。探す・比べる・出かけるを、ひとつの場所で。</p>
            <div className="gp-footer-update"><Icons.refresh size={14} /> データ最終更新: 2026/06/11 06:00</div>
          </div>
          <div className="gp-footer-cols">
            {cols.map(c => (
              <div key={c.h} className="gp-footer-col">
                <h4>{c.h}</h4>
                {c.links.map(([l, href]) => (
                  <a key={l} href={href || "#"} onClick={(e)=>{ if(!href) e.preventDefault(); }}>{l}</a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="gp-footer-bottom">
          <span>© 2026 Golf Picks</span>
          <div className="gp-footer-legal">
            <a href="#">利用規約</a><a href="#">プライバシー</a><a href="#">特定商取引法</a>
          </div>
          <span className="gp-footer-aff">当サイトはアフィリエイト広告を利用しています</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;

/* === finder.jsx === */
/* ============================================================
   ClubFinder — 中古クラブ診断
   2つの入口を用意:
   ・じっくり診断 … 腕前/種類/重視点/予算/シャフトの5問
   ・はじめての方（よくわからない）… 男女/年代/予算の3問だけで
     初心者にやさしいクラブを適合度順にご提案
   どちらも各クラブの「適合度」をスコア化し、最適と思われる順に並べる。
   ============================================================ */

const FINDER_TYPE_LABEL = { driver: "ドライバー", iron: "アイアン", wedge: "ウェッジ", putter: "パター", set: "セット" };
const FINDER_GENDER_LABEL = { men: "メンズ", women: "レディース", unisex: "男女兼用" };

/* ---- じっくり診断（5問） ---- */
const FINDER_QUESTIONS = [
  {
    id: "level", q: "ゴルフ歴・腕前は？", sub: "やさしさの必要度を見極めます",
    opts: [
      { id: "beginner", label: "はじめて / これから", note: "クラブ未所有〜数回" },
      { id: "improver", label: "スコア100前後", note: "ラウンド経験あり" },
      { id: "mid", label: "90切りを目指す", note: "中級者" },
      { id: "advanced", label: "80台で安定", note: "上級者" },
    ],
  },
  {
    id: "type", q: "探しているクラブは？", sub: "種類で候補を絞り込みます",
    opts: [
      { id: "driver", label: "ドライバー" },
      { id: "iron", label: "アイアン" },
      { id: "wedge", label: "ウェッジ" },
      { id: "putter", label: "パター" },
      { id: "set", label: "セット一式" },
      { id: "any", label: "まだ決めていない" },
    ],
  },
  {
    id: "priority", q: "いちばん重視するのは？", sub: "クラブ選びの軸を決めます",
    opts: [
      { id: "easy", label: "やさしさ・ミスへの強さ" },
      { id: "distance", label: "飛距離" },
      { id: "feel", label: "操作性・打感" },
      { id: "price", label: "とにかく価格" },
    ],
  },
  {
    id: "budget", q: "ご予算は？", sub: "最安値で判定します",
    opts: [
      { id: "b1", label: "〜3万円", max: 30000 },
      { id: "b2", label: "3〜6万円", max: 60000 },
      { id: "b3", label: "6万円以上", max: Infinity },
      { id: "any", label: "こだわらない", max: Infinity },
    ],
  },
  {
    id: "flex", q: "シャフトの硬さは？", sub: "ヘッドスピードの目安",
    opts: [
      { id: "R", label: "やわらかめ (R)", note: "〜38m/s" },
      { id: "SR", label: "標準 (SR)", note: "38〜43m/s" },
      { id: "S", label: "かため (S)", note: "43m/s〜" },
      { id: "any", label: "おまかせ" },
    ],
  },
];

/* ---- はじめての方（よくわからない）3問 ---- */
const FINDER_EASY_QUESTIONS = [
  {
    id: "gender", q: "どなたが使いますか？", sub: "体格に合うクラブをご提案します",
    opts: [
      { id: "men", label: "男性", note: "メンズ向け" },
      { id: "women", label: "女性", note: "レディース向け" },
    ],
  },
  {
    id: "age", q: "年代を教えてください", sub: "振りやすい重さ・硬さに合わせます",
    opts: [
      { id: "young", label: "〜30代", note: "しっかり振れる" },
      { id: "mid", label: "40〜50代", note: "標準" },
      { id: "senior", label: "60代〜", note: "軽め・やわらかめ" },
    ],
  },
  {
    id: "budget", q: "ご予算は？", sub: "最安値で判定します",
    opts: [
      { id: "b1", label: "〜3万円", max: 30000 },
      { id: "b2", label: "3〜6万円", max: 60000 },
      { id: "any", label: "こだわらない", max: Infinity },
    ],
  },
];

/* 「じっくり診断」スコア（0-99） */
function scoreClub(club, a, budgetMax) {
  let score = 48;
  const reasons = [];
  const off = 1 - club.lowest / club.retail;

  if (a.level === "beginner" || a.level === "improver") {
    if (club.beginner) { score += 22; reasons.push("やさしい設計で始めやすい"); }
    else if (club.rank === "B") { score += 3; }
    else { score -= 7; }
  } else {
    if (!club.beginner) { score += 13; if (club.rank === "S") { score += 9; reasons.push("上級者向けの高い完成度"); } }
    else { score -= 9; }
  }

  if (a.type && a.type !== "any") {
    if (club.type === a.type) { score += 26; reasons.push((FINDER_TYPE_LABEL[club.type] || "希望の種類") + "の希望に合致"); }
    else { score -= 42; }
  }

  if (a.priority === "easy" && (club.beginner || club.type === "set")) { score += 14; reasons.push("ミスに強くやさしい"); }
  if (a.priority === "distance" && club.type === "driver") { score += 16; reasons.push("飛距離を狙えるドライバー"); }
  if (a.priority === "feel" && ["iron", "wedge", "putter"].includes(club.type) && club.rank !== "B") { score += 14; reasons.push("操作性・打感に定評"); }
  if (a.priority === "price") { score += Math.round(off * 28); if (off > 0.45) reasons.push("値下がり率が高くお得"); }

  if (budgetMax !== Infinity) {
    if (club.lowest <= budgetMax) { score += 12; reasons.push("ご予算内で狙える"); }
    else { score -= 32; }
  }

  if (a.flex && a.flex !== "any" && club.flex && club.flex.includes(a.flex)) {
    score += 8; reasons.push(a.flex + " フレックス対応");
  }

  score += { S: 6, A: 3, B: 0 }[club.rank] || 0;
  return { score: Math.max(6, Math.min(99, Math.round(score))), reasons: reasons.slice(0, 3) };
}

/* 「はじめての方」スコア（0-99）：男女・年代・予算でやさしいクラブを絞り込む */
function scoreBeginner(club, a, budgetMax) {
  let score = 38;
  const reasons = [];
  const flex = (club.flex || "");

  // やさしさ（初心者向けを最優先）
  if (club.beginner) { score += 16; reasons.push("初心者にやさしい設計"); }
  else { score -= 16; }
  if (club.type === "set") { score += 9; reasons.push("これ一式ですぐ始められる"); }
  else if (club.type === "wedge" || club.type === "putter") { score -= 6; }

  // 男女（性別一致を強く優先し、レディース希望なら女性向けが上位に）
  if (a.gender) {
    if (club.gender === a.gender) { score += 18; reasons.push(FINDER_GENDER_LABEL[club.gender] + "向けでぴったり"); }
    else if (club.gender === "unisex") { score += 7; reasons.push("男女兼用で扱いやすい"); }
    else { score -= 40; }
  }

  // 年代 → 振りやすい硬さ・重さ
  if (a.age === "senior") {
    if (/L|R|A/.test(flex)) { score += 11; reasons.push("軽め・やわらかめで振りやすい"); }
    else if (/S/.test(flex)) { score -= 12; }
  } else if (a.age === "mid") {
    if (/L|R|SR|A/.test(flex)) { score += 7; reasons.push("無理なく振れる硬さ"); }
  } else if (a.age === "young") {
    if (/SR|S|R/.test(flex)) { score += 6; }
  }
  // 女性はより軽量・やわらかいシャフトを後押し
  if (a.gender === "women" && /L|A/.test(flex)) { score += 4; }

  // 予算
  if (budgetMax !== Infinity) {
    if (club.lowest <= budgetMax) { score += 10; reasons.push("ご予算内で狙える"); }
    else { score -= 32; }
  } else {
    const off = 1 - club.lowest / club.retail;
    if (off > 0.4) { score += 5; reasons.push("値下がり率が高くお得"); }
  }

  score += { S: 4, A: 2, B: 0 }[club.rank] || 0;
  return { score: Math.max(6, Math.min(99, Math.round(score))), reasons: reasons.slice(0, 3) };
}

function FinderRing({ value }) {
  const tone = value >= 80 ? "var(--green)" : value >= 60 ? "var(--gold)" : "var(--gray)";
  return (
    <div className="finder-ring" style={{ background: `conic-gradient(${tone} ${value * 3.6}deg, var(--line) 0)` }}>
      <div className="finder-ring-in">
        <b className="num">{value}</b>
        <small>適合</small>
      </div>
    </div>
  );
}

function FinderRec({ club, rank, score, reasons }) {
  const { yen } = window.GP_DATA;
  const off = Math.round((1 - club.lowest / club.retail) * 100);
  const best = club.shops.reduce((m, s) => (s.price < m.price ? s : m), club.shops[0]);
  const rankBg = { S: "var(--green)", A: "var(--gold)", B: "var(--gray)" }[club.rank];
  return (
    <article className={"finder-rec" + (rank === 1 ? " top" : "")}>
      <div className="finder-rec-no">
        <span className="num">{rank}</span>
        {rank === 1 && <span className="finder-rec-pick">イチオシ</span>}
      </div>
      <div className="finder-rec-thumb ph ph-product">
        <span className="club-rank badge-rank" style={{ background: rankBg }}>{club.rank}</span>
      </div>
      <div className="finder-rec-body">
        <div className="finder-rec-head">
          <div>
            <span className="club-brand">{club.brand}</span>
            <h4>{club.model}</h4>
          </div>
          <FinderRing value={score} />
        </div>
        <div className="finder-rec-reasons">
          {reasons.length ? reasons.map((r, i) => (
            <span key={i} className="finder-reason"><Icons.check size={12} /> {r}</span>
          )) : <span className="finder-reason"><Icons.check size={12} /> 条件に合う一本</span>}
        </div>
        <div className="finder-rec-foot">
          <div className="finder-rec-price">
            <span className="num">{yen(club.lowest)}</span>
            <span className="finder-rec-off">-{off}%</span>
            <span className="finder-rec-shop"><Icons.tag size={13} /> {best.name}・{best.cond}</span>
          </div>
          <a className="btn btn-primary btn-sm" href="#" onClick={(e) => e.preventDefault()}>
            購入ページへ <Icons.arrow size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

function ClubFinder() {
  const { clubs } = window.GP_DATA;
  // phase: "intro" | step index (0..) | "result"
  const [phase, setPhase] = React.useState("intro");
  const [mode, setMode] = React.useState("expert"); // "expert" | "easy"
  const [answers, setAnswers] = React.useState({});

  const questionSet = mode === "easy" ? FINDER_EASY_QUESTIONS : FINDER_QUESTIONS;
  const total = questionSet.length;
  const stepIdx = typeof phase === "number" ? phase : 0;

  const begin = (m) => { setMode(m); setAnswers({}); setPhase(0); };

  const choose = (qid, optId) => {
    const next = { ...answers, [qid]: optId };
    setAnswers(next);
    if (stepIdx < total - 1) setPhase(stepIdx + 1);
    else { setPhase("loading"); setTimeout(() => setPhase("result"), 1600); }
  };

  const back = () => {
    if (phase === "result") setPhase(total - 1);
    else if (typeof phase === "number" && phase > 0) setPhase(phase - 1);
    else setPhase("intro");
  };

  const restart = () => { setAnswers({}); setPhase("intro"); };

  const results = React.useMemo(() => {
    if (phase !== "result") return [];
    const bq = questionSet.find(q => q.id === "budget");
    const budgetOpt = bq && bq.opts.find(o => o.id === answers.budget);
    const budgetMax = budgetOpt ? budgetOpt.max : Infinity;
    const scorer = mode === "easy" ? scoreBeginner : scoreClub;
    return clubs
      .map(c => ({ club: c, ...scorer(c, answers, budgetMax) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }, [phase, answers, clubs, mode]);

  const summaryChips = () =>
    questionSet.map(q => {
      const opt = q.opts.find(o => o.id === answers[q.id]);
      return opt ? opt.label : null;
    }).filter(Boolean);

  return (
    <div className="finder">
      <div className="finder-head">
        <span className="finder-kicker"><Icons.bolt size={14} /> 中古クラブ診断</span>
        <h3>かんたんな質問で、あなたに合う一本を。</h3>
        <p>腕前・目的・予算からクラブとの相性を点数化し、ぴったりの中古クラブを適合度の高い順にご提案します。</p>
      </div>

      {phase === "intro" && (
        <div className="finder-intro">
          <div className="finder-modes">
            <button className="finder-mode" onClick={() => begin("easy")}>
              <span className="finder-mode-badge easy">はじめての方におすすめ</span>
              <h4>よくわからないので、おまかせ</h4>
              <p>ゴルフ用語は使いません。<b>男女・年代・予算</b>の3問だけで、初心者にやさしいクラブをご提案します。</p>
              <span className="finder-mode-go">3問でかんたん診断 <Icons.arrow size={15} /></span>
            </button>
            <button className="finder-mode" onClick={() => begin("expert")}>
              <span className="finder-mode-badge">経験のある方</span>
              <h4>条件を選んでじっくり</h4>
              <p>腕前・クラブの種類・重視する点・予算・シャフトの硬さなど、<b>5つの質問</b>で細かく診断します。</p>
              <span className="finder-mode-go">5問でくわしく診断 <Icons.arrow size={15} /></span>
            </button>
          </div>
          <span className="tag-soft">所要 約30秒 ・ 登録不要</span>
        </div>
      )}

      {typeof phase === "number" && (() => {
        const Q = questionSet[stepIdx];
        return (
          <div className="finder-step">
            <div className="finder-progress">
              <button className="finder-back" onClick={back}><Icons.chevron size={15} style={{ transform: "rotate(180deg)" }} /> 戻る</button>
              <div className="finder-progress-bar"><span style={{ width: (stepIdx / total * 100) + "%" }} /></div>
              <span className="finder-progress-n"><b className="num">{stepIdx + 1}</b> / {total}</span>
            </div>
            <div className="finder-q">
              {mode === "easy" && <span className="finder-q-mode">はじめての方向け</span>}
              <h4>{Q.q}</h4>
              <span>{Q.sub}</span>
            </div>
            <div className={"finder-opts cols-" + (Q.opts.length > 4 ? 3 : Q.opts.length === 3 ? 3 : 2)}>
              {Q.opts.map(o => (
                <button
                  key={o.id}
                  className={"finder-opt" + (answers[Q.id] === o.id ? " on" : "")}
                  onClick={() => choose(Q.id, o.id)}
                >
                  <span className="finder-opt-label">{o.label}</span>
                  {o.note && <span className="finder-opt-note">{o.note}</span>}
                  <span className="finder-opt-tick"><Icons.check size={14} /></span>
                </button>
              ))}
            </div>
          </div>
        );
      })()}

      {phase === "loading" && (
        <div className="finder-loading">
          <SearchLoader variant="plain" label="あなたに合う一本を探しています" />
        </div>
      )}

      {phase === "result" && (
        <div className="finder-result">
          <div className="finder-result-head">
            <div>
              <span className="finder-kicker green"><Icons.check size={14} /> 診断完了</span>
              <h4>あなたへのおすすめ {results.length} 件</h4>
              <div className="finder-summary">
                {mode === "easy" && <span className="finder-summary-chip lead">はじめての方向け</span>}
                {summaryChips().map((c, i) => <span key={i} className="finder-summary-chip">{c}</span>)}
              </div>
            </div>
            <button className="btn btn-ghost btn-sm finder-redo" onClick={restart}>
              <Icons.refresh size={15} /> 条件を変えて再診断
            </button>
          </div>
          <div className="finder-recs">
            {results.map((r, i) => (
              <FinderRec key={r.club.id} club={r.club} rank={i + 1} score={r.score} reasons={r.reasons} />
            ))}
          </div>
          <p className="finder-result-note">
            ※ 適合度は腕前・男女・年代・予算・状態ランクなどから算出した目安です。最終的なご判断の参考にお使いください。
          </p>
        </div>
      )}
    </div>
  );
}

window.ClubFinder = ClubFinder;

/* === clubs.jsx === */
/* ClubSearch — 価格.com 風の中古クラブ比較検索
   左：絞り込みサイドバー（メーカー/タイプ/対象/状態/価格帯）
   右：人気ランキング形式のリスト（最安値・ショップ数・評価・比較）        */

const CLUB_TYPE_LABEL = { driver: "ドライバー", iron: "アイアン", wedge: "ウェッジ", putter: "パター", set: "セット" };
const CLUB_GENDER_LABEL = { men: "メンズ", women: "レディース", unisex: "男女兼用" };

function ClubRow({ club, rank }) {
  const { yen } = window.GP_DATA;
  const [open, setOpen] = React.useState(false);
  const off = Math.round((1 - club.lowest / club.retail) * 100);
  const rankBg = { S: "var(--green)", A: "var(--gold)", B: "var(--gray)" }[club.rank];
  const shops = club.shops.slice().sort((a, b) => a.price - b.price);

  return (
    <li className={"club-row" + (open ? " open" : "")}>
      <div className="club-row-main">
        <div className={"club-rank-no" + (rank <= 3 ? " top" : "")}>
          <small>人気</small><b className="num">{rank}</b>
        </div>

        <div className="club-row-thumb ph ph-product">
          <span className="ph-label">{club.brand}</span>
          <span className="club-rank badge-rank" style={{ background: rankBg }}>{club.rank}</span>
        </div>

        <div className="club-row-info">
          <div className="club-row-brandline">
            <span className="club-brand">{club.brand}</span>
            <span className="mini-tag">{CLUB_TYPE_LABEL[club.type]}</span>
            <span className="mini-tag">{club.year}年モデル</span>
            {club.gender !== "unisex" && <span className={"mini-tag gender " + club.gender}>{CLUB_GENDER_LABEL[club.gender]}</span>}
            {club.beginner && <span className="mini-tag beginner">初心者◎</span>}
          </div>
          <h3 className="club-row-model">{club.model}</h3>
          <div className="club-row-specs">
            {club.loft !== "—" && <span><i>ロフト</i>{club.loft}</span>}
            <span><i>フレックス</i>{club.flex}</span>
            <span><i>状態</i>ランク{club.rank}</span>
          </div>
          <div className="club-row-rating">
            <Stars value={club.rating} size={13} />
            <span className="club-row-reviews">({club.reviews}件のレビュー)</span>
          </div>
        </div>

        <div className="club-row-price">
          <span className="club-row-price-label">中古 最安値</span>
          <span className="num club-row-price-num">{yen(club.lowest)}</span>
          <div className="club-row-price-sub">
            <span className="club-price-off">-{off}%</span>
            <s>新品 {yen(club.retail)}</s>
          </div>
          <span className="club-row-shops"><Icons.tag size={13} /> {club.shopCount}店舗が在庫</span>
          <button className="btn btn-primary btn-sm club-row-compare" onClick={() => setOpen(o => !o)}>
            最安値を比較 <span className={"club-chev" + (open ? " up" : "")}><Icons.chevDown size={15} /></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="club-shops">
          <div className="club-shops-head">
            <span>ショップ</span><span>状態 / 配送</span><span>価格</span>
          </div>
          {shops.map((s, i) => (
            <div key={i} className={"club-shop" + (i === 0 ? " cheapest" : "")}>
              <div className="club-shop-name">
                {i === 0 && <span className="badge badge-gold" style={{ fontSize: 10 }}>最安</span>}
                <span>{s.name}</span>
                <span className="club-shop-stars"><Icons.star size={11} /> {s.stars}</span>
              </div>
              <div className="club-shop-cond"><Icons.truck size={13} /> {s.cond}・{s.ship}</div>
              <div className="club-shop-buy">
                <span className="num">{yen(s.price)}</span>
                <a className="btn btn-ghost btn-sm" href="#" onClick={(e) => e.preventDefault()}>ショップへ<Icons.chevron size={13} /></a>
              </div>
            </div>
          ))}
          <p className="club-shops-note">※ 表示価格・在庫はサンプルです。実在モデルをもとにした比較イメージで、広告・アフィリエイトを含みます。</p>
        </div>
      )}
    </li>
  );
}

function FilterGroup({ title, children }) {
  return (
    <div className="cf-group">
      <span className="cf-title">{title}</span>
      {children}
    </div>
  );
}

function ClubSearch() {
  const { clubs } = window.GP_DATA;
  const brands = React.useMemo(() => [...new Set(clubs.map(c => c.brand))], [clubs]);
  const PRICE_BANDS = [
    { id: "all", label: "すべて", max: Infinity },
    { id: "p1", label: "〜3万円", max: 30000 },
    { id: "p2", label: "3〜6万円", max: 60000 },
    { id: "p3", label: "6万円〜", max: Infinity, min: 60000 },
  ];

  const [type, setType] = React.useState("all");
  const [gender, setGender] = React.useState("all");
  const [rank, setRank] = React.useState("all");
  const [makers, setMakers] = React.useState([]); // empty = all
  const [price, setPrice] = React.useState("all");
  const [sort, setSort] = React.useState("pop");
  const loading = useFilterLoading([type, gender, rank, makers, price, sort], 1200);

  const toggleMaker = (b) => setMakers(m => m.includes(b) ? m.filter(x => x !== b) : [...m, b]);
  const reset = () => { setType("all"); setGender("all"); setRank("all"); setMakers([]); setPrice("all"); };

  const band = PRICE_BANDS.find(p => p.id === price);
  let list = clubs.filter(c => {
    if (type === "beginner" ? !c.beginner : type !== "all" && c.type !== type) return false;
    if (gender !== "all" && c.gender !== gender && !(gender !== "unisex" && c.gender === "unisex")) return false;
    if (rank !== "all" && c.rank !== rank) return false;
    if (makers.length && !makers.includes(c.brand)) return false;
    if (band && c.lowest > band.max) return false;
    if (band && band.min && c.lowest < band.min) return false;
    return true;
  });
  list = list.slice().sort((a, b) =>
    sort === "price" ? a.lowest - b.lowest :
    sort === "new" ? b.year - a.year :
    sort === "rating" ? b.rating - a.rating :
    a.popRank - b.popRank);

  const activeCount = (type !== "all") + (gender !== "all") + (rank !== "all") + (price !== "all") + (makers.length ? 1 : 0);

  return (
    <div className="clubs-kakaku">
      <aside className="clubs-filter">
        <div className="cf-head">
          <span><Icons.filter size={16} /> 絞り込み</span>
          {activeCount > 0 && <button className="cf-reset" onClick={reset}>クリア</button>}
        </div>

        <FilterGroup title="タイプ">
          <div className="cf-chips">
            {[["all", "すべて"], ["driver", "ドライバー"], ["iron", "アイアン"], ["wedge", "ウェッジ"], ["putter", "パター"], ["set", "セット"], ["beginner", "初心者向け"]].map(([id, label]) => (
              <button key={id} className={"cf-chip" + (type === id ? " on" : "")} onClick={() => setType(id)}>{label}</button>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="メーカー">
          <div className="cf-checks">
            {brands.map(b => (
              <label key={b} className={"cf-check" + (makers.includes(b) ? " on" : "")}>
                <input type="checkbox" checked={makers.includes(b)} onChange={() => toggleMaker(b)} />
                <span className="cf-box"><Icons.check size={12} /></span>
                {b}
              </label>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="価格帯">
          <div className="cf-chips">
            {PRICE_BANDS.map(p => (
              <button key={p.id} className={"cf-chip" + (price === p.id ? " on" : "")} onClick={() => setPrice(p.id)}>{p.label}</button>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="対象">
          <div className="cf-chips">
            {[["all", "すべて"], ["men", "メンズ"], ["women", "レディース"]].map(([id, label]) => (
              <button key={id} className={"cf-chip" + (gender === id ? " on" : "")} onClick={() => setGender(id)}>{label}</button>
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="状態ランク">
          <div className="cf-chips">
            {[["all", "すべて"], ["S", "S 極上"], ["A", "A 美品"], ["B", "B 実用"]].map(([id, label]) => (
              <button key={id} className={"cf-chip" + (rank === id ? " on" : "")} onClick={() => setRank(id)}>{label}</button>
            ))}
          </div>
        </FilterGroup>
      </aside>

      <div className="clubs-main">
        <div className="clubs-bar">
          <span className="clubs-count"><b className="num">{list.length}</b> 件の中古クラブ</span>
          <div className="clubs-sort">
            {[["pop", "人気順"], ["price", "最安値順"], ["new", "新着順"], ["rating", "評価順"]].map(([id, label]) => (
              <button key={id} className={"clubs-sort-btn" + (sort === id ? " on" : "")} onClick={() => setSort(id)}>{label}</button>
            ))}
          </div>
        </div>

        <div className="clubs-list-wrap">
          <ol className="clubs-list" style={loading ? { opacity: .3, pointerEvents: "none" } : null}>
            {list.length ? list.map((c, i) => <ClubRow key={c.id} club={c} rank={i + 1} />)
              : <li className="clubs-empty">条件に合うクラブが見つかりませんでした。絞り込みを調整してください。</li>}
          </ol>
          {loading && <SearchLoader label="クラブを探しています" />}
        </div>

        <div className="clubs-foot">
          <button className="btn btn-dark btn-lg">すべての中古クラブを見る <Icons.arrow size={17} /></button>
          <span className="tag-soft">複数ショップの在庫・価格を毎日更新</span>
        </div>
      </div>
    </div>
  );
}
window.ClubSearch = ClubSearch;

/* === clubs-entry.jsx === */
/* ============================================================
   中古クラブページ エントリーポイント
   Header → 診断(ClubFinder) → 検索一覧(ClubSearch) → Footer
   ============================================================ */
function ClubsPage() {
  const onNav = (id) => {
    const P = window.GP_PAGES || {};
    if (id === "top") { window.location.href = P.top || "index.html"; return; }
    if (P[id]) window.location.href = P[id];
  };
  return (
    <div>
      <Header onNav={onNav} active="clubs" />
      <main>
        {typeof ClubFinder !== "undefined" && <ClubFinder />}
        {typeof ClubSearch !== "undefined" && <ClubSearch />}
      </main>
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ClubsPage />);
