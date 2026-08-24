---
title: "updateNewEncryptedMessage"
original: "https://core.telegram.org/constructor/updateNewEncryptedMessage"
section: ref
description: "How to subscribe to updates and handle them properly."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateNewEncryptedMessage","url":"/constructor/updateNewEncryptedMessage/"}]
layout: layout.njk
---

# updateNewEncryptedMessage

New encrypted message.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateNewEncryptedMessage/" class="current_page_link">updateNewEncryptedMessage</a>#12bcbd9a message:<a href="/type/EncryptedMessage/">EncryptedMessage</a> qts:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/EncryptedMessage/">EncryptedMessage</a></td><td>Message</td></tr><tr><td><strong>qts</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>New <strong>qts</strong> value, see <a href="/api/updates/">updates »</a> for more info.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Working with Updates](/api/updates/)

How to subscribe to updates and handle them properly.
