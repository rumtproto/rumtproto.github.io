---
title: "DecryptedMessage"
original: "https://core.telegram.org/type/DecryptedMessage"
section: ref
description: "Object describes the contents of an encrypted message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"DecryptedMessage","url":"/type/DecryptedMessage/"}]
layout: layout.njk
---

# DecryptedMessage

Object describes the contents of an encrypted message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===8===
<a href="/constructor/decryptedMessage/">decryptedMessage</a>#1f814f1f random_id:<a href="/type/long/">long</a> random_bytes:<a href="/type/bytes/">bytes</a> message:<a href="/type/string/">string</a> media:<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> = <a href="/type/DecryptedMessage/" class="current_page_link">DecryptedMessage</a>;
<a href="/constructor/decryptedMessageService/">decryptedMessageService</a>#aa48327d random_id:<a href="/type/long/">long</a> random_bytes:<a href="/type/bytes/">bytes</a> action:<a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a> = <a href="/type/DecryptedMessage/" class="current_page_link">DecryptedMessage</a>;

===17===
<a href="/constructor/decryptedMessage/">decryptedMessage</a>#204d3878 random_id:<a href="/type/long/">long</a> ttl:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> = <a href="/type/DecryptedMessage/" class="current_page_link">DecryptedMessage</a>;
<a href="/constructor/decryptedMessageService/">decryptedMessageService</a>#73164160 random_id:<a href="/type/long/">long</a> action:<a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a> = <a href="/type/DecryptedMessage/" class="current_page_link">DecryptedMessage</a>;

===45===
<a href="/constructor/decryptedMessage/">decryptedMessage</a>#36b091de flags:<a href="/type/%23/">#</a> random_id:<a href="/type/long/">long</a> ttl:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:flags.9?<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; via_bot_name:flags.11?<a href="/type/string/">string</a> reply_to_random_id:flags.3?<a href="/type/long/">long</a> = <a href="/type/DecryptedMessage/" class="current_page_link">DecryptedMessage</a>;

===73===
<a href="/constructor/decryptedMessage/">decryptedMessage</a>#91cc4674 flags:<a href="/type/%23/">#</a> no_webpage:flags.1?true silent:flags.5?true random_id:<a href="/type/long/">long</a> ttl:<a href="/type/int/">int</a> message:<a href="/type/string/">string</a> media:flags.9?<a href="/type/DecryptedMessageMedia/">DecryptedMessageMedia</a> entities:flags.7?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; via_bot_name:flags.11?<a href="/type/string/">string</a> reply_to_random_id:flags.3?<a href="/type/long/">long</a> grouped_id:flags.17?<a href="/type/long/">long</a> = <a href="/type/DecryptedMessage/" class="current_page_link">DecryptedMessage</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/decryptedMessage/">decryptedMessage</a></td><td>Contents of an encrypted message.</td></tr><tr><td><a href="/constructor/decryptedMessageService/">decryptedMessageService</a></td><td>Contents of an encrypted service message.</td></tr></tbody></table>
