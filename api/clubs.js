// api/clubs.js
// Vercel Serverless Function
// 楽天APIをサーバー側で代理呼び出しする（キーはブラウザに露出しない）

export default async function handler(req, res) {
  // 環境変数からキーを読み込む（ブラウザからは絶対に見えない）
  const APP_ID       = process.env.RAKUTEN_APP_ID;
  const ACCESS_KEY   = process.env.RAKUTEN_ACCESS_KEY;
  const AFFILIATE_ID = process.env.RAKUTEN_AFFILIATE_ID || "";

  if (!APP_ID || !ACCESS_KEY) {
    return res.status(500).json({ error: "サーバー側のAPIキーが未設定です（Vercel環境変数を確認してください）" });
  }

  const ENDPOINT = "https://openapi.rakuten.co.jp/ichibams/api/IchibaItem/Search/20220601";

  // 検索キーワード（クライアントから受け取る or デフォルト）
  const keyword = (req.query.keyword || "中古 ドライバー").toString();
  const page    = (req.query.page || "1").toString();

  const params = new URLSearchParams({
    applicationId: APP_ID,
    accessKey:     ACCESS_KEY,
    keyword:       keyword,
    genreId:       "101070",   // スポーツ＞ゴルフ
    hits:          "30",
    page:          page,
    sort:          "+itemPrice",
    imageFlag:     "1"
  });
  if (AFFILIATE_ID) params.set("affiliateId", AFFILIATE_ID);

  try {
    const r = await fetch(`${ENDPOINT}?${params.toString()}`, {
      headers: {
        // 楽天に登録済みの許可Webサイトと一致させる
        // Refererだけでは弾かれるため Origin も必須（楽天の新仕様）
        "Referer": "https://golf-picks-web.vercel.app/",
        "Origin":  "https://golf-picks-web.vercel.app",
        "User-Agent": "GolfPicks/1.0"
      }
    });
    const data = await r.json();

    if (!r.ok) {
      return res.status(r.status).json({ error: "楽天APIエラー", detail: data });
    }

    // キャッシュ（同じ結果を1時間使い回してAPI負荷を下げる）
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    return res.status(200).json(data);

  } catch (e) {
    return res.status(500).json({ error: "通信エラー", detail: e.message });
  }
}
