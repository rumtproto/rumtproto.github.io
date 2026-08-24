---
title: "messages.messages"
original: "https://core.telegram.org/constructor/messages.messages"
section: ref
description: "Full list of messages with auxiliary data."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.messages","url":"/constructor/messages.messages/"}]
layout: layout.njk
---

# messages.messages

Full list of messages with auxiliary data.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.messages/" class="current_page_link">messages.messages</a>#1d73e7ea messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; topics:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Messages/">messages.Messages</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>messages</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt;</td><td>List of messages</td></tr><tr><td><strong>topics</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/ForumTopic/">ForumTopic</a>&gt;</td><td><a href="/api/forum/#forum-topics">Forum topics</a> the returned messages belong to.</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>List of chats mentioned in dialogs</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>List of users mentioned in messages and chats</td></tr></tbody></table>

### Type

[messages.Messages](/type/messages.Messages/)

### Related pages

#### [Forum topics](/api/forum/)

Telegram allows creating forums with multiple distinct topics.
