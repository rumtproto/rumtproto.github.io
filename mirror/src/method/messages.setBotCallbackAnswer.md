---
title: "messages.setBotCallbackAnswer"
original: "https://core.telegram.org/method/messages.setBotCallbackAnswer"
section: ref
description: "Set the callback answer to a user button press (bots only)"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setBotCallbackAnswer","url":"/method/messages.setBotCallbackAnswer/"}]
layout: layout.njk
---

# messages.setBotCallbackAnswer

Set the callback answer to a user button press (bots only)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.setBotCallbackAnswer/" class="current_page_link">messages.setBotCallbackAnswer</a>#d58f130a flags:<a href="/type/%23/">#</a> alert:flags.1?true query_id:<a href="/type/long/">long</a> message:flags.0?<a href="/type/string/">string</a> url:flags.2?<a href="/type/string/">string</a> cache_time:<a href="/type/int/">int</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>alert</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether to show the message as a popup instead of a toast notification</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Query ID</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Popup to show</td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/string/">string</a></td><td>URL to open</td></tr><tr><td><strong>cache_time</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Cache validity</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>The provided message is too long.</td></tr><tr><td>400</td><td>QUERY_ID_INVALID</td><td>The query ID is invalid.</td></tr><tr><td>400</td><td>URL_INVALID</td><td>Invalid URL provided.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>
