---
title: "messages.dialogFilters"
original: "https://core.telegram.org/constructor/messages.dialogFilters"
section: ref
description: "Folder and folder tags information"
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"messages.dialogFilters","url":"/constructor/messages.dialogFilters/"}]
layout: layout.njk
---

# messages.dialogFilters

[Folder and folder tags](/api/folders/) information

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/messages.dialogFilters/" class="current_page_link">messages.dialogFilters</a>#2ad93719 flags:<a href="/type/%23/">#</a> tags_enabled:flags.0?true filters:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DialogFilter/">DialogFilter</a>&gt; = <a href="/type/messages.DialogFilters/">messages.DialogFilters</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>tags_enabled</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Whether <a href="/api/folders/#folder-tags">folder tags</a> are enabled.</td></tr><tr><td><strong>filters</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/DialogFilter/">DialogFilter</a>&gt;</td><td>Folders.</td></tr></tbody></table>

### Type

[messages.DialogFilters](/type/messages.DialogFilters/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
