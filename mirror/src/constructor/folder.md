---
title: "folder"
original: "https://core.telegram.org/constructor/folder"
section: ref
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"folder","url":"/constructor/folder/"}]
layout: layout.njk
---

# folder

Folder

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/folder/" class="current_page_link">folder</a>#ff544e65 flags:<a href="/type/%23/">#</a> autofill_new_broadcasts:flags.0?true autofill_public_groups:flags.1?true autofill_new_correspondents:flags.2?true id:<a href="/type/int/">int</a> title:<a href="/type/string/">string</a> photo:flags.3?<a href="/type/ChatPhoto/">ChatPhoto</a> = <a href="/type/Folder/">Folder</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>flags</strong></td><td style="text-align: center;"><a href="/type/%23/">#</a></td><td>Flags, see <a href="/mtproto/TL-combinators/#conditional-fields">TL conditional fields</a></td></tr><tr><td><strong>autofill_new_broadcasts</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.0?<a href="/constructor/true/">true</a></td><td>Automatically add new channels to this folder</td></tr><tr><td><strong>autofill_public_groups</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.1?<a href="/constructor/true/">true</a></td><td>Automatically add joined new public supergroups to this folder</td></tr><tr><td><strong>autofill_new_correspondents</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.2?<a href="/constructor/true/">true</a></td><td>Automatically add new private chats to this folder</td></tr><tr><td><strong>id</strong></td><td style="text-align: center;"><a href="/type/int/">int</a></td><td>Folder ID</td></tr><tr><td><strong>title</strong></td><td style="text-align: center;"><a href="/type/string/">string</a></td><td>Folder title</td></tr><tr><td><strong>photo</strong></td><td style="text-align: center;"><a href="/mtproto/TL-combinators/#conditional-fields">flags</a>.3?<a href="/type/ChatPhoto/">ChatPhoto</a></td><td>Folder picture</td></tr></tbody></table>

### Type

[Folder](/type/Folder/)
