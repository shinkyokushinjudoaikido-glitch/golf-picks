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
