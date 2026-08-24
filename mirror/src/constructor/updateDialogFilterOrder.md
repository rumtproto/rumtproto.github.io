---
title: "updateDialogFilterOrder"
original: "https://core.telegram.org/constructor/updateDialogFilterOrder"
section: ref
description: "Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists."
crumbs: [{"title":"API","url":"/api/"},{"title":"TL-schema","url":"/schema/"},{"title":"updateDialogFilterOrder","url":"/constructor/updateDialogFilterOrder/"}]
layout: layout.njk
---

# updateDialogFilterOrder

New [folder](/api/folders/) order

<p class="page_layer">Layer 223</p>

<pre class="page_scheme"><code><a href="/constructor/updateDialogFilterOrder/" class="current_page_link">updateDialogFilterOrder</a>#a5d72105 order:<a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt; = <a href="/type/Update/">Update</a>;</code></pre>

### Parameters

<table class="table"><thead><tr><th scope="col">Name</th><th scope="col" style="text-align: center;">Type</th><th scope="col">Description</th></tr></thead><tbody><tr><td><strong>order</strong></td><td style="text-align: center;"><a href="/type/Vector%20t/">Vector</a>&lt;<a href="/type/int/">int</a>&gt;</td><td>Ordered <a href="/api/folders/">folder IDs</a></td></tr></tbody></table>

### Type

[Update](/type/Update/)

### Related pages

#### [Dialog folders](/api/folders/)

Telegram allows placing chats into folders, based on their type, mute status, or other custom criteria, thanks to folder blacklists and whitelists.
