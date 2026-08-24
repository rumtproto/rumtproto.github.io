---
title: "messages.setBotPrecheckoutResults"
original: "https://core.telegram.org/method/messages.setBotPrecheckoutResults"
section: ref
description: "Once the user has confirmed their payment and shipping details, the bot receives an updateBotPrecheckoutQuery update."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.setBotPrecheckoutResults","url":"/method/messages.setBotPrecheckoutResults/"}]
layout: layout.njk
---

# messages.setBotPrecheckoutResults

Once the user has confirmed their payment and shipping details, the bot receives an [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/) update.  
Use this method to respond to such pre-checkout queries.  
**Note**: Telegram must receive an answer within 10 seconds after the pre-checkout query was sent.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.setBotPrecheckoutResults/" class="current_page_link">messages.setBotPrecheckoutResults</a>#9c2dd95 flags:<a href="/type/%23/">#</a> success:flags.1?true query_id:<a href="/type/long/">long</a> error:flags.0?<a href="/type/string/">string</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>success</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Set this flag if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order, otherwise do not set it, and set the <code>error</code> field, instead</td></tr><tr><td><strong>query_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Unique identifier for the query to be answered</td></tr><tr><td><strong>error</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/string/">string</a></td><td>Required if the <code>success</code> isn't set. Error message in human readable form that explains the reason for failure to proceed with the checkout (e.g. "Sorry, somebody just bought the last of our amazing black T-shirts while you were busy filling out your payment details. Please choose a different color or garment!"). Telegram will display this message to the user.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>ERROR_TEXT_EMPTY</td><td>The provided error message is empty.</td></tr><tr><td>400</td><td>USER_BOT_REQUIRED</td><td>This method can only be called by a bot.</td></tr></tbody></table>

### Related pages

#### [updateBotPrecheckoutQuery](/constructor/updateBotPrecheckoutQuery/)

This object contains information about an incoming pre-checkout query.
