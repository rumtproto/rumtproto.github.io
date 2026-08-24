---
title: "messages.getInlineBotResults"
original: "https://core.telegram.org/method/messages.getInlineBotResults"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getInlineBotResults","url":"/method/messages.getInlineBotResults/"}]
layout: layout.njk
---

# messages.getInlineBotResults

Query an inline bot

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botResults/">messages.botResults</a>#e021f2f6 flags:<a href="/type/%23/">#</a> gallery:flags.0?true query_id:<a href="/type/long/">long</a> next_offset:flags.1?<a href="/type/string/">string</a> switch_pm:flags.2?<a href="/type/InlineBotSwitchPM/">InlineBotSwitchPM</a> switch_webview:flags.3?<a href="/type/InlineBotWebView/">InlineBotWebView</a> results:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BotInlineResult/">BotInlineResult</a>&gt; cache_time:<a href="/type/int/">int</a> users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.BotResults/">messages.BotResults</a>;
---functions---
<a href="/method/messages.getInlineBotResults/" class="current_page_link">messages.getInlineBotResults</a>#514e999d flags:<a href="/type/%23/">#</a> bot:<a href="/type/InputUser/">InputUser</a> peer:<a href="/type/InputPeer/">InputPeer</a> geo_point:flags.0?<a href="/type/InputGeoPoint/">InputGeoPoint</a> query:<a href="/type/string/">string</a> offset:<a href="/type/string/">string</a> = <a href="/type/messages.BotResults/">messages.BotResults</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/type/InputUser/">InputUser</a></td><td>The bot to query</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>The currently opened chat</td></tr><tr><td><strong>geo_point</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputGeoPoint/">InputGeoPoint</a></td><td>The geolocation, if requested</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The query</td></tr><tr><td><strong>offset</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The offset within the results, will be passed directly as-is to the bot.</td></tr></tbody></table>

### Result

[messages.BotResults](/type/messages.BotResults/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INLINE_DISABLED</td><td>This bot can't be used in inline mode.</td></tr><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>BOT_RESPONSE_TIMEOUT</td><td>A timeout occurred while fetching data from the bot.</td></tr><tr><td>400</td><td>CHANNEL_INVALID</td><td>The provided channel is invalid.</td></tr><tr><td>406</td><td>CHANNEL_PRIVATE</td><td>You haven't joined this channel/supergroup.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>-503</td><td>Timeout</td><td>Timeout while fetching data.</td></tr></tbody></table>
