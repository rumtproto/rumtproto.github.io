---
title: "EncryptedMessage"
original: "https://core.telegram.org/type/EncryptedMessage"
section: ref
description: "Object contains encrypted message."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"EncryptedMessage","url":"/type/EncryptedMessage/"}]
layout: layout.njk
---

# EncryptedMessage

Object contains encrypted message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/encryptedMessage/">encryptedMessage</a>#ed18c118 random_id:<a href="/type/long/">long</a> chat_id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> file:<a href="/type/EncryptedFile/">EncryptedFile</a> = <a href="/type/EncryptedMessage/" class="current_page_link">EncryptedMessage</a>;
<a href="/constructor/encryptedMessageService/">encryptedMessageService</a>#23734b06 random_id:<a href="/type/long/">long</a> chat_id:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> bytes:<a href="/type/bytes/">bytes</a> = <a href="/type/EncryptedMessage/" class="current_page_link">EncryptedMessage</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/encryptedMessage/">encryptedMessage</a></td><td>Encrypted message.</td></tr><tr><td><a href="/constructor/encryptedMessageService/">encryptedMessageService</a></td><td>Encrypted service message</td></tr></tbody></table>
