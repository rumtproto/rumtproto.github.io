---
title: "contacts.blockedSlice"
original: "https://core.telegram.org/constructor/contacts.blockedSlice"
section: ref
description: "Incomplete list of blocked users."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"contacts.blockedSlice","url":"/constructor/contacts.blockedSlice/"}]
layout: layout.njk
---

# contacts.blockedSlice

Incomplete list of blocked users.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/contacts.blockedSlice/" class="current_page_link">contacts.blockedSlice</a>#e1664194 count:<a href="/type/int/">int</a> blocked:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PeerBlocked/">PeerBlocked</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/contacts.Blocked/">contacts.Blocked</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of elements in the list</td></tr><tr><td><strong>blocked</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/PeerBlocked/">PeerBlocked</a>&gt;</td><td>List of blocked users</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Blocked chats</td></tr><tr><td><strong>users</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt;</td><td>List of users</td></tr></tbody></table>

### Type

[contacts.Blocked](/type/contacts.Blocked/)
