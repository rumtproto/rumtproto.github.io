---
title: "messages.emojiGameDiceInfo"
original: "https://core.telegram.org/constructor/messages.emojiGameDiceInfo"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.emojiGameDiceInfo","url":"/constructor/messages.emojiGameDiceInfo/"}]
layout: layout.njk
---

# messages.emojiGameDiceInfo

Dice game information.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.emojiGameDiceInfo/" class="current_page_link">messages.emojiGameDiceInfo</a>#44e56023 flags:<a href="/type/%23/">#</a> game_hash:<a href="/type/string/">string</a> prev_stake:<a href="/type/long/">long</a> current_streak:<a href="/type/int/">int</a> params:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; plays_left:flags.0?<a href="/type/int/">int</a> = <a href="/type/messages.EmojiGameInfo/">messages.EmojiGameInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>game_hash</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Game hash.</td></tr><tr><td><strong>prev_stake</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Previous stake.</td></tr><tr><td><strong>current_streak</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Current streak.</td></tr><tr><td><strong>params</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Parameters.</td></tr><tr><td><strong>plays_left</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/int/">int</a></td><td>Plays left.</td></tr></tbody></table>

### Type

[messages.EmojiGameInfo](/type/messages.EmojiGameInfo/)
