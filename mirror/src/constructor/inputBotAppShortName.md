---
title: "inputBotAppShortName"
original: "https://core.telegram.org/constructor/inputBotAppShortName"
section: ref
description: "Used to fetch information about a direct link Mini App by its short name"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBotAppShortName","url":"/constructor/inputBotAppShortName/"}]
layout: layout.njk
---

# inputBotAppShortName

Used to fetch information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps) by its short name

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBotAppShortName/" class="current_page_link">inputBotAppShortName</a>#908c0407 bot_id:<a href="/type/InputUser/">InputUser</a> short_name:<a href="/type/string/">string</a> = <a href="/type/InputBotApp/">InputBotApp</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>bot_id</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>ID of the bot that owns the bot mini app</td></tr><tr><td><strong>short_name</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Short name, obtained from a <a href="/api/links/#direct-mini-app-links">Direct Mini App deep link</a></td></tr></tbody></table>

### Type

[InputBotApp](/type/InputBotApp/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
