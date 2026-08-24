---
title: "updateDialogUnreadMark"
original: "https://core.telegram.org/constructor/updateDialogUnreadMark"
section: ref
description: "The manual unread mark of a chat was changed"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDialogUnreadMark","url":"/constructor/updateDialogUnreadMark/"}]
layout: layout.njk
---

# updateDialogUnreadMark

The manual unread mark of a chat was changed

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateDialogUnreadMark/" class="current_page_link">updateDialogUnreadMark</a>#b658f23e flags:<a href="/type/%23/">#</a> unread:flags.0?true peer:<a href="/type/DialogPeer/">DialogPeer</a> saved_peer_id:flags.1?<a href="/type/Peer/">Peer</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>unread</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Was the chat marked or unmarked as read</td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/DialogPeer/">DialogPeer</a></td><td>The dialog</td></tr><tr><td><strong>saved_peer_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/Peer/">Peer</a></td><td>If set, the mark is related to the specified <a href="/api/monoforum/">monoforum topic ID »</a>.</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Direct messages to channels](/api/monoforum/)

Telegram supports direct messages to channels, which can also be used to suggest (even paid) channel posts.
