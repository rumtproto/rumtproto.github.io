---
title: "messages.getQuickReplies"
original: "https://core.telegram.org/method/messages.getQuickReplies"
section: ref
description: "Fetch basic info about all existing quick reply shortcuts."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getQuickReplies","url":"/method/messages.getQuickReplies/"}]
layout: layout.njk
---

# messages.getQuickReplies

Fetch basic info about all existing [quick reply shortcuts](/api/business/#quick-reply-shortcuts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.quickReplies/">messages.quickReplies</a>#c68d6695 quick_replies:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/QuickReply/">QuickReply</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.QuickReplies/">messages.QuickReplies</a>;
<a href="/constructor/messages.quickRepliesNotModified/">messages.quickRepliesNotModified</a>#5f91eb5b = <a href="/type/messages.QuickReplies/">messages.QuickReplies</a>;
---functions---
<a href="/method/messages.getQuickReplies/" class="current_page_link">messages.getQuickReplies</a>#d483f2a8 hash:<a href="/type/long/">long</a> = <a href="/type/messages.QuickReplies/">messages.QuickReplies</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td>Hash for pagination, generated as specified <a href="/api/business/#quick-reply-shortcuts">here »</a> (not the usual algorithm used for hash generation.)</td></tr></tbody></table>

### Result

[messages.QuickReplies](/type/messages.QuickReplies/)

### Only users can use this method

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
