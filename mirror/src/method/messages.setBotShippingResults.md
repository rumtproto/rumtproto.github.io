---
title: "messages.setBotShippingResults"
original: "https://core.telegram.org/method/messages.setBotShippingResults"
section: ref
description: "If you sent an invoice requesting a shipping address and the parameter is\\_flexible was specified, the bot will receive an updateBotShippingQuery update. Use this method to reply…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setBotShippingResults","url":"/method/messages.setBotShippingResults/"}]
layout: layout.njk
---

# messages.setBotShippingResults

If you sent an invoice requesting a shipping address and the parameter is\_flexible was specified, the bot will receive an [updateBotShippingQuery](/constructor/updateBotShippingQuery/) update. Use this method to reply to shipping queries.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.setBotShippingResults/" class="current_page_link">messages.setBotShippingResults</a>#e5f672fa flags:<a href="/type/%23/">#</a> query_id:<a href="/type/long/">long</a> error:flags.0?<a href="/type/string/">string</a> shipping_options:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ShippingOption/">ShippingOption</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique identifier for the query to be answered</td></tr><tr><td><strong>error</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Error message in human readable form that explains why it is impossible to complete the order (e.g. "Sorry, delivery to your desired address is unavailable"). Telegram will display this message to the user.</td></tr><tr><td><strong>shipping_options</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ShippingOption/">ShippingOption</a>&gt;</td><td>A vector of available shipping options.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>QUERY_ID_INVALID</td><td>The query ID is invalid.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>

### Related pages

#### [updateBotShippingQuery](/constructor/updateBotShippingQuery/)

This object contains information about an incoming shipping query.
