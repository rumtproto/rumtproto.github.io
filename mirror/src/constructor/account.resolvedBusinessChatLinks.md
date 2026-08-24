---
title: "account.resolvedBusinessChatLinks"
original: "https://core.telegram.org/constructor/account.resolvedBusinessChatLinks"
section: ref
description: "Contains info about a single resolved business chat deep link »."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"account.resolvedBusinessChatLinks","url":"/constructor/account.resolvedBusinessChatLinks/"}]
layout: layout.njk
---

# account.resolvedBusinessChatLinks

Contains info about a single resolved [business chat deep link »](/api/business/#business-chat-links).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/account.resolvedBusinessChatLinks/" class="current_page_link">account.resolvedBusinessChatLinks</a>#9a23af21 flags:<a href="/type/%23/">#</a> peer:<a href="/type/Peer/">Peer</a> message:<a href="/type/string/">string</a> entities:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/account.ResolvedBusinessChatLinks/">account.ResolvedBusinessChatLinks</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/Peer/">Peer</a></td><td>Destination peer</td></tr><tr><td><strong>message</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Message to pre-fill in the message input field.</td></tr><tr><td><strong>entities</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/MessageEntity/">MessageEntity</a>&gt;</td><td><a href="/api/entities/">Message entities for styled text</a></td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[account.ResolvedBusinessChatLinks](/type/account.ResolvedBusinessChatLinks/)

### Related pages

#### [Styled text with message entities](/api/entities/)

How to create styled text with message entities

#### [Telegram Business](/api/business/)

Users can turn their Telegram account into a business account, gaining access to business features such as opening hours, location, quick replies, automated messages, custom start pages, chatbot support, and more.
