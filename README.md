# Golf Picks（トップ + 中古クラブ 公開版）

## 公開ページ
- index.html  — トップページ（React + Babel、bundle-top.jsx を読み込み）
- clubs.html  — 中古クラブ比較（自己完結型・Vanilla JS、検索/絞り込み/お気に入り/並び替え搭載）

## 構成
- bundle-top.jsx … トップ用に icons+loading+header+hero+footer+app を結合
- config.js … ページ間リンク（練習場・ゴルフ場・大会は準備中=null）
- data.js … 中古クラブ等のサンプルデータ
- styles.css / components.css … トップ用スタイル

clubs.html は CSS・JS をすべて内蔵した単独ファイル。外部依存なし。

ビルド不要の静的サイト。Vercel の Framework Preset は「Other」。
