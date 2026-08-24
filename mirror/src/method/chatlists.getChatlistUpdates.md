---
title: "chatlists.getChatlistUpdates"
original: "https://core.telegram.org/method/chatlists.getChatlistUpdates"
section: ref
description: "Fetch new chats associated with an imported chat folder deep link ». Must be invoked at most every chatlist_update_period seconds (as per the related client configuration…"
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"chatlists.getChatlistUpdates","url":"/method/chatlists.getChatlistUpdates/"}]
layout: layout.njk
---

# chatlists.getChatlistUpdates

Fetch new chats associated with an imported [chat folder deep link »](/api/links/#chat-folder-links). Must be invoked at most every `chatlist_update_period` seconds (as per the related [client configuration parameter »](/api/config/#chatlist-update-period)).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/chatlists.chatlistUpdates/">chatlists.chatlistUpdates</a>#93bd878d missing_peers:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Peer/">Peer</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/chatlists.ChatlistUpdates/">chatlists.ChatlistUpdates</a>;
---functions---
<a href="/method/chatlists.getChatlistUpdates/" class="current_page_link">chatlists.getChatlistUpdates</a>#89419521 chatlist:<a href="/type/InputChatlist/">InputChatlist</a> = <a href="/type/chatlists.ChatlistUpdates/">chatlists.ChatlistUpdates</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>chatlist</strong></td><td style="text-align: center;"><a href="/type/InputChatlist/">InputChatlist</a></td><td>The folder</td></tr></tbody></table>

### Result

[chatlists.ChatlistUpdates](/type/chatlists.ChatlistUpdates/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>FILTER_ID_INVALID</td><td>The specified filter ID is invalid.</td></tr><tr><td>400</td><td>FILTER_NOT_SUPPORTED</td><td>The specified filter cannot be used in this context.</td></tr><tr><td>400</td><td>INPUT_CHATLIST_INVALID</td><td>The specified folder is invalid.</td></tr></tbody></table>

### Related pages

#### [Deep links](/api/links/)

Telegram clients must handle special tg:// and t.me deep links encountered in messages, link entities and in other apps by registering OS handlers.

#### [Client configuration](/api/config/)

The MTProto API has multiple configuration parameters that can be fetched with the appropriate methods.
