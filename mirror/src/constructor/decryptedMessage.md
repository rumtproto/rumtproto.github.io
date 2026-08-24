---
title: "decryptedMessage"
original: "https://core.telegram.org/constructor/decryptedMessage"
section: ref
description: "Contents of an encrypted message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessage","url":"/constructor/decryptedMessage/"}]
layout: layout.njk
---

# decryptedMessage

Contents of an encrypted message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===8===
<a href="/constructor/decryptedMessage/" class="current_page_link">decryptedMessage</a>#1f814f1f random_id:<a href="/type/long/">long</a> random_bytes:<a href="/type/bytes/">bytes</a> message:<a href="/type/string/">string</a> media:<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;

===17===
<a href="/constructor/decryptedMessage/" class="current_page_link">decryptedMessage</a>#204d3878 random_id:<a href="/type/long/">long</a> ttl:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;

===45===
<a href="/constructor/decryptedMessage/" class="current_page_link">decryptedMessage</a>#36b091de flags:<a href="/type/%23/">#</a> random_id:<a href="/type/long/">long</a> ttl:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:flags.9?<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; via_bot_name:flags.11?<a href="/type/string/">string</a> reply_to_random_id:flags.3?<a href="/type/long/">long</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;

===73===
<a href="/constructor/decryptedMessage/" class="current_page_link">decryptedMessage</a>#91cc4674 flags:<a href="/type/%23/">#</a> no_webpage:flags.1?true silent:flags.5?true random_id:<a href="/type/long/">long</a> ttl:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:flags.9?<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; via_bot_name:flags.11?<a href="/type/string/">string</a> reply_to_random_id:flags.3?<a href="/type/long/">long</a> grouped_id:flags.17?<a href="/type/long/">long</a> = <a href="/type/DecryptedMessage/">DecryptedMessage</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Random message ID, assigned by the author of message.<br>Must be equal to the ID passed to sending method. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr><tr><td><strong>random_bytes</strong></td><td style="text-align: center;"><a href="/type/bytes/">bytes</a></td><td>Random bytes, removed in layer 17.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Message text</td></tr><tr><td><strong>media</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.9?<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a></td><td>Media content</td></tr><tr><td><strong>ttl</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Message lifetime. Has higher priority than <a href="/constructor/decryptedMessageActionSetMessageTTL/">decryptedMessageActionSetMessageTTL</a>.<br>Parameter added in Layer 17.</td></tr><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a> (added in layer 45)</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td>Message <a href="/api/entities/">entities</a> for styled text (parameter added in layer 45)</td></tr><tr><td><strong>via_bot_name</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.11?<a href="/type/string/">string</a></td><td>Specifies the ID of the inline bot that generated the message (parameter added in layer 45)</td></tr><tr><td><strong>reply_to_random_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/long/">long</a></td><td>Random message ID of the message this message replies to (parameter added in layer 45)</td></tr><tr><td><strong>grouped_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.17?<a href="/type/long/">long</a></td><td>Random group ID, assigned by the author of message.<br>Multiple encrypted messages with a photo attached and with the same group ID indicate an <a href="/api/files/#albums-grouped-media">album or grouped media</a> (parameter added in layer 45)</td></tr></tbody></table>

### Type

[DecryptedMessage](/type/DecryptedMessage/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.

#### [decryptedMessageActionSetMessageTTL](/constructor/decryptedMessageActionSetMessageTTL/)

Setting of a message lifetime after reading.

Upon receiving such message the client shall start deleting of all messages of an encrypted chat **ttl\_seconds** seconds after the messages were read by user.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Uploading and Downloading Files](/api/files/)

How to transfer large data batches correctly.
