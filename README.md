# ideabox

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

This project aggregates and visualizes data from the official "Idea Box" platforms of several Japanese government entities, including the Digital Agency, Chiba City, and Fukui Prefecture. It provides a unified dashboard, a powerful search tool, and a "gacha" feature to discover ideas.

## Features

- [**Idea Box Dashboard**](https://code4fukui.github.io/ideabox/): A dashboard visualizing statistics for user participation, ideas, and comments.
- [**Idea Box Search**](https://code4fukui.github.io/ideabox/search.html): A fast, client-side search interface to find ideas and comments across all aggregated platforms.
- [**Idea Box Gacha**](https://code4fukui.github.io/ideabox/gacha.html): A fun "gacha" (randomizer) that opens a random idea from the entire collection.

## Data & Automation

This repository uses a daily automated workflow to keep its data current.

1.  **Data Fetching**: A [GitHub Actions workflow](.github/workflows/sceduled-update.yml) runs every day at 8:15 JST.
2.  **API Scraping**: The workflow executes Deno scripts (in the `/deno` directory) that fetch the latest ideas and comments from the APIs of the following platforms:
    - [Digital Agency (デジタル庁)](https://digital-agency.ideabox.cloud/)
    - [Chiba City (千葉市)](https://chibacity.ideabox.cloud/)
    - [Fukui Prefecture (福井県)](https://fukui.ideabox.cloud/)
3.  **Data Aggregation**: The scripts process this information, combining all ideas and their associated comments into a single `data/ideas.json` file. Daily statistics are also saved to CSV files in the `/data` directory.
4.  **Static Site**: The user-facing dashboard, search, and gacha pages are static HTML files that consume the pre-processed JSON data, ensuring a fast and responsive experience.

## Attribution

- App: CC BY [Code for FUKUI](https://github.com/code4fukui/ideabox)
- API: [株式会社自動処理](https://automation.jp/)

## License

MIT License