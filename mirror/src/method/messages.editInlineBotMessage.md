---
title: "messages.editInlineBotMessage"
original: "https://core.telegram.org/method/messages.editInlineBotMessage"
section: ref
description: "Edit an inline bot message"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.editInlineBotMessage","url":"/method/messages.editInlineBotMessage/"}]
layout: layout.njk
---

# messages.editInlineBotMessage

Edit an inline bot message

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.editInlineBotMessage/" class="current_page_link">messages.editInlineBotMessage</a>#83557dba flags:<a href="/type/%23/">#</a> no_webpage:flags.1?true invert_media:flags.16?true id:<a href="/type/InputBotInlineMessageID/">InputBotInlineMessageID</a> message:flags.11?<a href="/type/string/">string</a> media:flags.14?<a href="/type/InputMedia/">InputMedia</a> reply_markup:flags.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a> entities:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>no_webpage</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Disable webpage preview</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.16?<a href="/constructor/true/">true</a></td><td>If set, any eventual webpage preview will be shown on top of the message instead of at the bottom.</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/InputBotInlineMessageID/">InputBotInlineMessageID</a></td><td>Sent inline message ID</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/string/">string</a></td><td>Message</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.14?<a href="/type/InputMedia/">InputMedia</a></td><td>Media</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a></td><td>Reply markup for inline keyboards</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Both users and bots can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>BUTTON_DATA_INVALID</td><td>The data of one or more of the buttons you provided is invalid.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>A specified <a href="/api/entities/#entity-length">entity offset or length</a> is invalid, see <a href="/api/entities/#entity-length">here&nbsp;»</a> for info on how to properly compute the entity offset/length.</td></tr><tr><td>400</td><td>MESSAGE_ID_INVALID</td><td>The provided message id is invalid.</td></tr><tr><td>400</td><td>MESSAGE_NOT_MODIFIED</td><td>The provided message data is identical to the previous message data, the message wasn't modified.</td></tr></tbody></table>

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
