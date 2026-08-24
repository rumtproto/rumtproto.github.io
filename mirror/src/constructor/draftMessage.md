---
title: "draftMessage"
original: "https://core.telegram.org/constructor/draftMessage"
section: ref
description: "Represents a message draft."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"draftMessage","url":"/constructor/draftMessage/"}]
layout: layout.njk
---

# draftMessage

Represents a message [draft](/api/drafts/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/draftMessage/" class="current_page_link">draftMessage</a>#96eaa5eb flags:<a href="/type/%23/">#</a> no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?<a href="/type/InputReplyTo/">InputReplyTo</a> message:<a href="/type/string/">string</a> entities:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; media:flags.5?<a href="/type/InputMedia/">InputMedia</a> date:<a href="/type/int/">int</a> effect:flags.7?<a href="/type/long/">long</a> suggested_post:flags.8?<a href="/type/SuggestedPost/">SuggestedPost</a> = <a href="/type/DraftMessage/">DraftMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>no_webpage</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Whether no webpage preview will be generated</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>If set, any eventual webpage preview will be shown on top of the message instead of at the bottom.</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/InputReplyTo/">InputReplyTo</a></td><td>If set, indicates that the message should be sent in reply to the specified message or story.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The draft</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td>Message <a href="/api/entities/">entities</a> for styled text.</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/InputMedia/">InputMedia</a></td><td>Media.</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Date of last update of the draft.</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/long/">long</a></td><td>A <a href="/api/effects/">message effect that should be played as specified here »</a>.</td></tr><tr><td><strong>suggested_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/SuggestedPost/">SuggestedPost</a></td><td>Used to <a href="/api/suggested-posts/">suggest a post to a channel, see here »</a> for more info on the full flow.</td></tr></tbody></table>

### Type

[DraftMessage](/type/DraftMessage/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.

#### [Suggested posts](/api/suggested-posts/)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Message drafts](/api/drafts/)

How to handle message drafts
