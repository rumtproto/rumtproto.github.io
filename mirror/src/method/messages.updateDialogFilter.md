---
title: "messages.updateDialogFilter"
original: "https://core.telegram.org/method/messages.updateDialogFilter"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.updateDialogFilter","url":"/method/messages.updateDialogFilter/"}]
layout: layout.njk
---

# messages.updateDialogFilter

Update [folder](/api/folders/)

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/boolFalse/">boolFalse</a>#bc799737 = <a href="/type/Bool/">Bool</a>;
<a href="/constructor/boolTrue/">boolTrue</a>#997275b5 = <a href="/type/Bool/">Bool</a>;
---functions---
<a href="/method/messages.updateDialogFilter/" class="current_page_link">messages.updateDialogFilter</a>#1ad4a04a flags:<a href="/type/%23/">#</a> id:<a href="/type/int/">int</a> filter:flags.0?<a href="/type/DialogFilter/">DialogFilter</a> = <a href="/type/Bool/">Bool</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/folders/">Folder</a> ID</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/DialogFilter/">DialogFilter</a></td><td><a href="/api/folders/">Folder</a> info</td></tr></tbody></table>

### Result

[Bool](/type/Bool/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHATLIST_EXCLUDE_INVALID</td><td>The specified <code>exclude_peers</code> are invalid.</td></tr><tr><td>400</td><td>CHAT_ID_INVALID</td><td>The provided chat id is invalid.</td></tr><tr><td>400</td><td>FILTER_ID_INVALID</td><td>The specified filter ID is invalid.</td></tr><tr><td>400</td><td>FILTER_INCLUDE_EMPTY</td><td>The include_peers vector of the filter is empty.</td></tr><tr><td>400</td><td>FILTER_TITLE_EMPTY</td><td>The title field of the filter is empty.</td></tr><tr><td>400</td><td>MESSAGE_TOO_LONG</td><td>The provided message is too long.</td></tr><tr><td>400</td><td>MSG_ID_INVALID</td><td>Invalid message ID provided.</td></tr><tr><td>400</td><td>PEER_ID_INVALID</td><td>The provided peer id is invalid.</td></tr></tbody></table>

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
