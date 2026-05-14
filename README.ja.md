# ideabox

デジタル庁、千葉市、福井県など、日本の行政機関や自治体が運営する公式の「アイデアボックス」プラットフォームからデータを集約し、可視化するプロジェクトです。統合ダッシュボード、強力な検索ツール、そしてアイデアを発見するための「ガチャ」機能を提供します。

## 機能

- [**アイデアボックス ダッシュボード**](https://code4fukui.github.io/ideabox/): ユーザーの参加状況、アイデア、コメントの統計を可視化するダッシュボードです。
- [**アイデアボックス 検索**](https://code4fukui.github.io/ideabox/search.html): 集約されたすべてのプラットフォームからアイデアやコメントを検索できる、高速なクライアントサイドの検索インターフェースです。
- [**アイデアボックス ガチャ**](https://code4fukui.github.io/ideabox/gacha.html): 収集したすべてのデータからランダムにアイデアを表示する、楽しい「ガチャ」機能です。

## データと自動化

このリポジトリでは、日次で自動化されたワークフローを使用してデータを最新の状態に保っています。

1.  **データ取得**: [GitHub Actionsのワークフロー](.github/workflows/sceduled-update.yml)が毎日日本時間（JST）の8:15に実行されます。
2.  **APIスクレイピング**: ワークフローは（`/deno`ディレクトリにある）Denoスクリプトを実行し、以下のプラットフォームのAPIから最新のアイデアとコメントを取得します。
    - [デジタル庁](https://digital-agency.ideabox.cloud/)
    - [千葉市](https://chibacity.ideabox.cloud/)
    - [福井県](https://fukui.ideabox.cloud/)
3.  **データ集約**: スクリプトは取得した情報を処理し、すべてのアイデアとそれに関連するコメントを1つの `data/ideas.json` ファイルに統合します。また、日々の統計データも `/data` ディレクトリ内のCSVファイルとして保存されます。
4.  **静的サイト**: ユーザー向けのダッシュボード、検索、ガチャの各ページは、事前処理されたJSONデータを読み込む静的なHTMLファイルで構成されており、高速でレスポンシブなユーザー体験を提供します。

## クレジット

- App: CC BY [Code for FUKUI](https://github.com/code4fukui/ideabox)
- API: [株式会社自動処理](https://automation.jp/)

## ライセンス

MIT License
