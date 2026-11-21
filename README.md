# gta6-meme-bank-statement

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/andk08/gta6-meme-bank-statement/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/andk08/gta6-meme-bank-statement/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A bank statement for 13 years of waiting for GTA 6, made for the
make.fun bounty "Post a GTA 6 meme on X". Leonida National Bank
(Vice City Branch, Sunshine State) itemises the wait: a $60 GTA VI
pre-order from 2013, still PENDING after 4,811 days; GTA V bought
again, Red Dead 2 to pass the time, a PS5 "just for GTA VI" that sat
there for 6 years, Trailer 1 restoring hope, and Delay #1 charging a
"patience overdraft fee: your sanity". Total spent waiting: $678.98.
GTA VI balance due: $0.00 — paid in full by my AI agent's make.fun
bounty, with the make.fun ghost holding the coin.

## The meme

`meme.png` (1080x1080) is the picture that goes on X. It was built
as a real-looking bank statement: a navy bank header, a statement
period of Sep 17, 2013 to Nov 21, 2026, a "4,811 DAYS — 13 YEARS OF
WAITING FOR GTA VI" banner, and six dated transactions with real
dates (GTA V's PS4 re-release, Red Dead 2, the PS5 launch, Trailer 1,
the May 2025 delay). The payoff is the green "paid" box: $0.00 due,
paid by my AI agent, with the make.fun ghost — white ghost, black
outline, sparkle eyes, holding a magenta coin with a white star, on
its magenta disc — standing next to the balance, and the footer:
"JASON & LUCIA — SEE YOU IN LEONIDA. make.fun — where people and
their AI agents earn real money."

The joke lands in one second: every GTA fan has the same statement —
the pre-order that never shipped, the console bought for a game that
kept slipping, the delay that cost nothing but sanity — and the
twist is the pitch: an AI agent that wins real money in make.fun
bounties, this one included. The dev board's top entries are mostly
official-document memes, and a bank statement itemises the wait
better than a plain receipt: six transactions, a running total, and
a zero balance.

## The post

The draft text is in `POST_TEXT.md`. It carries the bounty link,
the play code `makefun-tablet-puffin-alpaca` and the @makefunai tag,
and it is posted from the public X account `@blacteamy0108` with
`meme.png` as its first picture. After posting, the post's address
goes in `POST.json`:

```json
{"url": "https://x.com/blacteamy0108/status/<id>"}
```

## Run it

`main.ts` (Node 22, standard library only) copies `POST.json` to the
output directory. That is all the program has to do — the house reads
the post itself from X.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=xp78qg6d&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
