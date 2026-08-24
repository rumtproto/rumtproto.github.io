---
title: "chatlists.getLeaveChatlistSuggestions"
original: "https://core.telegram.org/method/chatlists.getLeaveChatlistSuggestions"
section: ref
description: "Returns identifiers of pinned or always included chats from a chat folder imported using a chat folder deep link », which are suggested to be left when the chat folder is deleted."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"chatlists.getLeaveChatlistSuggestions","url":"/method/chatlists.getLeaveChatlistSuggestions/"}]
layout: layout.njk
---

# chatlists.getLeaveChatlistSuggestions

Returns identifiers of pinned or always included chats from a chat folder imported using a [chat folder deep link »](/api/links/#chat-folder-links), which are suggested to be left when the chat folder is deleted.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code>---functions---
<a href="/method/chatlists.getLeaveChatlistSuggestions/" class="current_page_link">chatlists.getLeaveChatlistSuggestions</a>#fdbcd714 chatlist:<a href="/type/InputChatlist/">InputChatlist</a> = <a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt;;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist/">InputChatlist</a></td><td>Folder ID</td></tr></tbody></table>

### Result

[Vector](/type/Vector%20t/)&lt;[Peer](/type/Peer/)\>

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILTER_ID_INVALID</td><td>The specified filter ID is invalid.</td></tr><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>The specified filter cannot be used in this context.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.
