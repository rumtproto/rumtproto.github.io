---
title: "updateEncryptedMessagesRead"
original: "https://core.telegram.org/constructor/updateEncryptedMessagesRead"
section: ref
description: "Communication history in an encrypted chat was marked as read."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateEncryptedMessagesRead","url":"/constructor/updateEncryptedMessagesRead/"}]
layout: layout.njk
---

# updateEncryptedMessagesRead

Communication history in an encrypted chat was marked as read.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateEncryptedMessagesRead/" class="current_page_link">updateEncryptedMessagesRead</a>#38fe25b7 chat_id:<a href="/type/int/">int</a> max_date:<a href="/type/int/">int</a> date:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Chat ID</td></tr><tr><td><strong>max_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Maximum value of data for read messages</td></tr><tr><td><strong>date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Time when messages were read</td></tr></tbody></table>

### Type

[Update](/type/Update/)
