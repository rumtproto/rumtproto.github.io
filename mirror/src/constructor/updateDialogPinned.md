---
title: "updateDialogPinned"
original: "https://core.telegram.org/constructor/updateDialogPinned"
section: ref
description: "A dialog was pinned/unpinned"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDialogPinned","url":"/constructor/updateDialogPinned/"}]
layout: layout.njk
---

# updateDialogPinned

A dialog was pinned/unpinned

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateDialogPinned/" class="current_page_link">updateDialogPinned</a>#6e6fe51c flags:<a href="/type/%23/">#</a> pinned:flags.0?true folder_id:flags.1?<a href="/type/int/">int</a> peer:<a href="/type/DialogPeer/">DialogPeer</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>pinned</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether the dialog was pinned</td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>peer</strong></td><td style="text-align: center;"><a href="/type/DialogPeer/">DialogPeer</a></td><td>The dialog</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
