---
title: "bots.BotInfo"
original: "https://core.telegram.org/type/bots.BotInfo"
section: ref
description: "Localized name, about text and description of a bot."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"bots.BotInfo","url":"/type/bots.BotInfo/"}]
layout: layout.njk
---

# bots.BotInfo

Localized name, about text and description of a bot.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/bots.botInfo/">bots.botInfo</a>#e8a775b0 name:<a href="/type/string/">string</a> about:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> = <a href="/type/bots.BotInfo/" class="current_page_link">bots.BotInfo</a>;

---functions---

<a href="/method/bots.getBotInfo/">bots.getBotInfo</a>#dcd914fd flags:<a href="/type/%23/">#</a> bot:flags.0?<a href="/type/InputUser/">InputUser</a> lang_code:<a href="/type/string/">string</a> = <a href="/type/bots.BotInfo/" class="current_page_link">bots.BotInfo</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/bots.botInfo/">bots.botInfo</a></td><td>Localized information about a bot.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/bots.getBotInfo/">bots.getBotInfo</a></td><td>Get localized name, about text and description of a bot (or of the current account, if called by a bot).</td></tr></tbody></table>
