---
title: "updateDialogFilter"
original: "https://core.telegram.org/constructor/updateDialogFilter"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDialogFilter","url":"/constructor/updateDialogFilter/"}]
layout: layout.njk
---

# updateDialogFilter

A new [folder](/api/folders/) was added

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateDialogFilter/" class="current_page_link">updateDialogFilter</a>#26ffde7d flags:<a href="/type/%23/">#</a> id:<a href="/type/int/">int</a> filter:flags.0?<a href="/type/DialogFilter/">DialogFilter</a> = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td><a href="/api/folders/">Folder</a> ID</td></tr><tr><td><strong>filter</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/type/DialogFilter/">DialogFilter</a></td><td><a href="/api/folders/">Folder</a> info</td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
