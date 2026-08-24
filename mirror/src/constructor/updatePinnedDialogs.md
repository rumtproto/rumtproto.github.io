---
title: "updatePinnedDialogs"
original: "https://core.telegram.org/constructor/updatePinnedDialogs"
section: ref
description: "Pinned dialogs were updated"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updatePinnedDialogs","url":"/constructor/updatePinnedDialogs/"}]
layout: layout.njk
---

# updatePinnedDialogs

Pinned dialogs were updated

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updatePinnedDialogs/" class="current_page_link">updatePinnedDialogs</a>#fa0f3ca2 flags:<a href="/type/%23/">#</a> folder_id:flags.1?<a href="/type/int/">int</a> order:flags.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DialogPeer/">DialogPeer</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>folder_id</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/type/int/">int</a></td><td><a href="/api/folders/#peer-folders">Peer folder ID, for more info click here</a></td></tr><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DialogPeer/">DialogPeer</a>&gt;</td><td>New order of pinned dialogs</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
