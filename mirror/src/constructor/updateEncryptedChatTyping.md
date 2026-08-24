---
title: "updateEncryptedChatTyping"
original: "https://core.telegram.org/constructor/updateEncryptedChatTyping"
section: ref
description: "Interlocutor is typing a message in an encrypted chat. Update period is 6 second. If upon this time there is no repeated update, it shall be considered that the interlocutor…"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateEncryptedChatTyping","url":"/constructor/updateEncryptedChatTyping/"}]
layout: layout.njk
---

# updateEncryptedChatTyping

Interlocutor is typing a message in an encrypted chat. Update period is 6 second. If upon this time there is no repeated update, it shall be considered that the interlocutor stopped typing.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateEncryptedChatTyping/" class="current_page_link">updateEncryptedChatTyping</a>#1710f156 chat_id:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chat_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Chat ID</td></tr></tbody></table>

### Type

[Update](/type/Update/)
