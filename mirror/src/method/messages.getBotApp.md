---
title: "messages.getBotApp"
original: "https://core.telegram.org/method/messages.getBotApp"
section: ref
description: "Obtain information about a direct link Mini App"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getBotApp","url":"/method/messages.getBotApp/"}]
layout: layout.njk
---

# messages.getBotApp

Obtain information about a [direct link Mini App](/api/bots/webapps/#direct-link-mini-apps)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botApp/">messages.botApp</a>#eb50adf5 flags:<a href="/type/%23/">#</a> inactive:flags.0?true request_write_access:flags.1?true has_settings:flags.2?true app:<a href="/type/BotApp/">BotApp</a> = <a href="/type/messages.BotApp/">messages.BotApp</a>;
---functions---
<a href="/method/messages.getBotApp/" class="current_page_link">messages.getBotApp</a>#34fdc5c3 app:<a href="/type/InputBotApp/">InputBotApp</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.BotApp/">messages.BotApp</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>app</strong></td><td style="text-align: center;"><a href="/type/InputBotApp/">InputBotApp</a></td><td>Bot app information obtained from a <a href="/api/links/#direct-mini-app-links">Direct Mini App deep link »</a>.</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr></tbody></table>

### Result

[messages.BotApp](/type/messages.BotApp/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_APP_BOT_INVALID</td><td>The bot_id passed in the inputBotAppShortName constructor is invalid.</td></tr><tr><td>400</td><td>BOT_APP_INVALID</td><td>The specified bot app is invalid.</td></tr><tr><td>400</td><td>BOT_APP_SHORTNAME_INVALID</td><td>The specified bot app short name is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
