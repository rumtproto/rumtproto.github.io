---
title: "updateQuickReplies"
original: "https://core.telegram.org/constructor/updateQuickReplies"
section: ref
description: "Info about or the order of quick reply shortcuts » was changed."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateQuickReplies","url":"/constructor/updateQuickReplies/"}]
layout: layout.njk
---

# updateQuickReplies

Info about or the order of [quick reply shortcuts »](/api/business/#quick-reply-shortcuts) was changed.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateQuickReplies/" class="current_page_link">updateQuickReplies</a>#f9470ab2 quick_replies:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/QuickReply/">QuickReply</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>quick_replies</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/QuickReply/">QuickReply</a>&gt;</td><td>New quick reply shortcut order and information.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
