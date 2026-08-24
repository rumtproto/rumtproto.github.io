---
title: "BusinessChatLink"
original: "https://core.telegram.org/type/BusinessChatLink"
section: ref
description: "Contains info about a business chat deep link » created by the current account."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"BusinessChatLink","url":"/type/BusinessChatLink/"}]
layout: layout.njk
---

# BusinessChatLink

Contains info about a [business chat deep link »](/api/business/#business-chat-links) created by the current account.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessChatLink/">businessChatLink</a>#b4ae666f flags:<a href="/type/%23/">#</a> link:<a href="/type/string/">string</a> message:<a href="/type/string/">string</a> entities:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; title:flags.1?<a href="/type/string/">string</a> views:<a href="/type/int/">int</a> = <a href="/type/BusinessChatLink/" class="current_page_link">BusinessChatLink</a>;

---functions---

<a href="/method/account.createBusinessChatLink/">account.createBusinessChatLink</a>#8851e68e link:<a href="/type/InputBusinessChatLink/">InputBusinessChatLink</a> = <a href="/type/BusinessChatLink/" class="current_page_link">BusinessChatLink</a>;
<a href="/method/account.editBusinessChatLink/">account.editBusinessChatLink</a>#8c3410af slug:<a href="/type/string/">string</a> link:<a href="/type/InputBusinessChatLink/">InputBusinessChatLink</a> = <a href="/type/BusinessChatLink/" class="current_page_link">BusinessChatLink</a>;</code></pre>

### Constructors

<table class="table"><thead><tr><th scope="col">Constructor</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/constructor/businessChatLink/">businessChatLink</a></td><td>Contains info about a <a href="/api/business/#business-chat-links">business chat deep link »</a> created by the current account.</td></tr></tbody></table>

### Methods

<table class="table"><thead><tr><th scope="col">Method</th><th scope="col">Description</th></tr></thead><tbody><tr><td><a href="/method/account.createBusinessChatLink/">account.createBusinessChatLink</a></td><td>Create a <a href="/api/business/#business-chat-links">business chat deep link »</a>.</td></tr><tr><td><a href="/method/account.editBusinessChatLink/">account.editBusinessChatLink</a></td><td>Edit a created <a href="/api/business/#business-chat-links">business chat deep link »</a>.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
