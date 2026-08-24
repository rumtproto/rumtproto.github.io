---
title: "messages.quickReplies"
original: "https://core.telegram.org/constructor/messages.quickReplies"
section: ref
description: "Info about quick reply shortcuts »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.quickReplies","url":"/constructor/messages.quickReplies/"}]
layout: layout.njk
---

# messages.quickReplies

Info about [quick reply shortcuts »](/api/business/#quick-reply-shortcuts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.quickReplies/" class="current_page_link">messages.quickReplies</a>#c68d6695 quick_replies:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/QuickReply/">QuickReply</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.QuickReplies/">messages.QuickReplies</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>quick_replies</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/QuickReply/">QuickReply</a>&gt;</td><td>Quick reply shortcuts.</td></tr><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>Messages mentioned in <code>quick_replies</code>.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[messages.QuickReplies](/type/messages.QuickReplies/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
