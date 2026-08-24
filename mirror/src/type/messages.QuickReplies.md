---
title: "messages.QuickReplies"
original: "https://core.telegram.org/type/messages.QuickReplies"
section: ref
description: "Info about quick reply shortcuts »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.QuickReplies","url":"/type/messages.QuickReplies/"}]
layout: layout.njk
---

# messages.QuickReplies

Info about [quick reply shortcuts »](/api/business/#quick-reply-shortcuts).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.quickReplies/">messages.quickReplies</a>#c68d6695 quick_replies:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/QuickReply/">QuickReply</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.QuickReplies/" class="current_page_link">messages.QuickReplies</a>;
<a href="/constructor/messages.quickRepliesNotModified/">messages.quickRepliesNotModified</a>#5f91eb5b = <a href="/type/messages.QuickReplies/" class="current_page_link">messages.QuickReplies</a>;

---functions---

<a href="/method/messages.getQuickReplies/">messages.getQuickReplies</a>#d483f2a8 hash:<a href="/type/long/">long</a> = <a href="/type/messages.QuickReplies/" class="current_page_link">messages.QuickReplies</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/messages.quickReplies/">messages.quickReplies</a></td><td>Info about <a href="/api/business/#quick-reply-shortcuts">quick reply shortcuts »</a>.</td></tr><tr><td><a href="/constructor/messages.quickRepliesNotModified/">messages.quickRepliesNotModified</a></td><td>Info about <a href="/api/business/#quick-reply-shortcuts">quick reply shortcuts »</a> hasn't changed.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/messages.getQuickReplies/">messages.getQuickReplies</a></td><td>Fetch basic info about all existing <a href="/api/business/#quick-reply-shortcuts">quick reply shortcuts</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
