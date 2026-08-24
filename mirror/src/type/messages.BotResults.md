---
title: "messages.BotResults"
original: "https://core.telegram.org/type/messages.BotResults"
section: ref
description: "Result of a query to an inline bot"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.BotResults","url":"/type/messages.BotResults/"}]
layout: layout.njk
---

# messages.BotResults

Result of a query to an inline bot

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botResults/">messages.botResults</a>#e021f2f6 flags:<a href="/type/%23/">#</a> gallery:flags.0?true query_id:<a href="/type/long/">long</a> next_offset:flags.1?<a href="/type/string/">string</a> switch_pm:flags.2?<a href="/type/InlineBotSwitchPM/">InlineBotSwitchPM</a> switch_webview:flags.3?<a href="/type/InlineBotWebView/">InlineBotWebView</a> results:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotInlineResult/">BotInlineResult</a>&gt; cache_time:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.BotResults/" class="current_page_link">messages.BotResults</a>;

---functions---

<a href="/method/messages.getInlineBotResults/">messages.getInlineBotResults</a>#514e999d flags:<a href="/type/%23/">#</a> bot:<a href="/type/InputUser/">InputUser</a> peer:<a href="/type/InputPeer/">InputPeer</a> geo_point:flags.0?<a href="/type/InputGeoPoint/">InputGeoPoint</a> query:<a href="/type/string/">string</a> offset:<a href="/type/string/">string</a> = <a href="/type/messages.BotResults/" class="current_page_link">messages.BotResults</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.botResults/">messages.botResults</a></td><td>Result of a query to an inline bot</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getInlineBotResults/">messages.getInlineBotResults</a></td><td>Query an inline bot</td></tr></tbody></table>
