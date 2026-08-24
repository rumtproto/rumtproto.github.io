---
title: "inputBotAppID"
original: "https://core.telegram.org/constructor/inputBotAppID"
section: ref
description: "Used to fetch information about a direct link Mini App by its ID"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBotAppID","url":"/constructor/inputBotAppID/"}]
layout: layout.njk
---

# inputBotAppID

Used to fetch information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps) by its ID

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBotAppID/" class="current_page_link">inputBotAppID</a>#a920bd7a id:<a href="/type/long/">long</a> access_hash:<a href="/type/long/">long</a> = <a href="/type/InputBotApp/">InputBotApp</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/bots/webapps/#direct-link-mini-apps">direct link Mini App</a> ID.</td></tr><tr><td><strong>access_hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Access hash, obtained from the <a href="/constructor/botApp/">botApp</a> constructor.</td></tr></tbody></table>

### Type

[InputBotApp](/type/InputBotApp/)

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.

#### [botApp](/constructor/botApp/)

Contains information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps).
