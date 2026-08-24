---
title: "updateDeleteQuickReply"
original: "https://core.telegram.org/constructor/updateDeleteQuickReply"
section: ref
description: "A quick reply shortcut » was deleted. This will not emit updateDeleteQuickReplyMessages updates, even if all the messages in the shortcut are also deleted by this update."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDeleteQuickReply","url":"/constructor/updateDeleteQuickReply/"}]
layout: layout.njk
---

# updateDeleteQuickReply

A [quick reply shortcut »](/api/business/#quick-reply-shortcuts) was deleted. This will **not** emit [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/) updates, even if all the messages in the shortcut are also deleted by this update.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateDeleteQuickReply/" class="current_page_link">updateDeleteQuickReply</a>#53e6f1ec shortcut_id:<a href="/type/int/">int</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>shortcut_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>ID of the quick reply shortcut that was deleted.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.

#### [updateDeleteQuickReplyMessages](/constructor/updateDeleteQuickReplyMessages/)

One or more messages in a [quick reply shortcut »](/api/business/#quick-reply-shortcuts) were deleted.
