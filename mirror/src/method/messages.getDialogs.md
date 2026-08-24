---
title: "messages.getDialogs"
original: "https://core.telegram.org/method/messages.getDialogs"
section: ref
description: "Returns the current user dialog list."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getDialogs","url":"/method/messages.getDialogs/"}]
layout: layout.njk
---

# messages.getDialogs

Returns the current user dialog list.

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.dialogs/">messages.dialogs</a>#15ba6c40 dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Dialog/">Dialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Dialogs/">messages.Dialogs</a>;
<a href="/constructor/messages.dialogsSlice/">messages.dialogsSlice</a>#71e094f3 count:<a href="/type/int/">int</a> dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Dialog/">Dialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.Dialogs/">messages.Dialogs</a>;
<a href="/constructor/messages.dialogsNotModified/">messages.dialogsNotModified</a>#f0e3e596 count:<a href="/type/int/">int</a> = <a href="/type/messages.Dialogs/">messages.Dialogs</a>;
---functions---
<a href="/method/messages.getDialogs/" class="current_page_link">messages.getDialogs</a>#a0f4cb4f flags:<a href="/type/%23/">#</a> exclude_pinned:flags.0?true folder_id:flags.1?<a href="/type/int/">int</a> offset_date:<a href="/type/int/">int</a> offset_id:<a href="/type/int/">int</a> offset_peer:<a href="/type/InputPeer/">InputPeer</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.Dialogs/">messages.Dialogs</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>exclude_pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Exclude pinned dialogs</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a> (<code>top_message</code> ID used for pagination)</td></tr><tr><td><strong>offset_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td><a href="/api/offsets/">Offset peer for pagination</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of list elements to be returned</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr></tbody></table>

### Result

[messages.Dialogs](/type/messages.Dialogs/)

### Only users can use this method

### Possible errors

<table class="table"><thead><tr><th scope="col">Code</th><th scope="col">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td>400</td><td>CHAT_NOT_MODIFIED</td><td>No changes were made to chat information because the new information you passed is identical to the current information.</td></tr><tr><td>403</td><td>CHAT_WRITE_FORBIDDEN</td><td>You can't write in this chat.</td></tr><tr><td>400</td><td>FOLDER_ID_INVALID</td><td>Invalid folder ID.</td></tr><tr><td>400</td><td>OFFSET_PEER_ID_INVALID</td><td>The provided offset peer is invalid.</td></tr><tr><td>400</td><td>PINNED_DIALOGS_TOO_MUCH</td><td>Too many pinned dialogs.</td></tr><tr><td>400</td><td>TAKEOUT_INVALID</td><td>The specified takeout ID is invalid.</td></tr></tbody></table>

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.
