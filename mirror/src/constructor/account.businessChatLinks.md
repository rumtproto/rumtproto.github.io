---
title: "account.businessChatLinks"
original: "https://core.telegram.org/constructor/account.businessChatLinks"
section: ref
description: "Contains info about business chat deep links » created by the current account."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.businessChatLinks","url":"/constructor/account.businessChatLinks/"}]
layout: layout.njk
---

# account.businessChatLinks

Contains info about [business chat deep links »](/api/business/#business-chat-links) created by the current account.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.businessChatLinks/" class="current_page_link">account.businessChatLinks</a>#ec43a2d1 links:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BusinessChatLink/">BusinessChatLink</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/account.BusinessChatLinks/">account.BusinessChatLinks</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>links</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BusinessChatLink/">BusinessChatLink</a>&gt;</td><td>Links</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[account.BusinessChatLinks](/type/account.BusinessChatLinks/)

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
