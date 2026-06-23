# Golf Picks（トップ + 中古クラブ 公開版）

## 公開ページ
- index.html — トップページ
- clubs.html — 中古クラブ比較

## 構成のポイント
JSXは読み込み順の問題を避けるため1ファイルに結合済み：
- bundle-top.jsx … トップpage用（icons+loading+header+hero+footer+app）
- bundle-clubs.jsx … 中古クラブpage用（icons+loading+header+footer+finder+clubs+entry）

ビルド不要の静的サイト。Vercel の Framework Preset は「Other」。

## 編集時の注意
個別の *.jsx（app.jsx等）を編集したら、bundle を作り直す必要がある。
