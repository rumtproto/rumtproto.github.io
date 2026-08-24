---
title: "updateQuickReplyMessage"
original: "https://core.telegram.org/constructor/updateQuickReplyMessage"
section: ref
description: "A new message was added to a quick reply shortcut »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateQuickReplyMessage","url":"/constructor/updateQuickReplyMessage/"}]
layout: layout.njk
---

# updateQuickReplyMessage

A new message was added to a [quick reply shortcut »](/api/business/#quick-reply-shortcuts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateQuickReplyMessage/" class="current_page_link">updateQuickReplyMessage</a>#3e050d0f message:<a href="/type/Message/">Message</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/Message/">Message</a></td><td>The message that was added (the <a href="/constructor/message/">message</a>.<code>quick_reply_shortcut_id</code> field will contain the shortcut ID).</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [message](/constructor/message/)

A message

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
