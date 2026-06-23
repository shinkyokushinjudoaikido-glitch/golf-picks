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
