---
title: "messageMediaDice"
original: "https://core.telegram.org/constructor/messageMediaDice"
section: ref
description: "Dice-based animated sticker"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messageMediaDice","url":"/constructor/messageMediaDice/"}]
layout: layout.njk
---

# messageMediaDice

[Dice-based animated sticker](/api/dice/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messageMediaDice/" class="current_page_link">messageMediaDice</a>#8cbec07 flags:<a href="/type/%23/">#</a> value:<a href="/type/int/">int</a> emoticon:<a href="/type/string/">string</a> game_outcome:flags.0?<a href="/type/messages.EmojiGameOutcome/">messages.EmojiGameOutcome</a> = <a href="/type/MessageMedia/">MessageMedia</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>value</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/dice/">Dice value</a></td></tr><tr><td><strong>emoticon</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The emoji, for now <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8F80.png" width="20" height="20" alt="🏀">, <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EB2.png" width="20" height="20" alt="🎲"> and <img class="emoji" src="https://telegram.org/img/emoji/40/F09F8EAF.png" width="20" height="20" alt="🎯"> are supported</td></tr><tr><td><strong>game_outcome</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/messages.EmojiGameOutcome/">messages.EmojiGameOutcome</a></td><td>Dice game outcome.</td></tr></tbody></table>

### Type

[MessageMedia](/type/MessageMedia/)

### Related pages

#### [Animated dice](/api/dice/)

Telegram supports sending animated dice emojis.
