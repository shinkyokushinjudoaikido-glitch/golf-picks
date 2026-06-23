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
