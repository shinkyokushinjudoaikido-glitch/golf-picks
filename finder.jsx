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
