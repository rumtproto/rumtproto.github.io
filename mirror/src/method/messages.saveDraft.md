---
title: "messages.saveDraft"
original: "https://core.telegram.org/method/messages.saveDraft"
section: ref
description: "Save a message draft associated to a chat."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.saveDraft","url":"/method/messages.saveDraft/"}]
layout: layout.njk
---

# messages.saveDraft

Save a message [draft](/api/drafts/) associated to a chat.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.saveDraft/" class="current_page_link">messages.saveDraft</a>#54ae308e flags:<a href="/type/%23/">#</a> no_webpage:flags.1?true invert_media:flags.6?true reply_to:flags.4?<a href="/type/InputReplyTo/">InputReplyTo</a> peer:<a href="/type/InputPeer/">InputPeer</a> message:<a href="/type/string/">string</a> entities:flags.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; media:flags.5?<a href="/type/InputMedia/">InputMedia</a> effect:flags.7?<a href="/type/long/">long</a> suggested_post:flags.8?<a href="/type/SuggestedPost/">SuggestedPost</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>no_webpage</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Disable generation of the webpage preview</td></tr><tr><td><strong>invert_media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.6?<a href="/constructor/true/">true</a></td><td>If set, any eventual webpage preview will be shown on top of the message instead of at the bottom.</td></tr><tr><td><strong>reply_to</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.4?<a href="/type/InputReplyTo/">InputReplyTo</a></td><td>If set, indicates that the message should be sent in reply to the specified message or story.</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td>Destination of the message that should be sent</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>The draft</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td>Message <a href="/api/entities/">entities</a> for styled text</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.5?<a href="/type/InputMedia/">InputMedia</a></td><td>Attached media</td></tr><tr><td><strong>effect</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/long/">long</a></td><td>Specifies a <a href="/api/effects/">message effect »</a> to use for the message.</td></tr><tr><td><strong>suggested_post</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.8?<a href="/type/SuggestedPost/">SuggestedPost</a></td><td>Used to <a href="/api/suggested-posts/">suggest a post to a channel, see here »</a> for more info on the full flow.</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_ADMIN_REQUIRED</td><td>You must be an admin in this chat to do this.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>ENTITY_BOUNDS_INVALID</td><td>A specified <a href="/api/entities/#entity-length">entity offset or length</a> is invalid, see <a href="/api/entities/#entity-length">here&nbsp;»</a> for info on how to properly compute the entity offset/length.</td></tr><tr><td>400</td><td>INPUT_USER_DEACTIVATED</td><td>The specified user was deleted.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Animated message effects](/api/effects/)

Telegram allows adding spectacular animated effects to messages you send.

#### [Suggested posts](/api/suggested-posts/)

Telegram offers a powerful monetization feature to channel administrators: suggested posts.

#### [Message drafts](/api/drafts/)

How to handle message drafts
