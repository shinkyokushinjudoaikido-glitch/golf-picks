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
