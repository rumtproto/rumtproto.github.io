---
title: "account.BusinessChatLinks"
original: "https://core.telegram.org/type/account.BusinessChatLinks"
section: ref
description: "Contains info about business chat deep links » created by the current account."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.BusinessChatLinks","url":"/type/account.BusinessChatLinks/"}]
layout: layout.njk
---

# account.BusinessChatLinks

Contains info about [business chat deep links »](/api/business/#business-chat-links) created by the current account.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.businessChatLinks/">account.businessChatLinks</a>#ec43a2d1 links:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/BusinessChatLink/">BusinessChatLink</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/account.BusinessChatLinks/" class="current_page_link">account.BusinessChatLinks</a>;

---functions---

<a href="/method/account.getBusinessChatLinks/">account.getBusinessChatLinks</a>#6f70dde1 = <a href="/type/account.BusinessChatLinks/" class="current_page_link">account.BusinessChatLinks</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/account.businessChatLinks/">account.businessChatLinks</a></td><td>Contains info about <a href="/api/business/#business-chat-links">business chat deep links »</a> created by the current account.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.getBusinessChatLinks/">account.getBusinessChatLinks</a></td><td>List all created <a href="/api/business/#business-chat-links">business chat deep links »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
