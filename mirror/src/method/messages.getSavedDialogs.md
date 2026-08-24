---
title: "messages.getSavedDialogs"
original: "https://core.telegram.org/method/messages.getSavedDialogs"
section: ref
description: "Returns the current saved dialog list » or monoforum topic list »."
crumbs: [{"title":"API","url":"/api/"},{"title":"All Methods","url":"/methods/"},{"title":"messages.getSavedDialogs","url":"/method/messages.getSavedDialogs/"}]
layout: layout.njk
---

# messages.getSavedDialogs

Returns the current [saved dialog list »](/api/saved-messages/) or [monoforum topic list »](/api/monoforum/).

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.savedDialogs/">messages.savedDialogs</a>#f83ae221 dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedDialog/">SavedDialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;
<a href="/constructor/messages.savedDialogsSlice/">messages.savedDialogsSlice</a>#44ba9dd9 count:<a href="/type/int/">int</a> dialogs:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/SavedDialog/">SavedDialog</a>&gt; messages:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Message/">Message</a>&gt; chats:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/Chat/">Chat</a>&gt; users:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/User/">User</a>&gt; = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;
<a href="/constructor/messages.savedDialogsNotModified/">messages.savedDialogsNotModified</a>#c01f6fe8 count:<a href="/type/int/">int</a> = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;
---functions---
<a href="/method/messages.getSavedDialogs/" class="current_page_link">messages.getSavedDialogs</a>#1e91fc99 flags:<a href="/type/%23/">#</a> exclude_pinned:flags.0?true parent_peer:flags.1?<a href="/type/InputPeer/">InputPeer</a> offset_date:<a href="/type/int/">int</a> offset_id:<a href="/type/int/">int</a> offset_peer:<a href="/type/InputPeer/">InputPeer</a> limit:<a href="/type/int/">int</a> hash:<a href="/type/long/">long</a> = <a href="/type/messages.SavedDialogs/">messages.SavedDialogs</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>exclude_pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Exclude pinned dialogs</td></tr><tr><td><strong>parent_peer</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/InputPeer/">InputPeer</a></td><td>If set, fetches the topic list of the passed monoforum, otherwise fetches the saved dialog list.</td></tr><tr><td><strong>offset_date</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a></td></tr><tr><td><strong>offset_id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/offsets/">Offsets for pagination, for more info click here</a> (<code>top_message</code> ID used for pagination)</td></tr><tr><td><strong>offset_peer</strong></td><td style="text-align: center;"><a href="/type/InputPeer/">InputPeer</a></td><td><a href="/api/offsets/">Offset peer for pagination</a></td></tr><tr><td><strong>limit</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Number of list elements to be returned</td></tr><tr><td><strong>hash</strong></td><td style="text-align: center;"><a href="/type/long/">long</a></td><td><a href="/api/offsets/#hash-generation">Hash used for caching, for more info click here</a></td></tr></tbody></table>

### Result

[messages.SavedDialogs](/type/messages.SavedDialogs/)

### Only users can use this method

### Related pages

#### [Pagination in the API](/api/offsets/)

How to fetch results from large lists of objects.

#### [Saved messages](/api/saved-messages/)

The Saved Messages chat allows users to bookmark messages and media: it's a personal cloud storage for any messages or media you may want to send or forward there.

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
