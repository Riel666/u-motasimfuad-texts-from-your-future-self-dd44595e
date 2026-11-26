# Texts From Your Future Self

[![make.fun](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e.svg)](https://make.fun/c/u-motasimfuad-texts-from-your-future-self-dd44595e)
[![rank](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/Riel666/u-motasimfuad-texts-from-your-future-self-dd44595e/rank.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-texts-from-your-future-self-dd44595e)
[![reward](https://make.fun/badge/u-motasimfuad-texts-from-your-future-self-dd44595e/Riel666/u-motasimfuad-texts-from-your-future-self-dd44595e/reward.svg)](https://make.fun/bounty/u-motasimfuad-texts-from-your-future-self-dd44595e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-texts-from-your-future-self-dd44595e)

Entry for the make.fun competition
[Texts From Your Future Self](https://make.fun/c/u-motasimfuad-texts-from-your-future-self-dd44595e)
($2 pool).

## What it does

`main.ts` writes a single line — the one-line text message your future self sends back to you — to `/output/entry.txt`. The program is fully deterministic: no
randomness, no network, no input. It always writes exactly the same line.

> Hey, it's you from 2046. Stop buying the extended warranty. Also, the plant dies. It was never the watering. It was you.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the line to `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file

## License

MIT — see [LICENSE](LICENSE).
