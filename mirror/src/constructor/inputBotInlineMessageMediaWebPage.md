---
title: "inputBotInlineMessageMediaWebPage"
original: "https://core.telegram.org/constructor/inputBotInlineMessageMediaWebPage"
section: ref
description: "Specifies options that will be used to generate the link preview for the message, or even a standalone link preview without an attached message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"inputBotInlineMessageMediaWebPage","url":"/constructor/inputBotInlineMessageMediaWebPage/"}]
layout: layout.njk
---

# inputBotInlineMessageMediaWebPage

Specifies options that will be used to generate the link preview for the message, or even a standalone link preview without an attached message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/inputBotInlineMessageMediaWebPage/" class="current_page_link">inputBotInlineMessageMediaWebPage</a>#bddcc510 flags:<a href="/type/%23/">#</a> invert_media:flags.3?true force_large_media:flags.4?true force_small_media:flags.5?true optional:flags.6?true message:<a href="/type/string/">string</a> entities:flags.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; url:<a href="/type/string/">string</a> reply_markup:flags.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a> = <a href="/type/InputBotInlineMessage/">InputBotInlineMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/constructor/true/">true</a></td><td>If set, any eventual webpage preview will be shown on top of the message instead of at the bottom.</td></tr><tr><td><strong>force_large_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/constructor/true/">true</a></td><td>If set, specifies that a large media preview should be used.</td></tr><tr><td><strong>force_small_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/constructor/true/">true</a></td><td>If set, specifies that a small media preview should be used.</td></tr><tr><td><strong>optional</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>If <strong>not</strong> set, a <code>WEBPAGE_NOT_FOUND</code> RPC error will be emitted if a webpage preview cannot be generated for the specified <code>url</code>; otherwise, no error will be emitted (unless the provided message is also empty, in which case a <code>MESSAGE_EMPTY</code> will be emitted, instead).</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The message, can be empty.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr><tr><td><strong>url</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The URL to use for the link preview.</td></tr><tr><td><strong>reply_markup</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/type/ReplyMarkup/">ReplyMarkup</a></td><td>Inline keyboard</td></tr></tbody></table>

### Type

[InputBotInlineMessage](/type/InputBotInlineMessage/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities
