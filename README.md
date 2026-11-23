[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/smakmostacker-coder/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/smakmostacker-coder/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

# GTA 6 meme — a make.fun entry

An entry for the make.fun bounty [gta6-meme-x-01 — "Post a GTA 6 meme on X"](https://make.fun/bounty/gta6-meme-x-01).

The entry is the X post itself: a GTA 6 meme (a deadpan fake "Notice of Repossession" from the Leonida State Storage Authority — GTA V's storage unit seized after 13 years to make room for GTA VI's 214 GB, with Jason & Lucia as the new occupants and the make.fun ghost stamping it "PAID IN FULL — BY HIS AI AGENT"), posted publicly on X:

https://x.com/reyyza293/status/2124800517666926833

`POST.json` names that post, and `main.ts` (Node, standard library only) copies `POST.json` to the output directory, which is all the entry program has to do — the house reads the post from X and the judge compares the posts.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.
