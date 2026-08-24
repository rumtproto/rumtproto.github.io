---
title: "account.createBusinessChatLink"
original: "https://core.telegram.org/method/account.createBusinessChatLink"
section: ref
description: "Create a business chat deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"account.createBusinessChatLink","url":"/method/account.createBusinessChatLink/"}]
layout: layout.njk
---

# account.createBusinessChatLink

Create a [business chat deep link »](/api/business/#business-chat-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessChatLink/">businessChatLink</a>#b4ae666f flags:<a href="/type/%23/">#</a> link:<a href="/type/string/">string</a> message:<a href="/type/string/">string</a> entities:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; title:flags.1?<a href="/type/string/">string</a> views:<a href="/type/int/">int</a> = <a href="/type/BusinessChatLink/">BusinessChatLink</a>;
---functions---
<a href="/method/account.createBusinessChatLink/" class="current_page_link">account.createBusinessChatLink</a>#8851e68e link:<a href="/type/InputBusinessChatLink/">InputBusinessChatLink</a> = <a href="/type/BusinessChatLink/">BusinessChatLink</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/InputBusinessChatLink/">InputBusinessChatLink</a></td><td>Info about the link to create.</td></tr></tbody></table>

### Result

[BusinessChatLink](/type/BusinessChatLink/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHATLINKS_TOO_MUCH</td><td>Too many <a href="/api/business/#business-chat-links">business chat links</a> were created, please delete some older links.</td></tr><tr><td>400</td><td>DOCUMENT_INVALID</td><td>The specified document is invalid.</td></tr><tr><td>403</td><td>PREMIUM_ACCOUNT_REQUIRED</td><td>A premium account is required to execute this action.</td></tr></tbody></table>

### Related pages

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
