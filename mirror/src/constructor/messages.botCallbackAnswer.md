---
title: "messages.botCallbackAnswer"
original: "https://core.telegram.org/constructor/messages.botCallbackAnswer"
section: ref
description: "Callback answer sent by the bot in response to a button press"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.botCallbackAnswer","url":"/constructor/messages.botCallbackAnswer/"}]
layout: layout.njk
---

# messages.botCallbackAnswer

Callback answer sent by the bot in response to a button press

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.botCallbackAnswer/" class="current_page_link">messages.botCallbackAnswer</a>#36585ea4 flags:<a href="/type/%23/">#</a> alert:flags.1?true has_url:flags.3?true native_ui:flags.4?true message:flags.0?<a href="/type/string/">string</a> url:flags.2?<a href="/type/string/">string</a> cache_time:<a href="/type/int/">int</a> = <a href="/type/messages.BotCallbackAnswer/">messages.BotCallbackAnswer</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>alert</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether an alert should be shown to the user instead of a toast notification</td></tr><tr><td><strong>has_url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>Whether an URL is present</td></tr><tr><td><strong>native_ui</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>Whether to show games in WebView or in native UI.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Alert to show</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>URL to open</td></tr><tr><td><strong>cache_time</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>For how long should this answer be cached</td></tr></tbody></table>

### Type

[messages.BotCallbackAnswer](/type/messages.BotCallbackAnswer/)
