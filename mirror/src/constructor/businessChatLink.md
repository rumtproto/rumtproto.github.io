---
title: "businessChatLink"
original: "https://core.telegram.org/constructor/businessChatLink"
section: ref
description: "Contains info about a business chat deep link » created by the current account."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"businessChatLink","url":"/constructor/businessChatLink/"}]
layout: layout.njk
---

# businessChatLink

Contains info about a [business chat deep link »](/api/business/#business-chat-links) created by the current account.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/businessChatLink/" class="current_page_link">businessChatLink</a>#b4ae666f flags:<a href="/type/%23/">#</a> link:<a href="/type/string/">string</a> message:<a href="/type/string/">string</a> entities:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; title:flags.1?<a href="/type/string/">string</a> views:<a href="/type/int/">int</a> = <a href="/type/BusinessChatLink/">BusinessChatLink</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>link</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td><a href="/api/links/#business-chat-links">Business chat deep link</a>.</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Message to pre-fill in the message input field.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/string/">string</a></td><td>Human-readable name of the link, to simplify management in the UI (only visible to the creator of the link).</td></tr><tr><td><strong>views</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of times the link was resolved (clicked/scanned/etc...).</td></tr></tbody></table>

### Type

[BusinessChatLink](/type/BusinessChatLink/)

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
