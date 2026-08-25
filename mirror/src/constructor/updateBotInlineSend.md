---
title: "updateBotInlineSend"
original: "https://core.telegram.org/constructor/updateBotInlineSend"
section: ref
description: "The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the feedback collecting for details on how to enable these…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateBotInlineSend","url":"/constructor/updateBotInlineSend/"}]
layout: layout.njk
---

# updateBotInlineSend

The result of an inline query that was chosen by a user and sent to their chat partner. Please see our documentation on the [feedback collecting](/bots/inline/#collecting-feedback) for details on how to enable these updates for your bot.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateBotInlineSend/" class="current_page_link">updateBotInlineSend</a>#12f12a07 flags:<a href="/type/%23/">#</a> user_id:<a href="/type/long/">long</a> query:<a href="/type/string/">string</a> geo:flags.0?<a href="/type/GeoPoint/">GeoPoint</a> id:<a href="/type/string/">string</a> msg_id:flags.1?<a href="/type/InputBotInlineMessageID/">InputBotInlineMessageID</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>user_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>The user that chose the result</td></tr><tr><td><strong>query</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The query that was used to obtain the result</td></tr><tr><td><strong>geo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/GeoPoint/">GeoPoint</a></td><td>Optional. Sender location, only for bots that require user location</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The unique identifier for the result that was chosen</td></tr><tr><td><strong>msg_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputBotInlineMessageID/">InputBotInlineMessageID</a></td><td>Identifier of the sent inline message. Available only if there is an inline keyboard attached to the message. Will be also received in callback queries and can be used to edit the message.</td></tr></tbody></table>

### Type

[Update](/type/Update/)
