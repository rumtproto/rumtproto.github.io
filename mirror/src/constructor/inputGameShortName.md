---
title: "inputGameShortName"
original: "https://core.telegram.org/constructor/inputGameShortName"
section: ref
description: "Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputGameShortName","url":"/constructor/inputGameShortName/"}]
layout: layout.njk
---

# inputGameShortName

Game by short name

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputGameShortName/" class="current_page_link">inputGameShortName</a>#c331e80a bot_id:<a href="/type/InputUser/">InputUser</a> short_name:<a href="/type/string/">string</a> = <a href="/type/InputGame/">InputGame</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The bot that provides the game</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The game's short name, usually obtained from a <a href="/api/links/#game-links">game link »</a></td></tr></tbody></table>

### Type

[InputGame](/type/InputGame/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
