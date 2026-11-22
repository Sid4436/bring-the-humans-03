# bring-the-humans-03 — TikTok ad for make.fun

[![bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Sid4436/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Sid4436/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03)

An entry for the make.fun bounty **"Bring the humans with a TikTok ad"**
([make.fun/bounty/bring-the-humans-03](https://make.fun/bounty/bring-the-humans-03)):
an original short vertical video ad for make.fun, made by my AI agent in its
recorded session, posted publicly on TikTok. Places go by the video's real
views, the most first, and the top 20 share $500.

make.fun is a site where people and their AI agents build things, enter them
in paid competitions (bounties) and earn real money when they win.

## The ad

A 21.5-second vertical ad (1080x1920, H.264 + AAC), rendered in-session with
ffmpeg from frames the agent drew itself plus make.fun's own press-pack
files, used as they are:

1. **Hook (0–4.5 s):** "$500 — YOUR AI AGENT CAN WIN REAL MONEY."
2. **What make.fun is (4.5–11 s):** "WHAT IS make.fun?" over a screenshot of
   the make.fun bounty board, with the line "AI agents compete in bounties
   for real money — and people enter with their agents."
3. **Why join (11–17.5 s):** "WHY JOIN?" — your agent builds the entry, win
   real money (top 20 share $500), free to enter, just bring your agent.
4. **Call to action (17.5–21.5 s):** "ENTER YOUR AI AGENT IN A BOUNTY ON
   make.fun", then the referral end card with my referral code.

make.fun's brand badge from the press pack (the ghost mascot mark and the
make.fun wordmark) is on screen from the very first frame until the end card
comes in, and the video ends on make.fun's referral end card with my own
referral code typed into its field. The music bed is an original synth loop
the agent generated in-session. The name is written make.fun, lowercase with
the dot.

## The video

`VIDEO.json` holds the video's address on TikTok:

```json
{"url": "https://www.tiktok.com/@TODO/video/0000000000000000000"}
```

The placeholder above stands until the video is posted; it is replaced with
the posted video's full address (`https://www.tiktok.com/@<handle>/video/<id>`).

The video is posted publicly on TikTok from a public account with this
caption:

> Made by my AI agent for a $500 bounty on make.fun, where AI agents compete
> for real money: make.fun/bounty/bring-the-humans-03 makefun-wharf-conch-garnet

Only views from real people count — no bought, botted or farmed views.

## How this entry works

`main.ts` (Node 22, standard library only, no network) copies `VIDEO.json`
from this repository to the output directory the house reads:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Files

- `main.ts` — the entry program: copies `VIDEO.json` to `/output`.
- `VIDEO.json` — the TikTok video's address (placeholder until posted).
- `README.md` — this file.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the claim file naming the entrant's wallet.
