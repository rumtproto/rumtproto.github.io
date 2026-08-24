---
title: "account.editBusinessChatLink"
original: "https://core.telegram.org/method/account.editBusinessChatLink"
section: ref
description: "Edit a created business chat deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.editBusinessChatLink","url":"/method/account.editBusinessChatLink/"}]
layout: layout.njk
---

# account.editBusinessChatLink

Edit a created [business chat deep link »](/api/business/#business-chat-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessChatLink/">businessChatLink</a>#b4ae666f flags:<a href="/type/%23/">#</a> link:<a href="/type/string/">string</a> message:<a href="/type/string/">string</a> entities:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; title:flags.1?<a href="/type/string/">string</a> views:<a href="/type/int/">int</a> = <a href="/type/BusinessChatLink/">BusinessChatLink</a>;
---functions---
<a href="/method/account.editBusinessChatLink/" class="current_page_link">account.editBusinessChatLink</a>#8c3410af slug:<a href="/type/string/">string</a> link:<a href="/type/InputBusinessChatLink/">InputBusinessChatLink</a> = <a href="/type/BusinessChatLink/">BusinessChatLink</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>slug</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Slug of the link, obtained as specified <a href="/api/links/#business-chat-links">here »</a>.</td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/InputBusinessChatLink/">InputBusinessChatLink</a></td><td>New link information.</td></tr></tbody></table>

### Result

[BusinessChatLink](/type/BusinessChatLink/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHATLINK_SLUG_EMPTY</td><td>The specified slug is empty.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
