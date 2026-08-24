---
title: "messages.botResults"
original: "https://core.telegram.org/constructor/messages.botResults"
section: ref
description: "Result of a query to an inline bot"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.botResults","url":"/constructor/messages.botResults/"}]
layout: layout.njk
---

# messages.botResults

Result of a query to an inline bot

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botResults/" class="current_page_link">messages.botResults</a>#e021f2f6 flags:<a href="/type/%23/">#</a> gallery:flags.0?true query_id:<a href="/type/long/">long</a> next_offset:flags.1?<a href="/type/string/">string</a> switch_pm:flags.2?<a href="/type/InlineBotSwitchPM/">InlineBotSwitchPM</a> switch_webview:flags.3?<a href="/type/InlineBotWebView/">InlineBotWebView</a> results:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotInlineResult/">BotInlineResult</a>&gt; cache_time:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.BotResults/">messages.BotResults</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>gallery</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the result is a picture gallery</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Query ID</td></tr><tr><td><strong>next_offset</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>The next offset to use when navigating through results</td></tr><tr><td><strong>switch_pm</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/InlineBotSwitchPM/">InlineBotSwitchPM</a></td><td>Shown as a button on top of the remaining inline result list; if clicked, redirects the user to a private chat with the bot with the specified start parameter.</td></tr><tr><td><strong>switch_webview</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/InlineBotWebView/">InlineBotWebView</a></td><td>Shown as a button on top of the remaining inline result list; if clicked, opens the specified <a href="/api/bots/webapps/#inline-mode-mini-apps">inline mode mini app</a>.</td></tr><tr><td><strong>results</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotInlineResult/">BotInlineResult</a>&gt;</td><td>The results</td></tr><tr><td><strong>cache_time</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Caching validity of the results</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in the results</td></tr></tbody></table>

### Type

[messages.BotResults](/type/messages.BotResults/)

### Related pages

#### [Mini Apps on Telegram](/api/bots/webapps/)

Bots can offer users interactive HTML5 web apps to completely replace any website.
