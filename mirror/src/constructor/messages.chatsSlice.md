---
title: "messages.chatsSlice"
original: "https://core.telegram.org/constructor/messages.chatsSlice"
section: ref
description: "Partial list of chats, more would have to be fetched with pagination"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.chatsSlice","url":"/constructor/messages.chatsSlice/"}]
layout: layout.njk
---

# messages.chatsSlice

Partial list of chats, more would have to be fetched with [pagination](/api/offsets/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.chatsSlice/" class="current_page_link">messages.chatsSlice</a>#9cd81144 count:<a href="/type/int/">int</a> chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; = <a href="/type/messages.Chats/">messages.Chats</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>count</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Total number of results that were found server-side (not all are included in <code>chats</code>)</td></tr><tr><td><strong>chats</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt;</td><td>Chats</td></tr></tbody></table>

### Type

[messages.Chats](/type/messages.Chats/)

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
