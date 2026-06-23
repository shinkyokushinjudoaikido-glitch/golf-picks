/* ============================================================
   Golf Picks — Mock data
   Exposes window.GP_DATA
   ============================================================ */
(function () {
  // Regions positioned on an abstract Japan map (percentages within the map canvas)
  const regions = [
    { id: "hokkaido", name: "北海道", x: 80, y: 13, practice: 142, course: 168 },
    { id: "tohoku",   name: "東北",   x: 72, y: 33, practice: 286, course: 312 },
    { id: "kanto",    name: "関東",   x: 71, y: 53, practice: 1184, course: 642 },
    { id: "chubu",    name: "中部",   x: 56, y: 56, practice: 612, course: 498 },
    { id: "kinki",    name: "近畿",   x: 45, y: 62, practice: 734, course: 421 },
    { id: "chugoku",  name: "中国",   x: 33, y: 62, practice: 248, course: 236 },
    { id: "shikoku",  name: "四国",   x: 37, y: 72, practice: 138, course: 121 },
    { id: "kyushu",   name: "九州",   x: 22, y: 76, practice: 402, course: 388 },
    { id: "okinawa",  name: "沖縄",   x: 12, y: 92, practice: 38, course: 27 },
  ];

  // Practice ranges (sample records)
  const practices = [
    { region: "kanto",  name: "りんかい東京ゴルフガーデン", open: "24時間", early: true, area: "東京都・江東区", bays: 120, dist: "250yd", price: "¥1,200〜", tags: ["24時間", "弾道計測", "ナイター"], rating: 4.4, x: 73, y: 51 },
    { region: "kanto",  name: "横浜ベイサイドレンジ", open: "5:30", early: true,       area: "神奈川県・横浜市", bays: 96,  dist: "230yd", price: "¥980〜",  tags: ["駅近", "レッスン"], rating: 4.2, x: 70, y: 56 },
    { region: "kanto",  name: "さいたま大宮ゴルフセンター", open: "7:00", early: false,   area: "埼玉県・さいたま市", bays: 80, dist: "200yd", price: "¥850〜", tags: ["打ち放題", "ナイター"], rating: 4.0, x: 68, y: 49 },
    { region: "kinki",  name: "なんばグリーンレンジ", open: "6:00", early: true,        area: "大阪府・大阪市", bays: 88,  dist: "210yd", price: "¥1,100〜", tags: ["弾道計測", "屋内"], rating: 4.5, x: 44, y: 61 },
    { region: "kinki",  name: "京都桂川ゴルフガーデン", open: "8:00", early: false,       area: "京都府・京都市", bays: 64, dist: "240yd", price: "¥900〜", tags: ["レッスン", "駅近"], rating: 4.1, x: 47, y: 59 },
    { region: "chubu",  name: "名古屋ポートゴルフ練習場", open: "5:00", early: true,     area: "愛知県・名古屋市", bays: 110, dist: "260yd", price: "¥1,000〜", tags: ["打ち放題", "ナイター"], rating: 4.3, x: 57, y: 57 },
    { region: "kyushu", name: "博多ベイサイドゴルフ", open: "6:30", early: true,        area: "福岡県・福岡市", bays: 72, dist: "220yd", price: "¥880〜", tags: ["駅近", "レッスン"], rating: 4.2, x: 21, y: 75 },
    { region: "hokkaido", name: "札幌大通ゴルフレンジ", open: "9:00", early: false,      area: "北海道・札幌市", bays: 60, dist: "230yd", price: "¥950〜", tags: ["屋内", "弾道計測"], rating: 4.0, x: 80, y: 12 },
    { region: "tohoku", name: "仙台あおばゴルフセンター", open: "6:00", early: true,     area: "宮城県・仙台市", bays: 54, dist: "200yd", price: "¥820〜", tags: ["打ち放題"], rating: 3.9, x: 73, y: 32 },
  ];

  // Golf courses (sample records)
  const courses = [
    { region: "kanto", name: "湘南シーサイドカントリー倶楽部", area: "神奈川県・茅ヶ崎市", holes: 18, par: 72, yard: 6842, price: "¥9,200〜", weekday: 9200, weekend: 16800, tags: ["海が見える", "高速グリーン"], rating: 4.6, reviews: 1289, x: 71, y: 57,
      access: "圏央道 茅ヶ崎海岸ICより約10分", facilities: ["乗用カート", "練習場", "レストラン", "宿泊", "温泉"], type: "シーサイド・林間", updated: "2026/06/12", updatedDays: 0, recent: true, diff: { field: "平日料金", before: "¥9,800", after: "¥9,200", kind: "price" } },
    { region: "kanto", name: "筑波レイクサイドゴルフ場", area: "茨城県・つくば市", holes: 27, par: 108, yard: 10240, price: "¥7,200〜", weekday: 7200, weekend: 13400, tags: ["フラット", "戦略的"], rating: 4.3, reviews: 642, x: 74, y: 50,
      access: "常磐道 谷田部ICより約15分", facilities: ["乗用カート", "練習場", "レストラン", "ロッカー"], type: "丘陵・湖畔", updated: "2026/06/12", updatedDays: 0, recent: false, diff: null },
    { region: "chubu", name: "富士パノラマゴルフクラブ", area: "山梨県・富士河口湖町", holes: 18, par: 72, yard: 6680, price: "¥12,400〜", weekday: 12400, weekend: 21800, tags: ["富士山ビュー", "高原"], rating: 4.8, reviews: 921, x: 60, y: 54,
      access: "中央道 河口湖ICより約12分", facilities: ["乗用カート", "練習場", "レストラン", "宿泊", "売店"], type: "高原・丘陵", updated: "2026/06/12", updatedDays: 0, recent: false, diff: null },
    { region: "kinki", name: "六甲アイランドゴルフ倶楽部", area: "兵庫県・神戸市", holes: 18, par: 71, yard: 6512, price: "¥8,600〜", weekday: 8600, weekend: 15200, tags: ["夜景", "丘陵"], rating: 4.4, reviews: 558, x: 44, y: 60,
      access: "阪神高速 魚崎ICより約15分", facilities: ["乗用カート", "練習場", "レストラン", "ナイター"], type: "丘陵", updated: "2026/06/12", updatedDays: 0, recent: true, diff: { field: "臨時休場", before: "—", after: "6/18 コース整備のため終日休場", kind: "closed" } },
    { region: "kinki", name: "琵琶湖ナショナルゴルフ場", area: "滋賀県・大津市", holes: 18, par: 72, yard: 6920, price: "¥7,900〜", weekday: 7900, weekend: 14600, tags: ["湖畔", "林間"], rating: 4.2, reviews: 487, x: 48, y: 60,
      access: "名神 大津ICより約20分", facilities: ["乗用カート", "練習場", "レストラン", "ロッカー"], type: "林間・湖畔", updated: "2026/06/12", updatedDays: 0, recent: false, diff: null },
    { region: "kyushu", name: "阿蘇マウンテンゴルフリゾート", area: "熊本県・阿蘇市", holes: 18, par: 72, yard: 7102, price: "¥6,800〜", weekday: 6800, weekend: 12200, tags: ["雄大な景観", "高原"], rating: 4.7, reviews: 412, x: 22, y: 77,
      access: "九州道 熊本ICより約50分", facilities: ["乗用カート", "練習場", "レストラン", "宿泊", "温泉"], type: "高原・リゾート", updated: "2026/06/12", updatedDays: 0, recent: false, diff: null },
    { region: "hokkaido", name: "大雪グランデュールゴルフ", area: "北海道・旭川市", holes: 18, par: 72, yard: 7240, price: "¥6,200〜", weekday: 6200, weekend: 9800, tags: ["北海道らしい", "ベント"], rating: 4.5, reviews: 312, x: 81, y: 12,
      access: "道央道 旭川北ICより約15分", facilities: ["乗用カート", "練習場", "レストラン", "売店"], type: "丘陵・林間", updated: "2026/06/12", updatedDays: 0, recent: false, diff: null },
    { region: "tohoku", name: "蔵王ハイランドカントリー", area: "山形県・上山市", holes: 18, par: 72, yard: 6740, price: "¥5,900〜", weekday: 5900, weekend: 9400, tags: ["高原", "紅葉"], rating: 4.3, reviews: 224, x: 72, y: 34,
      access: "山形道 山形蔵王ICより約20分", facilities: ["乗用カート", "練習場", "レストラン", "温泉"], type: "高原", updated: "2026/06/12", updatedDays: 0, recent: false, diff: null },
    { region: "chugoku", name: "瀬戸内サンセットリンクス", area: "広島県・尾道市", holes: 18, par: 71, yard: 6480, price: "¥7,400〜", weekday: 7400, weekend: 13200, tags: ["海が見える", "リンクス"], rating: 4.5, reviews: 671, x: 32, y: 63,
      access: "山陽道 尾道ICより約18分", facilities: ["乗用カート", "練習場", "レストラン", "ロッカー"], type: "リンクス・シーサイド", updated: "2026/06/12", updatedDays: 0, recent: true, diff: { field: "土日料金", before: "¥12,400", after: "¥13,200", kind: "price" } },
  ];

  // Used clubs with multi-shop price comparison
  const rankColor = { S: "#23A35B", A: "#F26419", B: "#767676" };
  // 実在モデルをベースにした中古クラブ（価格・在庫はサンプルです）
  const clubs = [
    {
      id: "c1", brand: "TaylorMade", model: "Qi10 MAX ドライバー", type: "driver",
      beginner: true, rank: "A", year: 2024, flex: "S / SR", gender: "men", loft: "10.5°",
      rating: 4.6, reviews: 312, popRank: 1, hero: true, shopCount: 24, lowest: 48800, retail: 79200,
      shops: [
        { name: "ゴルフドゥ オンライン",   price: 48800, ship: "送料無料", cond: "A・美品", stars: 4.6 },
        { name: "中古クラブ市場 GOLFRE",   price: 50400, ship: "¥770",   cond: "A",       stars: 4.4 },
        { name: "ゴルフパートナー 楽天市場店", price: 51800, ship: "送料無料", cond: "A・純正シャフト", stars: 4.7 },
      ],
    },
    {
      id: "c2", brand: "PING", model: "G430 MAX 10K ドライバー", type: "driver",
      beginner: true, rank: "S", year: 2024, flex: "S", gender: "men", loft: "9.0°",
      rating: 4.7, reviews: 268, popRank: 2, hero: true, shopCount: 19, lowest: 52000, retail: 85800,
      shops: [
        { name: "ゴルフエース",           price: 52000, ship: "送料無料", cond: "S・極上", stars: 4.8 },
        { name: "ゴルフドゥ オンライン",   price: 53900, ship: "¥770",   cond: "S",       stars: 4.6 },
        { name: "中古クラブ市場 GOLFRE",   price: 55200, ship: "送料無料", cond: "S・保証付", stars: 4.5 },
      ],
    },
    {
      id: "c3", brand: "Callaway", model: "PARADYM Ai SMOKE MAX ドライバー", type: "driver",
      beginner: false, rank: "A", year: 2024, flex: "S / X", gender: "men", loft: "9.0°",
      rating: 4.5, reviews: 197, popRank: 5, shopCount: 16, lowest: 46200, retail: 79200,
      shops: [
        { name: "ゴルフパートナー 楽天市場店", price: 46200, ship: "送料無料", cond: "A・美品", stars: 4.5 },
        { name: "ゴルフエース",             price: 47800, ship: "¥770",   cond: "A",       stars: 4.6 },
      ],
    },
    {
      id: "c4", brand: "SRIXON", model: "ZX5 Mk II ドライバー", type: "driver",
      beginner: false, rank: "A", year: 2023, flex: "S", gender: "men", loft: "10.5°",
      rating: 4.4, reviews: 143, popRank: 9, shopCount: 12, lowest: 33800, retail: 66000,
      shops: [
        { name: "ゴルフドゥ オンライン", price: 33800, ship: "送料無料", cond: "A・美品", stars: 4.5 },
        { name: "中古クラブ市場 GOLFRE", price: 35200, ship: "¥770",   cond: "A",       stars: 4.4 },
      ],
    },
    {
      id: "c5", brand: "Titleist", model: "T100 アイアン 6本セット (#5-PW)", type: "iron",
      beginner: false, rank: "S", year: 2023, flex: "S (NS PRO)", gender: "men", loft: "—",
      rating: 4.8, reviews: 221, popRank: 3, hero: true, shopCount: 14, lowest: 96000, retail: 168000,
      shops: [
        { name: "ゴルフエース",           price: 96000, ship: "送料無料", cond: "S・極上", stars: 4.8 },
        { name: "ゴルフパートナー 楽天市場店", price: 99800, ship: "¥1,100", cond: "S",     stars: 4.6 },
        { name: "ゴルフドゥ オンライン",   price: 102400, ship: "送料無料", cond: "S・保証付", stars: 4.7 },
      ],
    },
    {
      id: "c6", brand: "Mizuno", model: "JPX923 HOT METAL アイアン 6本", type: "iron",
      beginner: true, rank: "A", year: 2022, flex: "R / S", gender: "men", loft: "—",
      rating: 4.6, reviews: 184, popRank: 6, shopCount: 18, lowest: 58800, retail: 112200,
      shops: [
        { name: "中古クラブ市場 GOLFRE", price: 58800, ship: "送料無料", cond: "A・美品", stars: 4.6 },
        { name: "ゴルフドゥ オンライン", price: 61200, ship: "¥1,100", cond: "A",     stars: 4.5 },
      ],
    },
    {
      id: "c7", brand: "PING", model: "i230 アイアン 6本セット", type: "iron",
      beginner: false, rank: "A", year: 2023, flex: "S (NS PRO Modus)", gender: "men", loft: "—",
      rating: 4.7, reviews: 132, popRank: 11, shopCount: 9, lowest: 78000, retail: 138600,
      shops: [
        { name: "ゴルフエース",         price: 78000, ship: "送料無料", cond: "A・美品", stars: 4.7 },
        { name: "ゴルフパートナー 楽天市場店", price: 81500, ship: "¥1,100", cond: "A", stars: 4.5 },
      ],
    },
    {
      id: "c8", brand: "Titleist", model: "Vokey SM10 ウェッジ 56°", type: "wedge",
      beginner: false, rank: "A", year: 2024, flex: "Wedge", gender: "unisex", loft: "56°/10S",
      rating: 4.7, reviews: 256, popRank: 4, shopCount: 22, lowest: 14800, retail: 23100,
      shops: [
        { name: "ゴルフドゥ オンライン", price: 14800, ship: "送料無料", cond: "A・美品", stars: 4.7 },
        { name: "中古クラブ市場 GOLFRE", price: 15600, ship: "¥550",   cond: "A",       stars: 4.5 },
        { name: "ゴルフパートナー 楽天市場店", price: 16200, ship: "送料無料", cond: "A・新溝", stars: 4.6 },
      ],
    },
    {
      id: "c9", brand: "Cleveland", model: "RTX 6 ZipCore ウェッジ 52°", type: "wedge",
      beginner: false, rank: "B", year: 2023, flex: "Wedge", gender: "unisex", loft: "52°/10",
      rating: 4.4, reviews: 98, popRank: 16, shopCount: 11, lowest: 9800, retail: 20900,
      shops: [
        { name: "中古クラブ市場 GOLFRE", price: 9800,  ship: "¥550",   cond: "B・実用品", stars: 4.3 },
        { name: "ゴルフドゥ オンライン", price: 10800, ship: "送料無料", cond: "B",       stars: 4.4 },
      ],
    },
    {
      id: "c10", brand: "Scotty Cameron", model: "Special Select Newport 2 パター 34inch", type: "putter",
      beginner: false, rank: "A", year: 2023, flex: "—", gender: "unisex", loft: "—",
      rating: 4.8, reviews: 174, popRank: 7, hero: true, shopCount: 13, lowest: 52800, retail: 79200,
      shops: [
        { name: "ゴルフエース",         price: 52800, ship: "送料無料", cond: "A・ヘッドカバー付", stars: 4.8 },
        { name: "ゴルフパートナー 楽天市場店", price: 55400, ship: "¥770", cond: "A", stars: 4.6 },
      ],
    },
    {
      id: "c11", brand: "Odyssey", model: "Ai-ONE ミルドパター 33inch", type: "putter",
      beginner: true, rank: "A", year: 2024, flex: "—", gender: "unisex", loft: "—",
      rating: 4.5, reviews: 88, popRank: 14, shopCount: 10, lowest: 26800, retail: 46200,
      shops: [
        { name: "ゴルフドゥ オンライン", price: 26800, ship: "送料無料", cond: "A・美品", stars: 4.5 },
        { name: "中古クラブ市場 GOLFRE", price: 28200, ship: "¥770",   cond: "A",       stars: 4.4 },
      ],
    },
    {
      id: "c12", brand: "XXIO", model: "XXIO 12 オールインワンセット 10本", type: "set",
      beginner: true, rank: "A", year: 2022, flex: "R / SR", gender: "men", loft: "—",
      rating: 4.6, reviews: 142, popRank: 8, hero: true, shopCount: 8, lowest: 118000, retail: 231000,
      shops: [
        { name: "ゴルフエース",         price: 118000, ship: "送料無料", cond: "A・キャディバッグ付", stars: 4.7 },
        { name: "ゴルフパートナー 楽天市場店", price: 124800, ship: "¥1,100", cond: "A", stars: 4.5 },
      ],
    },
    {
      id: "c13", brand: "Callaway", model: "REVA レディース 11本セット", type: "set",
      beginner: true, rank: "A", year: 2023, flex: "L", gender: "women", loft: "—",
      rating: 4.7, reviews: 119, popRank: 10, hero: true, shopCount: 9, lowest: 78000, retail: 137500,
      shops: [
        { name: "ゴルフドゥ オンライン", price: 78000, ship: "送料無料", cond: "A・キャディバッグ付", stars: 4.8 },
        { name: "ゴルフパートナー 楽天市場店", price: 82400, ship: "¥770", cond: "A", stars: 4.6 },
      ],
    },
    {
      id: "c14", brand: "Wilson", model: "プロスタッフ SGI メンズ 10本セット", type: "set",
      beginner: true, rank: "B", year: 2022, flex: "R", gender: "men", loft: "—",
      rating: 4.3, reviews: 76, popRank: 18, shopCount: 7, lowest: 39800, retail: 79200,
      shops: [
        { name: "中古クラブ市場 GOLFRE", price: 39800, ship: "送料無料", cond: "B・バッグ付", stars: 4.3 },
        { name: "ゴルフドゥ オンライン", price: 42600, ship: "¥1,100", cond: "B", stars: 4.2 },
      ],
    },
    {
      id: "c15", brand: "PRGR", model: "egg レディース 軽量ドライバー", type: "driver",
      beginner: true, rank: "A", year: 2023, flex: "L / A", gender: "women", loft: "12.5°",
      rating: 4.5, reviews: 64, popRank: 13, shopCount: 8, lowest: 24800, retail: 52800,
      shops: [
        { name: "ゴルフドゥ オンライン", price: 24800, ship: "送料無料", cond: "A・美品", stars: 4.5 },
        { name: "中古クラブ市場 GOLFRE", price: 26400, ship: "送料無料", cond: "A", stars: 4.4 },
      ],
    },
  ];

  const clubTypes = [
    { id: "all", label: "すべて" },
    { id: "driver", label: "ドライバー" },
    { id: "iron", label: "アイアン" },
    { id: "wedge", label: "ウェッジ" },
    { id: "putter", label: "パター" },
    { id: "set", label: "セット" },
    { id: "beginner", label: "初心者向け" },
  ];

  const yen = (n) => "¥" + n.toLocaleString("ja-JP");

  window.GP_DATA = { regions, practices, courses, clubs, clubTypes, rankColor, yen };
})();
