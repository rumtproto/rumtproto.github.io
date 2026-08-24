---
title: "Messages.EmojiGameInfo"
original: "https://core.telegram.org/type/messages.EmojiGameInfo"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"Messages.EmojiGameInfo","url":"/type/messages.EmojiGameInfo/"}]
layout: layout.njk
---

# Messages.EmojiGameInfo

Dice game information.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.emojiGameUnavailable/">messages.emojiGameUnavailable</a>#59e65335 = <a href="/type/messages.EmojiGameInfo/" class="current_page_link">messages.EmojiGameInfo</a>;
<a href="/constructor/messages.emojiGameDiceInfo/">messages.emojiGameDiceInfo</a>#44e56023 flags:<a href="/type/%23/">#</a> game_hash:<a href="/type/string/">string</a> prev_stake:<a href="/type/long/">long</a> current_streak:<a href="/type/int/">int</a> params:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; plays_left:flags.0?<a href="/type/int/">int</a> = <a href="/type/messages.EmojiGameInfo/" class="current_page_link">messages.EmojiGameInfo</a>;

---functions---

<a href="/method/messages.getEmojiGameInfo/">messages.getEmojiGameInfo</a>#fb7e8ca7 = <a href="/type/messages.EmojiGameInfo/" class="current_page_link">messages.EmojiGameInfo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.emojiGameUnavailable/">messages.emojiGameUnavailable</a></td><td>Dice game information.</td></tr><tr><td><a href="/constructor/messages.emojiGameDiceInfo/">messages.emojiGameDiceInfo</a></td><td>Dice game information.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getEmojiGameInfo/">messages.getEmojiGameInfo</a></td><td>Fetch dice game information.</td></tr></tbody></table>
