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
