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

/* === hero.jsx === */
/* Hero — shared search widget + 3 main-view variants */

function HeroSearch({ compact, onNav }) {
  const tabs = [
    { id: "clubs", label: "中古クラブ", icon: Icons.cart },
    { id: "course", label: "ゴルフ場", icon: Icons.flag },
    { id: "practice", label: "練習場", icon: Icons.pin },
  ];
  const [tab, setTab] = React.useState("clubs");
  const [loading, runSearch] = useSearchPause(1500);
  const fields = {
    practice: ["エリア・駅名", "打ち放題 / 弾道計測 など"],
    course: ["エリア・都道府県", "プレー日・予算"],
    clubs: ["メーカー・モデル名", "目的（やさしさ / 飛び など）"],
  }[tab];

  return (
    <div className={"hero-search" + (compact ? " compact" : "")}>
      <div className="hero-search-tabs">
        {tabs.map(t => (
          <button key={t.id} className={"hs-tab" + (tab === t.id ? " active" : "")} onClick={() => setTab(t.id)}>
            <t.icon size={16} /> {t.label}
          </button>
        ))}
      </div>
      <div className="hero-search-body">
        <label className="hs-field">
          <Icons.loc size={18} />
          <span><em>{tab === "clubs" ? "キーワード" : "エリア"}</em><input placeholder={fields[0]} /></span>
        </label>
        <label className="hs-field">
          {tab === "clubs" ? <Icons.tag size={18} /> : <Icons.search size={18} />}
          <span><em>{tab === "clubs" ? "目的" : "条件"}</em><input placeholder={fields[1]} /></span>
        </label>
        <button className="btn btn-primary hs-go" onClick={() => runSearch(() => onNav && onNav(tab))}>
          <Icons.search size={18} /> 検索
        </button>
      </div>
      {loading && <SearchLoader variant="screen" label="ゴルフを探しています" />}
      <div className="hero-search-quick">
        <span>人気:</span>
        {["Qi10 ドライバー", "初心者セット", "レディース", "関東のゴルフ場"].map(q => (
          <button key={q} className="hs-quick" onClick={() => runSearch(() => onNav && onNav(tab))}>{q}</button>
        ))}
      </div>
    </div>
  );
}
window.HeroSearch = HeroSearch;

const HERO_STATS = [
  { n: "3,782", l: "全国の練習場" },
  { n: "2,813", l: "掲載ゴルフ場" },
  { n: "48,200", l: "中古クラブ" },
  { n: "毎日", l: "情報更新" },
];

/* Variant A — Booking / travel style: full-bleed scenic + overlapping search */
function HeroA({ onNav }) {
  return (
    <section className="hero hero-a">
      <div className="hero-a-bg ph ph-scenic">
        <span className="ph-label">PHOTO ゴルフ場の風景（差し替え可）</span>
      </div>
      <div className="hero-a-scrim" />
      <div className="wrap hero-a-in">
        <div className="hero-a-copy">
          <h1>今日、<br />ゴルフに行きたくなる。</h1>
          <p>練習場もゴルフ場も中古クラブも。日本中のゴルフ情報をひとつに集めた、本当の総合サイト。</p>
        </div>
        <HeroSearch onNav={onNav} />
        <div className="hero-a-stats">
          {HERO_STATS.map(s => (
            <div key={s.l} className="hero-stat"><span className="num">{s.n}</span><small>{s.l}</small></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Variant B — Editorial split: copy + stats left, photo collage with floating cards */
function HeroB({ onNav }) {
  const { yen } = window.GP_DATA;
  return (
    <section className="hero hero-b">
      <div className="wrap hero-b-in">
        <div className="hero-b-copy">
          <span className="eyebrow">Golf, all in one place</span>
          <h1>探す手間を、<br /><span className="hl">プレーの時間に</span>変える。</h1>
          <p>何度もサイトを行き来する時代は終わり。Golf Picks が全国の練習場・ゴルフ場・中古クラブをひとつに集約。比較も予約検討も購入も、ここで完結します。</p>
          <div className="hero-b-cta">
            <button className="btn btn-primary btn-lg" onClick={() => onNav("course")}><Icons.flag size={17} /> ゴルフ場を探す</button>
            <button className="btn btn-ghost btn-lg" onClick={() => onNav("clubs")}><Icons.cart size={17} /> 中古クラブを比較</button>
          </div>
          <div className="hero-b-stats">
            {HERO_STATS.map(s => (
              <div key={s.l} className="hero-stat"><span className="num">{s.n}</span><small>{s.l}</small></div>
            ))}
          </div>
        </div>

        <div className="hero-b-art">
          <div className="hb-photo big ph ph-scenic"><span className="ph-label">PHOTO 名門コースの18番</span></div>
          <div className="hb-photo small ph ph-scenic dusk"><span className="ph-label">PHOTO 夕暮れの練習場</span></div>
          <div className="hb-card hb-course card">
            <div className="hb-course-thumb ph ph-scenic" />
            <div className="hb-course-body">
              <span className="badge badge-green">★ 4.8 富士山ビュー</span>
              <strong>富士パノラマゴルフクラブ</strong>
              <span className="tag-soft">山梨県・18H / par72 ・ {yen(12400)}〜</span>
            </div>
          </div>
          <div className="hb-card hb-price card">
            <div className="row" style={{ justifyContent: "space-between", marginBottom: 6 }}>
              <span className="badge badge-gold">最安値</span>
              <span className="badge badge-green" style={{ background: "#e4f6df" }}>S 極上</span>
            </div>
            <strong className="hb-price-name">TaylorMade Qi10 MAX</strong>
            <div className="hb-price-num"><span className="num">{yen(48800)}</span><s>{yen(79200)}</s></div>
            <span className="tag-soft"><Icons.truck size={13} /> 送料無料・3ショップ比較</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Variant C — Discovery portal: headline + search + 3 big category tiles */
function HeroC({ onNav }) {
  const { regions } = window.GP_DATA;
  const tiles = [
    { id: "clubs", k: "中古クラブ", t: "中古クラブを探す", d: "実在モデルを最安値で比較", cls: "product", icon: Icons.cart, n: "48,200", go: "比較する" },
    { id: "tour", k: "ゴルフ大会", t: "ゴルフ大会スケジュール", d: "日程・結果・ポイントを一つに", cls: "dusk", icon: Icons.trophy, n: "日米欧", go: "大会を見る" },
    { id: "course", k: "ゴルフ場", t: "全国ゴルフ場マップ", d: "行きたいコースを景色で探す", cls: "", icon: Icons.flag, n: "2,813", go: "地図を見る" },
  ];
  return (
    <section className="hero hero-c">
      <div className="wrap hero-c-in">
        <div className="hero-c-head">
          <span className="hero-pill light"><Icons.refresh size={13} /> 毎日、最新情報を更新中</span>
          <h1>日本中のゴルフが、<br className="mb" />ここから始まる。</h1>
          <p>旅先のコースも、いつもの練習場も、次の一本も。Golf Picks で見つけて、比べて、出かけよう。</p>
          <div className="hero-c-search"><HeroSearch compact onNav={onNav} /></div>
        </div>
        <div className="hero-c-tiles">
          {tiles.map(t => (
            <button key={t.id} className="hc-tile" onClick={() => onNav(t.id)}>
              <div className={"hc-tile-bg ph " + (t.cls === "product" ? "ph-product" : "ph-scenic " + t.cls)} />
              <div className="hc-tile-scrim" />
              <div className="hc-tile-top">
                <span className="hc-tile-k"><t.icon size={14} /> {t.k}</span>
                <span className="hc-tile-n num">{t.n}<small>件</small></span>
              </div>
              <div className="hc-tile-body">
                <strong>{t.t}</strong>
                <span>{t.d}</span>
                <span className="hc-tile-go">{t.go} <Icons.arrow size={16} /></span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hero({ variant, onNav }) {
  if (variant === "B") return <HeroB onNav={onNav} />;
  if (variant === "C") return <HeroC onNav={onNav} />;
  return <HeroA onNav={onNav} />;
}
window.Hero = Hero;

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

/* === app.jsx === */
/* App shell (TOP / overview) — hero, feature entries that link to dedicated pages */
const { useState, useEffect, useRef } = React;

function FeatureStrip() {
  const items = [
    { icon: Icons.tag, t: "中古クラブは最安値で", d: "複数ショップの価格を一括比較" },
    { icon: Icons.trophy, t: "世界の大会をひとつに", d: "日本・米国・欧州の日程を一覧" },
    { icon: Icons.layers, t: "探すはここだけ", d: "練習場・ゴルフ場もまとめて" },
  ];
  return (
    <div className="feature-strip wrap">
      {items.map((it, i) => (
        <div key={i} className="feature-item">
          <span className="feature-ico"><it.icon size={20} /></span>
          <div><strong>{it.t}</strong><span>{it.d}</span></div>
        </div>
      ))}
    </div>
  );
}

/* Entry cards — link to each dedicated page */
function EntryGrid() {
  const P = window.GP_PAGES;
  const entries = [
    { id: "clubs", href: P.clubs, icon: Icons.cart, k: "中古クラブ", t: "中古クラブを探す", d: "実在モデルをメーカー・価格・状態で絞り込み、最安値を比較。診断機能も。", cls: "product", n: "48,200", unit: "件" },
    { id: "tour", href: P.tour, icon: Icons.trophy, k: "ゴルフ大会", t: "ゴルフ大会スケジュール", d: "日本・米国・欧州の男子／女子大会の日程・結果・ポイントをひとつに。", cls: "dusk", n: "日米欧", unit: "" },
    { id: "practice", href: P.practice, icon: Icons.pin, k: "練習場", t: "全国練習場マップ", d: "近くの打ちっぱなしを地図から。打席数・距離・ナイター対応で探せます。", cls: "", n: "3,782", unit: "件" },
    { id: "course", href: P.course, icon: Icons.flag, k: "ゴルフ場", t: "全国ゴルフ場マップ", d: "行きたいコースを景色で探す。エリアを選ぶと候補がすぐに見つかります。", cls: "", n: "2,813", unit: "件" },
  ];
  return (
    <div className="wrap entry-grid">
      {entries.map(e => {
        const ready = !!e.href; // href が無いページは準備中
        return (
        <a
          key={e.id}
          className={"entry-card" + (ready ? "" : " is-soon")}
          href={e.href || "#"}
          onClick={(ev) => { if (!ready) ev.preventDefault(); }}
          aria-disabled={!ready}
        >
          <div className={"entry-bg ph " + (e.cls === "product" ? "ph-product" : "ph-scenic " + e.cls)} />
          <div className="entry-scrim" />
          <div className="entry-top">
            <span className="entry-k"><e.icon size={14} /> {e.k}</span>
            <span className="entry-n num">{e.n}<small>{e.unit}</small></span>
          </div>
          <div className="entry-body">
            <strong>{e.t}</strong>
            <span>{e.d}</span>
            <span className="entry-go">
              {ready ? <>ページを見る <Icons.arrow size={16} /></> : "準備中"}
            </span>
          </div>
        </a>
        );
      })}
    </div>
  );
}

function PrBand() {
  const { yen } = window.GP_DATA;
  const P = window.GP_PAGES;
  return (
    <section className="pr-band">
      <div className="wrap pr-band-in">
        <div className="pr-band-text">
          <span className="badge badge-gold">PR ・ 今週の注目</span>
          <h3>買い替えシーズン。人気ドライバーが<span className="hl">最大47%オフ</span>。</h3>
          <p>各ショップの在庫から、状態の良い中古クラブを目的別にピックアップ。今すぐ比較できます。</p>
          <a className="btn btn-dark btn-lg" href={P.clubs}><Icons.cart size={17} /> 中古クラブを比較する</a>
        </div>
        <div className="pr-band-cards">
          {[["TaylorMade Qi10 MAX", 48800, "A・美品"], ["PING G430 MAX 10K", 52000, "S・極上"], ["Titleist T100 アイアン", 96000, "S"]].map((c, i) => (
            <div key={i} className="pr-mini card">
              <div className="pr-mini-thumb ph ph-product" />
              <div className="pr-mini-body">
                <strong>{c[0]}</strong>
                <span className="badge badge-green" style={{ background: "#e4f6df", fontSize: 10 }}>{c[2]}</span>
                <span className="num pr-mini-price">{yen(c[1])}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroSwitcher({ variant, setVariant }) {
  const opts = [
    { id: "A", label: "旅行サイト風" },
    { id: "B", label: "エディトリアル" },
    { id: "C", label: "ポータル" },
  ];
  return (
    <div className="hero-switch">
      <span className="hero-switch-label"><Icons.layers size={14} /> メインビュー案</span>
      <div className="hero-switch-seg">
        {opts.map(o => (
          <button key={o.id} className={"hsw-btn" + (variant === o.id ? " on" : "")} onClick={() => setVariant(o.id)}>
            <b>{o.id}</b> {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function App() {
  const [variant, setVariant] = useState(() => localStorage.getItem("gp_hero") || "C");
  useEffect(() => { localStorage.setItem("gp_hero", variant); }, [variant]);

  const aboutRef = useRef(null);
  const onNav = (id) => {
    if (id === "about" && aboutRef.current) {
      window.scrollTo({ top: aboutRef.current.getBoundingClientRect().top + window.scrollY - 64, behavior: "smooth" });
    } else if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (window.GP_PAGES[id]) {
      window.location.href = window.GP_PAGES[id];
    }
  };

  return (
    <div>
      <Header />
      <Hero variant={variant} onNav={onNav} />
      <FeatureStrip />

      <section className="section" data-screen-label="サービス一覧">
        <div className="wrap section-head">
          <span className="eyebrow">Explore Golf Picks</span>
          <h2>使いたい機能を選ぶ</h2>
          <p>中古クラブ・ゴルフ大会・練習場・ゴルフ場。それぞれの専用ページで、じっくり探せます。</p>
        </div>
        <EntryGrid />
      </section>

      <PrBand />

      <section className="about-band" ref={aboutRef} id="about" data-screen-label="Golf Picksとは">
        <div className="wrap about-in">
          <div>
            <span className="eyebrow">Why Golf Picks</span>
            <h2>探す時代から、見つかる時代へ。</h2>
            <p>これまで、練習場・ゴルフ場・中古ショップ・大会情報は別々のサイトに散らばっていました。Golf Picks は日本中のゴルフ情報をひとつに集約。比較も検討も購入導線も、ひとつの場所で完結します。</p>
          </div>
          <div className="about-stats">
            {[["3,782","練習場"],["2,813","ゴルフ場"],["48,200","中古クラブ"],["日米欧","大会日程"]].map(s => (
              <div key={s[1]} className="about-stat"><span className="num">{s[0]}</span><small>{s[1]}</small></div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <HeroSwitcher variant={variant} setVariant={setVariant} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
