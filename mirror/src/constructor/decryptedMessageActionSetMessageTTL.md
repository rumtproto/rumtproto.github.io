---
title: "decryptedMessageActionSetMessageTTL"
original: "https://core.telegram.org/constructor/decryptedMessageActionSetMessageTTL"
section: ref
description: "Setting of a message lifetime after reading."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"decryptedMessageActionSetMessageTTL","url":"/constructor/decryptedMessageActionSetMessageTTL/"}]
layout: layout.njk
---

# decryptedMessageActionSetMessageTTL

Setting of a message lifetime after reading.

Upon receiving such message the client shall start deleting of all messages of an encrypted chat **ttl\_seconds** seconds after the messages were read by user.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>===8===
<a href="/constructor/decryptedMessageActionSetMessageTTL/" class="current_page_link">decryptedMessageActionSetMessageTTL</a>#a1733aec ttl_seconds:<a href="/type/int/">int</a> = <a href="/type/DecryptedMessageAction/">DecryptedMessageAction</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>ttl_seconds</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Lifetime in seconds</td></tr></tbody></table>

### Type

[DecryptedMessageAction](/type/DecryptedMessageAction/)
