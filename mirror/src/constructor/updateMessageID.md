---
title: "updateMessageID"
original: "https://core.telegram.org/constructor/updateMessageID"
section: ref
description: "Sent message with random\\_id client identifier was assigned an identifier."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateMessageID","url":"/constructor/updateMessageID/"}]
layout: layout.njk
---

# updateMessageID

Sent message with **random\_id** client identifier was assigned an identifier.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateMessageID/" class="current_page_link">updateMessageID</a>#4e90bfd6 id:<a href="/type/int/">int</a> random_id:<a href="/type/long/">long</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><strong>id</strong> identifier of a respective <a href="/type/Message/">Message</a></td></tr><tr><td><strong>random_id</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Previously transferred client <strong>random_id</strong> identifier. See <a href="/api/updates/#updatemessageid-updates">here »</a> for more info on random ID deduplication and updateMessageID mapping.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Message](/type/Message/)

Object describing a message.

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
