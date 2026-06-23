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
