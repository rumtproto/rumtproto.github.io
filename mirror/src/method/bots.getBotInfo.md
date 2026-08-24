---
title: "bots.getBotInfo"
original: "https://core.telegram.org/method/bots.getBotInfo"
section: ref
description: "Get localized name, about text and description of a bot (or of the current account, if called by a bot)."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"bots.getBotInfo","url":"/method/bots.getBotInfo/"}]
layout: layout.njk
---

# bots.getBotInfo

Get localized name, about text and description of a bot (or of the current account, if called by a bot).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/bots.botInfo/">bots.botInfo</a>#e8a775b0 name:<a href="/type/string/">string</a> about:<a href="/type/string/">string</a> description:<a href="/type/string/">string</a> = <a href="/type/bots.BotInfo/">bots.BotInfo</a>;
---functions---
<a href="/method/bots.getBotInfo/" class="current_page_link">bots.getBotInfo</a>#dcd914fd flags:<a href="/type/%23/">#</a> bot:flags.0?<a href="/type/InputUser/">InputUser</a> lang_code:<a href="/type/string/">string</a> = <a href="/type/bots.BotInfo/">bots.BotInfo</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>bot</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/InputUser/">InputUser</a></td><td>If called by a user, <strong>must</strong> contain the peer of a bot we own.</td></tr><tr><td><strong>lang_code</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Language code, if left empty this method will return the fallback about text and description.</td></tr></tbody></table>

### Result

[bots.BotInfo](/type/bots.BotInfo/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BOT_INVALID</td><td>This is not a valid bot.</td></tr><tr><td>400</td><td>LANG_CODE_INVALID</td><td>The specified language code is invalid.</td></tr><tr><td>400</td><td>USER_BOT_INVALID</td><td>User accounts must provide the <code>bot</code> method parameter when calling this method. If there is no such method parameter, this method can only be invoked by bot accounts.</td></tr></tbody></table>
