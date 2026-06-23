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
