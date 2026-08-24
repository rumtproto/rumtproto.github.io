---
title: "messages.inactiveChats"
original: "https://core.telegram.org/constructor/messages.inactiveChats"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.inactiveChats","url":"/constructor/messages.inactiveChats/"}]
layout: layout.njk
---

# messages.inactiveChats

Inactive chat list

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.inactiveChats/" class="current_page_link">messages.inactiveChats</a>#a927fec5 dates:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.InactiveChats/">messages.InactiveChats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>dates</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>When was the chat last active</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chat list</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>Users mentioned in the chat list</td></tr></tbody></table>

### Type

[messages.InactiveChats](/type/messages.InactiveChats/)
