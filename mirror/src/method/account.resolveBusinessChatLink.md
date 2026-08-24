---
title: "account.resolveBusinessChatLink"
original: "https://core.telegram.org/method/account.resolveBusinessChatLink"
section: ref
description: "Resolve a business chat deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.resolveBusinessChatLink","url":"/method/account.resolveBusinessChatLink/"}]
layout: layout.njk
---

# account.resolveBusinessChatLink

Resolve a [business chat deep link »](/api/business/#business-chat-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.resolvedBusinessChatLinks/">account.resolvedBusinessChatLinks</a>#9a23af21 flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> message:<a href="/type/string/">string</a> entities:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/account.ResolvedBusinessChatLinks/">account.ResolvedBusinessChatLinks</a>;
---functions---
<a href="/method/account.resolveBusinessChatLink/" class="current_page_link">account.resolveBusinessChatLink</a>#5492e5ee slug:<a href="/type/string/">string</a> = <a href="/type/account.ResolvedBusinessChatLinks/">account.ResolvedBusinessChatLinks</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Slug of the link, obtained as specified <a href="/api/links/#business-chat-links">here »</a>.</td></tr></tbody></table>

### Result

[account.ResolvedBusinessChatLinks](/type/account.ResolvedBusinessChatLinks/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHATLINK_SLUG_EMPTY</td><td>The specified slug is empty.</td></tr><tr><td>400</td><td>CHATLINK_SLUG_EXPIRED</td><td>The specified <a href="/api/business/#business-chat-links">business chat link</a> has expired.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
