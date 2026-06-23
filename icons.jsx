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
