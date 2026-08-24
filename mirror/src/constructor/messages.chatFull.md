---
title: "messages.chatFull"
original: "https://core.telegram.org/constructor/messages.chatFull"
section: ref
description: "Full info about a channel, supergroup, gigagroup or basic group."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.chatFull","url":"/constructor/messages.chatFull/"}]
layout: layout.njk
---

# messages.chatFull

Full info about a [channel](/api/channel/#channels), [supergroup](/api/channel/#supergroups), [gigagroup](/api/channel/#gigagroups) or [basic group](/api/channel/#basic-groups).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chatFull/" class="current_page_link">messages.chatFull</a>#e5d7d19c full_chat:<a href="/type/ChatFull/">ChatFull</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.ChatFull/">messages.ChatFull</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>full_chat</strong></td><td style="text-align: center;"><a href="/type/ChatFull/">ChatFull</a></td><td>Full info</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Mentioned chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Mentioned users</td></tr></tbody></table>

### Type

[messages.ChatFull](/type/messages.ChatFull/)

### Related pages

#### [Channels, supergroups, gigagroups and basic groups](/api/channel/)

How to handle channels, supergroups, gigagroups, basic groups, and what's the difference between them.
